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
                    <div className='col-1 search-input__button' onClick={props.handleActiveFilters}>
                        <i className="fa fa-filter icons-center" aria-hidden="true"></i>    
                    </div>
                </div>
                {/* <div className='header-block'>Filtry</div> */}
                <div className='header-block' >
                <Link to="/profil" className='header-block--link icons-center'>
                    <i className="fa fa-user icons-center" aria-hidden="true"></i>
                </Link>

                {/* onClick={props.getUserData} */}
                </div>
                <div className='header-block' onClick={props.handleShowSkeletonNotification}>
                    {/* N */}
                    <i className="fa fa-bell-o icons-center" aria-hidden="true"></i>
                </div>
                
            </div> 
                    {props.skeletonNotification ? 
                        <div className='col-12 container notification-skeleton'>
                            <div className='notification-skeleton__object'>
                                <div className='col-12 notification-skeleton__center'>

                                <div className='notification-skeleton__circle'>
                                    <div className='symbol'>
                                        {props.userFirstName.substr(0,1)}
                                    </div>
                                </div>
                                </div>
                                <div className='notification-skeleton__text'>{props.userLogin}</div>
                                <div className='notification-skeleton__text--name'>{props.userFirstName} {props.userSurname}</div>
                                <div className='notification-skeleton__description'>
                                    W okolicach, które Cię interesują pojawiło się {props.countNotify} nowych ogłoszeń!   
                                </div>
                                <Link to="/" className='logout'>
                                    <button onClick={props.handleLogOut} className='logout'>Wyloguj</button>
                                </Link>
                            </div>
                        </div> 
                        : 
                        null
                    }
               
            {/* <div className='header__user-view'>
                <div className='header-block'>
                <Link to="/userView" className='header-block--link'>AN</Link>
                </div>
            </div> */}
           
        <div className={props.isFilterActive ? 'filter-bar__active' : 'filter-bar'}>
            <div className='col-12'>
                <div className='filter-bar__title'>
                    Lokalizacja
                </div>
                <div className='container filter-bar__row'>
                    <div className={props.activeFilter === 'Katowice' && props.allLocalizationFilter === true ? 'filter-bar__items--active' : 'filter-bar__items'} id='1' name="Katowice" onClick={props.handleVeryficationActiveLocalization}>Katowice</div>
                    <div className={props.activeFilter === 'Sosnowiec' && props.allLocalizationFilter === true ? 'filter-bar__items--active' : 'filter-bar__items'} id='2' name="Sosnowiec" onClick={props.handleVeryficationActiveLocalization}>Sosnowiec</div>
                    <div className={props.activeFilter === 'Tychy' && props.allLocalizationFilter === true ? 'filter-bar__items--active' : 'filter-bar__items'} id='3' name="Tychy" onClick={props.handleVeryficationActiveLocalization}>Tychy</div>
                    <div className={props.activeFilter === '' && props.allLocalizationFilter === true ? 'filter-bar__items--active' : 'filter-bar__items'} id='4' name="Brak" onClick={props.handleVeryficationActiveLocalization}>Brak</div> 
                    <div className= {props.allLocalizationFilter === false ? 'filter-bar__items--active' : 'filter-bar__items'} id='6' name="Wszyscy" onClick={props.handleVeryficationActiveLocalization}>Wszystkie</div> 
                     
                </div>
                <div className='container filter-bar__end'>
                    <div className='filter-bar__items--clean' id="5" onClick={props.handleVeryficationActiveLocalization}>Wyczyść filtry</div>
                </div>

            </div>
        </div>
        </div>


  

        </>
        );
 }
  
 export default Header;