import React from 'react'
import './Faq.css'

const Faq = () => {
    return (
        <div class="faq_body container-fluid">
            <div class="text-center pt-sm-5 faq-header">
                <h1>FAQs</h1>
                <h1>Frequently Asked Questions</h1>
            </div>
            <div class="container py-sm-5 py-4 px-sm-5 ">
                <div id="accordion">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  What is StockPe?<i for="btn-link" class="fa fa-angle-down" aria-hidden="true"></i>
                                </button>
                                
                            </h5>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                                StockPe is an online education platform that helps students/young Indians to simplify
                                stocks using stock tokens and interactive gaming systems that help you learn financial
                                education in a fun and exciting way.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How StockPe works? <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body">
                                We help you learn stock market basics from 0 using our tournaments. These tournaments
                                help you learn stock market basics and help you implement in real time. You compete with
                                other 100 users for winning positions to win 10X or 20X rewards.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How can I download the StockPe app?
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="card-body">
                                Currently our app is limited for early access only. We are accepting pre-registration
                                and you can test out our app by just going to the home screen and registering your phone
                                number with us. We will notify you once your invite is ready :)
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingfour">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                    I don’t have a trading account, can I still play on StockPe?
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </button>
                            </h5>
                        </div>
                        <div id="collapsefour" class="collapse" aria-labelledby="headingfour" data-parent="#accordion">
                            <div class="card-body">
                                You don’t need any demat/trading account to start learning on StockPe. You can simply
                                start by registering your phone number.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingFive">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    How to Register?
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                            <div class="card-body">
                                1) Download our app or get an invite link.<br />
                                2) Enter your phone number and enter the OTP you received.<br />
                                3) Enter basic details (Name, Email &amp; Date of birth).<br />
                                4) Pay the registration fee for our tournament and start learning &amp; implementing in real
                                time.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingSix">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    How will I be paid?
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                            <div class="card-body">
                                Once the tournament is over you will be able to withdraw any amount you won in the
                                tournament by just going on the withdrawal screen.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingSeven">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    When are the winners announced and how can I check the winners in real time? Like
                                    who’s acing the leaderboard?<i class="fa fa-angle-down" aria-hidden="true"></i>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                            <div class="card-body">
                                Winners will be announced at the end of the tournament. You can go to the Leaderboard to
                                check your real time position.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingEight">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                    How can I add money?<i class="fa fa-angle-down" aria-hidden="true"></i>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordion">
                            <div class="card-body">
                                We currently accept UPI and other Wallets (Paytm, PhonePe, GooglePay, etc).
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
