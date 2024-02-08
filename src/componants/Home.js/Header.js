import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight,faBasketShopping} from '@fortawesome/free-solid-svg-icons'
import './Header.css';
function Header() {
  return (
  <header>
    <div className='container'>
        <div className='row'>
         <div className='col-md-6'>
          <h2>Good food choices are good investments.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
          <button>order Now  <FontAwesomeIcon icon={faBasketShopping} style={{color: "#6d706b",}} /></button>
          <button>learn more <FontAwesomeIcon icon={faAngleRight} style={{color: "#6d706b",}} /> </button>
      </div>
          <div className='col-md-6'>

    </div>
    </div>
    </div>
  </header>
  )
}

export default Header
