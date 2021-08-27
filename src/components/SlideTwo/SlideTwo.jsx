import React from 'react';
import classnames from "classnames";
import print from "../../fr";
import './SlideTwo.css'


const SlideTwo = (props) => {
    print(props.state.slide.slide)

    return (
        <div className={classnames(`content2 ${props.state.slide.slide}`,
            props.state.slide.content === 2 ? "two" : 'hide' )}>
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
                                    <h1>Топ продуктов</h1>
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
    );
};

export default SlideTwo;