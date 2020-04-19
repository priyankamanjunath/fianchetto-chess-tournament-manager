import React from 'react';
import {connect} from "react-redux";
import Link from "react-router-dom/Link";

const stateToPropertyMapper = (state) => {

    return {
        rounds: state.roundReducer.rounds
    }
}

class PairingHeader extends React.Component {

    state = {
        round : {
            "matchList": [

                {
                    "id" : "1",
                    "white" : "PW1",
                    "black" : "PB1",
                    "result" : "NA",
                    "arbiter" : "AR1"
                },
                {
                    "id" : "2",
                    "white" : "PW1",
                    "black" : "PB1",
                    "result" : "NA",
                    "arbiter" : "AR1"
                },
                {
                    "id" : "3",
                    "white" : "PW1",
                    "black" : "PB1",
                    "result" : "NA",
                    "arbiter" : "AR1"
                },
                {
                    "id" : "4",
                    "white" : "PW1",
                    "black" : "PB1",
                    "result" : "NA",
                    "arbiter" : "AR1"
                },
                {
                    "id" : "5",
                    "white" : "PW1",
                    "black" : "PB1",
                    "result" : "NA",
                    "arbiter" : "AR1"
                },
                {
                    "id" : "6",
                    "white" : "PW1",
                    "black" : "PB1",
                    "result" : "NA",
                    "arbiter" : "AR1"
                },
                {
                    "id" : "6",
                    "white" : "PW1",
                    "black" : "PB1",
                    "result" : "NA",
                    "arbiter" : "AR1"
                }
            ],

            "tournamentId": "t1"
        }
    }

    componentDidMount() {

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.rounds !== this.props.rounds){
            console.log(this.props.userid)
        }
    }

    render(){
        return (
            <div className="m-4">
                <div className="mx-5">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link bg-warning" href="#">Rounds</a>
                        </li>
                        {
                            this.props.rounds.map(function (round, index) {
                                return <li className={"nav-item"}>
                                    <Link className="nav-link"
                                          to={`/user/${this.props.userid}/tournament/${this.props.tid}/pairings/round/${round._id}`}>
                                        {round._id}
                                    </Link>
                                </li>

                            }, this)

                        }

                        <button
                            className={"nav-item btn btn-primary"}
                            onClick={() => this.props.createRoundDispatcher(this.state.round)}>
                            <i className={"fas fa-plus"}/>
                        </button>
                    </ul>
                </div>
            </div>

        )
    }
}

// export default PairingHeader

export default connect(stateToPropertyMapper, "")(PairingHeader)
