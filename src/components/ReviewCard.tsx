import React from 'react';
import styles from "@/components/styles/filmCard.module.css";
import Image from "next/image";
import altPic from '../../public/photo.svg';

const ReviewCard = ({ reviewData }) => {
    return (
        <div className='card'>
            <Image
                className={styles.image}
                src={altPic}
                loading="lazy"
                width={100}
                height={120}
                style={{objectFit: "cover"}}
                alt={altPic}
            />
            <div>
                <h3>{reviewData.name}</h3>
                <p>{reviewData.text}</p>
            </div>
            <div>
                <p>Оценка: {reviewData.rating}</p>
            </div>
        </div>
    );
};

export default ReviewCard;