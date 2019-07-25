import React from 'react';

const Artist = ({ artist }) => {
    if(!artist) return null;

    const { images, name, followers, genres } = artist;


return(
    <div className='Artist-text'>
        <h4>{name}</h4>
        <p> {followers.total} followers </p>
        <p>{genres.join(',')}</p>
        <img src={images[1] && images[1].url}
             alt='artist-profile'
             style={{
                 width: 200,
                 height: 200,
                 borderRadius: 100
             }} 
        />
    </div>
    )
}

export default Artist;
