import React from 'react';
import MyAnnItems from './MyAnnItems';


const MyAnnouncements = (props) => {
 
    return ( 
        <div>
            <MyAnnItems 
                myAnnouncements={props.myAnnouncements}
                handleDeleteAnnouncements={props.handleDeleteAnnouncements}
            />
        </div>
     );
}
 
export default MyAnnouncements;