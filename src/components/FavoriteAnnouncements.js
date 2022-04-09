import React from 'react';
import FavouriteItems from './FavouriteItems';

const FavoriteAnnouncements = (props) => {

    return ( 
        <div>
            <FavouriteItems 
                myFavourites={props.myFavourites}
                handleRemoveFromWatched={props.handleRemoveFromWatched}
                handleShowDetails={props.handleShowDetails}
            />
        </div>
     );
}
 
export default FavoriteAnnouncements;