import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import PairingTableView from "../components/tournamentDashboard/PairingTable/pairingTableView";
import PairingHeader from "../components/tournamentDashboard/PairingTable/headerP";

import {connect} from "react-redux";
import {createRoundService, findAllRoundsService, updateRoundService} from "../services/roundService";
import {createRoundAction, findAllRoundsAction, updateRoundAction} from "../actions/pairingActions";

const stateToPropertyMapper = (state) => {
    return {
        rounds: state.roundReducer.rounds
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findAllRoundsDispatcher : () => {
            findAllRoundsService()
                .then(rounds =>
                    {
                        dispatch(findAllRoundsAction(rounds))
                    }
                )
        },

        createRoundDispatcher: (round) => {
            createRoundService(round)
                .then((round) => dispatch(createRoundAction(round)))
        },

        updateRoundDispatcher: (roundid, round) => {
            updateRoundService(roundid, round)
                .then(status => dispatch(updateRoundAction(roundid, round)))
        }



    }
}

class PairingContainer extends React.Component
{

    componentDidMount() {
        this.props.findAllRoundsDispatcher()
    }


    render()
    {
        return(
            <div>
                <PairingHeader
                    rounds = {this.props.rounds}
                    userid = {this.props.userid}
                    tid = {this.props.tid}
                    createRoundDispatcher = {this.props.createRoundDispatcher}

                />

                <Route
                    exact path = "/user/:userid/tournament/:tid/pairings"
                    render = {
                        () =>
                            <div className="m-4">
                                <div className={"mx-5"}>
                                    <h1>Click on the plus sign above to add rounds.</h1>
                                    <h1>Click on the rounds above to view pairings.</h1>
                                </div>
                            </div>
                    }
                />
                <Route
                    path = "/user/:userid/tournament/:tid/pairings/round/:roundid"
                    render = {
                        (props) =>
                            <div>
                                <PairingTableView
                                    rounds = {this.props.rounds}
                                    roundid = {props.match.params.roundid}
                                    userid = {this.props.userid}
                                    tid = {this.props.tid}

                                    updateRoundDispatcher = {this.props.updateRoundDispatcher}
                                />
                            </div>
                    }
                />
            </div>

        )
    }
}


// export default PairingContainer

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(PairingContainer)
