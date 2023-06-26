'use client'

import React from "react";
import {useGetMovieQuery} from "@/redux/movieApi";

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
            {`Film = ${data.title}`}
        </div>
    );
}