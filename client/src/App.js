import { Switch, Route } from 'react-router'
import './App.css'
import Login from './screens/Login'
import Layout from './share/layout/Layout'
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
