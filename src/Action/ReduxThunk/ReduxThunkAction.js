import *  as ActionTypes from '../ActionTypes'

export const startReduxThunk = (oldCouter, operation) => {
    console.log(oldCouter, operation)
    return (dispatch) => {
        dispatch(getStartDispatch(oldCouter))
        
        setTimeout(() => {
            if(operation === "add") {
                dispatch(addReduxThunk(oldCouter))
            }else {
                dispatch(subReduxThunk(oldCouter))
            }
        },(1000*oldCouter))
    }
}

const addReduxThunk = (oldCouter) => {
    
    return {
        type : ActionTypes.ADD_REDUXTHUNK,
        newCounter: oldCouter + 5
    }
}

const subReduxThunk = (oldCouter) => {
    return {
        type : ActionTypes.SUB_REDUXTHUNK,
        newCounter: oldCouter - 5
    }
}



const getStartDispatch = (oldCouter) => {
    console.log("getStartDispatch")
    return {
        type: ActionTypes.START_THUNK,
        oldCouter: oldCouter
    }
}