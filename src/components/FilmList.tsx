import React, {useContext} from 'react';
import {useGetMoviesQuery} from "@/redux/movieApi";
import FilmCard from "@/components/FilmCard";
import styles from './styles/filmList.module.css';
import {useSearchParams} from "next/navigation";
import {FilterContext} from "@/components/FilterProvider";

const FilmList = ({idsForView}) => {
    const searchParams = useSearchParams()!;
    const filteredIds = useContext(FilterContext);

    const filters = {
        title: searchParams.get('title') || '',
        genre: searchParams.get('genre') || '',
    }

    const {data, isLoading, error} = useGetMoviesQuery();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error || !data) {
        return <div>No filmo</div>
    }

    let films = data;

    if (filteredIds) {
        films = films.filter(el => filteredIds.includes(el.id));
    }

    return (
        <div className={styles.list}>
            {films.map((film) => {
                if (idsForView) {
                    return idsForView.includes(film.id)
                        ? <FilmCard key={film.id} filmInfo={film}/>
                        : null
                } else if (
                    film.title.startsWith(filters.title) &&
                    film.genre.startsWith(filters.genre)
                ) {
                    return <FilmCard key={film.id} filmInfo={film}/>
                }
            })}
        </div>
    );
};

export default FilmList;