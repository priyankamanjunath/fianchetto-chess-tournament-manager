import React from 'react';
import Match from "./match";
import {connect} from "react-redux";
import {
    createRoundService, findAllMatchesForRoundService, findAllMatchesForTournamentService,
    findAllRoundsForTournamnetService,
    findAllRoundsService,
    updateRoundService
} from "../../../services/roundService";
import {
    createRoundAction, findAllMatchesForRoundsAction,
    findAllRoundsAction,
    findAllRoundsForTournamnetAction,
    updateRoundAction
} from "../../../actions/pairingActions";


const dispatchToPropertyMapper = (dispatch) => {
    return {
        findAllMatchesForRound : (roundid) => {

            findAllMatchesForRoundService(roundid)
                .then(matches =>
                    {
                        dispatch(findAllMatchesForRoundsAction(matches))
                    }
                )
        }

    }
}

const stateToPropertyMapper = (state) => {

    return {
        matches: state.roundReducer.matchesX,
    }
}

const pairL = require("swiss-pairing/index.js")

class PairingTableView extends React.Component {




    componentDidMount() {
        this.props.findAllMatchesForRound(this.props.roundid)
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        if(this.props.roundid !== prevProps.roundid) {
            this.props.findAllMatchesForRound(this.props.roundid)
        }

    }

    updateRound = (id, value) => {
        const roundMod = this.props.rounds.filter(rounds => rounds._id === this.props.roundid)[0];
        for(let i in roundMod.matchList){
            if(roundMod.matchList[i].id === id && roundMod.matchList[i].result !== value) {
                roundMod.matchList[i].result = value
            }
        }
        this.setState({
            round : roundMod

        })
    }

    render(){
        return (
            <div className="m-4">
                <div className="mx-5">
                    <div className={"row"}>
                        <div className={"col-8"}>
                            <h4>Round : {this.props.roundid}</h4>
                        </div>
                        <div className={"col-2 text-right"}>
                            <button
                                className={"btn btn-info"}
                                onClick={() =>
                                    console.log("clicked")

                                }>
                                Save Changes
                            </button>
                        </div>
                        <div>
                            <button
                                className={"btn btn-info"}
                                onClick={() => {

                                }
                                }>

                                Click me
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
                            this.props.matches.map(function (match, index) {
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
export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(PairingTableView)
