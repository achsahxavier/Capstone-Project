import React,{useState}  from 'react'
import logo from '../Navbar/logo.png'
import {Link} from 'react-scroll'
import './Navbar.css'


function Navbar() {

const [nav,setnav] = useState(false);

const changeBackground = () => {
    if (window.scrollY >=50) {
        setnav(true);
    }
    else{
        setnav(false);
    }
}
window.addEventListener('scroll',changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
        <Link to='main' className='logo'>
             <img src={logo} alt = ''></img>
        </Link>
        <input className= 'menu-btn' type= 'checkbox' id='menu-btn'></input>
        <label className='menu-icon' htmlFor='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to="main"  smooth={true} duration={500}>Home</Link></li>
            <li><Link to="reason" smooth={true} duration={500}>About</Link></li>
            <li><Link to="features" smooth={true} duration={500}>Program</Link></li>
            <li><Link to="pricing" smooth={true} duration={500}>Pricing</Link></li>
            <li><Link to="review" smooth={true} duration={500}>Customer Review</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar