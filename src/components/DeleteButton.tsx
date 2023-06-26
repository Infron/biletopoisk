import React from 'react';
import {useDispatch} from "react-redux";
import Image from "next/image";
import closePic from 'C:/Users/infro/WebstormProjects/biletopoisk/public/close.svg';

const DeleteButton = ({ onClickAction }) => {
    const dispatch = useDispatch();

    return (
        <button type={"button"} onClick={() => dispatch(onClickAction)}>
            <Image src={closePic} alt='Закрыть' width={20} height={20}/>
        </button>
    );
};

export default DeleteButton;