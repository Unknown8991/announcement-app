import React from 'react';
import Announcement from './Announcement';

const AnnouncementsItems = (props) => {
    const announcements = props.announcementItems.map(announcement =>(
    <Announcement 
        key={announcement.id}
        id={announcement.id}
        title={announcement.title}
    />
    ) )
    return ( 
        <div>
            {announcements}
        </div>
     );
}
 
export default AnnouncementsItems;