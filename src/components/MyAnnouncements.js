import React from 'react';
import MyAnnItems from './MyAnnItems';


const MyAnnouncements = (props) => {
 
    return ( 
        <div>
            <MyAnnItems 
                myAnnouncements={props.myAnnouncements}
            />
        </div>
     );
}
 
export default MyAnnouncements;