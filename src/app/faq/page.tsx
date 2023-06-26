'use client'

import React from "react";
import Accordion from "@/components/Accordion";
import classNames from "classnames";

export default function FAQ(): React.ReactElement {
    return (
        <Accordion>
            <h1 className={classNames('title', 'card', )} style={{marginBottom: 24}}>Вопросы-ответы</h1>
            <Accordion.Question title='Что такое Билетопоиск?'>
                <p>Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.</p>
            </Accordion.Question>
            <Accordion.Question title='Какой компании принадлежит Билетопоиск?'>
                <p>Владельцем проекта являлась компания ООО «Билетопоиск», которой принадлежало 60 % акций проекта, 40 % акций принадлежало её совладельцу — французской компании ООО AlloCiné. 15 октября 2013 года сервис купила компания «Яндекс».</p>
            </Accordion.Question>
            <Accordion.Question title='Как купить билет на Билетопоиск?'>
                <p>Для покупки билета достаточно просто выбрать фильм и кинотеатр и добавить билет к себе в корзину.</p>
            </Accordion.Question>
            <Accordion.Question title='Как оставить отзыв на Билетопоиск?'>
                <p>Пока никак :)</p>
            </Accordion.Question>
        </Accordion>
    );
}