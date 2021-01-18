import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/App.scss'

import Home from './screens/Home'
import Form from './screens/Form'

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/form' exact>
            <Form/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
