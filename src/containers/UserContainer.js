import React from 'react';
import {Route} from "react-router-dom";
import TournamentContainer from "./TournamentContainer";
import UserHeader from "../components/playerDashboard/header";
import PlayerDashboard from "../components/playerDashboard/dashboard";
import UserHome from "../components/playerDashboard/home";
import CreateTournament from "../components/tournamentDashboard/createTournament/createTournament";
import Profile from "../components/profile/profile";

class UserContainer extends React.Component
{
    state = {
        showHeader: true
    }
    componentDidMount(): void {
        this.state = {
            showHeader: true
        }
    }

    hideUserHeader = () => {
        this.setState({
            showHeader: !this.state.showHeader
                      })
    }

    render()
    {
        return(

            <div>
                {
                    this.state.showHeader &&
                    <Route
                        path="/user/:userId"
                        render={(props) =>
                            <UserHeader
                                userId={props.match.params.userId}
                            />
                        }
                    />
                }

                <Route
                    path="/user/:userId/profile"
                    render={(props) =>
                        <div>
                            <Profile
                                userId={props.match.params.userId}/>
                        </div>
                    }
                />
                <Route
                    path="/user/:userId/home"
                    render={
                        (props) =>
                            <UserHome
                                userId = {props.match.params.userId}
                            />
                    }
                />
                <Route
                    path = "/user/:userid/dashboard"
                    render = {
                        (props) =>
                            <div>
                                <PlayerDashboard
                                userId = {props.match.params.userid}
                                    {...props}/>
                            </div>
                    }
                />

                <Route
                    path = "/user/:userId/create"
                    render = {
                        (props) =>
                            <div>
                                <CreateTournament
                                    userId = {props.match.params.userId}
                                    {...props}
                                />
                            </div>
                    }
                />

                <Route
                    path = "/user/:userid/tournament/:tid"
                    render = {
                        (props) =>
                            <div>
                                <TournamentContainer
                                    hideUserHeader = {this.hideUserHeader}
                                />
                            </div>
                    }
                />
            </div>

        )
    }
}


export default UserContainer

