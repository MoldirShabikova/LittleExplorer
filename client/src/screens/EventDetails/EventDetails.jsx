import { Link } from 'react-router-dom'
import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { deleteEvent, getOneEvent } from '../../services/event'
import { FaEdit, FaTrash } from 'react-icons/fa'

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
    <div>
      <div>
        <h2>{postEvent?.title}</h2>
        <img src={postEvent?.image} />
        <p>Date: {postEvent?.date}</p>
        <p>Time: {postEvent?.time}</p>
        <p>Age: {postEvent?.age}</p>
        <p>Price: {postEvent?.price}</p>
        <p>Location: {postEvent?.location}</p>
        <p>Description: {postEvent?.description}</p>
      </div>
      <div>
        <Link to={`/events/${id}/edit`}>
          <FaEdit />
        </Link>
        <FaTrash onClick={() => handleEventDelete(postEvent.id)} />
      </div>

      <Link to='/events' id='none'>
        <p className='event-go-back'>Go Back</p>
      </Link>
    </div>
  )
}
