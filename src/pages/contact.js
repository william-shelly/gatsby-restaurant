import React from 'react'
// import { graphql } from 'gatsby'
import Default from '../layouts/default.js'

export default function Contact() {
    const businessName = 'Kilkennys';
    const welcomePhrase = 'Welcome to ' + businessName;

    return (
        <Default>
            <div className="container-fluid intro-area-container">
                <div className="row">
                    <div className="col-sm-12 p-0 drop-area">
                        <div className="text-container p-5 d-flex flex-column justify-content-end justify-content-lg-center align-items-center">
                            <h1 className="d-none d-lg-block text-center pb-4 text-shadow">{welcomePhrase}</h1>
                            <p className="d-none d-lg-block text-center text-white text-shadow">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h1>Contact Us</h1>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </Default>
    )
}
