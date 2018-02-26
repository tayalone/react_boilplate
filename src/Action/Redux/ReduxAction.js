import *  as ActionTypes from '../ActionTypes'

export const addRedux = (oldCouter) => {
    
    return {
        type : ActionTypes.ADD_REDUX,
        newCounter: oldCouter + 5
    }
}

export const subRedux = (oldCouter) => {
    return {
        type : ActionTypes.SUB_REDUX,
        newCounter: oldCouter - 5
    }
}