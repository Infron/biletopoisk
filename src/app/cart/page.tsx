'use client'

import React from "react";
import {useSelector} from "react-redux";
import { selectStoredFilms, selectTotalTicketsAmount} from "@/redux/cart/selector";
import FilmList from "@/components/FilmList";

export const CartContext = React.createContext(false)

export default function Cart() {
    const addedFilmsIds = useSelector((state) => selectStoredFilms(state))
    const totalAmount = useSelector((state) => selectTotalTicketsAmount(state))

    return (
        <CartContext.Provider value={true}>
            <div>
                <FilmList idsForView={addedFilmsIds} />
                <section>
                    <span>Итого билетов:</span>
                    <span>{totalAmount}</span>
                </section>
            </div>
        </CartContext.Provider>
    );
}