import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import userService from "../../services/userService";
import {findUserInfo} from "../../actions/userActions";
import GridItem from "./gridItem";

class playerDashboard extends React.Component {

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

    render() {

        return (
            <div>
                <Header/>
                <div className={"container"}>
                    <h3 className={"text-center"}>Active</h3>
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

                    <h3 className={"text-center"}>Past</h3>
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
        tournamentList: state.userReducer.userInfo.tournamentList
    }
};


const dispatchToPropertyMapper = (dispatch) => {
    return {
        findUserInfo: (userId) => {
            userService.findUserInfo(userId)
                .then(userInfo =>
                          dispatch(findUserInfo(userInfo)))

        }
    }
};


export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(playerDashboard)
