import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Search from './components/search';
import Favorite from './components/favorite';
import Quote from './components/quote';
import Nav from './layouts/nav';
import './App.css';




class App extends Component{
  render() {
  return (
    <Router>
          <div className="App">
            <header style=
                {{
                  backgroundColor:'#26A69A', 
                  color:'#fff', 
                  padding:'20px',
                  fontSize:'2.5rem',
                  textAlign:"center"
                  }}
                  >QUOTLIFY</header>
            <Nav />
            <Route exact path="/" component={Quote} />
            <Route path="/search" component={Search} />
            <Route path="/favorite" component={Favorite} />
          </div>
    
    </Router>
  );
}
}
export default App;
