/**
 * Defines form reducer - reacts to dispatched form actions
 * @param state
 * @param action
 * @returns {*}
 */
export default function reducer(state={
    showZivotnost: false,
    vzory: [],
    inputCount: 0,
    correctCount: 0,
    reset: false
}, action) {
    switch(action.type){
        case 'SHOW_ZIVOTNOST':{
            return {...state, showZivotnost: true};
        }
        case 'HIDE_ZIVOTNOST':{
            return {...state, showZivotnost: false};
        }
        case 'FILL_VZORY':{
            return {...state, vzory: action.payload};
        }
        case 'SET_INPUT_COUNT':{
            return {...state, inputCount: action.payload};
        }
        case 'RESET_FORM':{
            return {...state, reset: action.payload, showZivotnost: false, vzory:[], correctCount: 0};
        }
        case 'INC_CORRECT':{
            return {...state, correctCount: state.correctCount+1}
        }
    }
    return state;
}

