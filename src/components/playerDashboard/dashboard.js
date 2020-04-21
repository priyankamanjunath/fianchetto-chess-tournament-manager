import React from "react";
import {connect} from "react-redux";
import {findTournamentsForUser} from "../../actions/userActions"
import GridItem from "./gridItem";
import tournamentService from "../../services/tournamentService";

class PlayerActivity extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                tournamentList: []
            }
        }
    }

    componentDidMount() {
        this.props.findUserInfo(this.props.userId)
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {

    }

    render() {
        return (
            <div>
                <div className={"container"}>
                    <br/>
                    <h2 style={{color: "#5D6D7E"}}>Dashboard</h2>
                    <h3 className={"text-center"}>Active Tournaments</h3>
                    <div className="border-top my-3"/>
                    <div className={"container col-11"}>
                        <div className={"row"}>
                            {
                                this.props.tournamentList.map
                                (
                                    (item, index) => item.inProgress &&
                                    <GridItem
                                        key = {index}
                                        userId = {this.props.userId}
                                        tournament = {item}
                                    />
                                )
                            }
                        </div>
                    </div>

                    <h3 className={"text-center"}>Past Tournaments</h3>
                    <div className="border-top my-3"/>
                    <div className={"container col-11"}>
                        <div className={"row"}>
                            {
                                this.props.tournamentList.map
                                (
                                    (item, index) => !item.inProgress &&
                                      <GridItem
                                          key = {index}
                                          userId = {this.props.userId}
                                          tournament = {item}
                                      />
                                )
                            }
                        </div>
                    </div>
                </div>
           </div>
       )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        tournamentList: state.userReducer.userTournament
    }
};


const dispatchToPropertyMapper = (dispatch) => {
    return {
        findUserInfo: (userId) => {
            tournamentService.findTournamentsForUser(userId)
                .then(userTour =>
                      {
                          dispatch(findTournamentsForUser(userTour))
                      }
                )
        }
    }
};


export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(PlayerActivity)
