import React from "react";
import Player from "../Player";

export default class Hallway extends React.Component {

    render() {
        let classname = "";
        if (this.props.align) {
            classname += this.props.align;
        }
        if (this.props.isAdjacent) {
            classname += " hallway-active";
        }

        let players = [];
        for (let p in this.props.players) {
            players.push(<Player/>);
        }

        return (
            <div className={`hallway ${classname}`} onClick={this.props.setLocation}>
                {players}
            </div>
        )
    }
};
