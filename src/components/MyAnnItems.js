import React from 'react';
import MyItem from './MyItem';
const MyAnnItems = (props) => {
        const myAnnouncements = props.announcementItems.map(myAnnouncement =>(
    <MyItem 
        key={myAnnouncement.announcement_id}
        id={myAnnouncement.announcement_id}
        title={myAnnouncement.title}
        description={myAnnouncement.description}
        location={myAnnouncement.location}
    />
    ) )
    return ( 
        <div>
           {myAnnouncements}
        </div>
     );
}
 
export default MyAnnItems;