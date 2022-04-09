import React from 'react';
import Header from './Header';
import AnnouncementsItems from './AnnouncementsItems';
import ModalAddAnnouncement from './ModalAddAnnouncement';
import ModalStatementAddAnnouncement from './ModalStatementAddAnnouncement';

const UserView = (props) => {
    return ( 
        <>
        <Header  
            fullHeader={props.isCorrectLogin} 
            handleChangeForm={props.handleChangeForm}
            activeSearch={props.activeSearch}
            handleActiveSearch={props.handleActiveSearch}
            handleActiveFilters={props.handleActiveFilters}
            isFilterActive={props.isFilterActive}
            activeFilter={props.activeFilter}
            allLocalizationFilter={props.allLocalizationFilter}
            skeletonNotification={props.skeletonNotification}
            handleVeryficationActiveLocalization={props.handleVeryficationActiveLocalization}
            handleShowSkeletonNotification={props.handleShowSkeletonNotification}
            userFirstName={props.userFirstName}
            userSurname={props.userSurname}
            userLogin={props.userLogin}
            countNotify={props.countNotify}
            handleLogOut={props.handleLogOut}
        />
            {props.statementAddAnnouncement ? 
            <ModalStatementAddAnnouncement />
            :
            null
            }
            {/* {props.addAnnouncement ? <ModalAddAnnouncement/> : null} */}
            <div className='container '>
            {props.addAnnouncement ? <ModalAddAnnouncement 
                isFormAnnouncementCorrect={props.isFormAnnouncementCorrect}
                handleInputAnnouncement={props.handleInputAnnouncement}
                handleSendAnnouncement={props.handleSendAnnouncement}
                handleUpdateStateAnnouncementForm={props.handleUpdateStateAnnouncementForm}
                handleCloseForm={props.handleCloseForm}
                isErrorAnn={props.isErrorAnn}
                errorAnn={props.errorAnn}
                /> : null}
                <div className='col-12 announcement-list'>
                    <AnnouncementsItems 
                        searchText={props.searchText} 
                        handleAddToFavourites={props.handleAddToFavourites}
                        announcementItems={props.announcementItems}
                        handleShowDetails={props.handleShowDetails}
                        isShowDetails={props.isShowDetails}
                        dAnnouncementId={props.dAnnouncementId}
                        dDescriptionAnnnouncement={props.dDescriptionAnnnouncement}
                        dTitleAnnnouncement={props.dTitleAnnnouncement}
                        dEndDat={props.dEndDat}
                        dLocation={props.dLocation}
                        dphoneNumber={props.dphoneNumber}
                        photo={props.photo}
                        handleCloseDetails={props.handleCloseDetails}
                        isWatched={props.isWatched}
                        watched={props.watched}
                        activeFilter={props.activeFilter}
                        isFilterActive={props.isFilterActive}
                        allLocalizationFilter={props.allLocalizationFilter}
                        isUndefined={props.isUndefined}
                    />
                </div>
            </div>
  
            <div className='button-add-announcement'>
                <button className='button-add-announcement__item'  onClick={props.handleAddAnnouncement}>Dodaj</button>
            </div>
            {/* {props.addAnnouncement ? <ModalAddAnnouncement/> : null} */}
            {/* <ModalAddAnnouncement/> */}
        </>
     );
}
 
export default UserView
