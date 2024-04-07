import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className="header-content">
        <h2>
            Lets Order Your Favourite Food !
        </h2>
        <p>we know the power of mother's hand food , so we serve the food with love to match that little much! </p>
        <button ><a href="#exploreMenu"></a>view Menu</button>
      </div>
    </div>
  )
}

export default Header
