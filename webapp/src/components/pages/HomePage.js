import React from 'react'
import { Helmet } from 'react-helmet';
import {BrowserRouter, Link} from 'react-router-dom'
import '../../HomePage.css'
import SignInPage from './LoginPage';

export default function HomePage() {

    return (
        <div className="container">
            <Helmet>
                <title>Home page</title>

            </Helmet>

            <div className="left-class">
                <a href="javascript:void(0)" className="link">Home page</a>
                <a href="#" className="link">Room map</a>
                <a href="#" className="link">Fellow guest</a>
                <a href="#" className="link">Group guest</a>
                <a href="#" className="link">Reception</a>
                <a href="#" className="link">Rooms</a>
                <a href="#" className="link">Statistical</a>
                <a href="/" className="link">Log out</a>
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
