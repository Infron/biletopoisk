import React from 'react';
import {useGetMoviesQuery} from "@/redux/movieApi";
import FilmCard from "@/components/FilmCard";
import styles from './styles/filmList.module.css';
import {useSearchParams} from "next/navigation";

const FilmList = ({ idsForView }) => {
    const {data, isLoading, error} = useGetMoviesQuery();
    const searchParams = useSearchParams()!;

    const filters = {
        title: searchParams.get('title') || '',
        cinemaId: searchParams.get('cinema') || '',
        genre: searchParams.get('genre') || '',
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error || !data) {
        return <div>No filmo</div>
    }

    return (
        <div className={styles.list}>
            {data.map((film) => {
                if (idsForView) {
                    return idsForView.includes(film.id)
                        ? <FilmCard key={film.id} filmInfo={film} />
                        : null
                } else if (
                    film.title.startsWith(filters.title) &&
                    film.genre.startsWith(filters.genre)
                ) {
                    return <FilmCard key={film.id} filmInfo={film} />
                }
            })}
        </div>
    );
};

export default FilmList;