import React from 'react'
import "./Footer.css"
import Github from "../../assets/github.png"
import Fblogo from "../../assets/fblogo.png"
import LinkedIn from "../../assets/linkedin.png"
import Gymlogo from "../../assets/gymlogo.png"


const Footer = () => {
    return (
        <div className='Footer-container'>
            <hr />
            <div className='footer'>
                <div className="social-links">
                <img src={Github} alt="" />
                {/* <img arc={Iglogo} alt="instagramlogo" /> */}
                <img src={Fblogo} alt="" />
                <img src={LinkedIn} alt="" />
            </div>
            <div className="logo-f">
                <img src={Gymlogo} alt="" />
            </div>
        </div>
    </div>
    )
}
export default Footer