'use client'

import React, {useCallback, useContext, useState} from 'react';
import styles from './styles/accordion.module.css';
import classNames from "classnames";

type AccordionState = {
    activeQuestion: string | undefined,
    switchQuestion: useCallback<(title: string) => void>
} | undefined;

const AccordionContext: React.Context<AccordionState> = React.createContext(undefined);

const Accordion = ({children}: { children: [typeof Accordion.Question] }): React.ReactNode => {
    const [activeQuestion, setActiveQuestion] = useState();

    const switchQuestion = useCallback((title: string) => {
        // noinspection TypeScriptValidateTypes
        setActiveQuestion((activeQuestion) =>
            activeQuestion === title ? undefined : title
        );
    }, [])

    return (
        <AccordionContext.Provider value={{activeQuestion, switchQuestion}}>
            {children}
        </AccordionContext.Provider>
    );
};

Accordion.Question = ({children, title}: { children: HTMLParagraphElement, title: string }): React.ReactNode => {
    const {activeQuestion, switchQuestion} = useContext(AccordionContext);

    return (
        <div className={classNames(styles.question, 'card')}>
            <div onClick={() => switchQuestion(title)}>
                <h1 className='title'>{title}</h1>
                {activeQuestion === title && <div style={{marginTop: 16}}>{children}</div>}
            </div>

        </div>
    );
};


export default Accordion;