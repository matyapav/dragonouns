import React from 'react'
import {connect} from 'react-redux'
import Sword from '../components/Sword'

@connect((store)=>{
    return{
        dragonLife: store.fight.dragonHitpoints,
        wasHit: store.fight.wasHit
    }
})
export default class Dragon extends React.Component {
    /**
     * Component constructor
     * @param props
     */
    constructor(props){
        super(props);
    }
    /**
     * Renders dragon component
     * @returns {XML}
     */
    render(){
        return(
            <div id={this.props.wasHit? "dragon-hit" : (this.props.dragonLife > 0? "dragon" :"dragon-dead")}>
                <Sword/>
            </div>
        );
    }
}
