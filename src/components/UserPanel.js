import React from 'react';
// import Header from './Header';
import HeaderForUserPanel from './HeaderForUserPanel';
import MyProfilData from './MyProfilData';
import MyAnnouncements from './MyAnnouncements';
import FavoriteAnnouncements from './FavoriteAnnouncements';


const UserPanel = (props) => {
    return ( 
        <>
        <HeaderForUserPanel />
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
                                isEditAccount={props.isEditAccount}
                                isShowPassword={props.isShowPassword}
                                isEditInfo={props.isEditInfo}
                                errorEditPassword={props.errorEditPassword}
                                handleRunEditAccountData={props.handleRunEditAccountData}
                                handleCloseEditAccountData={props.handleCloseEditAccountData}
                                handleEditAccountData={props.handleEditAccountData}
                                handleSendEditAccountData={props.handleSendEditAccountData}
                                handleShowPassword={props.handleShowPassword}
                            /> : null}
                            {props.isActiveOptionTwo ? 
                                <MyAnnouncements
                                    myAnnouncements={props.myAnnouncements}
                                    showModalDelete={props.showModalDelete}
                                    isConfirmDelete={props.isConfirmDelete}
                                    handleDeleteAnnouncements={props.handleDeleteAnnouncements}
                                    handleConfirmDeleteAnnouncement={props.handleConfirmDeleteAnnouncement}
                                    handleCloseDeleteModal={props.handleCloseDeleteModal}
                                    handleEditAnnouncement={props.handleEditAnnouncement}
                                    isEditAnnouncement={props.isEditAnnouncement}
                                    handleCloseEditAnnouncement={props.handleCloseEditAnnouncement}
                                    eUserId={props.eUserId}
                                    eTitleAnnouncement={props.eTitleAnnouncement}
                                    eDescriptionAnnouncement={props.eDescriptionAnnouncement}
                                    eCityAnnouncement={props.eCityAnnouncement}
                                    eStreetAnnouncement={props.eStreetAnnouncement}
                                    eFleetAnnouncement={props.eFleetAnnouncement}
                                    eBldNumberAnnouncement={props.eBldNumberAnnouncement}
                                    eCodeAnnouncement={props.eCodeAnnouncement}
                                    phoneNumber={props.phoneNumber}
                                    handleChangeEditAnnouncement={props.handleChangeEditAnnouncement}
                                    handleSendEditAnnouncement={props.handleSendEditAnnouncement}
                                    // 
                                    title={props.title}
                                    description={props.description}
                                    city={props.city}
                                    street={props.street}
                                    bldNumber={props.bldNumber}
                                    fleet={props.fleet}
                                    code={props.code}
                                    isEditInfo={props.isEditInfo}
                                /> : null}
                            {props.isActiveOptionThree ? 
                                <FavoriteAnnouncements
                                    myFavourites={props.myFavourites}
                                    handleRemoveFromWatched={props.handleRemoveFromWatched}
                                    handleShowDetails={props.handleShowDetails}
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