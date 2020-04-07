import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import Chessboard from "../components/chessboard/chessboard";
import Login from "../components/login/login";
import Register from "../components/register/register";
import Dashboard from "../components/playerDashboard/dashboard";
import TournamentPage from "../components/tournamentDashboard/home";
import PairingTableView from "../components/tournamentDashboard/PairingTable/pairingTableView";
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import userReducer from "../reducers/userReducer"
import tournamentReducer from "../reducers/tournamentReducer"
import CreateTournament from "../components/tournamentDashboard/createTournament/createTournament";


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
                            <Redirect from="/" to="/login" />
                            <Route exact path = "/demo"
                                   render={(props) =>
                                       <Chessboard/>
                                   }
                            />
                            <Route exact path = "/user/:userId/tournament/:tournamentId"
                                   render={(props) =>
                                       <TournamentPage
                                            userId = {props.match.params.userId}
                                            tournamentId = {props.match.params.tournamentId}
                                       />
                                   }
                            />

                            <Route exact path = "/login"
                                   render={(props) =>
                                       <Login/>
                                   }
                            />
                            <Route exact path = "/register"
                                   render={(props) =>
                                       <Register/>
                                   }
                            />

                            <Route exact path = "/user/:userId/dashboard"
                                   render={(props) =>
                                       <Dashboard
                                           userId = {props.match.params.userId}
                                           {...props}
                                       />
                                   }
                            />

                            <Route exact path = "/pairings"
                                   render={(props) =>
                                       <PairingTableView/>
                                   }
                            />

                            <Route exact path = "/createTournament"
                                   render={(props) =>
                                       <CreateTournament/>
                                   }
                            />
                        </Router>
                    </Provider>
                </div>

        )
    }
}


export default RoutingContainer

