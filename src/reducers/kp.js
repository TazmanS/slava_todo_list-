import {KP_CRASH} from '../actions/actionTypes'

const initialState = {
    kpCrash: []
}

const kp = (state = initialState, action) => {

switch(action.type){
    case KP_CRASH:
        return{
            ...state,
            kpCrash: action.kpCrash
        }

    default: return state
}

}

export default kp