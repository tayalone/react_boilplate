import *  as ActionTypes from '../ActionTypes'
import _ from 'lodash'

export const initAxios = (axios) => {
    return (dispatch) => {
        dispatch(startFetchData())
        
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( (response) => {
                const first_5 = _.take(response.data, 5)
                dispatch(successFetchData(first_5))
            })
            .catch( (error) => {
                dispatch(failedFetchData(error))
            })
    }
    
}

const startFetchData = () => {
    return {
        type : ActionTypes.START_AXIOS
    }
}

const successFetchData = (data) => {
    return {
        type : ActionTypes.SUCCESS_AXIOS,
        data : data
    }
}

const failedFetchData = (error) => {
    return {
        type : ActionTypes.FAILED_AXIOS,
        error : error
    }
}