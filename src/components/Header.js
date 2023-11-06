import React from 'react'
import {Link} from 'react-router-dom';
import image1 from '../images/Showlogo.png'

function Header() {
  return (
    
       
      <div className='Navabar_container'>
        <Link to='/'>
            <img className='logo-title' src={image1}alt=''/>
            
        </Link>

        <div className='Menu-Container'>
           
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to='/Movies'>Movies</Link>
                </li>

                <li>
                    <Link to='/Cinemas'>Cinemas</Link>
                </li>

               

        

                <li>
                    <Link to='ContactUs'>Contact Us</Link>
                </li>

            </ul>

           

        </div>
        </div>

        

   
  )
}

export default Header;