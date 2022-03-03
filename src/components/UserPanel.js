import React from 'react';
import Header from './Header';
import MyProfilData from './MyProfilData';
import MyAnnouncements from './MyAnnouncements';
import FavoriteAnnouncements from './FavoriteAnnouncements';


const UserPanel = (props) => {
    return ( 
        <>
        <Header />
        {/* getUserData={props.getUserData} */}
        <div className='container' >
            {/* <div className=''>Panel użytkownika</div> */}
            <div className='col-12 profile-box '>
                <div className='col-12 profile-box__header'>Ustawienia</div>
                <div className='profile-box__composition'>
                    <div className='col-3'> 
                        <div>
                            <button name="one" className={props.isActiveOptionOne ? 'col-10 profile-button profile-button--active':'col-10 profile-button'} onClick={props.changeActiveProfilOption}>
                                Dane profilu
                            </button>
                        </div>
                        <div>
                            <button name="two" className={props.isActiveOptionTwo ? 'col-10 profile-button profile-button--active':'col-10 profile-button'} onClick={props.changeActiveProfilOption}>
                                Moje ogłoszenia
                            </button>
                        </div>
                        <div>
                            <button name="three" className={props.isActiveOptionThree ? 'col-10 profile-button profile-button--active':'col-10 profile-button'} onClick={props.changeActiveProfilOption}>
                                Obserwowane ogłoszenia
                            </button>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='profile-box__view'>
                            {props.isActiveOptionOne ? 
                            <MyProfilData 
                                userData={props.userData}
                                userFirstName={props.userFirstName}
                                userSurname={props.userSurname}
                                userLogin={props.userLogin}
                                userPassword={props.userPassword}
                                userNumberPhone={props.userNumberPhone}
                            /> : null}
                            {props.isActiveOptionTwo ? 
                                <MyAnnouncements
                                    myAnnouncements={props.myAnnouncements}
                                    showModalDelete={props.showModalDelete}
                                    isConfirmDelete={props.isConfirmDelete}
                                    handleDeleteAnnouncements={props.handleDeleteAnnouncements}
                                    handleConfirmDeleteAnnouncement={props.handleConfirmDeleteAnnouncement}
                                    handleCloseDeleteModal={props.handleCloseDeleteModal}
                                /> : null}
                            {props.isActiveOptionThree ? 
                                <FavoriteAnnouncements
                                    myFavourites={props.myFavourites}
                                /> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default UserPanel;