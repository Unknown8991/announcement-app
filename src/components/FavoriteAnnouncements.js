import React from 'react';
import MyAnnItems from './MyAnnItems';

const FavoriteAnnouncements = (props) => {
    return ( 
        <div>

            <MyAnnItems
                announcementItems={props.announcementItems}
            />
        </div>
     );
}
 
export default FavoriteAnnouncements;