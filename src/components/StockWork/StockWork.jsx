import React from 'react'
import './StockWork.css'

const StockWork = () => {
    return (
        <>
        <section class="mid_section p-5">
        <div class="container-fluid">
            <h2 class="text-center mb-4 heading">How does StockPe work?</h2>
            <div class="row text-center p-sm-5 ">
                <div class="col-lg-3 check">
                    <img src="https://stockpe.tech/img/Tournament.png" class="img-fluid svg" alt="Responsive image" />
                    <h3>Enter into tournament</h3>
                    <p>Tournament will help you learn the basics of stock market</p>
                </div>
                <div class="col-lg-3">
                    <img src="https://stockpe.tech/img/implement.png" class="img-fluid svg" alt="Responsive image" />
                    <h3>Learn and implement</h3>
                    <p>Get simplified market insights and test out your hypothesis in real time</p>
                </div>
                <div class="col-lg-3">
                    <img src="https://stockpe.tech/img/Rewards.png" class="img-fluid svg" alt="Responsive image" />
                    <h3>Unbelievable returns</h3>
                    <p>win 10x or 20x prize and ace the leaderboard</p>
                </div>
                <div class="col-lg-3">
                    <img src="https://stockpe.tech/img/with.png" class="img-fluid svg" alt="Responsive image" />
                    <h3>Easy withdraw</h3>
                    <p>You can withdraw anytime or stay and learn more</p>
                </div>
            </div>
        </div>
    </section>
    <section class="home">
        <img src="https://stockpe.tech/img/Po.png" alt="img1" class="score" />
    </section>
    </>
    )
}

export default StockWork
