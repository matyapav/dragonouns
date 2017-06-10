/**
 * Defines fight reducer - reacts to dispatched fight actions
 * @param state
 * @param action
 * @returns {*}
 */
export default function reducer(state={
    dragonHitpoints: 100,
    wasHit: false
}, action) {
    switch(action.type){
        case 'HIT_DRAGON':{
            //play dragon hit audio
            const hitAudio = new Audio('./sounds/sword.mp3');
            hitAudio.play();
            if(state.dragonHitpoints-action.payload.damage < 0){
                //dragon is dead
                const winAudio = new Audio('./sounds/win.wav');
                winAudio.play();
                return {...state, dragonHitpoints: 0, wasHit: true}
            }else{
                if(state.dragonHitpoints == action.payload.damage){
                    //dragon is dead
                    const winAudio = new Audio('./sounds/win.wav');
                    winAudio.play();
                }
                return {...state, dragonHitpoints: (state.dragonHitpoints-action.payload.damage), wasHit: true};
            }
        }
        case 'REMOVE_HIT_MARK':{
            return {...state, wasHit: false}
        }
        case 'REVIVE_DRAGON':{
            return {...state, dragonHitpoints: 100};
        }
        case 'ROUND_HITPOINTS':{
            return {...state, dragonHitpoints: Math.round(state.dragonHitpoints)};
        }
    }
    return state;
}

