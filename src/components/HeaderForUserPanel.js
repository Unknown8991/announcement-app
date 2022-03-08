import React from 'react';
import { Link } from 'react-router-dom';

const HeaderForUserPanel = (props) => {
    return ( 

        <div className='container'>
           
        <div className='header__user-view'>
           <div className='header-block'>
           <Link to="/userView" className='header-block--link'>AN</Link>
           </div>

           <div className='header-block' >
           <Link to="/profil" className='header-block--link'>P</Link>
           {/* onClick={props.getUserData} */}
           </div>
       </div> 
      
   </div>
     );
}
 
export default HeaderForUserPanel;