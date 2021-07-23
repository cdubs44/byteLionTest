import React from "react";
import "./App.css"
import Collections from "./components/Collections";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import {Route} from 'react-router-dom';
import Navbar from "./components/MyNavbar";

function App() {
  return <div className="App">
    <Navbar />
    <Route exact path="/" component={Collections} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/settings" component={Settings} />
  </div>
}

export default App
