import React from 'react';
import Image from "next/image";
import styles from "@/components/styles/filmCard.module.css";
import Counter from "@/components/Counter";

const FilmAbout = ({ filmInfo }) => {
    return (
        <div className='card'>
            <Image
                className={styles.image}
                src={filmInfo.posterUrl}
                loading="lazy"
                width={100}
                height={120}
                style={{objectFit: "cover"}}
                alt='Poster'
            />
            <div>
                <h2>{filmInfo.title}</h2>
                <p>Жанр: {filmInfo.genre}</p>
                <p>Год выпуска: {filmInfo.releaseYear}</p>
                <p>Рейтинг: {filmInfo.rating}</p>
                <p>Режиссер: {filmInfo.director}</p>
                <h3>Описание</h3>
                <p>{filmInfo.description}</p>
            </div>
            <div>
                <Counter filmId={filmInfo.id} />
            </div>
        </div>
    );
};

export default FilmAbout;