import * as actionTypes from '../../Action/ActionTypes'

const initState = {
    status: null,
    data: []
}

const reducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.START_AXIOS:
            return {...state, status: "Loadind Data ..."}
        case actionTypes.SUCCESS_AXIOS:
            return {...state, status: null, data: action.data}
        case actionTypes.FAILED_AXIOS:
            return {...state, status: "error fetch data", data: []}
        default:
            return state
    }
    return state
}

export default reducer