import * as actionTypes from '../../Action/ActionTypes'

const initState = {
    counter: 0,
    message: null
}

const reducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.START_THUNK:
            return {...state, message: `wait ${action.oldCouter} second for your operation` }
        case actionTypes.ADD_REDUXTHUNK:
            return {...state, counter: action.newCounter, message: null}
        case actionTypes.SUB_REDUXTHUNK:
            return {...state, counter: action.newCounter, message: null}
        default:
            return state
    }
    return state
}

export default reducer