import React, {useCallback, useEffect, useState} from 'react';
import {useSearchParams, useRouter, usePathname} from "next/navigation";


const DropDownImport = ({title, name, values}) => {
    const [currentChoice, setCurrentChoice] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const valuesPairs = Object.entries(values);

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    )

    useEffect(() => {
        if (currentChoice !== '') {
            router.push(pathname + '?' + createQueryString(name, currentChoice))
        }
    }, [currentChoice]);

    return (
        <div>
            <p>{title}</p>
            <input disabled={true} type='text' value={values[currentChoice]}/>
            <div>
                {valuesPairs.map(el =>
                    <button key={el[0]} onClick={() => setCurrentChoice(() => el[0])}>
                        {el[1]}
                    </button>
                )}
            </div>
        </div>
    );
};

export default DropDownImport;