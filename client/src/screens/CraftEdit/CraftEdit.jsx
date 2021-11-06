import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getOneCraft, putCraft } from '../../services/crafts'
import './CraftEdit.css'
export default function CraftCreate() {
  const [craft, setCraft] = useState({
    title: '',
    posted_date: '',
    name: '',
    image: '',
    description: '',
    email: '',
  })
  const [isUpdated, setUpdated] = useState(false)

  let { id } = useParams()
  useEffect(() => {
    const fetchCraft = async () => {
      const craft = await getOneCraft(id)
      setCraft(craft)
    }
    fetchCraft()
  }, [id])
  const handleChange = (e) => {
    const { name, value } = e.target
    setCraft({
      ...craft,
      [name]: value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const updated = await putCraft(id, craft)
    setUpdated(updated)
  }
  if (isUpdated) {
    return <Redirect to={`/crafts/${id}`} />
  }

  return (
    <div className='craft-edit'>
      <form className='craft-edit-form' onSubmit={handleSubmit}>
        <h1>Edit Craft</h1>
        <label>
          <p>Title*</p>
          <input
            type='text'
            name='title'
            value={craft.title}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Date*</p>
          <input
            type='text'
            name='date'
            // required
            value={craft.posted_date}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Name*</p>
          <input
            type='text'
            name='name'
            value={craft.name}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Image*</p>
          <input
            type='text'
            name='text'
            value={craft.image}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Email*</p>
          <input
            type='text'
            name='email'
            value={craft.email}
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
            value={craft.description}
            required
            onChange={handleChange}
          />
        </div>

        <br />
        <button className='craft-btn'>Save</button>
      </form>
    </div>
  )
}
