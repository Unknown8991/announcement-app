import React from 'react';
import { Link } from 'react-router-dom';

 const Header = (props) => {
     return ( 
        <>
       
            <div className='container'>
           
             <div className='header__user-view'>
                <div className='header-block'>
                <Link to="/userView" className='header-block--link'>AN</Link>
                </div>
                <div className='header-block__search'></div>
                <div className='header-block'>Filtry</div>
                <div className='header-block'>
                <Link to="/profil" className='header-block--link'>P</Link>
                </div>
            </div> 
               
            {/* <div className='header__user-view'>
                <div className='header-block'>
                <Link to="/userView" className='header-block--link'>AN</Link>
                </div>
            </div> */}
           
        </div>
  

        </>
        );
 }
  
 export default Header;