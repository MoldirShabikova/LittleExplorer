import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function EventEdit(props) {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    age: '',
    price: '',
    location: '',
    image: '',
    description: '',
  })
  const { title, date, time, age, price, location, image, description } =
    formData
  const { id } = useParams
  const { events, handleEventUpdate } = props

  useEffect(() => {
    const prefillFormData = () => {
      const eventItem = events.find((event) => event.id === Number(id))
      setFormData({
        name: eventItem.name,
      })
    }
    if (events.length) {
      prefillFormData()
    }
  }, [events, id])

  const handleChange = (e) => {
    const { value } = e.target
    setFormData({
      name: value,
    })
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleEventUpdate(id, formData)
      }}
    >
      <h1>Edit Event</h1>
      <label>
        <p>Title*</p>
        <input
          type='text'
          name='title'
          value={title}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Date*</p>
        <input
          type='date'
          name='date'
          value={date}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Time*</p>
        <input
          type='time'
          name='time'
          value={time}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Age*</p>
        <input
          type='text'
          name='age'
          value={age}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Price*</p>
        <input
          type='text'
          name='price'
          value={price}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Location*</p>
        <input
          type='text'
          name='location'
          value={location}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Image*</p>
        <input
          type='text'
          name='image'
          value={image}
          required
          onChange={handleChange}
        />
      </label>
      <div>
        <textarea
          type='text'
          placeholder='Description'
          name='description'
          value={description}
          required
          onChange={handleChange}
        />
      </div>
      <br />
      <Link to='/events'>
        <button>Save</button>
      </Link>
    </form>
  )
}
