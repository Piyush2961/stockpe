import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
             <div className="logo px-sm-5 px-2">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <Link className="navbar-brand" to="/"><img src="https://stockpe.tech/img/StockPe.png" alt="Stockpe"
                            className="stockpe_logo mx-sm-5 mx-2"/></Link>
                    <button style={{ backgroundColor: "#d1d1d1"}} id="nav-toggle-button" className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mr-auto menu" style={{textAlign: "left"}}>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item active">
                            <Link className="nav-link" to="/our-team">Our Team</Link>
                                
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/faq">FAQs</Link>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="mailto:Hello@stockpe.tech">Contact</a>
                            </li>
                        </ul>
                        <div className="form-inline px-5">
                            <button className="btn btn-primary px-4" onclick="myFunction2()">Get Started</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
