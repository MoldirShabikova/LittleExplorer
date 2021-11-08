import { Link } from 'react-router-dom'
import './Events.css'

export default function Events(props) {
  const { events, handleEventDelete, currentUser } = props
  return (
    <div className='event-main-box'>
      <h3 className='event-page-title'> Upcoming Events</h3>
      <div className='evt-lists'>
        {events.map((event) => (
          <div className='event-all-list' key={event.id}>
            <div className='event-list-container'>
              <Link to={`/events/${event.id}`}>
                <p>{event.title}</p>
                <p>{event.date}</p>
                <img src={event.image} />
              </Link>
              {currentUser?.id === event?.user_id ? (
                <>
                  <button>edit</button>
                  <button onClick={() => handleEventDelete(event.id)}>
                    delete
                  </button>
                </>
              ) : (
                ''
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
