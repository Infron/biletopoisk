'use client'

import React from "react";
import FilmList from "@/components/FilmList";
import FilterCard from "@/components/FilterCard";

export default function Main() {
    return (
        <div className='main'>
            <FilterCard />
            <FilmList />
        </div>
    );
}
