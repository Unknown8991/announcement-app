import React from 'react';

const Announcement = (props) => {
    return ( 
        <div className='col-12 announcement-list__item'>
            {props.id}. {props.title} 
        </div>
     );
}
 
export default Announcement;