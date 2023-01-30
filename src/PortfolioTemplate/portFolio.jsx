import React from "react";
import './portfolio.css'
import profile from './images/mypic.jpeg'

const PortFolio = () => {
    return <div>
        <div id="home">
            <div>
                <marquee scrollamount="10">
                    <h4>What's Up Friend🖐🏻, Myself</h4>
                </marquee>
            </div>
            <h3>SHREYANSH AGARWAL</h3>
            <img src={profile} alt="why can 't yo see me?" />
            <p>
            I don't believe in finding myself👀 instead I believe in creating myself😎!! </p>
        </div>
    </div>
}

export default PortFolio;