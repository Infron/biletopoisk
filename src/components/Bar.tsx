import React from 'react';
import styles from './styles/bar.module.css';

const Bar = ({ children }: { children: React.ReactNode }): React.ReactElement => {
    return (
        <div className={ styles.bar }>
            { children }
        </div>
    );
};

export default Bar;