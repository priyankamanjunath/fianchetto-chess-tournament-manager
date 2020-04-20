import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import Login from "../components/login/login";
import Register from "../components/register/register";
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import userReducer from "../reducers/userReducer"
import tournamentReducer from "../reducers/tournamentReducer"
import UserContainer from "./UserContainer";
import roundReducer from "../reducers/roundReducer";

const rootReducer = combineReducers({
    userReducer: userReducer,
    tournamentReducer: tournamentReducer,
    roundReducer : roundReducer
});

const store = createStore(rootReducer);


class RoutingContainer extends React.Component
{
    render()
    {
        return(
            <div className={"container-fluid m-0 p-0"}>

                <Router>
                    <Provider store={store}>
                    <Route
                        exact path = "/login"
                        render = {
                            () =>
                                <div>
                                    <Login {...this.props} history={this.props.history}/>
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
                    </Provider>
                </Router>
            </div>
        )

    }
}


export default RoutingContainer

