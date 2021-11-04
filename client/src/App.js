import { Switch, Route, useHistory } from 'react-router'
import { useState, useEffect } from 'react'
import './App.css'
import Login from './screens/Login'
import Layout from './share/layout/Layout'
import Register from './screens/Register'

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from './services/auth'

// get the lists from API

import { getAllCrafts } from './services/crafts'
import { getAllEvents } from './services/event'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [error, setError] = useState(null)
  const history = useHistory()

  // API lists valuable

  const [crafts, setCrafts] = useState([])
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchCrafts = async () => {
      const craftsList = await getAllCrafts()
      setCrafts(craftsList)
    }
    fetchCrafts()
  }, [])

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsList = await getAllEvents()
      setEvents(eventsList)
    }
    fetchEvents()
  }, [])

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
    }
    handleVerify()
  }, [])

  const handleLogin = async (formData) => {
    try {
      const userData = await loginUser(formData)
      setCurrentUser(userData)
      setError(null)
      history.push('/')
      history.go(0)
    } catch (e) {
      setError('invalid login credentials')
    }
  }

  const handleRegister = async (formData) => {
    try {
      const userData = await registerUser(formData)
      setCurrentUser(userData)
      history.push('/')
    } catch (e) {
      setError('invalid sign up info')
    }
  }
  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
    history.push('/')
  }

  return (
    <Layout currentUser={currentUser} handleLogout={handleLogout}>
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
