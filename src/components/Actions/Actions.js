import React from "react";
import { inject, observer } from 'mobx-react';


class Actions extends React.Component {
    constructor(props) {
        super(props);
        this.store = this.props.store.appStore;

        this.suggest = () => { this.store.startSuggestion() }
        this.accuse = () => { this.store.startAccusation() }
    }

    render() {
        return (
            <div key="actions" className="actions">
                <div className="action" id="suggest" onClick={this.suggest}>Suggest</div>
                <div className="action" id="accuse" onClick={this.accuse}>Accuse</div>
            </div>
        )
    }
} export default inject('store') (observer(Actions));
