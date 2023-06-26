import React from 'react';
import {useSearchParams} from "next/navigation";
import {useGetCinemasQuery} from "@/redux/movieApi";

export const FilterContext = React.createContext(undefined);

const FilterProvider = ({children}) => {
    const searchParams = useSearchParams();
    const {data, isLoading, error} = useGetCinemasQuery();

    let cinema = undefined;
    if (data) {
        cinema = data.find(el => el.id === searchParams.get('cinema'));
    }

    return (
        <FilterContext.Provider value={cinema ? cinema.movieIds : undefined}>
            {children}
        </FilterContext.Provider>
    );
};

export default FilterProvider;