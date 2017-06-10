import React from 'react'

export default class Status extends React.Component{
    /**
     * Component constructor
     * @param props
     */
    constructor(props){
        super(props)
    }

    /**
     * Renders status component
     * @returns {XML}
     */
    render(){
        const {level, index, count} = this.props;
        return(
            <h3>Sada {level} - slovo {index}/{count}</h3>
        )
    }
}