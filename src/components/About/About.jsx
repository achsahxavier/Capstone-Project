import React from 'react'
import './About.css'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import tick from '../../assets/tick.png'

const About = () => {
    return (
      <div className="Reasons" id="reason">
        <div className="left-r">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
        </div>
        <div className="right-r">
        <span>About Us</span>

        <div> 
          <span>Why </span>
          <span>Choose Us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>OVER 500+ TRUSTED CLIENTS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>HIGHLY TRAINED COACHES</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>FLEXIBLE TIMINGS</span>
          </div>
        </div>
      </div>
      </div>
    )
}
export default About









// import React from "react";
// import aboutimage from '../About/about.png';

// function About(){
//   return (
//     <div id="about">
//         <div className="about-image">
//             <img src = {aboutimage} alt=''>
//             </img>
//         </div>
//         <div className="about-text">
//           <h1>Learn More About Us</h1>
//           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora possimus id consequuntur saepe nobis, sapiente vel libero ut perspiciatis consectetur obcaecati earum harum, reprehenderit cumque aperiam temporibus dolor laborum accusantium!</p>
//           <button>Read More</button>
//         </div>
//     </div>
//   )
// }


// export default About;