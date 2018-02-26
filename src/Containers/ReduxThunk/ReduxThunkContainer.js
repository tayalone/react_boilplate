import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from '../../Components/UI/Button/Button'

import * as actions from '../../Action/index'

class ReduxThunkContainer extends Component {
    render(){
        return (
            <div>
                <h2> Redux-Thunk </h2>
                <div>
                    <p><span>{this.props.counter}</span></p>
                </div>
                <p> {this.props.message? this.props.message: null} </p>
                <Button onClicked={() => this.props.onStartThunk(this.props.counter, "add")}> Add Counter - dispatch </Button>
                <Button onClicked={() => this.props.onStartThunk(this.props.counter, "sub")}> Sub Couter - dispatch </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.ReduxThunkReducer.counter,
        message : state.ReduxThunkReducer.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        // onAddReduxThunk: actions.addReduxThunk,
        // onSubReduxThunk: actions.subReduxThunk
        onStartThunk: actions.startReduxThunk
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxThunkContainer)