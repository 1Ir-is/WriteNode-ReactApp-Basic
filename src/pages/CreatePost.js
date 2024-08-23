import React from 'react'

export const CreatePost = () => {
  return (
    <section className='create'>
      <div className='heading'>
        <h1>Add New Post</h1>
      </div>
      <form className='createPost'>
        <input type="text" name="title" placeholder='Title' className='title' maxLength="50" required />
        <textarea name="description" type="text" className='description' placeholder='Description' maxLength="600" required></textarea>
        <button type="submit" className='submit'>Create</button>
      </form>
    </section>
  )
}
