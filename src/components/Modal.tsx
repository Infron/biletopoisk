import React from 'react';
import {useDispatch} from "react-redux";
import {cartActions} from "@/redux/cart";
import styles from './styles/modal.module.css'
import classNames from "classnames";

const Modal = ({ filmId, modalOpen }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className={styles.modal}>
                <div className={classNames('card', styles.modalCard)}>
                    <h3>Удаление билета</h3>
                    <p>Вы уверены, что хотите удалить билет?</p>
                    <div>
                        <button onClick={() => dispatch(cartActions.resetCount(filmId))}>Да</button>
                        <button onClick={modalOpen}>Нет</button>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Modal;