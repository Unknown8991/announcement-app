import React from 'react';
import MyAnnItems from './MyAnnItems';
import ConfirmationAction from './ConfirmationAction';

const MyAnnouncements = (props) => {
 
    return ( 
        <div>
            <MyAnnItems 
                myAnnouncements={props.myAnnouncements}
                handleDeleteAnnouncements={props.handleDeleteAnnouncements}
                
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