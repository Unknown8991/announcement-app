import React from 'react';
import AnnouncementsItems from './AnnouncementsItems';

const UserView = (props) => {
    return ( 
        <>
            <div className='container'>
                <div className='header__user-view'>
                    <div className='header-block'>AN</div>
                    <div className='header-block__search'></div>
                    <div className='header-block'></div>
                    <div className='header-block'></div>
                </div>
            </div>
            <div className='container'>
                <div className='col-12 announcement-list'>

                    <AnnouncementsItems announcementItems={props.announcementItems}/>
                User View
                </div>
            </div>
        </>
     );
}
 
export default UserView
