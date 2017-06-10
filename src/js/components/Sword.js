import React from 'react'
import {connect} from 'react-redux'

@connect((store)=>{
    return{
        wasHit: store.fight.wasHit
    }
})
export default class Sword extends React.Component {

    /**
     * Component constructor
     * @param props
     */
    constructor(props){
        super(props)
    }

    /**
     * Renders sword component
     * @returns {XML}
     */
    render(){
        return(
            <div id={this.props.wasHit?"sword-hit":"sword"}></div>
        );
    }
}
