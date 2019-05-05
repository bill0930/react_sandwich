import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Orders} from './orders';
import {Sandwiches} from './sandwiches';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialOrder} from './forms';
import {createForms} from 'react-redux-form';


export const ConfigureStore = ()=>{
    const store = createStore(  
        combineReducers({
          orders: Orders,
          sandwiches:Sandwiches,
          ...createForms({
            order: InitialOrder
        })
        }),

        applyMiddleware(thunk,logger)
    );

    return store;
}