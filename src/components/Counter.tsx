import {useDispatch, useSelector} from "react-redux";
import {selectFilmAmount} from "@/redux/cart/selector";
import {cartActions} from "@/redux/cart";
import React, {useContext} from "react";
import styles from "./styles/counter.module.css"
import Image from "next/image";
import {CartContext} from "@/app/cart/page";
import minusPic from '../../public/minus.svg';
import plusPic from '../../public/plus.svg';

export default function Counter({ filmId, modalOpen }) {
    const filmAmount = useSelector((state) => selectFilmAmount(state, filmId))
    const dispatch = useDispatch();
    const isInCart = useContext(CartContext);

    let decrement = cartActions.decrement(filmId);
    let increment = cartActions.increment(filmId);

    if (filmAmount === 1 && modalOpen && isInCart) {
        decrement = modalOpen;
    }

    return (
        <div className={styles.counter}>
            <button className={styles.button} disabled={filmAmount === 0} onClick={() => dispatch(decrement)}>
                <Image
                    src={minusPic}
                    alt={'-'}
                    width={12}
                    height={12}
                    loading="lazy"
                />
            </button>
            <span className={styles.text}>{filmAmount}</span>
            <button className={styles.button} disabled={filmAmount === 30} onClick={() => dispatch(increment)}>
                <Image
                    src={plusPic}
                    alt={'+'}
                    width={12}
                    height={12}
                    loading="lazy"
                />
            </button>
        </div>
    );
}