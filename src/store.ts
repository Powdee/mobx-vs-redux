import { createStore, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';

const INITIAL_DATA = {
    status: 'initial',
    artists: [],
    temp: 'john',
    error: null,
};

// TODO
const logger = ({ getState }: any) => {
    return (next: any) => (action: any) => {
      console.log('will dispatch', action);
      const returnValue = next(action);
      console.log('state after dispatch', getState());
      return returnValue;
    }
}

export default createStore(
    reducer,
    INITIAL_DATA,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            logger
        )
    )
);