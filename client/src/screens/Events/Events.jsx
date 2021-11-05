import { Link } from 'react-router-dom'

export default function Events(props) {
  const { events, handleEventDelete, currentUser } = props
  return (
    <div>
      <h3> Upcoming Events</h3>
      {events.map((event) => (
        <div key={event.id}>
          <Link to={`/events/${event.id}`}>
            <p>{event.title}</p>
            <p>{event.date}</p>
            <img src={event.image} />
          </Link>
          {currentUser?.id === event?.user_id ? (
            <>
              {/* <Link to={`/events/${event.id}/edit`}> */}
              <button>edit</button>
              {/* </Link> */}
              <button onClick={() => handleEventDelete(event.id)}>
                delete
              </button>
            </>
          ) : (
            ''
          )}
        </div>
      ))}
      <Link to='/events/new'>
        <button>Create</button>
      </Link>
    </div>
  )
}
