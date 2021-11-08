import './CreatePosts.css'
import { Link } from 'react-router-dom'

export default function CreatePosts() {
  return (
    <div className='post-options-container'>
      <h1>Add a new post</h1>
      <div className='post-options'>
        <Link to='/crafts/new' id='none'>
          <h4>Add new Craft </h4>
        </Link>
        <Link to='/events/new' id='none'>
          <h4>Add new Event</h4>
        </Link>
      </div>
    </div>
  )
}
