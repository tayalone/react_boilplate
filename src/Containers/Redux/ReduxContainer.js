import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from '../../Components/UI/Button/Button'

import * as actions from '../../Action/index'

class ReduxContainer extends Component {
x
    render(){
        return (
            <div>
                <h2> Redux </h2>
                <div>
                    <p><span>{this.props.counter}</span></p>
                </div>
                <Button onClicked = {() => this.props.onAddRedux(this.props.counter)}> Add Counter </Button>
                <Button onClicked = {() => this.props.onSubRedux(this.props.counter)}> Sub Couter </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.ReduxReducer.counter
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onAddRedux: (oldState) => dispatch(actions.addRedux(oldState)),
//         onSubRedux: (oldState) => dispatch(actions.subRedux(oldState)),
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onAddRedux: actions.addRedux,
        onSubRedux: actions.subRedux,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxContainer)