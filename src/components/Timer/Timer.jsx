import React from 'react'
import './Timer.css'

const Timer = () => {
    return (
        <>
        <section class="timer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 png_area">
                    <img src="https://stockpe.tech/img/Tournament%20design.png" alt="design" class="design" />
                </div>
                <div class="col-lg-6 text_area align-middle">
                    <h1 class="align-middle">Can you predict the market?</h1>
                    <p>Join in our tournament and compete with your friendsto learn the market basics and win exciting
                        prizes</p>
                </div>
                <div class="col-lg-3 btn__area">
                    <p id="demo" class="timmer"></p>
                    <button type="button" class="btn btn-primary btn-lg timer_btn " onclick="myFunction2()">Let’s Go!</button>
                </div>
            </div>
        </div>
    </section>
    <section class="home">
        <img src="https://stockpe.tech/img/Scores.png" alt="img1" class="score" />
    </section>
    </>
    )
}

export default Timer
