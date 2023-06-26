import React, {useState} from 'react';
import InputForm from "@/components/InputForm";
import {genres} from "@/app/genres";

const DropDownImport = ({ title, name, values }) => {
    const [currentGenre, setCurrentGenre] = useState();

    return (
        <div>
            <InputForm title={title} name={name} initialValue={currentGenre}/>
            <div>
                {values.map((genre) => <button onClick={() => setCurrentGenre(() => genre)}>{genres[genre]}</button>)}
            </div>
        </div>
    );
};

export default DropDownImport;