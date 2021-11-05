import React from 'react'
import './OurTeam.css'

const OurTeam = () => {
    return (
        <div class="container p-5">
            <div class="text_area text-center">
                <h1>Meet our Team</h1>
                <p>An enthusiatic &amp; super curious group of people who are simplifying financial education for India.</p>
            </div>
            <div class="row my-sm-5 px-3 card__div">
                <div class="col-lg-4 px-sm-5 pb-5">
                    <div class="card" style={{width: "15rem", borderRadius:"12px", background:" rgba(255, 255, 255, 0.74)"}}>
                        <img src="https://stockpe.tech/img/shubham.png" class="card-img-top card__img" alt="team" />
                        <div class="card-body" style={{backgroundColor: "transparent"}} >
                            <h5 class="card-title text-center" style={{color: "#212529", marginBottom: "0.75rem", fontSize: "1.25rem", fontWeight: "500"}}>Shubham Rawal</h5>
                            <p class="card-text text-center" style={{color:"#212529"}}><strong style={{color:"#000"}}>Founding Team</strong><br />
                                Hodophile</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 px-sm-5  pb-5">
                    <div class="card" style={{width: "15rem", borderRadius:"12px", background:" rgba(255, 255, 255, 0.74)"}}>
                        <img src="https://stockpe.tech/img/yash.png" class="card-img-top card__img" alt="team" />
                        <div class="card-body" style={{backgroundColor: "transparent"}}>
                            <h5 class="card-title text-center" style={{color: "#212529", marginBottom: "0.75rem", fontSize: "1.25rem", fontWeight: "500"}}>Yash Singh</h5>
                            <p class="card-text text-center" style={{color:"#212529"}}> <strong style={{color:"#000"}}>Founding
                                    Team</strong><br />Dota Deft</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 px-sm-5 pb-5">
                    <div class="card" style={{width: "15rem", borderRadius:"12px", background:" rgba(255, 255, 255, 0.74)"}}>
                        <img src="https://stockpe.tech/img/jay.png" class="card-img-top card__img" alt="team" />
                        <div class="card-body" style={{backgroundColor: "transparent"}}>
                            <h5 class="card-title text-center" style={{color: "#212529", marginBottom: "0.75rem", fontSize: "1.25rem", fontWeight: "500"}}>Jay Hinge</h5>
                            <p class="card-text text-center" style={{color:"#212529"}}>
                                <strong style={{color:"#000"}}> Founding Team</strong><br />
                                Clinophile</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 px-sm-5 pb-5 ">
                    <div class="card" style={{width: "15rem", borderRadius:"12px", background:" rgba(255, 255, 255, 0.74)"}}>
                        <img src="https://stockpe.tech/img/Ananya.png" class="card-img-top card__img" alt="team" />
                        <div class="card-body" style={{backgroundColor: "transparent"}}>
                            <h5 class="card-title text-center" style={{color: "#212529", marginBottom: "0.75rem", fontSize: "1.25rem", fontWeight: "500"}}>Ananya Goswami</h5>
                            <p class="card-text text-center" style={{color:"#212529"}}><strong style={{color:"#000"}}>Product Design</strong><br />Dog
                                Lover</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 px-sm-5 pb-5">
                    <div class="card" style={{width: "15rem", borderRadius:"12px", background:" rgba(255, 255, 255, 0.74)"}}>
                        <img src="https://stockpe.tech/img/ritik.png" class="card-img-top card__img" alt="team" />
                        <div class="card-body" style={{backgroundColor: "transparent"}}>
                            <h5 class="card-title text-center" style={{color: "#212529", marginBottom: "0.75rem", fontSize: "1.25rem", fontWeight: "500"}}>Ritik Jain</h5>
                            <p class="card-text text-center" style={{color:"#212529"}}><strong style={{color:"#000"}}>Product
                                    Development</strong><br />Passionate Writer
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 px-sm-5">
                    <div class="card" style={{width: "15rem", borderRadius:"12px", background:" rgba(255, 255, 255, 0.74)"}}>
                        <img src="https://stockpe.tech/img/ani.png" class="card-img-top card__img" alt="team" />
                        <div class="card-body" style={{backgroundColor: "transparent"}}>
                            <h5 class="card-title text-center" style={{color: "#212529", marginBottom: "0.75rem", fontSize: "1.25rem", fontWeight: "500"}}>Aniket Jadhav</h5>
                            <p class="card-text text-center" style={{color:"#212529"}}><strong style={{color:"#000"}}>Product
                                    Development,</strong><br />Taekwondo Athlete
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam
