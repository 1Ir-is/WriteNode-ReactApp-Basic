import React from 'react'
import { PostCard } from "../components";

export const HomePage = () => {

  const posts = [
    {id: 1, title: 'Lorem ipsum dolor sit amet.', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perferendis sunt enim magnam deleniti aut error sit est perspiciatis, veniam corporis! Quaerat pariatur laborum provident odit voluptates, ad atque quod maiores distinctio, nulla nobis a architecto dolores commodi, illo libero magni consequatur esse labore ea harum dicta reiciendis. Debitis, dolore.', author: 'Minh Huy'},
    {id: 2, title: 'Lorem ipsum dolor sit amet fafwef.', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perferendis sunt enim magnam deleniti aut error sit est perspiciatis, veniam corporis! Quaerat pariatur laborum provident odit voluptates, ad atque quod maiores distinctio, nulla nobis a architecto dolores commodi, illo libero magni consequatur esse labore ea harum dicta reiciendis. Debitis, dolore.', author: 'Minh Duc'},
  ]
  
  return (
    <section>
      {posts.map((post) => (
        <PostCard key={post.id} post={post}/>
      ))}
    </section>
  )
}
