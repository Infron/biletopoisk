'use client'

import React from 'react';
import styles from './styles/filter.module.css'
import classNames from "classnames";
import InputForm from "@/components/InputForm";
import DropDownImport from "@/components/DropDownImport";
import {genres} from "@/app/genres";

const FilterCard = () => {
    return (
        <div className={classNames('card', styles.filter)}>
            <h3>Фильтры поиска</h3>
            <InputForm title='Название' name='title'/>
            {
                //<DropDownImport title='Жанр' name='genre' values={Object.keys(genres)}/>
            }
        </div>
    );
};

export default FilterCard;