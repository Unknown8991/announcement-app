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
                <div className={props.activeSearch ? 'header-block__search--active' : 'header-block__search' }>
                    <input className={props.activeSearch ? 'col-11 search-input--active' : 'col-11 search-input' }
                    
                    placeholder='Wyszukaj' onClick={props.handleActiveSearch} onChange={props.handleChangeForm} type="text" />
                    <div className='col-1 search-input__button'></div>
                </div>
                <div className='header-block'>Filtry</div>
                <div className='header-block' >
                <Link to="/profil" className='header-block--link'>P</Link>
                {/* onClick={props.getUserData} */}
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