import React from 'react'
import Form from '../components/Form'
import {connect} from 'react-redux'
import {incrementIndex} from  '../actions/nounActions'
import {setActiveNoun} from  '../actions/nounActions'
import {resetForm} from '../actions/formActions'

@connect((store)=>{
    return{
        activeNoun: store.nouns.activeNoun,
        nounCount: store.nouns.count,
        index: store.nouns.index+1,
        activeCorrectCount: store.form.correctCount,
        activeInputCount: store.form.inputCount
    }
})
export default class ActiveNoun extends React.Component{
    /**
     * Component constructor
     * @param props
     */
    constructor(props){
        super(props);
    }

    /**
     * Dispatches actions to trigger next noun
     */
    nextNoun(){
        this.props.dispatch(incrementIndex());
        this.props.dispatch(setActiveNoun());
        this.props.dispatch(resetForm(true));
    }

    /**
     * Renders component with active noun, form and correct answers counter
     * @returns {XML}
     */
    render(){
        const {activeNoun} = this.props;
        if(activeNoun != null){
            return(
                <div class="panel panel-default word-panel">
                    <div class="panel-heading">Určete</div>
                    <div class="panel-body">
                    <h1 id="active-noun">{this.props.activeNoun.text}</h1>
                    <Form addNotification={this.props.addNotification}/>
                    <h2>Správně: {this.props.activeCorrectCount}</h2>
                    {this.props.activeInputCount == this.props.activeCorrectCount?
                    <button class="btn btn-primary" onClick={this.nextNoun.bind(this)} disabled={this.props.index==this.props.nounCount? true: false}>Další</button>
                        :""}
                    </div>
                </div>
            )
        }
        return(
            <h2>Žádné slovo není k dispozici</h2>
        )

    }
}