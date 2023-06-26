import React from 'react';
import {useGetMoviesQuery} from "@/redux/movieApi";
import FilmCard from "@/components/FilmCard";

const FilmList = ({ idsForView }) => {
    const {data, isLoading, error} = useGetMoviesQuery();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error || !data) {
        return <div>No filmo</div>
    }

    return (
        <div>
            {data.map((film) => {
                if (idsForView) {
                    return idsForView.includes(film.id)
                        ? <FilmCard key={film.id} filmInfo={film} />
                        : null
                } else {
                    return <FilmCard key={film.id} filmInfo={film} />
                }
            })}
        </div>
    );
};

export default FilmList;