import React from 'react';
import 'antd/dist/antd.css';
import a from './antd.css'
import { Switch } from 'antd';

const ToggleTheme = (props) => {
    return (

            <Switch className={a.antSwitchChecked} onChange={props.toggleTheme} style={{ color: "white" }} />

)
}

export default ToggleTheme;