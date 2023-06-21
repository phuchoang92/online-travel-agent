import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import Hotel from "./components/pages/hotel/Hotel";
import List from "./components/pages/list/List";

import './App.css'



export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ LandingPage }/>
                <Route path="/login" component={ LoginPage }/>
                <Route path="/register" component={ RegisterPage }/>
                <Route path="/forget-password" component={ ForgetPasswordPage }/>
                <Route path="/home" component={ HomePage }/>
                <Route path="/hotels" component={List}/>
                <Route path="/hotel" component={Hotel}/>
            </Switch>
            <Footer />
        </Router>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>
            Designed & coded by <a href="https://www.facebook.com/profile.php?id=100012666930591" target="_blank" rel="noopener noreferrer">Group 9</a>
            </p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "fixed",
    left: 0,
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}
