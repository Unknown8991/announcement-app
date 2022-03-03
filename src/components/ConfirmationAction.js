import React from 'react';

const ConfirmationAction = (props) => {
    return ( 
        <div className='confirmation-action'>
            <div className='confirmation-action__header'>Czy na pewno chcesz usunąć ogłoszenie?</div>
            <div className='col-12 confirmation-action__buttons'>
                <button className='confirmation-action__buttons--yes' onClick={props.handleConfirmDeleteAnnouncement}>TAK</button>
                <button className='confirmation-action__buttons--no' onClick={props.handleCloseDeleteModal}>NIE</button>
            </div>
        </div>
     );
}
 
export default ConfirmationAction;