import { Link } from 'react-router-dom'
import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { deleteEvent, getOneEvent } from '../../services/event'
import { FaEdit, FaTrash } from 'react-icons/fa'
import './EventDetails.css'
export default function EventDetails(props) {
  const [postEvent, setPostEvent] = useState(null)
  const { currentUser } = props
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    const fecthPostEvent = async () => {
      const postData = await getOneEvent(id)
      setPostEvent(postData)
    }
    fecthPostEvent()
  }, [id])

  const handleEventDelete = async (id) => {
    await deleteEvent(id)
    history.push('/events')
  }

  return (
    <div className='event-detail'>
      <div className='event-box-cont'>
        <h2>{postEvent?.title}</h2>

        <div className='dates'>
          <img className='event-img-center' src={postEvent?.image} />
          <p>Date: {postEvent?.date}</p>
          <p>Time: {postEvent?.time}</p>
          <p>Age: {postEvent?.age}</p>
          <p>Price: {postEvent?.price}</p>
          <p>Location: {postEvent?.location}</p>
          <p>Description: {postEvent?.description}</p>
        </div>
        <div className='button-container'>
          <Link className='edit-button' to={`/events/${id}/edit`}>
            <FaEdit />
          </Link>
          <FaTrash
            className='delete-button'
            onClick={() => handleEventDelete(postEvent.id)}
          />
        </div>
        <Link to='/events' id='none'>
          <p className='craft-go-back'>Go Back</p>
        </Link>
      </div>
    </div>
  )
}
