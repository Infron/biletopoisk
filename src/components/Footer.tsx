import React from 'react';
import Link from "next/link";
import Bar from "@/components/Bar";
import styles from './styles/footer.module.css';

const Footer = () => {
    return (
        <footer className={ styles.footer }>
            <Bar>
                <Link href='faq'>Вопросы-ответы</Link>
                <Link href='about'>О нас</Link>
            </Bar>
        </footer>
    );
};

export default Footer;