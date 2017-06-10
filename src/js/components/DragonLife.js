import React from 'react'
import {connect} from 'react-redux'

@connect((store)=>{
    return{
        dragonLife: store.fight.dragonHitpoints,
    }
})
export default class DragonLife extends React.Component {
    /**
     * Component constructor
     * @param props
     */
    constructor(props){
        super(props);
    }

    /**
     * Renders dragons life
     * @returns {XML}
     */
    render(){
        const red = {color: 'red'};

        const progressStyle = {
            'width': this.props.dragonLife+'%',
        };

        return(
            <div id="life">
                <div class="progress progress-striped active">
                    <div class="progress-bar progress-bar-success" role="progressbar"
                         aria-valuemin="0" aria-valuemax="100" aria-valuenow={Math.round(this.props.dragonLife)} style={progressStyle}>
                        <h4>Drak má {Math.round(this.props.dragonLife)} životů</h4>
                    </div>

                </div>

                {Math.round(this.props.dragonLife) <= 0?<h1>Drak je mrtev!</h1>:""}
            </div>
        );
    }

}
