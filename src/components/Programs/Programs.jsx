import React from 'react';
import Programbox from './Programbox';
import fimage1 from '../Programs/1.svg';
import fimage2 from '../Programs/2.svg';
import fimage3 from '../Programs/3.svg';
import fimage4 from '../Programs/4.svg';


function Program() {
  return (
    <div id='features'>
        <h1>EXPLORE OUR PROGRAMS</h1>
        <div  className ='a-container'>
            <Programbox image={fimage1} title="Weightlifting"></Programbox>
            <Programbox image={fimage2} title="Cycling"></Programbox>
            <Programbox image={fimage3} title="Muscle Training"></Programbox>
            <Programbox image={fimage4} title="Cardio"></Programbox>
        </div>
    </div>
  )
}

export default Program












// import React from 'react'

// const Programs = () => {
//     return (
//         <div>Programs</div>
//     )
// }
// export default Programs