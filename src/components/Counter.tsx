import {useDispatch, useSelector} from "react-redux";
import {selectFilmAmount} from "@/redux/cart/selector";
import {cartActions} from "@/redux/cart";
import React from "react";

export default function Counter({ filmId, modalOpen }) {
    const filmAmount = useSelector((state) => selectFilmAmount(state, filmId))
    const dispatch = useDispatch();
    let decrement = cartActions.decrement(filmId);
    let increment = cartActions.increment(filmId);

    if (filmAmount === 1 && modalOpen) {
        decrement = modalOpen;
    }

    return (
        <div>
            <button onClick={() => dispatch(decrement)}>-</button>
            {filmAmount}
            <button onClick={() => dispatch(increment)}>+</button>
        </div>
    );
}