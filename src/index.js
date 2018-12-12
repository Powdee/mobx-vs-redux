import React from 'react';
import ReactDOM from 'react-dom';
import Music from './Music/Music';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'; 
import store from './store';

// Importing CSS file
import './App.css';

const ROOT_ELEMENT = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Music />
    </Provider>,
    ROOT_ELEMENT
);

serviceWorker.unregister();
