import React from "react";
import {findTournamentInfo} from "../../../actions/tournamentActions";
import tournamentService from "../../../services/tournamentService"
import {connect} from "react-redux";

class TournamentInfo extends React.Component{

    state = {
        image : "https://upload.wikimedia.org/wikipedia/commons/c/c4/Sahovska_olimpiada_Bled_2002_1.JPG"
    }

    componentDidMount() {
        console.log("tournament id :", this.props.tournamentId);
        this.props.findTournamentInfo(this.props.tournamentId)
    }


    render(){
        return(
            <div className="container p-2">
                <div className="card">

                    <img src={this.state.image} className="card-img-top" alt="..." height="500"
                         width="42"/>
                    <div className="card-body">

                        <h5 className="card-title">{this.props.tournamentInfo.name}</h5>

                        <p className="card-text">Location: {this.props.tournamentInfo.location}</p>

                        <p className="card-text">Active: &nbsp;
                            {this.props.tournamentInfo.inProgress && "Yes"}
                            {!this.props.tournamentInfo.inProgress && "No"}
                        </p>
                        <p>
                            Started on: {this.props.tournamentInfo.startDate.substring(0,10)}
                            <br/>
                            Ended on: {this.props.tournamentInfo.endDate.substring(0,10)}
                        </p>
                        <p>
                            Prize: {this.props.tournamentInfo.prize}
                        </p>
                        <p>
                            Winner: {this.props.tournamentInfo.winner}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}


const stateToPropertyMapper = (state) => {
    return {
        tournamentInfo: state.tournamentReducer.tournamentInfo
    }
};


const dispatchToPropertyMapper = (dispatch) => {
    return {
        findTournamentInfo: (tId) => {
            tournamentService.findTournamentInfo(tId)
                .then(tournamentInfo =>
                          dispatch(findTournamentInfo(tournamentInfo)))

        }
    }
};

export default connect(stateToPropertyMapper, dispatchToPropertyMapper) (TournamentInfo)
