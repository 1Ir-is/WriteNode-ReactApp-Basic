import React from 'react';
import { auth, db } from '../firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';
import { notification } from 'antd'; // Import Ant Design's notification

export const PostCard = ({ post, toggle, setToggle }) => {
  const { title, description, author } = post;
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  // Function to show success notification
  const openNotification = () => {
    notification.success({
      message: 'Post Deleted',
      description: 'The post has been deleted successfully.',
      placement: 'bottomRight',
      duration: 1.5 // Duration for the notification
    });
  };

  async function handleDelete() {
    try {
      const document = doc(db, 'posts', post.id);
      await deleteDoc(document);
      openNotification(); // Show notification on success
      setToggle(!toggle);
    } catch (error) {
      console.error("Error deleting document:", error);
      notification.error({
        message: 'Error',
        description: 'There was an error deleting the post.',
        placement: 'bottomRight',
        duration: 2,
      });
    }
  }

  return (
    <div className='card'>
      <p className='title'>{title}</p>
      <p className='description'>{description}</p>
      <p className='control'>
        <span className='author'>{author.name}</span>
        { isAuth && (author.id === auth.currentUser.uid) && (
          <span onClick={handleDelete} className='delete'>
            <i className='bi bi-trash3'></i>
          </span>
        )}
      </p>
    </div>
  );
}
