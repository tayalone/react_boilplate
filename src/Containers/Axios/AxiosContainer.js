import React, { Component } from 'react'
import Button from '../../Components/UI/Button/Button'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../Action/index'

import './axios.css'
import axios from 'axios'

class AxiosContainer extends Component {
    
    printData = () => {
        if (this.props.data && this.props.data.length > 0) {
            return this.props.data.map( post => {
                return <li key={post.id}> Title : {post.title} </li>
            })
            
        }else{
            return <li> Empty Data </li>
        }
    }
    render(){
        return (
            <div>
                <h2> Axios </h2>
                <div>
                    <p>{this.props.status}</p>
                    <ul className="ul__axios">
                        {this.printData()}
                    </ul>
                </div>
                <Button onClicked={() => this.props.onInitFetctData(axios)}> Axios - Fetch Data </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status : state.AxiosReducer.status,
        data : state.AxiosReducer.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onInitFetctData : actions.initAxios
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AxiosContainer)