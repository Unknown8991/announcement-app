import React from 'react';
import Announcement from './Announcement';

const AnnouncementsItems = (props) => {
    const announcements = props.announcementItems.map(announcement =>(
    <Announcement 
        key={announcement.announcement_id}
        id={announcement.announcement_id}
        title={announcement.title}
        description={announcement.description}
        location={announcement.location}
    />
    ) )
    return ( 
        <div>
            {announcements}
        </div>
     );
}
 
export default AnnouncementsItems;