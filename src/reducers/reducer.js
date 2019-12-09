import {combineReducers} from 'redux'
import kp from './kp'
import other from './other'

const reducer = combineReducers({
    kpCrash: kp,
    otherCrash: other
})

export default reducer
