import React from 'react'
import Dragon from '../components/Dragon'
import DragonLife from '../components/DragonLife'
import AfterDeathControls from '../components/AfterDeathControls'

export default class FightPlace extends React.Component {
    /**
     * Renders fight place (right side of screen where dragon lives)
     * @returns {XML}
     */
    render(){
        return(
            <div id='fight-place'>
                <Dragon/>
                <DragonLife/>
                <AfterDeathControls/>
            </div>
        );
    }
}
