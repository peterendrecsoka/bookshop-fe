import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from "./components/header"

// Pages
import Home from "./pages/home"

const App = () => (
  <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        {/* <Route path='/book/:id' component={Book}/> */}
        {/* <Route path='/cart' component={Cart}/> */}
        {/* <Route path='/search/:text' component={Search}/> */}
      </Switch>
  </div>
)

export default App
