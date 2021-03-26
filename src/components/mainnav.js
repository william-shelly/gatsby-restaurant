import React from "react"
import { Link } from "gatsby"

export default function MainNav() {
    return (
        <ul className="main-nav text-center text-lg-left">
            <li><Link to="/" className="">Home</Link></li>
            <li><Link to="/about" className="">About</Link></li>
            <li><a href="/menu" className="">Menu</a></li>
            <li><a href="/contact" className="">Contact</a></li>
            <li><a href="/checkout" className="btn btn-primarycolor text-white">Checkout</a></li>
        </ul>
    )
}
