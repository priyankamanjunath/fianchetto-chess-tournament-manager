import React from "react";
import Header from "./header";
import Grid from "./grid";
import ParticlesBg from "particles-bg";
import {connect} from "react-redux";
import userService from "../../services/userService";
import {findUserInfo} from "../../actions/userActions";
import GridItem from "./gridItem";

class Dashboard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                tournamentList: []
            }
        }
    }

    componentDidMount() {
        // this.props.findUserInfo(this.props.userId)
    }

    render() {
        let config = {
            num: [4, 7],
            rps: 0.1,
            radius: [5, 40],
            life: [1.5, 3],
            v: [2, 3],
            tha: [-50, 50],
            alpha: [0.6, 0],
            scale: [.1, 0.9],
            // body: icon,
            position: "all",
            //color: ["random", "#ff0000"],
            cross: "dead",
            random: 10
        };
        return (
            <div>
                <Header/>
                <div className={"container"}>
                    <h3 className={"text-center"}>Active</h3>
                    <div className="border-top my-3"/>
                    <div className={"container col-11"}>
                        <div className={"row"}>
                            {
                                this.props.tournamentList.map(item =>
                                    item.inProgress &&
                                    <GridItem
                                        userId = {this.props.userId}
                                        tournament = {item}/>
                                )
                            }
                        </div>
                    </div>

                    <h3 className={"text-center"}>Past</h3>
                    <div className="border-top my-3"/>
                    <div className={"container col-11"}>
                        <div className={"row"}>
                            {
                                this.props.tournamentList.map(item =>
                                                                  !item.inProgress &&
                                                                  <GridItem
                                                                      userId = {this.props.userId}
                                                                      tournament = {item}/>
                                )
                            }
                        </div>
                    </div>
                    <ParticlesBg type="cobweb" config={config} bg={true}/>

                </div>
           </div>
       )
    }
}

const stateToPropertyMapper = (state) => {
    console.log(state)
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


export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(Dashboard)
