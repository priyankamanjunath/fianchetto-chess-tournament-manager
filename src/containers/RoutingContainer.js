import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import Login from "../components/login/login";
import Register from "../components/register/register";
import Dashboard from "../components/playerDashboard/dashboard";
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import userReducer from "../reducers/userReducer"
import tournamentReducer from "../reducers/tournamentReducer"
import Header from "../components/playerDashboard/header";
import Demo from "../components/chessboard/chessboard";
import Switch from "react-router-dom/es/Switch";
import UserContainer from "./UserContainer";
import TournamentContainer from "./TournamentContainer";

const rootReducer = combineReducers({
    userReducer: userReducer,
    tournamentReducer: tournamentReducer
});

const store = createStore(rootReducer);


class RoutingContainer extends React.Component
{
    render()
    {
        return(
            <div className={"container-fluid m-0 p-0"}>
                <Provider store={store}>
                <Router>

                    <Route
                        exact path = "/login"
                        render = {
                            () =>
                                <div>
                                    <Login/>
                                </div>
                        }
                    />

                    <Route
                        exact path = "/register"
                        render = {
                            () =>
                                <div>
                                    <Register/>
                                </div>
                        }
                    />


                    <Route
                        path = "/user/:userid/"
                        render = {
                            () =>
                                <div>
                                    <UserContainer/>
                                </div>
                        }
                    />

                </Router>
                </Provider>


            </div>
        )

    }
}


export default RoutingContainer

