import React from 'react';
import ReactDOM from 'react-dom';
import Music from './Music/Music';
import * as serviceWorker from './serviceWorker';
import './App.css';

const ROOT_ELEMENT = document.getElementById('root');

ReactDOM.render(
    <Music />,
    ROOT_ELEMENT
);

serviceWorker.unregister();
