import {useEffect, useState} from "react";


const useDate = () => {

    const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update

    useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
            // This will trigger a rerender every component that uses the useDate hook.
            setDate(new Date());
        }, 30 * 1000);
        return () => {
            clearInterval(timer); // Return a function to clear the timer so that it will stop being called on unmount
        }
    }, []);

    function getWeekDay(today) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[today.getDay()];
    }

    function getNameOfMonth(today) {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[today.getMonth()];
    }

    let convertHour
    let convertMin

    let hours = today.getHours().toLocaleString();
    if (hours < 10) {
        convertHour = ('0' + hours)
    } else {
        convertHour = hours
    }

    let minutes = today.getMinutes().toLocaleString();
    if (minutes < 10) {
        convertMin = ('0' + minutes)
    } else {
        convertMin = minutes
    }

    let daysOfWeek = getWeekDay(today)
    let nameOfMonth = getNameOfMonth(today)
    let day = today.getDate()


    return {
        convertHour,
        convertMin,
        daysOfWeek,
        nameOfMonth,
        day
    };
};

export default useDate;