import React from "react";
import Player from "../Player";

export default class Room extends React.Component {

    render() {
        let players = [];
        for (let p in this.props.players) {
            players.push(<Player key={p}/>);
        }

        let classname = "room";
        if (this.props.isAdjacent) {
            classname += " room-active";
        }

        return (
            <div className={classname} onClick={this.props.setLocation}>
                {players}
            </div>
        )
    }
};
