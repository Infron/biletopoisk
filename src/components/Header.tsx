'use client'

import React from 'react';
import Link from "next/link";
import Bar from "@/components/Bar";
import styles from './styles/header.module.css';
import CartMiniature from "@/components/CartMiniature";

const Header = () => {
    return (
        <header className={ styles.header }>
            <Bar>
                <Link href='/'>Билетопоиск</Link>
                <Link href='cart'>
                    <CartMiniature />
                </Link>
            </Bar>
        </header>
    );
};

export default Header;