import React from "react"
import MainNav from "../components/mainnav.js"
import logo from '../img/kilkennys-logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'


export default function Default({children}) {
    return (
        <>
            <header className="container-fluid position-absolute bg-gray-gradient-70-to-0">
                <div className="row ml-4 mr-4">
                        <div className="col-sm-12 col-lg-4 d-flex justify-content-center justify-content-lg-start align-items-center p-4">
                            <img src={logo} className="logo" alt="Kilkennys Restaurant" width="298" height="137" />
                        </div>
                        <div className="col-sm-12 col-lg-6 offset-lg-2 px-4 py-2 d-flex justify-content-center justify-content-lg-end align-items-center">
                            <MainNav></MainNav>
                        </div>
                    </div>
            </header>

            <div className="container-fluid mx-0 px-0">
                {children}
            </div>

            <footer className="container-fluid">
                <div className="row bg-dark">
                    <div className="col-sm-12 col-lg-2 d-flex justify-content-center align-items-center p-4">
                        <img src={logo} className="logo" alt="Kilkennys Restaurant" width="298" height="137" />
                    </div>
                    <div className="col-sm-12 col-lg-8 d-flex justify-content-center align-items-center justify-content-lg-start align-items-lg-center p-4">
                        <MainNav></MainNav>
                    </div>
                    <div className="col-sm-12 col-lg-2 px-4 py-2 d-flex justify-content-center align-items-center justify-content-lg-end text-white">
                    <a href="#0" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#0" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </div>
                </div>
                <div className="row bg-dark">
                    <div className="col-sm-12 p-2 pb-3 d-flex justify-content-center align-items-center text-white">
                            &copy; 2021 All Right Reserved.
                        </div>
                </div>
            </footer>
        </>
    )
}
