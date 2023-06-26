import React from 'react';
import {useSelector} from "react-redux";
import {selectTotalTicketsAmount} from "@/redux/cart/selector";
import Image from "next/image";
import cartPic from '../../public/basket.svg';
import styles from './styles/cartMiniature.module.css';

const CartMiniature = () => {
    const totalAmount = useSelector((state) => selectTotalTicketsAmount(state))

    return (
        <div className={styles.cart}>
            {totalAmount !== 0 &&
                <div className={styles.text}>
                    {<span>{totalAmount}</span>}
                </div>
            }
            <Image
                src={cartPic}
                alt={totalAmount + ' Корзина'}
                width={32}
                height={32}
            />
        </div>
    );
};

export default CartMiniature;