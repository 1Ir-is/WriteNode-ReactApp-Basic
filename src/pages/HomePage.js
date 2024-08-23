import { useEffect, useState, useRef } from 'react'
import { PostCard } from "../components";
import { useTitle } from '../hooks/useTitle';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

export const HomePage = () => {
  useTitle('Home');
  const [ posts, setPost ] = useState([]);
  const [toggle, setToggle] = useState(false);
  const postsRef = useRef(collection(db, 'posts'));

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postsRef.current);
      setPost(data.docs.map((document) => ({
        ...document.data(),
        id: document.id
      })));
    }
    getPosts();
  }, [postsRef, toggle]);
  
  return (
    <section>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />
      ))}
    </section>
  )
}