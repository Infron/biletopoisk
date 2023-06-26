'use client'

import React from "react";
import {useGetMovieQuery} from "@/redux/movieApi";
import FilmAbout from "@/components/FilmAbout";
import ReviewList from "@/components/ReviewList";

export default function Film({ params }: { params: { id: number }}) {
    const {data, isLoading, error} = useGetMovieQuery(params.id);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error || !data) {
        return <div>No filmo</div>
    }

    return (
        <div>
            <FilmAbout filmInfo={data}/>
            <ReviewList filmId={data.id}/>
        </div>
    );
}