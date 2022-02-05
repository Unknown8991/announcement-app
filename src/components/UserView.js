import React from 'react';
import AnnouncementsItems from './AnnouncementsItems';
import ModalAddAnnouncement from './ModalAddAnnouncement';

const UserView = (props) => {
    return ( 
        <>

            {/* {props.addAnnouncement ? <ModalAddAnnouncement/> : null} */}
            <div className='container '>
            {props.addAnnouncement ? <ModalAddAnnouncement/> : null}
                <div className='col-12 announcement-list'>
                    <AnnouncementsItems announcementItems={props.announcementItems}/>
                </div>
            </div>
  
            <div className='button-add-announcement'>
                <button className='button-add-announcement__item' addAnnouncement={props.addAnnouncement} onClick={props.handleAddAnnouncement}>Dodaj</button>
            </div>
            {/* {props.addAnnouncement ? <ModalAddAnnouncement/> : null} */}
            {/* <ModalAddAnnouncement/> */}
        </>
     );
}
 
export default UserView
