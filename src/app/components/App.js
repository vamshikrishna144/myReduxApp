import React from "react";
import {render} from "react-dom";

import { User } from './User';
import { Main } from './Main';

import {connect} from 'react-redux';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    changeUsername(newName) {
    }

    render() {
        debugger
        return (
            <div className="container">
                <Main changeUsername={() => this.props.changeName('GudipatiTheOG')}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.personReducer,
        math: state.mathReducer
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (name) => {
            dispatch({
                payload: 'vamshiGudipati144',
                type: 'name'
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
