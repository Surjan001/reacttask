import "./App.css";
import React from "react";
import Reg from "./components/Registration/Reg";
import Login from "./components/Login/Login";
import { Route } from 'react-router-dom';
import Nav from "./components/Navigation/Nav";
import Section from "./components/Section/Section";

function App(props) {
  return (
    <div className="appRoot">
      <Nav /> <br />
      <Route path='/home'>
      <Section expression />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/register'>
        <Reg />
      </Route> 
    </div>
  );
}

export default App;
