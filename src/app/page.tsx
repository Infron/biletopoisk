'use client'

import React from "react";
import FilmList from "@/components/FilmList";
import FilterCard from "@/components/FilterCard";
import FilterProvider from "@/components/FilterProvider";

export default function Main() {
    return (
        <div className='main'>
            <FilterCard />
            <FilterProvider>
                <FilmList />
            </FilterProvider>
        </div>
    );
}
