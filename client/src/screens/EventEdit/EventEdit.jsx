import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getOneEvent, putEvent } from '../../services/event'

export default function EventEdit() {
  const [event, setEvent] = useState({
    title: '',
    date: '',
    time: '',
    age: '',
    price: '',
    location: '',
    image: '',
    description: '',
  })
  const [isUpdated, setUpdated] = useState(false)

  let { id } = useParams()
  useEffect(() => {
    const fetchEvent = async () => {
      const event = await getOneEvent(id)
      setEvent(event)
    }
    fetchEvent()
  }, [id])
  const handleChange = (event) => {
    const { name, value } = event.target
    setEvent({
      ...event,
      [name]: value,
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await putEvent(id, event)
    setUpdated(updated)
  }
  if (isUpdated) {
    return <Redirect to={`/events/${id}`} />
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Event</h1>
      <label>
        <p>Title*</p>
        <input
          type='text'
          name='title'
          value={event.title}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Date*</p>
        <input
          type='text'
          name='date'
          value={event.date}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Time*</p>
        <input
          type='text'
          name='time'
          value={event.time}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Age*</p>
        <input
          type='text'
          name='age'
          value={event.age}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Price*</p>
        <input
          type='text'
          name='price'
          value={event.price}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Location*</p>
        <input
          type='text'
          name='location'
          value={event.location}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Image*</p>
        <input
          type='text'
          name='image'
          value={event.image}
          required
          onChange={handleChange}
        />
      </label>
      <div>
        <textarea
          type='text'
          placeholder='Description'
          name='description'
          value={event.description}
          required
          onChange={handleChange}
        />
      </div>
      <br />
      <button>Save</button>
    </form>
  )
}
