import React from 'react'
import {connect} from 'react-redux'
import NotificationSystem from 'react-notification-system'
import {fetchNouns} from '../actions/nounActions'
import {setActiveNoun} from  '../actions/nounActions'
import {setLevel} from  '../actions/nounActions'
import {resetForm} from '../actions/formActions'
import {reviveDragon} from '../actions/fightActions'
import update from 'react-addons-update'

import ActiveNoun from '../components/ActiveNoun'
import FightPlace from '../components/FightPlace'
import SettingsModal from '../components/SettingsModal'
import Status from '../components/Status'
import ChangeLevelButtons from '../components/ChangeLevelButtons'

@connect((store)=>{
    return{
        nouns: store.nouns.nouns,
        index: store.nouns.index +1,
        count: store.nouns.count,
        level: store.nouns.level +1
    };
})
export default class Layout extends React.Component {
    /**
     * Component constructor
     */
    constructor(){
        super();
        this.notificationSystem = null;
    }

    /**
     * Called when component will mount - dispatches actions to insert default data into application
     */
    componentWillMount(){
        const defaultData = [
            [
            {
                text: "pes",
                pad: 1,
                rod: "M",
                vzor: "Pán",
                cislo: "J",
                zivotnost: "Ž"
            },
            {
                text: "kočkám",
                pad: 3,
                rod: "Ž",
                vzor: "Žena",
                cislo: "M"
            },
            {
                text: "na poli",
                pad: 6,
                rod: "S",
                vzor: "Moře",
                cislo: "J"
            },
            {
                text: "na stole",
                pad: 6,
                rod: "M",
                vzor: "Hrad",
                cislo: "J",
                zivotnost: "N"
            },
            {
                text: "u domů",
                pad: 2,
                rod: "M",
                vzor: "Hrad",
                cislo: "M",
                zivotnost: "N"
            },
            {
                text: "pro maminku",
                pad: 4,
                rod: "Ž",
                vzor: "Žena",
                cislo: "J"
            },
            {
                text: "v televizi",
                pad: 6,
                rod: "Ž",
                vzor: "Růže",
                cislo: "J"
            },
            {
                text: "Petře!",
                pad: 5,
                rod: "M",
                vzor: "Pán",
                cislo: "J",
                zivotnost: "Ž"
            },
            {
                text: "hrát hry",
                pad: 4,
                rod: "Ž",
                vzor: "Žena",
                cislo: "M"
            },
            {
                text: "otevřít okno",
                pad: 4,
                rod: "S",
                vzor: "Město",
                cislo: "J"
            },
        ],
            [
                {
                    text: "s koťaty",
                    pad: 7,
                    rod: "S",
                    vzor: "Kuře",
                    cislo: "M"
                },
                {
                    text: "pro tatínka",
                    pad: 4,
                    rod: "M",
                    vzor: "Pán",
                    cislo: "J",
                    zivotnost: "Ž"
                },
                {
                    text: "bez cukru",
                    pad: 2,
                    rod: "M",
                    vzor: "Hrad",
                    cislo: "J",
                    zivotnost: "N"
                },
                {
                    text: "dřevěné zábradlí",
                    pad: 1,
                    rod: "S",
                    vzor: "Stavení",
                    cislo: "J"
                },
                {
                    text: "mít radost",
                    pad: 4,
                    rod: "Ž",
                    vzor: "Kost",
                    cislo: "J"
                },
                {
                    text: "sbírat hřiby",
                    pad: 4,
                    rod: "M",
                    vzor: "Hrad",
                    cislo: "M",
                    zivotnost: "N"
                },
                {
                    text: "dobrý přítel",
                    pad: 1,
                    rod: "M",
                    vzor: "Muž",
                    cislo: "J",
                    zivotnost: "Ž"
                },
                {
                    text: "proti kašli",
                    pad: 3,
                    rod: "M",
                    vzor: "Stroj",
                    cislo: "J",
                    zivotnost: "N"
                },
                {
                    text: "do doupěte",
                    pad: 2,
                    rod: "S",
                    vzor: "Kuře",
                    cislo: "J"
                },
                {
                    text: "na nebi",
                    pad: 6,
                    rod: "S",
                    vzor: "Moře",
                    cislo: "J"
                }
            ],
            [
                {
                    text: "mezi kamarády",
                    pad: 7,
                    rod: "M",
                    vzor: "Pán",
                    cislo: "M",
                    zivotnost: "Ž"
                },
                {
                    text: "u řeky",
                    pad: 2,
                    rod: "Ž",
                    vzor: "Žena",
                    cislo: "J"
                },
                {
                    text: "recitovat básně",
                    pad: 4,
                    rod: "Ž",
                    vzor: "Píseň",
                    cislo: "M",
                },
                {
                    text: "na tabuli",
                    pad: 6,
                    rod: "Ž",
                    vzor: "Růže",
                    cislo: "J"
                },
                {
                    text: "moudrý král",
                    pad: 1,
                    rod: "M",
                    vzor: "Muž",
                    cislo: "J",
                    zivotnost: "Ž"
                },
                {
                    text: "narýsovat čtverec",
                    pad: 4,
                    rod: "M",
                    vzor: "Stroj",
                    cislo: "J",
                    zivotnost: "N"
                },
                {
                    text: "pozorovat ptáky",
                    pad: 4,
                    rod: "M",
                    vzor: "Pán",
                    cislo: "M",
                    zivotnost: "Ž"
                },
                {
                    text: "mezinárodní letiště",
                    pad: 1,
                    rod: "S",
                    vzor: "Moře",
                    cislo: "J"
                },
                {
                    text: "v neděli",
                    pad: 6,
                    rod: "Ž",
                    vzor: "Růže",
                    cislo: "J"
                },
                {
                    text: "s malými ptáčaty",
                    pad: 7,
                    rod: "S",
                    vzor: "Kuře",
                    cislo: "M"
                }
            ],
            [
                {
                    text: "pod židlí",
                    pad: 7,
                    rod: "Ž",
                    vzor: "Růže",
                    cislo: "J"
                },
                {
                    text: "několik slov",
                    pad: 2,
                    rod: "S",
                    vzor: "Město",
                    cislo: "M"
                },
                {
                    text: "barevní motýli",
                    pad: 1,
                    rod: "M",
                    vzor: "Pán",
                    cislo: "M",
                    zivotnost: "Ž"
                },
                {
                    text: "podél řeky",
                    pad: 2,
                    rod: "Ž",
                    vzor: "Žena",
                    cislo: "J"
                },
                {
                    text: "mnoho řečí",
                    pad: 2,
                    rod: "Ž",
                    vzor: "Kost",
                    cislo: "M"
                },
                {
                    text: "okolo rybníka",
                    pad: 2,
                    rod: "M",
                    vzor: "Hrad",
                    cislo: "J",
                    zivotnost: "N"
                },
                {
                    text: "číst knihu",
                    pad: 4,
                    rod: "Ž",
                    vzor: "Žena",
                    cislo: "J"
                },
                {
                    text: "jít na hory",
                    pad: 4,
                    rod: "Ž",
                    vzor: "Žena",
                    cislo: "M"
                },
                {
                    text: "zabít draka",
                    pad: 4,
                    rod: "M",
                    vzor: "Pán",
                    cislo: "J",
                    zivotnost: "Ž"
                },
                {
                    text: "s kyselým zelím",
                    pad: 7,
                    rod: "S",
                    vzor: "Stavení",
                    cislo: "J"
                }
            ],
            [
                {
                    text: "ve skříni",
                    pad: 6,
                    rod: "Ž",
                    vzor: "Píseň",
                    cislo: "J"
                },
                {
                    text: "řídit se pravidly",
                    pad: 7,
                    rod: "S",
                    vzor: "Město",
                    cislo: "M"
                },
                {
                    text: "Eliško!",
                    pad: 5,
                    rod: "Ž",
                    vzor: "Žena",
                    cislo: "J"
                },
                {
                    text: "v noci",
                    pad: 6,
                    rod: "Ž",
                    vzor: "Kost",
                    cislo: "J"
                },
                {
                    text: "s rozsvícenými světly",
                    pad: 7,
                    rod: "S",
                    vzor: "Město",
                    cislo: "M"
                },
                {
                    text: "čestí spisovatelé",
                    pad: 1,
                    rod: "M",
                    vzor: "Muž",
                    cislo: "M",
                    zivotnost: "Ž"
                },
                {
                    text: "učit se cizí jazyk",
                    pad: 4,
                    rod: "M",
                    vzor: "Hrad",
                    cislo: "J",
                    zivotnost: "N"
                },
                {
                    text: "vidět lvy",
                    pad: 4,
                    rod: "M",
                    vzor: "Pán",
                    cislo: "M",
                    zivotnost: "Ž"
                },
                {
                    text: "sypat slepicím",
                    pad: 3,
                    rod: "Ž",
                    vzor: "Růže",
                    cislo: "M"
                },
                {
                    text: "babičce",
                    pad: 3,
                    rod: "Ž",
                    vzor: "Žena",
                    cislo: "J"
                }
            ]
        ];
        this.props.dispatch(fetchNouns(defaultData));
        this.props.dispatch(setActiveNoun());
    }

    /**
     * Called when component did mount - initializes notification system
     */
    componentDidMount(){
        this.notificationSystem = this.refs.notificationSystem;
    }

    /**
     * Adds notification to bottom|center of a screen
     * @param title
     * @param message
     * @param level
     * @param children
     * @param autoDissmiss
     */
    addNotification(title, message, level, children, autoDissmiss){
        if(!autoDissmiss && children != null){
            children = update(children.props.children,{$push: [<button key="btn" class="btn btn-warning">Dobře</button>]});
        }
        this.refs.notificationSystem.addNotification({
            title: title,
            message: message,
            level: level,
            position: 'bc',
            dismissible: true,
            autoDismiss: autoDissmiss? 4: 0,
            children: children
        })
    }

    /**
     * Dispatches actions to change level (set of nouns)
     * @param event
     */
    changeLevel(event){
        this.props.dispatch(setLevel(event.target.value));
        this.props.dispatch(setActiveNoun());
        this.props.dispatch(resetForm(true));
        this.props.dispatch(reviveDragon());
    }

    /**
     * Renders whole layout
     * @returns {XML}
     */
    render(){
        const {index, level, count} = this.props;
        return(
            <div>
                <h1>Určování podstatných jmen</h1>
                <FightPlace/>
                <div id="status">
                    <Status index={index} level={level} count={count}/>
                    <ChangeLevelButtons level={level} nounsLength={this.props.nouns.length} changeLevel={this.changeLevel.bind(this)}/>
                    <ActiveNoun addNotification={this.addNotification.bind(this)}/>
                </div>
                <NotificationSystem ref="notificationSystem" />
                <SettingsModal/>
            </div>
        );
    }
}
