// import React from "react";
// import {render} from "react-dom";
//
// import { User } from './components/User';
// import { Main } from './components/Main';
//
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Vamshi"
//         };
//     }
//
//     changeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }
//
//     render() {
//         return (
//             <div className="container">
//                 <Main changeUsername={this.changeUsername.bind(this)}/>
//                 <User username={this.state.username}/>
//             </div>
//         );
//     }
// }
//
// render(<App />, window.document.getElementById('app'));


import {createStore} from 'redux'
//store here takes initial state as the second arg, it takes in reducer/reducers as the first arg

const intialState = {
    result: 144,
    lastValues: []
}

//args are passed automatically by redux
const reducer = function(state, action) {
    if(!action.payload) { return state}
    debugger;
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


const store = createStore(reducer, intialState)

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
