import {KP_CRASH} from './actionTypes'
import {OTHER_CRASH} from './actionTypes'
import axios from 'axios'

function downloadCrash(){
    return async dispatch => {
        let kpCrash = await axios.get('https://randomtask-2b1cd.firebaseio.com/kp.json')
        //console.log(kpCrash)
        let otherCrash = await axios.get('https://randomtask-2b1cd.firebaseio.com/other.json')
        //console.log(otherCrash)

        dispatch({
            type: KP_CRASH,
            kpCrash: kpCrash.data
        })
        dispatch({
            type: OTHER_CRASH,
            otherCrash: otherCrash.data
        })

        //await axios.put('https://randomtask-2b1cd.firebaseio.com/kp.json', [{"user":"12111"},{"user":"12122211"}])
    }
}

export default downloadCrash