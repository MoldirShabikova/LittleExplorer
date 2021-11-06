import { useState } from 'react'
import './EventCreate.css'

export default function EventCreate(props) {
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
  const { handleEventCreate } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,

      [name]: value,
    }))
  }

  return (
    <div className='event-create'>
      <form
        className='event-create-form'
        onSubmit={(e) => {
          e.preventDefault()
          handleEventCreate(formData)
        }}
      >
        <h1>Create Event</h1>
        <label>
          <p>Title*</p>
          <input
            className='e-title'
            type='text'
            name='title'
            value={title}
            required
            onChange={handleChange}
          />
        </label>
        <div className='e-edit-sm'>
          <label>
            <p>Date*</p>
            <input
              className='e-date'
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
              className='e-time'
              type='time'
              name='time'
              value={time}
              required
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='e-edit-sec'>
          <label>
            <p>Age*</p>
            <input
              className='e-age'
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
              className='e-price'
              type='text'
              name='price'
              value={price}
              required
              onChange={handleChange}
            />
          </label>
        </div>
        <label>
          <p>Location*</p>
          <input
            className='e-location'
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
            className='e-image'
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

        <button className='e-create-btn'>Submit</button>
      </form>
    </div>
  )
}
