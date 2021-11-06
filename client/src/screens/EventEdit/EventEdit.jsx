import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getOneEvent, putEvent } from '../../services/event'
import './EventEdit.css'

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
  const handleChange = (e) => {
    const { name, value } = e.target
    setEvent({
      ...event,
      [name]: value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const updated = await putEvent(id, event)
    setUpdated(updated)
  }
  if (isUpdated) {
    return <Redirect to={`/events/${id}`} />
  }

  return (
    <div className='event-edit'>
      <form className='event-edit-form' onSubmit={handleSubmit}>
        <h1>Edit Event</h1>
        <br />
        <label>
          <p>Title*</p>
          <input
            className='event-title'
            type='text'
            name='title'
            value={event.title}
            required
            onChange={handleChange}
          />
        </label>

        <div className='event-edit-sm'>
          <label>
            <p>Date*</p>

            <input
              className='event-date'
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
              className='event-time'
              type='text'
              name='time'
              value={event.time}
              required
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='event-edit-sec'>
          <label>
            <p>Age*</p>
            <input
              className='event-age'
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
              className='event-price'
              type='text'
              name='price'
              value={event.price}
              required
              onChange={handleChange}
            />
          </label>
        </div>
        <label>
          <p>Location*</p>
          <input
            className='event-location'
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
            className='event-image'
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
        <button className='event-edit-btn'>Save</button>
      </form>
    </div>
  )
}
