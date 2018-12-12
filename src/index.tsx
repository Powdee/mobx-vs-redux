import * as React from "react";
import * as ReactDOM from 'react-dom';
import Music from './Music/Music';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';

// Importing CSS file
import './App.css';

const ROOT_ELEMENT = document.getElementById('root') as HTMLElement;

const Root = (
    <Provider store={store}>
        <Music />
    </Provider>
);

ReactDOM.render(Root, ROOT_ELEMENT);

serviceWorker.unregister();
