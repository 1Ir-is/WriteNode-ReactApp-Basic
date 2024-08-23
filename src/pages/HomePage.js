import { useEffect, useState } from 'react'
import { PostCard } from "../components";

import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

export const HomePage = () => {

  const [ posts, setPost ] = useState([]);
  const postsRef = collection(db, 'posts');

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postsRef);
      setPost(data.docs.map((document) => ({
        ...document.data(),
        id: document.id
      })));
    }
    getPosts();
  }, [postsRef])
  
  return (
    <section>
      {posts.map((post) => (
        <PostCard key={post.id} post={post}/>
      ))}
    </section>
  )
}
