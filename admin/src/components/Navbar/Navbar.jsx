import React from 'react';
import "./Navbar.css";
import { assets } from '../../assets/assets';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img className='logo'  src={assets.logo} alt="" />
            {/* <br/>
            Admin - Panel */}
            <img className='profile'src={assets.profile_icon} alt="" />
        </div>
    );
};

export default Navbar;