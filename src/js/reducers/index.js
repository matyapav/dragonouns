import {combineReducers} from 'redux'

import nouns from './nounReducer'
import form from './formReducer'
import fight from './fightReducer'

/**
 * Combines reducers
 */
export default combineReducers({
    nouns,
    form,
    fight
})