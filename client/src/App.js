import { Switch, Route, useHistory } from 'react-router'
import { useState, useEffect } from 'react'
import './App.css'
import Login from './screens/Login'
import Layout from './share/layout/Layout'
import Register from './screens/Register'
import Contact from './screens/Contact/Contact'
import AboutUs from './screens/AboutUs/AboutUs'
import Activities from './screens/Activities/Activities'
import MainPage from './screens/MainPage/MainPage'
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from './services/auth'

// get the lists from API

import {
  getAllCrafts,
  postCraft,
  putCraft,
  deleteCraft,
} from './services/crafts'
import {
  getAllEvents,
  postEvent,
  putEvent,
  deleteEvent,
} from './services/event'

import Events from './screens/Events/Events'
import EventCreate from './screens/EventCreate/EventCreate'
import EventEdit from './screens/EventEdit/EventEdit'
import EventDetails from './screens/EventDetails/EventDetails'

import Crafts from './screens/Crafts/Crafts'
import CraftCreate from './screens/CraftCreate/CraftCreate'
import CraftsDetails from './screens/CraftsDetails/CraftsDetails'
import CraftEdit from './screens/CraftEdit/CraftEdit'

import CreatePosts from './screens/CreatePosts/CreatePosts'

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

  const handleCraftCreate = async (formData) => {
    const newCraft = await postCraft(formData)
    setCrafts((prevState) => [...prevState, newCraft])
    history.push('/crafts')
  }

  const handleCraftUpdate = async (id, formData) => {
    const newCraft = await putCraft(id, formData)
    setCrafts((prevState) =>
      prevState.map((craft) => {
        return craft.id === Number(id) ? newCraft : craft
      })
    )
    history.push('/crafts')
  }

  const handleEventCreate = async (formData) => {
    const newEvent = await postEvent(formData)
    setEvents((prevState) => [...prevState, newEvent])
    history.push('/events')
  }

  const handleEventUpdate = async (id, formData) => {
    const newEvent = await putEvent(id, formData)
    setEvents((prevState) =>
      prevState.map((event) => {
        return event.id === Number(id) ? newEvent : event
      })
    )
    history.push('/events')
  }

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

        <Route path='/crafts/:id/edit'>
          <CraftEdit crafts={crafts} handleCraftUpdate={handleCraftUpdate} />
        </Route>

        <Route path='/crafts/new'>
          <CraftCreate handleCraftCreate={handleCraftCreate} />
        </Route>

        <Route path='/crafts/:id'>
          <CraftsDetails crafts={crafts} />
        </Route>

        <Route path='/crafts'>
          <Crafts crafts={crafts} />
        </Route>

        <Route path='/create/posts'>
          <CreatePosts />
        </Route>

        <Route path='/events/:id/edit'>
          <EventEdit events={events} handleEventUpdate={handleEventUpdate} />
        </Route>

        <Route path='/events/new'>
          <EventCreate handleEventCreate={handleEventCreate} />
        </Route>

        <Route path='/events/:id'>
          <EventDetails events={events} />
        </Route>

        <Route path='/events'>
          <Events events={events} />
        </Route>

        <Route path='/about'>
          <AboutUs />
        </Route>

        <Route path='/activities'>
          <Activities />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>

        <Route path='/'>
          <MainPage />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
