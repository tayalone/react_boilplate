import { combineReducers } from 'redux'

import ReduxReducer from './ReduxReducer/ReduxReducer'
import ReduxThunkReducer from './ReduxThunkReducer/ReduxThunkReducer'
import AxiosReducer from './AxiosReducer/AxiosReducer'
const RootReducer = combineReducers({
    ReduxReducer, // ReduxReducer: ReduxReducer
    ReduxThunkReducer,
    AxiosReducer
})

export default RootReducer