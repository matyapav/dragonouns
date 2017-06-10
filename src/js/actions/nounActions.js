/**
 * Inserts nouns from import file
 * @param data
 * @returns {{type: string, payload: *}}
 */
export function fetchNouns(data) {
    return{
        type:"FETCH_NOUNS_FULFILLED",
        payload: data
    }
}

/**
 * Increment noun index in set
 * @returns {{type: string}}
 */
export function incrementIndex() {
    return {
        type: 'INC_INDEX'
    }
}

/**
 * Decrement noun index in set
 * @returns {{type: string}}
 */
export function decrementIndex() {
    return {
        type: 'DEC_INDEX'
    }
}

/**
 * Sets active noun
 * @returns {{type: string}}
 */
export function setActiveNoun() {
    return {
        type: 'SET_ACTIVE_NOUN',
    }
}

/**
 * Increases level (next set of nouns)
 * @returns {{type: string}}
 */
export function increaseLevel() {
    return {
        type: 'INC_LEVEL'
    }
}

/**
 * Sets level (set of nouns)
 * @param level
 * @returns {{type: string, payload: *}}
 */
export function setLevel(level) {
    return {
        type: 'SET_LEVEL',
        payload: level
    }
}

/**
 * Restarts level (rollbacks current set of nouns)
 * @returns {{type: string}}
 */
export function restartLevel() {
    return {
        type: 'RESTART_LEVEL'
    }
}

/**
 * Toggle form inputs visibility
 * @param showInputsObj
 * @returns {{type: string, payload: *}}
 */
export function toggleInputs(showInputsObj) {
    return {
        type: 'TOGGLE_INPUTS',
        payload: showInputsObj
    }
    
}
