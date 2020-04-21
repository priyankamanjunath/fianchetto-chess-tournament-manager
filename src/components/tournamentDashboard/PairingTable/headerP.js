import React from 'react';
import {connect} from "react-redux";
import Link from "react-router-dom/Link";

const stateToPropertyMapper = (state) => {

    return {
        rounds: state.roundReducer.rounds
    }
}

class PairingHeader extends React.Component {


    componentDidMount() {
        this.props.findAllRoundsDispatcher(this.props.tid)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.rounds.length !== this.props.rounds.length){
            this.props.findAllRoundsDispatcher(this.props.tid)
        }
        // if(prevProps.roundsTable.length !== this.props.roundsTable.length){
        //     this.props.findAllRoundsDispatcher(this.props.tid)
        // }
    }

    render(){
        return (
            <div className="m-4">
                <div className="mx-5">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link className="nav-link bg-warning"
                                  to={`/user/${this.props.userid}/tournament/${this.props.tid}/pairings`} >Rounds</Link>
                        </li>
                        {

                            this.props.rounds.map(function (round, index) {
                                return <li className={"nav-item"}>
                                    <Link className="nav-link"
                                          to={`/user/${this.props.userid}/tournament/${this.props.tid}/pairings/round/${round.id}`}>
                                        {round.name}
                                    </Link>
                                </li>

                            }, this)

                        }

                        <button
                            className={"nav-item btn btn-primary"}
                            onClick={
                                () => {
                                    console.log(this.props.tid + "inside headerP")
                                    this.props.createRoundDispatcher(this.props.tid, this.props.rounds.length + 1)
                                }
                            }>
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
