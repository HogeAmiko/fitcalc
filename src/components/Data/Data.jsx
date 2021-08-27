import React from 'react';
import d from './data.module.css'
import useDate from "../../hook/useDate";

const Data = () => {
    const {convertHour,
        convertMin,
        daysOfWeek,
        nameOfMonth,
        day} = useDate();


    return (<div>
            <div className={d.data}>{convertHour}:{convertMin}</div>
            <div className={d.wmd}>{daysOfWeek}, {nameOfMonth} {day}</div>
        </div>)
}

export default Data;


