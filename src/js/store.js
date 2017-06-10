import {createStore} from 'redux'

import reducer from "./reducers"

/**
 * creates redux store
 */
export default createStore(reducer)
