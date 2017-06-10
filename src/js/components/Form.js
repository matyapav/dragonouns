import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {showZivotnost} from '../actions/formActions'
import {hideZivotnost} from '../actions/formActions'
import {fillVzoryMuzskyRod} from '../actions/formActions'
import {fillVzoryStredniRod} from '../actions/formActions'
import {fillVzoryZenskyRod} from '../actions/formActions'
import {setInputCount} from '../actions/formActions'
import {resetForm} from '../actions/formActions'
import {roundHitPoints} from '../actions/fightActions'
import {increaseCorrectCount} from '../actions/formActions'
import {hitDragon} from '../actions/fightActions'
import {removeHitMark} from '../actions/fightActions'

@connect((store)=>{
    return {
        activeNoun: store.nouns.activeNoun,
        nounCount: store.nouns.count,
        showZivotnost: store.form.showZivotnost,
        vzory: store.form.vzory,
        inputCount: store.form.inputCount,
        reset: store.form.reset,
        showInputs: store.nouns.showInputs
    }
})
export default class Form extends React.Component{

    /**
     * Component constructor
     * @param props
     */
    constructor(props){
        super(props);
    }

    /**
     * Sets number of visible form fields
     */
    setInputCount(){
        const showInputsObj = this.props.showInputs;
        let inputCount = 0;
        for (let key in showInputsObj) {
            if(showInputsObj[key]){
                inputCount++;
            }
        }
        if(this.props.activeNoun.rod != 'M' && this.props.showInputs.zivotnost){
            this.props.dispatch(setInputCount(inputCount-1));
        }else{
            this.props.dispatch(setInputCount(inputCount));
        }
    }

    /**
     * Called after component update
     */
    componentDidUpdate(){
        if(this.props.reset){
            this.resetForm();
        }
        this.setInputCount();
    }

    /**
     * Resets form
     */
    resetForm(){
        const rod = ReactDOM.findDOMNode(this.refs.rod);
        const pad = ReactDOM.findDOMNode(this.refs.pad);
        const zivotnost = ReactDOM.findDOMNode(this.refs.zivotnost);
        const vzor = ReactDOM.findDOMNode(this.refs.vzor);
        const cislo = ReactDOM.findDOMNode(this.refs.cislo);
        if(rod != null){
            rod.value = "";
            this.checkRod();
        }
        if(pad != null){
            pad.value = "";
            this.checkPad();
        }
        if(vzor != null){
            vzor.value = "";
            this.checkVzor();
        }
        if(cislo != null){
            cislo.value = "";
            this.checkCislo();
        }
        if(zivotnost != null) {
            zivotnost.value = "";
            this.checkZivotnost();
        }
        this.setInputCount();
        this.props.dispatch(roundHitPoints());
        this.props.dispatch(resetForm(false));
    }

    /**
     * Dispatches actions in reaction to "rod" selection - shows/hides "zivotnost" field and fills "vzor"
     * @param rod
     */
    afterRodSelection(rod){
        if(rod == 'M'){
            this.props.dispatch(showZivotnost());
        }else{
            this.props.dispatch(hideZivotnost());
        }
        this.getOptionsForVzor(rod);
    }

    /**
     * Dispatches actions to fetch options for "vzor" field based on selected "rod"
     * @param rod
     */
    getOptionsForVzor(rod){
        switch(rod){
            case 'M':{
                this.props.dispatch(fillVzoryMuzskyRod());
                break;
            }
            case 'Ž':{
                this.props.dispatch(fillVzoryZenskyRod());
                break;
            }
            case 'S':{
                this.props.dispatch(fillVzoryStredniRod());
                break;
            }
        }
    }

    /**
     * Dispatches actions to hit the dragon
     */
    hitDragon(){
        if(this.props.inputCount != 0){
            const damage = ((100/this.props.nounCount)/this.props.inputCount);
            this.props.dispatch(hitDragon(damage));
        }
        this.props.addNotification("Správně", "jen tak dál :)", "success", null, true);
        this.props.dispatch(increaseCorrectCount());
        setTimeout(()=>{this.props.dispatch(removeHitMark())}, 1000);
    }

