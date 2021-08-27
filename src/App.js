import React, {useState} from 'react';
import './App.css';
import Data from "./components/Data/Data";
import useTheme from "./hook/useTheme";
import ToggleTheme from "./components/ToggleTheme/ToggleTheme";
import classnames from "classnames";
import {Element} from 'react-scroll'
import SlideOne from "./components/SlideOne/SlideOne";
import SlideTwo from "./components/SlideTwo/SlideTwo";
import Button from "./components/Button/Button";
import {useSelector} from "react-redux";


const App = () => {
    const {theme, toggleTheme} = useTheme();
    const state = useSelector(state => state)

    return (
        <div className={`App ${theme}`}>
            <div className={`container ${theme}`}>
                <div className='options'>
                    <div className={'toggleBlock'}>
                        <ToggleTheme toggleTheme={toggleTheme} />
                    </div>
                    <Data />
                    <div>
                        <Button />
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

                        {
                           (state.slide.content === 1)
                            ?
                            <SlideOne state={state}  />
                           : <SlideTwo state={state}  />

                        }






                    </Element>
                    <Element name="scroll-container-second-element" style={{marginBottom: '20px'}}>
                        <div>... </div>
                    </Element>
                </Element>



            </div>
        </div>

    );
}

export default App;
