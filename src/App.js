import React, {useState} from 'react';
import './App.css';
import Data from "./components/Data/Data";
import useTheme from "./hook/useTheme";
import ToggleTheme from "./components/ToggleTheme/ToggleTheme";
import classnames from "classnames";
import {Element} from 'react-scroll'
import SlideOne from "./components/SlideOne/SlideOne";


const App = () => {
    const [state, setState] = useState({
        activeButton: 0,
        checked: false

    });
    const {checked} = state;
    const {activeButton} = state;
    const {theme, toggleTheme} = useTheme();
    const slideFn = () => {
        setState({
            activeButton: 0,
            checked: true
        })

    }
    const textaaa = 'Мужчина'
    return (
        <div className={`App ${theme}`}>
            <div className={`container ${theme}`}>
                <div className='options'>
                    <div className={'toggleBlock'}>
                        <ToggleTheme toggleTheme={toggleTheme}/>
                    </div>
                    <Data/>
                    <div>
                        <button
                            className={classnames('btn1',
                                activeButton === 0 && "active1")}
                            onClick={() => slideFn()}>
                            <div>
                                <div></div>
                                <div>
                                    <div>С чего начать</div>
                                    <div>Цель</div>
                                </div>
                            </div>
                        </button>
                        <button
                            className={classnames('btn2',
                                activeButton === 1 && "active2")}
                            onClick={() => setState({activeButton: 1})}
                        >
                            <div>
                                <div></div>
                                <div>
                                    <div>Рацион питания</div>
                                    <div>Расчет</div>
                                </div>
                            </div>
                        </button>

                    </div>

                </div>
                <Element className="element" id="scroll-container" style={{
                    position: 'relative',
                    height: '600px',
                    marginBottom: '10px',
                    overflow: 'scroll'
                }}>
                    <Element name="scroll-container-first-element" style={{
                        marginBottom: '20px',
                        padding: '20px'
                    }}>

                            <SlideOne/>

                    </Element>
                    <Element name="scroll-container-second-element" style={{
                        marginBottom: '20px'
                    }}>
                        <div>-----</div>
                    </Element>
                </Element>

                <div className={classnames('content2',
                    activeButton === 1 && `slide ${theme}`)}>
                    <Element className="element" id="scroll-container" style={{
                        position: 'relative',
                        height: '600px',
                        overflow: 'scroll',
                        marginBottom: '10px'
                    }}>
                        <Element name="scroll-container-first-element" style={{
                            marginBottom: '20px',
                            padding: '20px'
                        }}>
                            <div className={`textcontent`}>
                                <div className={`slidercnt`}>
                                    <div className={`sideone`}>
                                        <div className='blocktextone'>Расчет рациона питания</div>
                                        <div className='blocktexttwo'>
                                            <div className='title'>Как пользоваться</div>
                                            <div className='blocktext'>Самостоятельное составление индивидуального плана
                                                питания.

                                                Калькулятор позволит рассчитать и проанализировать ваш рацион
                                                питания.<br/>
                                                <br/>
                                                Как пользоваться калькулятором:<br/>
                                                Заполните данные и себе.<br/>
                                                Составте топ ваших любимых продуктов.
                                                Получите расчет рациона питания.
                                            </div>
                                        </div>
                                        <div className='finderblock'>
                                            <div className='title'>Топ продуктов</div>
                                            <div className='blocktext'>Выберите ваши любимые продукты и расположите их
                                                от 0 до 10
                                            </div>
                                        </div>

                                    </div>
                                    <div className='sidetwo'>
                                        <div className='form1'>
                                            <div className='block1'>
                                                <input type="number"/>
                                                <input type="number"/>
                                                <div>
                                                    <i></i>
                                                    <div></div>
                                                    <i></i>
                                                </div>
                                            </div>
                                            <div className='block2'>
                                                <input type="number"/>
                                                <input type="number"/>
                                            </div>
                                            <div className='block3'>
                                                <input type="text"/>
                                                <input type="text"/>
                                                <input type="text"/>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </Element>
                        <Element name="scroll-container-second-element" style={{
                            marginBottom: '20px'
                        }}>
                            <div>Рассчитать</div>
                        </Element>
                    </Element>
                </div>
            </div>
        </div>

    );
}

export default App;
