import React, { Component } from 'react';
import{ BrowserRouter,Switch,Route} from 'react-router-dom'
import inicio from './pages/inicio'
import perfil from './pages/perfil'
import repos from './pages/repos'
import detailrepos from './pages/detailrepos'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={inicio}></Route>
          <Route path='/perfil' component={perfil}></Route>
          <Route path='/repos' component={repos}></Route>
          <Route path='/detail/:user/:nome' component={detailrepos}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
