import React from 'react'
import './Carousel.css'

const Carousel = () => {
    return (
        <div class="section mt-sm-5">
        <div class="container-fluid">
            <div class="row">
                <div class="section1 col-lg-6">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active" style={{textAlign: "left"}}>
                                <h2>Open a Stock<span>Pe</span> Learning Account</h2>
                                <p>Instantly buy or sell stock token with just a click of a button.</p>
                            </div>
                            <div class="carousel-item" style={{textAlign: "left"}}>
                                <h2>Learn Stock Trading and <span>Invest</span> like a Pro</h2>
                                <p>Learn Stock Trading and invest simultaneously by practically learning </p>
                            </div>
                            <div class="carousel-item" style={{textAlign: "left"}}>
                                <h2>Learn and Compete with your<span> Peers</span></h2>
                                <p>Learn together with your peers, compete and get exciting returns</p>
                            </div>
                        </div>
                    </div>
                    <div class="form_area" id="myDIV">
                        <form class="d-flex" id="contactForm">
                            <input type="number" class="form-control number " id="inlineFormInputName2"
                                placeholder="Phone number" pattern="[6789][0-9]{9}" required />
                                
                            <button type="submit" class="btn btn-primary nav_btn" onclick="myFunction()">Get
                                invite</button>
                        </form>
                    </div>
                        <div style={{display: "none", color: "#fff"}} class="form_area" id="my2">
                            <div class="d-flex">
                                <p>Thank You 😁. We will notify you once your invite is ready and served hot and
                                    fresh to your sms inbox.</p>
                            </div>
                        </div>
                    </div>
                
                <div class="svg-container col-lg-6">
                    <img src="https://stockpe.tech/img/Landing.png" alt="landing" class="landing_svg" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Carousel
