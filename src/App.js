import React from 'react';
import HomePage from './pages/homePage/HomePage';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={() => <HomePage />} />
        <Route path='/cakes' exact component={() => <HomePage />} />
      </Switch>
    </BrowserRouter>
  )

}

export default App;
