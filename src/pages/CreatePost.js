import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/config";
import { useTitle } from "../hooks/useTitle";
import { notification } from 'antd'; // Import Ant Design's notification

export const CreatePost = () => {
  const navigate = useNavigate();
  const postRef = collection(db, "posts");
  useTitle("Create Post");

  // Function to show success notification
  const openNotification = () => {
    notification.success({
      message: 'Success!',
      description: 'Post has been created successfully.',
      placement: 'bottomRight',
      duration: 1.5
    });
  };

  async function handleCreatePost(event) {
    event.preventDefault();
    const document = {
      title: event.target.title.value,
      description: event.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    };
    try {
      await addDoc(postRef, document);
      openNotification(); // Show notification on success
      navigate("/");
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle error here (e.g., show an error notification)
    }
  }

  return (
    <section className="create">
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form className="createPost" onSubmit={handleCreatePost}>
        <input
          type="text"
          className="title"
          name="title"
          placeholder="Title"
          maxLength="50"
          required
        />
        <textarea
          className="description"
          name="description"
          placeholder="Description"
          maxLength="600"
          required
        ></textarea>
        <button type="submit" className="submit">
          Create
        </button>
      </form>
    </section>
  );
};
