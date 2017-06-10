import React from 'react'
import ReactDOM from 'react-dom'
import {fetchNouns} from '../actions/nounActions'
import {setActiveNoun} from '../actions/nounActions'
import {connect} from 'react-redux'

@connect(()=>{
    return{
        //must be there to have dispatch function
    }
})
export default class LoadFile extends React.Component{

    /**
     * Component constructor
     * @param props
     */
    constructor(props){
        super(props);
    }

    /**
     * Called when component did mount - hides load file error
     */
    componentDidMount(){
        const formatError = ReactDOM.findDOMNode(this.refs.formaterror);
        formatError.style.visibility = "hidden";
    }

    /**
     * Handles file selection and visibility of errors
     */
    handleFileSelect() {
        const formatError = ReactDOM.findDOMNode(this.refs.formaterror);
        const fileInput = ReactDOM.findDOMNode(this.refs.file);
        const files = fileInput.files;

        formatError.style.visibility = "hidden";
        document.getElementById('progress_bar').className = '';
        if(files[0].name.indexOf(".json") === -1){
            formatError.style.visibility = "visible";
        }else{
            this.loadDataFromFile();
        }
    }

    /**
     * Loads file from import
     */
    loadDataFromFile() {
        const fileInput = ReactDOM.findDOMNode(this.refs.file);
        const files = fileInput.files;
        let data = "";
        //only one file can be chosen
        this.readFileAndImport(files[0]);
    }

    /**
     * Reads file and dispatches action to import data from file into application
     * @param file
     */
    readFileAndImport(file) {
        // Reset progress indicator on new file selection.
        let progress = ReactDOM.findDOMNode(this.refs.percent);
        console.log(progress);
        progress.style.width = '0';
        progress.textContent = '0%';

        var reader = new FileReader();
        reader.onload = (loadedEvent) => {
            let rawData = loadedEvent.target.result;
            let data = JSON.parse(rawData);
            progress.style.width = '290px';
            progress.textContent = '100%';

            this.props.dispatch(fetchNouns(data));
            this.props.dispatch(setActiveNoun());
        };
        reader.onprogress = this.updateProgress.bind(this);
        reader.onloadstart = () => {
            document.getElementById('progress_bar').className = 'loading';
        };
        reader.readAsText(file);
    }

    /**
     * Updates progress bar
     * @param evt
     */
    updateProgress(evt) {
        // evt is an ProgressEvent.
        let progress = ReactDOM.findDOMNode(this.refs.percent);
        if (evt.lengthComputable) {
            var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
            // Increase the progress bar length.
            if (percentLoaded < 100) {
                progress.style.width = percentLoaded + '%';
                progress.textContent = percentLoaded + '%';
            }
        }
    }

    /**
     * Renders load file component
     * @returns {XML}
     */
    render(){
        // Check for the various File API support.
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            // All the File APIs are supported.
            return (
                <div class="import">
                    <br/>
                    <label for="file">Chci importovat vlastní soubor</label>
                    <input class="btn btn-success btn-file" ref="file" type="file"
                           onChange={this.handleFileSelect.bind(this)}/>
                    <div id="progress_bar">
                        <div ref="percent" class="percent">0%</div>
                    </div>
                    <span ref="formaterror" class="error">Vybraný soubor nemá požadovaný formát (.json)</span>
                </div>
            )
        } else {
            return(
                <div>
                    The File APIs are not fully supported in this browser.
                </div>
            )
        }



    }
}