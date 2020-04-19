import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import {createStore, combineReducers} from 'redux'
import userReducer from "../reducers/userReducer"
import tournamentReducer from "../reducers/tournamentReducer"
import TournamentContainer from "./TournamentContainer";
import UserHeader from "../components/playerDashboard/header";
import playerGrid from "../components/playerDashboard/grid";
import roundReducer from "../reducers/roundReducer";
import {Provider} from "react-redux";



class UserContainer extends React.Component
{
    render()
    {
        return(

            <div>

                <UserHeader/>

                <Route
                    path = "/user/:userid/profile"
                    render = {
                        () =>
                            <div>
                                <h1>Profile</h1>
                            </div>
                    }
                />
                <Route
                    path = "/user/:userid/activity"
                    render = {
                        () =>
                            <div>
                                <h1>Activity</h1>
                                <playerGrid/>
                            </div>
                    }
                />
                <Route
                    path = "/user/:userid/settings"
                    render = {
                        () =>
                            <div>
                                <h1>Settings</h1>
                            </div>
                    }
                />
                <Route
                    path = "/user/:userid/create"
                    render = {
                        () =>
                            <div>
                                <h1>Create Tournament</h1>
                            </div>
                    }
                />

                <Route
                    path = "/user/:userid/tournament/:tid"
                    render = {
                        () =>
                            <div>
                                <TournamentContainer/>
                            </div>
                    }
                />
            </div>

        )
    }
}


export default UserContainer

