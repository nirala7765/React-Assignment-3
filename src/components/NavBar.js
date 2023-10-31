import React from 'react'
import '../styles/NavBar.css';
import image1 from '../images/Showlogo.png'
import {Link} from 'react-router-dom';
import {AiFillHome }  from 'react-icons/ai'
import {BiCameraMovie} from 'react-icons/bi'
import {FaTheaterMasks} from 'react-icons/fa'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {AiFillContacts} from 'react-icons/ai'






function NavBar() {
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

        <div className='btndiv'>
            <button className='signupbtn'>SignUp</button>

        </div>

       



        
       

    </div>

    
    
   

  )
}

export default NavBar;