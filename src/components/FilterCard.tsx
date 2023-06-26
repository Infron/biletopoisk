import React from 'react';
import styles from './styles/filter.module.css'
import classNames from "classnames";
import InputForm from "@/components/InputForm";
import DropDownImport from "@/components/DropDownImport";
import {genres} from "@/app/genres";
import {useGetCinemasQuery} from "@/redux/movieApi";

const FilterCard = () => {
    const {data, isLoading, error} = useGetCinemasQuery();

    const cinemas = {};

    if (data) {
        for (const cinema of data) {
            cinemas[cinema.id] = cinema.name;
        }
    }

    return (
        <div className={classNames('card', styles.filter)}>
            <h3 style={{marginBottom: 16}}>Фильтры поиска</h3>
            <InputForm title='Название' name='title'/>
            <DropDownImport title='Жанр' name='genre' values={genres}/>
            {!isLoading && !error && <DropDownImport title='Кинотеатр' name='cinema' values={cinemas}/>}
        </div>
    );
};

export default FilterCard;