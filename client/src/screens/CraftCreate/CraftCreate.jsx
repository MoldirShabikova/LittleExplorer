import { useState } from 'react'
import './CraftCreate.css'
export default function CraftCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    posted_date: '',
    name: '',
    image: '',
    description: '',
    email: '',
  })
  const { title, posted_date, name, image, description, email } = formData
  const { handleCraftCreate } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  return (
    <div className='craft-create'>
      <form
        className='craft-create-form'
        onSubmit={(e) => {
          e.preventDefault()
          handleCraftCreate(formData)
        }}
      >
        <h1>Create new Craft</h1>
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
            type='text'
            name='date'
            value={posted_date}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Name*</p>
          <input
            type='text'
            name='name'
            value={name}
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
        <label>
          <p>Email*</p>
          <input
            type='email'
            name='email'
            value={email}
            required
            maxLength='30'
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
        <button className='craft-create-btn'>Submit</button>
      </form>
    </div>
  )
}
