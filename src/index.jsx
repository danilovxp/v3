import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Toggle, Content, Buttons, Particles } from './components/'


ReactDOM.render(
    <React.StrictMode>
        <div className='app'>
            <Toggle />
            <Content />
            <Buttons />
            <Particles />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
