import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Chessboard from "../components/chessboard/chessboard";
import Login from "../components/login/login";
import Register from "../components/register/register";


class RoutingContainer extends React.Component
{
    render()
    {
        return(
                <div className={"container-fluid m-0 p-0"}>
                    <Router>
                        <Route exact path = "/demo"
                               render={(props) =>
                                   <Chessboard/>
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
                    </Router>
                </div>

        )
    }
}


export default RoutingContainer

