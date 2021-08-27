import React from 'react';
import classnames from "classnames";
import './button.css'
import {useDispatch, useSelector} from "react-redux";
import print from '../../fr'


const Button = () => {

    const dispatch = useDispatch()
    const button = useSelector(state => state)

const changeContentToOne = () => {
        dispatch({ type: 'CHANGE_CONTENT_TO_ONE'})
    dispatch({ type: 'SLIDE_ONE'})
    }

const changeContentToTwo = () => {
        dispatch({ type: 'CHANGE_CONTENT_TO_TWO'})
    setTimeout(startSlide, 30)

    }

    const startSlide = () => {
        dispatch({ type: 'SLIDE_TWO'})
    }



    return (<div>
            <button
                className={classnames('btn1',
                    button.slide.content === 1 ? 'activate' : `deactivate`)}
                onClick={changeContentToOne}
            >
                <div className='btn_container'>
                    <div className='btn_img'>+</div>
                    <div className='btn_text'>
                        <div className={classnames('btn_title',
                            button.slide.content === 2  ? '' : 'fsbt')}>С чего начать
                        </div>
                        <div className={classnames('btn_word',
                            button.slide.content === 2 ? '' : 'fontsizebw')}>Цель
                        </div>
                    </div>
                </div>
            </button>
            <button
                className={classnames('btn2',
                    button.slide.content === 2 ? 'activate' : `deactivate`)}
                onClick={changeContentToTwo} >
                <div className='btn_container'>
                    <div className='btn_img'>+</div>
                    <div className='btn_text'>
                        <div className={classnames('btn_title',
                            button.slide.content === 1 ? '' : 'fsbt')}>Рацион питания
                        </div>
                        <div className={classnames('btn_word',
                            button.slide.content === 1 ? '' : 'fontsizebw')}>Расчет
                        </div>
                    </div>
                </div>
            </button>
        </div>
    )
}


export default Button;