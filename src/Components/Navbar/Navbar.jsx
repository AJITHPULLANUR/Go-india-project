import React from 'react'
import { FaSearch } from 'react-icons/fa';
import Firstbody from '../FirstBar/Icons/Firstbody';


const Navbar = () => {
  return (
    <div>
        <div className='navbarfull'>
            <img width="100px" height="60px" src="https://www.goindiastocks.com/Content/assets/images/seoshare.PNG" className="goindia" />
            <div className='inputfull'>

            <input className='inputbar' type="text"  />
           
           <div className='icon'>
           <FaSearch />
            </div> 

            </div>
            
            <div className='buttonnav'>
            <span className='contact' >Contact Us</span>
            <input className='navbutton' type="button" value="Sign Up" />
            <input className='navbutton' type="button" value="Sign In" />
            </div>
           



        </div>

        <div className='navtrade'>
            <span className='navwhite'>.50</span>
            <span className='navred'>0.21%</span>
            <span className='navwhite'>NIFTY BANK</span>
            <span className='navwhite'>41,559.40</span>
            <span className='navgreen'>0.01%</span>
            <span className='navwhite'>BAJFINANCE</span>
            <span className='navwhite'>6,435.50</span>
            <span className='navred'>0.30%</span>
            <span className='navwhite'>BHARTIARTL</span>
            <span className='navwhite'>771.95</span>
            <span className='navgreen'>0.69%</span>
            <span className='navwhite'>HDFCBANK</span>
            <span className='navwhite'>1,657.10</span>
            <span className='navgreen'>0.40%</span>
            <span className='navwhite'>HINDUNILVR</span>
            <span className='navwhite'>2,577.50</span>
            <span className='navred'>0.36%</span>
            <span className='navwhite'>INDIGO</span>
            <span className='navwhite'>2.043.50</span>
        </div>
{/* <Firstbody/> */}
    </div>
  )
}

export default Navbar