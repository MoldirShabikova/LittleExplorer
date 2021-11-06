import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const { username, email, password } = formData
  const { handleRegister } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='register'>
      <div className='register-box'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleRegister(formData)
          }}
        >
          <h1 id='welcome-text'>Welcome</h1>
          <h2>Create account</h2>
          <h5>Be creative and join today.</h5>
          <input
            className='input-register-username'
            type='text'
            placeholder='Username'
            required
            name='username'
            value={username}
            onChange={handleChange}
          />

          <input
            className='input-register-email'
            type='text'
            placeholder='Email'
            required
            name='email'
            value={email}
            onChange={handleChange}
          />
          <input
            className='input-register-password'
            type='text'
            placeholder='Password'
            required
            name='password'
            value={password}
            onChange={handleChange}
          />
          <button id='register-form-button'>Register Now</button>
          <Link to='/login' id='none'>
            {' '}
            <h5>Already have an account?</h5>
          </Link>
        </form>
      </div>
    </div>
  )
}
