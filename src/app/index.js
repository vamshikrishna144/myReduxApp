
import React from "react";
import {render} from "react-dom";
import App from "./components/App";
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';
import {Provider} from 'react-redux';

//store here takes initial state as the second arg, it takes in reducer/reducers as the first arg

const intialState = {
    result: 144,
    lastValues: []
}

//args are passed automatically by redux
const mathReducer = function(state = {
    result: 144,
    lastValues: []
}, action) {
    if(!action.payload) { return state}
    switch(action.type) {
        case 'add': {
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        }
        case 'sub': {
            state = {
                ...state,
                result: state.result - action.payload
            }
            break;
        }
    }
    return state;
}

const personReducer = function(state = {
    name: 'Vamshi',
    age: 24
}, action) {
    if(!action.payload) { return state}
    debugger;
    switch(action.type) {
        case 'name': {
            state = {
                ...state,
                name: action.payload
            }
            break;
        }
        case 'age': {
            state = {
                ...state,
                age: action.payload
            }
            break;
        }
    }
    return state;
}
//Combining reducers
const myReducers = combineReducers({mathReducer, personReducer})

//Middleware is executed right after an action is dispatched and before it reaches the reducers
/*
Syntax
const myMiddleware = (store) => (next) => (action) => {}
*/

const myLoggerMiddleware = (store) => (next) => (action) => {
    console.log("this is the action that is getting performed", action);
    next(action);
}
const store = createStore(myReducers, {}, applyMiddleware(myLoggerMiddleware, createLogger()))

store.subscribe(() => console.log('updated store', store.getState()))

//Dispatch is applied on the store, to carry out a certain action

//Dispatch takes in an object ie the action object for the dispatcher
store.dispatch({
    type: "add",
    payload: 1
})

store.dispatch({
    type: "add",
    payload: 2
})

store.dispatch({
    type: "age",
    payload: 25
})

render(<Provider store={store}><App /></Provider>, window.document.getElementById('app'));
