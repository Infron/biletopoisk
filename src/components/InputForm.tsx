import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {usePathname, useSearchParams} from "next/navigation";
import {useRouter} from "next/navigation";

function useDebounce<T>(value: T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
}

const InputForm = ({title, name}: { title: string, name: string }) => {
    const [value, setValue] = useState<string>('');
    const debouncedValue = useDebounce<string>(value, 500);
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    useEffect(() => {
        if (value !== '') {
            router.push(pathname + '?' + createQueryString(name, debouncedValue))
        }
    }, [debouncedValue])

    return (
        <div>
            <p>{title}</p>
            <input className='input' type='text' value={value || ''} onChange={handleChange}/>
        </div>
    )
};

export default InputForm;