import React, {useCallback, useContext, useState} from 'react';
import {FilmInfo} from "@/types";
import Image from 'next/image'
import {useRouter} from "next/navigation";
import styles from './styles/filmCard.module.css'
import classNames from "classnames";
import Counter from "@/components/Counter";
import {CartContext} from "@/app/cart/page";
import DeleteButton from "@/components/DeleteButton";
import Modal from "@/components/Modal";
import {createPortal} from "react-dom";
import {genres} from "@/app/genres";
import altPic from '../../public/photo.svg';

const FilmCard = ({filmInfo}: { filmInfo: FilmInfo }) => {
    const router = useRouter();
    const isInCart = useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = useCallback((isOpen) => !isOpen, [isModalOpen])

    return (
        <div className={classNames(styles.filmCard, 'card')}>
            <Image
                className={styles.image}
                src={filmInfo.posterUrl}
                loading="lazy"
                width={100}
                height={120}
                style={{objectFit: "cover"}}
                alt={altPic}
            />
            <div className={styles.description}>
                <div>
                    <button
                        className={styles.title}
                        type='button'
                        onClick={() => router.push(`film/${filmInfo.id}`)}
                    >{filmInfo.title}</button>
                    <p className={styles.about}>{genres[filmInfo.genre]}</p>
                </div>
                <div className={styles.counter}>
                    {isModalOpen && createPortal(
                        <Modal filmId={filmInfo.id} modalOpen={() => setIsModalOpen(openModal)}/>,
                        document.body
                    )}
                    <Counter filmId={filmInfo.id} modalOpen={() => setIsModalOpen(openModal)}/>
                    {isInCart && <DeleteButton onClickAction={() => setIsModalOpen(openModal)}/>}
                </div>
            </div>
        </div>
    );
};

export default FilmCard;