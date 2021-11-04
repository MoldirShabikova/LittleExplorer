// import './CreatePosts.css'
import { Link } from 'react-router-dom'

export default function CreatePosts() {
  return (
    <div className='post-options-container'>
      <h1>Add a new post</h1>
      <div className='post-options'>
        <Link to='/createCraft' id='none'>
          <h4>Crafts for Kids</h4>
        </Link>
        <Link to='/post/event' id='none'>
          <h4>List Event</h4>
        </Link>
      </div>
    </div>
  )
}
