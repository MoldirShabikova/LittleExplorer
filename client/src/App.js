import { Switch, Route, useHistory } from 'react-router'
import { useState, useEffect } from 'react'
import './App.css'
import Login from './screens/Login'
import Layout from './share/layout/Layout'
import Register from './screens/Register'

import { loginUser, registerUser } from './services/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [error, setError] = useState(null)
  const history = useHistory()

  const handleLogin = async (formData) => {
    try {
      const currentUser1 = await loginUser(formData)
      setCurrentUser(currentUser1)
      setError(null)
      history.push('/')
      history.go(0)
    } catch (e) {
      setError('invalid login credentials')
    }
  }

  const handleRegister = async (formData) => {
    try {
      const currentUser1 = await registerUser(formData)
      history.push('/')
    } catch (e) {
      setError('invalid sign up info')
    }
  }

  return (
    <Layout>
      <Switch>
        <Route path='/login'>
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path='/register'>
          <Register handleRegister={handleRegister} />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
