import React from 'react';
import Match from "./match";
import {connect} from "react-redux";

const stateToPropertyMapper = (state) => {

    return {
        rounds: state.roundReducer.rounds
    }
}



class PairingTableView extends React.Component {


    state = {
        round : this.props.rounds.filter(rounds => rounds._id === this.props.roundid)[0]
    };

    updateRound(id, value) {
        for(let match in this.props.rounds) {

        }

    }


    componentDidMount() {
        this.state.round = this.props.rounds.filter(rounds => rounds._id === this.props.roundid)[0]

    }

    render(){
        return (
            <div className="m-4">
                <div className="mx-5">
                    <div className={"row"}>
                        <div className={"col-10"}>
                            <h4>Round : {this.props.roundid}</h4>
                        </div>
                        <div className={"col-2 text-right"}>
                            <button
                                className={"btn btn-info"}
                                onClick={() =>
                                    this.updateRound(1,2)// this.props.updateRoundDispatcher(this.props.roundid, this.state.round)
                                }>
                                Save Changes
                            </button>
                        </div>
                    </div>
                    <table className="table table-striped">
                        <thead className={"bg-primary text-white"}>
                        <tr>
                            <td scope={"col"}>White</td>
                            <td scope={"col"}>Black</td>
                            <td scope={"col"}>Result</td>
                            <td scope={"col"}>Arbiter</td>
                            <td scope={"col"}>Id</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.rounds.length !== 0  &&
                            this.props.rounds.filter(rounds => rounds._id === this.props.roundid)[0]
                            .matchList.map(function (match, index) {
                                return <Match
                                    key={index}
                                    match = {match}
                                />
                            }, this)
                        }
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

// export default PairingTableView
export default connect(stateToPropertyMapper, "")(PairingTableView)
