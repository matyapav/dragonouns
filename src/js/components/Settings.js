import React from 'react'
import {connect} from 'react-redux'
import {toggleInputs} from '../actions/nounActions'
import LoadFile from '../components/LoadFile'

@connect((store)=>{
    return{
        showInputs: store.nouns.showInputs
    }
})
export default class Settings extends React.Component {
    /**
     * Component constructor
     * @param props
     */
    constructor(props){
        super(props);
    }

    /**
     * Toggles visibility of "rod" field
     */
    toggleRod(){
        let showInputs = null;
        if(!this.props.showInputs.rod == false){
            this.refs.zivotnost.disabled = true;
            this.refs.vzor.disabled = true;
            showInputs = {...this.props.showInputs, rod: false, zivotnost: false, vzor: false};
        }else{
            this.refs.zivotnost.disabled = false;
            this.refs.vzor.disabled = false;
            showInputs = {...this.props.showInputs, rod: true};
        }
        this.props.dispatch(toggleInputs(showInputs));
    }

    /**
     * Toggles visibility of "cislo" field
     */
    toggleCislo(){
        const showInputs = {...this.props.showInputs, cislo: !this.props.showInputs.cislo};
        this.props.dispatch(toggleInputs(showInputs));
    }

    /**
     * Toggles visibility of "zivotnost" field
     */
    toggleZivotnost(){
        const showInputs = {...this.props.showInputs, zivotnost: !this.props.showInputs.zivotnost};
        this.props.dispatch(toggleInputs(showInputs));
    }

    /**
     * Toggles visibility of "pad" field
     */
    togglePad(){
        const showInputs = {...this.props.showInputs, pad: !this.props.showInputs.pad};
        this.props.dispatch(toggleInputs(showInputs));
    }

    /**
     * Toggles visibility of "vzor" field
     */
    toggleVzor(){
        const showInputs = {...this.props.showInputs, vzor: !this.props.showInputs.vzor};
        this.props.dispatch(toggleInputs(showInputs));
    }

    /**
     * Renders settings components
     * @returns {XML}
     */
    render(){
        return(
            <div class="modal-body">
                <form class="form form-horizontal" id="form" ref="form">

                    <div class="form-group checkbox">
                        <div class="col-sm-12">
                            <div class="checkbox">
                                <label><input type="checkbox"  id="rod" ref="rod" checked={this.props.showInputs.rod} onChange={this.toggleRod.bind(this)}/> Rod</label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group checkbox">
                        <div class="col-sm-12">
                            <div class="checkbox">
                                <label><input type="checkbox"  id="zivotnost" ref="zivotnost" checked={this.props.showInputs.zivotnost} onChange={this.toggleZivotnost.bind(this)}/> Životnost</label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group checkbox">
                        <div class="col-sm-12">
                            <div class="checkbox">
                                <label><input type="checkbox"  id="cislo" ref="cislo" checked={this.props.showInputs.cislo} onChange={this.toggleCislo.bind(this)}/> Číslo</label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group checkbox">
                        <div class="col-sm-12">
                            <div class="checkbox">
                                <label><input type="checkbox"  id="pad" ref="pad" checked={this.props.showInputs.pad} onChange={this.togglePad.bind(this)}/> Pád</label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group checkbox">
                        <div class="col-sm-12">
                            <div class="checkbox">
                                <label><input type="checkbox"  id="vzor" ref="vzor" checked={this.props.showInputs.vzor} onChange={this.toggleVzor.bind(this)}/> Vzor</label>
                            </div>
                        </div>
                    </div>
                    <LoadFile/>
                </form>
                <button type="button" class="btn btn-success" data-dismiss="modal" aria-hidden="true">
                        Začni
                </button>
                </div>
        );
    }
}
