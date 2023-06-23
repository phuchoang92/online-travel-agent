import React from 'react'
import { Helmet } from 'react-helmet';
import {BrowserRouter, Link} from 'react-router-dom'
import '../Global.css'
import SignInPage from './LoginPage';

export default function HomePage() {

    return (
        <div className="container">
            <Helmet>
                <title>Home page</title>

            </Helmet>

            <div className="left-class">
                <a href="home" className="link">Home page</a>
                <a href="src/pages/HomePage#" className="link">Room map</a>
                <a href="src/pages/HomePage#" className="link">Fellow guest</a>
                <a href="src/pages/HomePage#" className="link">Group guest
                <select className="dropdown">
                        <option value=""></option>
                        <option value="group1">g1</option>
                        <option value="group2">g2</option>
                        <option value="group3">g3</option>
                    </select></a>
                <a href="src/pages/HomePage#" className="link">Reception</a>
                <a href="src/pages/HomePage#" className="link">Rooms
                    <select className="dropdown">
                        <option value=""></option>
                        <option value="101">101</option>
                        <option value="102">102</option>
                        <option value="103">103</option>
                        <option value="104">104</option>
                        <option value="105">105</option>
                        <option value="106">106</option>
                        <option value="107">107</option>
                    </select></a>

                <a href="src/pages/HomePage#" className="link">Statistical</a>
                <a href="/src/pages" className="link">Log out</a>
            </div>
            <div className="center-class">
                <h1 className="main-title home-page-title">welcome</h1>
                {/* <Link to="/">
                <button className="primary-button">Log out</button>
            </Link> */}
            </div>
        </div>
    )
}
