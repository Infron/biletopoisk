'use client'

import React, {useCallback, useContext, useState} from 'react';

type AccordionState = {
    activeQuestion: string | undefined,
    switchQuestion: useCallback<(title: string) => void>
} | undefined;

const AccordionContext: React.Context<AccordionState> = React.createContext(undefined);

const Accordion = ({ children }: { children: [typeof Accordion.Question] }): React.ReactNode => {
    const [activeQuestion, setActiveQuestion] = useState();

    const switchQuestion = useCallback((title: string) => {
        // noinspection TypeScriptValidateTypes
        setActiveQuestion( (activeQuestion)  =>
            activeQuestion === title ? undefined : title
        );
    }, [])

    return (
        <AccordionContext.Provider value={{ activeQuestion, switchQuestion }}>
            { children }
        </AccordionContext.Provider>
    );
};

Accordion.Question = ({ children, title }: { children: HTMLParagraphElement, title: string }): React.ReactNode => {
    const { activeQuestion, switchQuestion } = useContext(AccordionContext);

    return (
        <div>
            <button onClick={ () => switchQuestion(title) }><h1>{ title }</h1></button>
            { activeQuestion === title && <div>{ children }</div>}
        </div>
    );
};


export default Accordion;