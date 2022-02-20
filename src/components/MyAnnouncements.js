import React from 'react';
import MyAnnItems from './MyAnnItems';


const MyAnnouncements = (props) => {
 
    return ( 
        <div>
            <MyAnnItems 
                announcementItems={props.announcementItems}
            />
        </div>
     );
}
 
export default MyAnnouncements;