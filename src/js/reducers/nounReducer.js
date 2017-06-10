import shuffle from '../utils/shuffle'

/**
 * Defines noun reducer - reacts to dispatched noun actions
 * @param state
 * @param action
 * @returns {*}
 */
export default function reducer(state={
    nouns: [],
    currentLevelNouns:[],
    activeNoun: null,
    index: 0,
    level: 0,
    count: 0,
    showInputs: {
        rod: true,
        zivotnost: true,
        vzor: true,
        cislo: true,
        pad: true
    }
}, action) {
    switch(action.type){
        case 'FETCH_NOUNS_FULFILLED':{
            return {...state, nouns: action.payload, currentLevelNouns: shuffle(action.payload[state.level]),count: action.payload[state.level].length}
        }
        case 'SET_ACTIVE_NOUN':{
            return {...state, activeNoun: state.currentLevelNouns[state.index]}
        }
        case 'INC_INDEX':{
            if(state.index+1 < state.nouns[state.level].length) {
                return {...state, index: state.index + 1}
            }
            break;
        }
        case 'DEC_INDEX':{
            if(state.index-1 >= 0){
                return {...state, index: state.index - 1}
            }
            break;
        }
        case 'INC_LEVEL':{
            if(state.level+1 < state.nouns.length) {
                return {...state, level: state.level+1, index: 0, count: state.nouns[state.level+1].length, currentLevelNouns: shuffle(state.nouns[state.level+1])}
            }
            break;
        }
        case 'SET_LEVEL':{
            return {...state, level: parseInt(action.payload), index: 0, count: state.nouns[parseInt(action.payload)].length,  currentLevelNouns: shuffle(state.nouns[parseInt(action.payload)])}
        }
        case 'DEC_LEVEL':{
            if(state.index-1 >= 0){
                return {...state, level: state.level-1, index: 0, count: state.nouns[state.level-1].length,  currentLevelNouns: shuffle(state.nouns[state.level-1])}
            }
            break;
        }
        case 'RESTART_LEVEL':{
            return {...state, index: 0}
        }
        case 'TOGGLE_INPUTS':{
            return {...state, showInputs: action.payload}
        }
    }
    return state;
}

