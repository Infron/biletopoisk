import React from 'react';

interface FilmInfo {
    title: string,
    posterUrl: string,
    releaseYear: number,
    description: string,
    genre: string,
    id: string,
    rating: number,
    director: string,
    reviewIds: [string],

}

const FilmCard = ( filmInfo: FilmInfo ) => {
    return (
        <div>
            <Image
                src={filmInfo.posterUrl}

            />
        </div>
    );
};

export default FilmCard;