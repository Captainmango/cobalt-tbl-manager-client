import React from 'react'
import { Link } from 'react-router-dom'


const NoRoute = () => {
    return (
        <div>
            <h1 className="p-5">Error</h1>

            <p className="p-5">Looks like there was an issue processing your request.
                please click the link below to go to the home page
            </p>
            <Link className="pl-5" to="/">Home page</Link>
        </div>
    )
}

export default NoRoute
