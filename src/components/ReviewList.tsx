import React from 'react';
import {useGetReviewsQuery} from "@/redux/movieApi";
import ReviewCard from "@/components/ReviewCard";

const ReviewList = ({ filmId }) => {
    const {data, isLoading, error} = useGetReviewsQuery(filmId);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error || !data) {
        return <div>No filmo</div>
    }

    return (
        <div>
            <div>
                {data.map((review) => (
                    <ReviewCard key={review.id} reviewData={review} />
                ))}
            </div>
        </div>
    );
};

export default ReviewList;