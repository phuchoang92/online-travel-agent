import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className="text-center">
            <Helmet>
                <title>Home page</title>
            </Helmet>
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}
