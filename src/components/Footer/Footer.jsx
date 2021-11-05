import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    return (
        <footer class="footer p-sm-5  p-3">
        <div class="container-fluid px-sm-5" style={{textAlign: "left"}}>
            <div class="logo pt-4 pt-sm-0" >
                <Link to="/"><img src="https://stockpe.tech/img/StockPe.png" class="footer_logo" alt="footer_logo" /></Link>
            </div>
            <div class="row">
                <div class="col-lg-3 pt-4">
                    <strong>About</strong>
                    <br />
                    <p class="para">We are simplifying stocks to create a new era of financially educated students
                        in India.</p>
                </div>
                <div class="col-lg-3 px-sm-5 pt-4 ">
                    <strong>Get in touch</strong>
                    <p class="para">Questions or feedbacks?
                        We would love to hear from you</p>
                    <strong>Email us at</strong>
                    <br /> 

                    <a href="mailto:Hello@stockpe.tech" class="email" target="_blank">Hello@stockpe.tech</a>
                </div>
                <div class="col-lg-3 px-sm-5 pt-4  btn_area">
                    <strong>Get our app</strong>
                    <br />
                    <a href="#carouselExampleIndicators"><img src="https://stockpe.tech/img/button.png" alt="playstore" class="btn_svg" /></a>
                </div>
                <div class="col-lg-3 pt-4 px-sm-5 social">
                    <strong>Social Media</strong>
                    <br />

                    <div >
                        <a href="#" target="_blank"><img src="https://stockpe.tech/img/facebook.png" alt="facebook"
                                class="social_svg" /></a>
                        <a href="#" target="_blank"><img src="https://stockpe.tech/img/instagram.png" alt="instagram"
                                class="social_svg" /></a>
                        <a href="#" target="_blank"><img src="https://stockpe.tech/img/linkedin.png" alt="linkedin"
                                class="social_svg" /></a>
                    </div>
                </div>
                <div class="container-fluid pt-5">
                    <div class="row">
                        <div class="col-lg-3">
                            <p class="p2">© 2021 StockPe | All Rights Reserved.</p>
                        </div>
                        <div class="col-lg-6">
                            <p class="p1">Made with &#10084;&#65039; for Indians</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </footer>
        
    )
}

export default Footer
