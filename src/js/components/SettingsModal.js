import React from 'react'
import Settings from '../components/Settings'

export default class SettingsModal extends React.Component {
    /**
     * Component constructor
     * @param props
     */
    constructor(props){
        super(props);
    }

    /**
     * Shows modal when component did mount
     */
    componentDidMount(){
        $('#settingsModal').modal('show');
    }

    /**
     * Renders settings modal component
     * @returns {XML}
     */
    render(){
        return(
            <div class="modal"role="dialog" id="settingsModal" data-backdrop="static" data-keyboard="false">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Nastavte, co budete chtít určovat.</h4>
                        </div>
                        <Settings/>
                    </div>
                </div>
            </div>
        );
    }
}
