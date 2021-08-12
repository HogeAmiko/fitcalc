import React from 'react';
import {Element} from "react-scroll";
import  './SlideOne.css';

import useTheme from "../../hook/useTheme";

const SlideOne = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={`content ${theme}`}>
                    <div className={`textcontent`}>
                    <div className={` maintitle`}>Будь честен сам с собой</div>
                    <h1 className={``}>Шаг 1. Выбери цель</h1>
                    <h4 className={``}>Начать нужно с постановки цели и это проще, чем кажется.
                        Все “хотелки” можно свести к двум желаниям:

                        Изменить внешний вид (убрать жир, добавить мышц, снизить/увеличить массу тела).
                        Улучшить функциональные показатели (стать сильнее, бегать быстрее/дольше, повысить
                        выносливость, прыгать выше и т.п.).

                        Некоторые люди хотят достичь оба пункта сразу в той или иной комбинации.
                        Надо понять, что преследовать одну цель легче, тогда вероятность её добиться – выше.
                        Правильно расставленные приоритеты – залог успеха.
                        Выбери что-то одно, не усложняй.</h4>
                    <h1 className={``}>Шаг 2. Сделай цель ясной</h1>
                    <h4 className={``}>Изменить внешний вид

                        Ты можешь страдать от ожирения, или быть жутким дрищем, или просто выглядеть, как мешок с
                        картошкой, но если ты выбрал эту цель, то её достижение для любого типа людей можно свести к
                        двум видам действий:

                        Уменьшить количество жира.
                        Увеличить количество мышц.

                        Не важно, как ты выглядишь сейчас, и как хотел бы выглядеть в будущем.
                        Достижение желаемого результата это всегда потеря жира и набор мышц в том или ином
                        соотношении.</h4>
                    <h1 className={``}>Шаг 3. Создай план питания</h1>
                    <h4 className={``}>Какой бы ни была твоя цель, ты не достигнешь ее без правильного питания.
                        Все действия, направленные на изменение веса тела в любую сторону, сводятся к двум
                        принципам:
                        Чтобы терять вес, ты должен потреблять меньше калорий, находиться в дефиците калорий.
                        Чтобы увеличивать вес, ты должен потреблять больше калорий, находиться в избытке калорий.
                        Всё, никаких других вариантов развития событий науке не известно. Только эти два.</h4>
                    </div>
        </div>



    );
};

export default SlideOne;