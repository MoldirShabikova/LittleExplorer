import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const { username, password } = formData
  const { handleLogin, error } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='login'>
      <div className='login-box'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleLogin(formData)
          }}
        >
          <h1 id='welcome-text'>Welcome</h1>
          {error && <p>{error}</p>}

          <label>
            Username
            <input
              className='input-username'
              type='text'
              required
              name='username'
              value={username}
              onChange={handleChange}
            />
          </label>
          <label>
            Password
            <input
              className='input-password'
              type='password'
              required
              name='password'
              value={password}
              onChange={handleChange}
            />
          </label>
          <button id='login-form-button'>
            <b>Log into your account</b>
          </button>
          <Link to='/register' id='none'>
            <h4>New user? Create account</h4>
          </Link>
        </form>
      </div>
    </div>
  )
}
