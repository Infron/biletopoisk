import React from 'react';
import styles from "@/components/styles/filmCard.module.css";
import Image from "next/image";

const ReviewCard = ({ reviewData }) => {
    return (
        <div className='card'>
            <Image
                className={styles.image}
                src='/page1'
                loading="lazy"
                width={100}
                height={120}
                style={{objectFit: "cover"}}
                alt='Poster'
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