    /**
     * Checks if "rod" answer was correct
     */
    checkRod() {
        const rod = ReactDOM.findDOMNode(this.refs.rod);
        const rodOk = ReactDOM.findDOMNode(this.refs.rod_ok);
        const rodFail = ReactDOM.findDOMNode(this.refs.rod_fail);
        rodOk.hidden = true;
        rodFail.hidden = true;
        rod.disabled = false;
        if(rod.value != ""){
            this.afterRodSelection(rod.value);
            if(rod.value == this.props.activeNoun.rod){
                this.hitDragon();
                rod.disabled = true;
                rodOk.hidden = false;
            }else{
                this.props.addNotification("Zkus to znovu",
                    "Na rod se tážeme ukazovacími zájmeny TEN, TA a TO.",
                    "warning",
                    (
                        <div>
                            <li><b>TEN pán</b> je rodu mužského :)</li>
                            <li><b>TA holka</b> je rodu ženského :)</li>
                            <li><b>TO kolo</b> je rodu středního :)</li>
                        </div>
                    ), false);
                rodFail.hidden = false;
            }
        }
    }

    /**
     * Checks if "pad" answer was correct
     */
    checkPad() {
        const pad = ReactDOM.findDOMNode(this.refs.pad);
        const padOk = ReactDOM.findDOMNode(this.refs.pad_ok);
        const padFail = ReactDOM.findDOMNode(this.refs.pad_fail);
        padOk.hidden = true;
        padFail.hidden = true;
        pad.disabled = false;
        if(pad.value != ""){
            if(pad.value == this.props.activeNoun.pad){
                this.hitDragon();
                pad.disabled = true;
                padOk.hidden = false;
            }else{
                this.props.addNotification("Zkus to znovu",
                    "Zkus se zeptat pádovými otázkami :)",
                    "warning",
                    (
                            <div>
                                <li><b>1.pád</b> = Kdo? Co?</li>
                                <li><b>2.pád</b> = Bez koho? Bez čeho?</li>
                                <li><b>3.pád</b>= Ke komu? K čemu?</li>
                                <li><b>4.pád</b> = Koho? Co?</li>
                                <li><b>5.pád</b> = Oslovujeme/voláme</li>
                                <li><b>6.pád</b> = O kom? O čem?</li>
                                <li><b>7.pád</b> = S kým? S čím?</li>
                            </div>
                    ),
                    false);
                padFail.hidden = false;
            }
        }
    }

    /**
     * Checks if "vzor" answer was correct
     */
    checkVzor() {
        const vzor = ReactDOM.findDOMNode(this.refs.vzor);
        const vzorOk = ReactDOM.findDOMNode(this.refs.vzor_ok);
        const vzorFail = ReactDOM.findDOMNode(this.refs.vzor_fail);
        vzorOk.hidden = true;
        vzorFail.hidden = true;
        vzor.disabled = false;
        if(vzor.value != ""){
            if(vzor.value == this.props.activeNoun.vzor){
                this.hitDragon();
                vzor.disabled = true;
                vzorOk.hidden = false;
            }else{
                this.props.addNotification("Zkus to znovu",
                    "Vyzkoušej si říct slovo a vzor v 1. a 2. pádu. Dávej ale pozor, abys skloňoval v čísle jednotném." +
                    "Pokud se ti budou shodovat koncovky slova s vzorem, víš že k sobě patří :)",
                    "warning",
                    (
                        <div>
                            <br/>Například: pes je vzor pán, protože: <br/>
                            <li><b>1.pád</b> = pes, pán</li>
                            <li><b>2.pád</b> = (bez) ps<b>a</b>, (bez) pán<b>a</b></li>
                        </div>
                    ),
                    false);
                vzorFail.hidden = false;
            }
        }
    }

    /**
     * Checks if "cislo" answer was correct
     */
    checkCislo() {
        const cislo = ReactDOM.findDOMNode(this.refs.cislo);
        const cisloOK = ReactDOM.findDOMNode(this.refs.cislo_ok);
        const cisloFail = ReactDOM.findDOMNode(this.refs.cislo_fail);
        cisloOK.hidden = true;
        cisloFail.hidden = true;
        cislo.disabled = false;
        if(cislo.value != ""){
            if(cislo.value == this.props.activeNoun.cislo){
                cislo.disabled = true;
                this.hitDragon();
                cisloOK.hidden = false;
            }else{
                this.props.addNotification("Zkus to znovu",
                    "Představuje jméno jednu nebo více věcí/osob?",
                    "warning",
                    (
                        <div>
                            <li><b>Kočka</b> - Je jen <b>jedna</b> = číslo jednotné</li>
                            <li><b>Kočky</b> - Je jich <b>více</b> = číslo množné</li>
                        </div>
                    ),
                    false);
                cisloFail.hidden = false;
            }
        }
    }

    /**
     * Checks if "zivotnost" answer was correct
     */
    checkZivotnost() {
        const zivotnost = ReactDOM.findDOMNode(this.refs.zivotnost);
        const zivotnostOK = ReactDOM.findDOMNode(this.refs.zivotnost_ok);
        const zivotnostFail = ReactDOM.findDOMNode(this.refs.zivotnost_fail);
        zivotnostOK.hidden = true;
        zivotnostFail.hidden = true;
        zivotnost.disabled = false;
        if(zivotnost.value != ""){
            if(zivotnost.value == this.props.activeNoun.zivotnost){
                this.hitDragon();
                zivotnost.disabled = true;
                zivotnostOK.hidden = false;
            }else{
                this.props.addNotification("Zkus to znovu",
                    "Porovnej 1. a 4. pád :). Pokud se shodují je to rod neživotný, pokud ne, životný. ",
                    "warning",
                    (
                        <div>
                            <br/>Například<br/>
                            <li><b>Pes</b> - 1.pád je <b>pes</b>, 4.pád = <b>psa</b> = <b>ŽIVOTNÝ</b></li>
                            <li><b>Hrad</b> - 1.pád je <b>hrad</b>, 4.pád = <b>hrad</b> = <b>NEŽIVOTNÝ</b></li>
                            Ale taky třeba:<br/>
                            <li><b>Sněhulák</b> - 1.pád je <b>sněhulák</b>, 4.pád = <b>sněhuláka</b> = <b>ŽIVOTNÝ</b></li>
                            I když sněhulák vlastně nežije :)<br/>
                        </div>
                    ),
                    false);
                zivotnostFail.hidden = false;
            }
        }
    }

    /**
     * Renders form
     * @returns {XML}
     */
    render(){
        return(
                <form class="form-horizontal" id="form" ref="form">
                    {this.props.showInputs.rod?
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="rod">Rod</label>
                        <div class="col-sm-8">
                            <select class="form-control" id="rod" ref="rod" onChange={this.checkRod.bind(this)}>
                                <option value="">--Vyberte--</option>
                                <option value="M">Mužský</option>
                                <option value="Ž">Ženský</option>
                                <option value="S">Střední</option>
                            </select>
                        </div>
                        <img ref="rod_ok" src="images/happywiz.png" hidden="hidden" width={70}/>
                        <img ref="rod_fail" src="images/sadwiz.png" hidden="hidden" width={70}/>
                    </div>:""}

                    {this.props.showZivotnost && this.props.showInputs.zivotnost?
                        <div class="form-group">
                            <label class="col-sm-2 control-label" for="zivotnost">Životnost</label>
                            <div class="col-sm-8">
                                <select class="form-control" id="zivotnost" ref="zivotnost" onChange={this.checkZivotnost.bind(this)}>
                                    <option value="">--Vyberte--</option>
                                    <option value="Ž">Životný</option>
                                    <option value="N">Neživotný</option>
                                </select>
                            </div>
                            <img ref="zivotnost_ok" src="images/happywiz.png" hidden="hidden" width={70}/>
                            <img ref="zivotnost_fail" src="images/sadwiz.png" hidden="hidden" width={70}/>
                        </div>
                        :""}
                    {this.props.showInputs.cislo?
                    <div class="form-group">
                        <label  class="col-sm-2 control-label" for="cislo">Číslo</label>
                        <div class="col-sm-8">
                            <select class="form-control" id="cislo" ref="cislo" onChange={this.checkCislo.bind(this)}>
                                <option value="">--Vyberte--</option>
                                <option value="J">Jednotné</option>
                                <option value="M">Množné</option>
                            </select>
                        </div>
                        <img ref="cislo_ok" src="images/happywiz.png" hidden="hidden" width={70}/>
                        <img ref="cislo_fail" src="images/sadwiz.png" hidden="hidden" width={70}/>
                    </div>:""}

                    {this.props.showInputs.pad?
                    <div class="form-group">
                        <label  class="col-sm-2 control-label" for="pad">Pád</label>
                        <div class="col-sm-8">
                            <select class="form-control" id="pad" ref="pad" onChange={this.checkPad.bind(this)}>
                                <option value="">--Vyberte--</option>
                                <option value="1">1. pád</option>
                                <option value="2">2. pád</option>
                                <option value="3">3. pád</option>
                                <option value="4">4. pád</option>
                                <option value="5">5. pád</option>
                                <option value="6">6. pád</option>
                                <option value="7">7. pád</option>
                            </select>
                        </div>
                        <img ref="pad_ok" src="images/happywiz.png" hidden="hidden" width={70}/>
                        <img ref="pad_fail" src="images/sadwiz.png" hidden="hidden" width={70}/>
                    </div>:""}

                    {this.props.showInputs.vzor?
                    <div class="form-group">
                        <label  class="col-sm-2 control-label" for="vzor">Vzor</label>
                        <div class="col-sm-8">
                            <select class="form-control" id="vzor" ref="vzor" onChange={this.checkVzor.bind(this)}>
                                {this.props.vzory.map((vzor)=>{
                                    return (
                                        <option key={vzor.key} value={vzor.value}>{vzor.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <img ref="vzor_ok" src="images/happywiz.png" hidden="hidden" width={70}/>
                        <img ref="vzor_fail" src="images/sadwiz.png" hidden="hidden" width={70}/>
                    </div>:""}
                </form>
        )
    }
}