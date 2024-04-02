import React, { useContext } from 'react'
import "./navbar.css"
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/storeContext'
const Navbar = ({ setshowLogin }) => {
  const {getTotalCartAmount} = useContext(StoreContext)

  return (

   
    <div className='nav'>
      <a href="/">
        <img src={assets.logo} alt="logo" className='logo' /></a>
      <ul className="nav-menu">
        <li><Link to="/">home</Link></li>
        <li><a src="#Explore Our Menu">menu</a></li>
        <li>contact us</li>
        <li><a href="/about-us">about us</a></li>
      </ul>
      <div className="nav-right">
        <img src={assets.search_icon} alt="serch-icon" />
        <div className="nav-search_icon"><Link to = "/cart"><img src={assets.bag_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>

        </div>
        <button onClick={() => setshowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
