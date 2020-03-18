import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import Chessboard from "../components/chessboard/chessboard";
import Login from "../components/login/login";
import Register from "../components/register/register";
import Dashboard from "../components/playerDashboard/dashboard";
import TournamentPage from "../components/tournamentDashboard/home";


class RoutingContainer extends React.Component
{
    render()
    {
        return(
                <div className={"container-fluid m-0 p-0"}>
                    <Router>
                        <Redirect from="/" to="/login" />
                        <Route exact path = "/demo"
                               render={(props) =>
                                   <Chessboard/>
                               }
                        />
                        <Route exact path = "/tournament"
                               render={(props) =>
                                   <TournamentPage/>
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

                        <Route exact path = "/dashboard"
                               render={(props) =>
                                   <Dashboard/>
                               }
                        />
                    </Router>
                </div>

        )
    }
}


export default RoutingContainer

