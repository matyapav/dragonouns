import React from 'react'

export default class ChangeLevelButtons extends React.Component {
    /**
     * Component constructor
     * @param props
     */
    constructor(props){
        super(props);
    }

    /**
     * Renders buttons used for changing levels
     * @returns {XML}
     */
    render(){
        let levels = [];
        const {level} = this.props;
        for(var i=0; i<this.props.nounsLength; i++){
            levels.push({name: "Sada "+(i+1), number: i});
        }

        return(
            <div>
                {levels.map((lvl)=>{
                    return (<button class={lvl.number == level-1?"btn btn-link set-selected":"btn btn-link"} key={lvl.number} onClick={this.props.changeLevel} value={lvl.number}>{lvl.name}</button>);
            })}
        </div>
        );
    }
}
