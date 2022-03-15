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
                    <div className='col-1 search-input__button' onClick={props.handleActiveFilters}>F</div>
                </div>
                {/* <div className='header-block'>Filtry</div> */}
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
           
        <div className={props.isFilterActive ? 'filter-bar__active' : 'filter-bar'}>
            <div className='col-12'>
                <div className='filter-bar__title'>
                    Lokalizacja
                </div>
                <div className='container filter-bar__row'>
                    <div className={props.activeFilter === 'Katowice' ? 'filter-bar__items--active' : 'filter-bar__items'} id='1' name="Katowice" onClick={props.handleVeryficationActiveLocalization}>Katowice</div>
                    <div className={props.activeFilter === 'Sosnowiec' ? 'filter-bar__items--active' : 'filter-bar__items'} id='2' name="Sosnowiec" onClick={props.handleVeryficationActiveLocalization}>Sosnowiec</div>
                    <div className={props.activeFilter === 'Tychy' ? 'filter-bar__items--active' : 'filter-bar__items'} id='3' name="Tychy" onClick={props.handleVeryficationActiveLocalization}>Tychy</div>
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