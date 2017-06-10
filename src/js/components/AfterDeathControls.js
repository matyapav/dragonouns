import React from 'react'
import {connect} from 'react-redux'
import {increaseLevel} from '../actions/nounActions'
import {setActiveNoun} from '../actions/nounActions'
import {resetForm} from '../actions/formActions'
import {reviveDragon} from '../actions/fightActions'
import {restartLevel} from '../actions/nounActions'

@connect((store)=>{
    return{
        dragonLife: store.fight.dragonHitpoints,
        availableLevels: store.nouns.nouns.length,
        currentLevel: store.nouns.level+1
    }
})
export default class DragonLife extends React.Component {
    /**
     * Component contructor
     * @param props
     */
    constructor(props){
        super(props);
    }

    /**
     * Dispatches action to trigger level (set of nouns) restart
     */
    restartLevel(){
        this.props.dispatch(restartLevel());
        this.props.dispatch(setActiveNoun());
        this.props.dispatch(resetForm(true));
        this.props.dispatch(reviveDragon());
    }

    /**
     * Dispatches action to trigger next level (set of nouns)
     */
    nextLevel(){
        this.props.dispatch(increaseLevel());
        this.props.dispatch(setActiveNoun());
        this.props.dispatch(resetForm(true));
        this.props.dispatch(reviveDragon());
    }

    /**
     * Renders after dragon death controls
     * @returns {XML}
     */
    render(){
        return(
            <div>
                {Math.round(this.props.dragonLife) <= 0?<button class="btn btn-danger btn-lg" onClick={this.restartLevel.bind(this)}>Znovu</button>:""}
                {(Math.round(this.props.dragonLife) <= 0) && (this.props.currentLevel < this.props.availableLevels)?<button class="btn btn-success btn-lg" onClick={this.nextLevel.bind(this)}>Další</button>:""}
            </div>
        );
    }

}
