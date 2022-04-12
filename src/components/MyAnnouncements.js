import React from 'react';
import MyAnnItems from './MyAnnItems';
import ConfirmationAction from './ConfirmationAction';

const MyAnnouncements = (props) => {
 
    return ( 
        <div>
            <MyAnnItems 
                myAnnouncements={props.myAnnouncements}
                handleDeleteAnnouncements={props.handleDeleteAnnouncements}
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
                // adddate={}
            />
            {props.showModalDelete ?
                <ConfirmationAction
                    handleConfirmDeleteAnnouncement={props.handleConfirmDeleteAnnouncement}
                    handleCloseDeleteModal={props.handleCloseDeleteModal}
                />
            : null}

        </div>
     );
}
 
export default MyAnnouncements;