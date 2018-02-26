import * as actionTypes from '../../Action/ActionTypes'

const initState = {
    counter: 0
}

const reducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.ADD_REDUX:
            return {...state, counter: action.newCounter}
        case actionTypes.SUB_REDUX:
            return {...state, counter: action.newCounter}
        default:
            return state
    }
    return state
}

export default reducer