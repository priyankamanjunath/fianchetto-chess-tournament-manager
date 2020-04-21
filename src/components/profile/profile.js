import React from "react";
import userService from "../../services/userService";
import "./profile.css"
import tournamentService from "../../services/tournamentService";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            tournamentList: {}
        }
    }

    componentWillMount() {
        userService.findUserInfo(this.props.userId).then(res => this.setState({userInfo: res}));
        tournamentService.findTournamentsForUser(this.props.userId)
            .then(res => this.setState({tournamentList: res}));
    }

    render() {
        return (
            <div className="top-image text-white">
                <div className="row">
                    <div className="col-sm-4"/>
                    <div className="col-sm-4 profile-data">
                        <div className="hero text-white text-center">
                            <h1 className="text-center">{this.state.userInfo.name}</h1>
                            <p className="m-4">Email : <span
                                className="ml-3">{this.state.userInfo.email}</span></p>
                            <p className="m-4">UserId : <span
                                className="ml-3">{this.state.userInfo.id}</span></p>
                            <p className="m-4">Tournamnets Involved in : <span
                                className="ml-3">{this.state.tournamentList.length}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile
