import { useState } from 'react'

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
    const { value } = e.target
    setFormData({
      name: value,
    })
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleCraftCreate(formData)
        }}
      >
        <h1>Create new Crafts</h1>
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
            value={posted_date}
            required
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
            type='image'
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
        <button>Submit</button>
      </form>
    </div>
  )
}
