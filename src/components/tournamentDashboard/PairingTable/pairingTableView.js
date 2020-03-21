import React from 'react';
import Match from "./match";
import Round from "./round";
class PairingTableView extends React.Component {


    state = {
        rounds : [1,2,3,4,5]
    }

    render(){

        return (
            <div className="m-4">
                <div className="mx-5">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Round 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Round 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Round 3</a>
                    </li>
                    <button className={"nav-item btn btn-primary"}>
                        <i className={"fas fa-plus"}></i>
                    </button>
                </ul>
                </div>
            {
                this.state.rounds.map(function (round, index) {
                    return <Round
                        key = {index}
                        round = {round}
                    />
                }, this)
            }
            </div>
        )



    }


}


export default PairingTableView
