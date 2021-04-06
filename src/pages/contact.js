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
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h1>Contact Us</h1>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <form name="contact" method="POST" data-netlify="true">
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text" id="first_name" name="first_name" className="form-control" placeholder="Joe" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text" id="last_name" name="last_name" className="form-control" placeholder="Smith" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email_address">Email</label>
                                <input type="email" name="email_address" id="email_address" className="form-control" placeholder="you@email.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="telephone_number">Phone Number</label>
                                <input type="tel" name="telephone_number" id="telephone_number" className="form-control" placeholder="333-555-7777" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" className="form-control" rows="10" required></textarea>
                            </div>

                            <div className="button-container text-right">
                                <button className="btn btn-danger d-sm-inline-block m-0-auto align-center mr-2" type="submit">Contact Us</button>
                                <input className="btn btn-danger d-sm-inline-block m-0-auto align-center" type="reset" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Default>
    )
}
