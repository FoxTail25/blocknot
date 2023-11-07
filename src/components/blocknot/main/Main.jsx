import React from 'react';
import { Menu } from './menu/Menu';
import { TextField } from './textField/TextField';
import m from './sassCSS/main.module.css';

export const Main = () => {
  return (
    <div className={m.container}>

        <Menu/>

        <TextField className="textfield"/>

    </div>
  )
}
