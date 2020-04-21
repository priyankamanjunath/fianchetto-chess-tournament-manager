import React from 'react';
import Match from "./match";
import {connect} from "react-redux";
import {
    findAllMatchesForRoundService,
    updateRoundService
} from "../../../services/roundService";
import {
    findAllMatchesForRoundsAction,
    updateMatchesXAction,
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
        },
        updateAllMatchesForRoundDispatcher : (roundid, matches) => {
            console.log(matches)
            updateRoundService(roundid,matches)
                .then(updateMatchesXAction(matches))

        }

    }
}

const stateToPropertyMapper = (state) => {

    return {
        matches: state.roundReducer.matchesX,
    }
}

const equals = ( x, y ) => {
    // If both x and y are null or undefined and exactly the same
    if ( x === y ) {
        return true;
    }

    // If they are not strictly equal, they both need to be Objects
    if ( ! ( x instanceof Object ) || ! ( y instanceof Object ) ) {
        return false;
    }

    // They must have the exact same prototype chain, the closest we can do is
    // test the constructor.
    if ( x.constructor !== y.constructor ) {
        return false;
    }

    for ( var p in x ) {
        // Inherited properties were tested using x.constructor === y.constructor
        if ( x.hasOwnProperty( p ) ) {
            // Allows comparing x[ p ] and y[ p ] when set to undefined
            if ( ! y.hasOwnProperty( p ) ) {
                return false;
            }

            // If they have the same strict value or identity then they are equal
            if ( x[ p ] === y[ p ] ) {
                continue;
            }

            // Numbers, Strings, Functions, Booleans must be strictly equal
            if ( typeof( x[ p ] ) !== "object" ) {
                return false;
            }

            // Objects and Arrays must be tested recursively
            if ( !equals( x[ p ],  y[ p ] ) ) {
                return false;
            }
        }
    }

    for ( p in y ) {
        // allows x[ p ] to be set to undefined
        if ( y.hasOwnProperty( p ) && ! x.hasOwnProperty( p ) ) {
            return false;
        }
    }
    return true;
}


class PairingTableView extends React.Component {


    state = {
        matches : this.props.matches
    }

    componentDidMount() {
        this.props.findAllMatchesForRound(this.props.roundid)
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        if(this.props.roundid !== prevProps.roundid ) {
            this.props.findAllMatchesForRound(this.props.roundid)
        }
        if(!equals(this.props.matches ,prevProps.matches)){
            this.props.findAllMatchesForRound(this.props.roundid)
        }



    }

    updateRound = (id, value) =>
    {
        let matchesLocal = this.props.matches;
        for(let i in matchesLocal){
            if(matchesLocal[i].id === id) {
                matchesLocal[i].result = value
            }
        }
        this.setState({
            matches : matchesLocal
        })
    }

    render(){
        return (
            <div className="m-4">
                <div className="mx-5">

                    <table className="table table-striped">
                        <thead className={"bg-primary text-white"}>
                        <tr>
                            <td scope={"col"}>White</td>
                            <td scope={"col"}>Black</td>
                            <td scope={"col"}>Result</td>
                            <td scope={"col"}>Id</td>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            this.props.matches.map(function (match, index) {
                                return <Match
                                    key = {index}
                                    match = {match}
                                    updateRound = {this.updateRound}
                                />
                            }, this)
                        }

                        </tbody>
                    </table>
                    <div className={""}>
                        <button
                            className={"btn btn-info"}
                            onClick={() =>
                                this.props.updateAllMatchesForRoundDispatcher(this.props.roundid,this.state.matches)
                            }>
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

// export default PairingTableView
export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(PairingTableView)
