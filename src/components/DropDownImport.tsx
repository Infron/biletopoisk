import React, {useCallback, useEffect, useState} from 'react';
import {useSearchParams, useRouter, usePathname} from "next/navigation";
import styles from './styles/dropDownImport.module.css';
import {createPortal} from "react-dom";
import classNames from "classnames";

const DropDownImport = ({title, name, values}) => {
    const [currentChoice, setCurrentChoice] = useState('');
    const [dropDownOpen, setDropDownOpen] = useState(false);
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
        router.push(pathname + '?' + createQueryString(name, currentChoice))
    }, [currentChoice]);

    return (
        <div>
            <p>{title}</p>
            <input
                className='input'
                type='text'
                value={values[currentChoice] || ''}
                onClick={() => setDropDownOpen(() => true)}
            />
            {dropDownOpen && createPortal(
                <div className={classNames('card', styles.modal)} onClick={() => setDropDownOpen(() => false)}>
                    {valuesPairs.map(el =>
                        <button className={styles.button} key={el[0]} onClick={() => setCurrentChoice(() => el[0])}>
                            {el[1]}
                        </button>
                    )}
                    <button className={styles.button} onClick={() => setCurrentChoice('')}>
                        Не выбран
                    </button>
                </div>, document.body
            )}
        </div>
    );
};

export default DropDownImport;