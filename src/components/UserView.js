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
                        handleCloseDetails={props.handleCloseDetails}
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
