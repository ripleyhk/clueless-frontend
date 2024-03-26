import React from "react";
import Room from "./Locations/Room";
import Hallway from "./Locations/Hallway";

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            turn: 0,
            order: ["player1", "player2"],
            players: {
                player1: {
                    loc: 'room1',
                    color: 'red'
                },
                player2: {
                    loc: 'room2',
                    color: 'blue'
                },
            }
        }

        this.locations = [
            {id: 'room1', type: 'room', align: 'none', adj: ["hall1", "hall3"]},
            {id: 'hall1', type: 'hall', align: 'horizontal', adj: ["room1", "room2"]},
            {id: 'room2', type: 'room', align: 'none', adj: ["hall1", "hall2", "hall4"]},
            {id: 'hall2', type: 'hall', align: 'horizontal', adj: ["room2", "room3"]},
            {id: 'room3', type: 'room', align: 'none', adj: ["hall2", "hall5"]},

            {id: 'hall3', type: 'hall', align: 'vertical', adj: ["room1", "room4"]},
            {id: 'space1', type: '', align: '', adj: []},
            {id: 'hall4', type: 'hall', align: 'vertical', adj: ["room2", "room5"]},
            {id: 'space2', type: '', align: '', adj: []},
            {id: 'hall5', type: 'hall', align: 'vertical', adj: ["room3", "room6"]},

            {id: 'room4', type: 'room', align: 'none', adj: ["hall3", "hall6", "hall8"]},
            {id: 'hall6', type: 'hall', align: 'horizontal', adj: ["room4", "room5"]},
            {id: 'room5', type: 'room', align: 'none', adj: ["hall4", "hall6", "hall7", "hall9"]},
            {id: 'hall7', type: 'hall', align: 'horizontal', adj: ["room5", "room6"]},
            {id: 'room6', type: 'room', align: 'none', adj: ["hall5", "hall7", "hall10"]},

            {id: 'hall8', type: 'hall', align: 'vertical', adj: ["room4", "room7"]},
            {id: 'space3', type: '', align: '', adj: []},
            {id: 'hall9', type: 'hall', align: 'vertical', adj: ["room5", "room8"]},
            {id: 'space4', type: '', align: '', adj: []},
            {id: 'hall10', type: 'hall', align: 'vertical', adj: ["room6", "room9"]},

            {id: 'room7', type: 'room', align: 'none', adj: ["hall8", "hall11"]},
            {id: 'hall11', type: 'hall', align: 'horizontal', adj: ["room7", "room8"]},
            {id: 'room8', type: 'room', align: 'none', adj: ["hall9", "hall11", "hall12"]},
            {id: 'hall12', type: 'hall', align: 'horizontal', adj: ["room8", "room9"]},
            {id: 'room9', type: 'room', align: 'none', adj: ["hall10", "hall12"]},

        ];
    }

    getLocationById(id) {
        let location = {};
        for (let loc of this.locations) {
            if (loc.id === id) {
                return loc;
            }
        }
        return location;
    }

    getPlayers(loc) {
        let players = [];
        for (const[player, value] of Object.entries(this.state.players)) {
            if (this.inLocation(value, loc)) {
                players.push(value);
            }
        }
        return players;
    }

    inLocation(player, loc) {
        return player.loc === loc;
    }

    isAdjacent(loc) {
        let player = this.getCurrentPlayer();
        let curr = this.getLocationById(player.loc);
        return curr.adj.includes(loc);
    }

    setLocation(loc) {
        if (this.isAdjacent(loc)) {
            let players = this.state.players;
            let id = this.state.order[this.state.turn];
            let player = this.getCurrentPlayer();
            player.loc = loc;
            players[id] = player;
            this.setState({players: players});
            this.updateTurn();
        }
    }

    updateTurn() {
        let turn = this.state.turn;
        turn += 1;
        turn = turn % this.state.order.length;
        this.setState({turn: turn});
    }

    getCurrentPlayer() {
        let playerId = this.state.order[this.state.turn];
        return this.state.players[playerId];
    }

    render() {

        let locItems = [];
        let curr = this.getCurrentPlayer();
        for (let loc of this.locations) {
            let players = this.getPlayers(loc.id);
            let adjacent = this.isAdjacent(loc.id);
            let setLoc = () => this.setLocation(loc.id);
            if (loc.type === 'room') {
                locItems.push(<Room key={loc.id} id={loc.id} players={players} isAdjacent={adjacent} setLocation={setLoc} current={curr}/>)
            } else if (loc.type === 'hall') {
                locItems.push(<Hallway key={loc.id} id={loc.id} align={loc.align} players={players} isAdjacent={adjacent} setLocation={setLoc} current={curr}/>)
            } else {
                locItems.push(<div/>)
            }
        }

        return (
            <div key="board" className="board">
                {locItems}
            </div>
        )
    }
};
