import { useState } from 'react'

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
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleEventCreate(formData)
      }}
    >
      <h1>Create Event</h1>
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
          type='file'
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

      <button>Submit</button>
    </form>
  )
}
