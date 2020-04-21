import React from 'react';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import Login from "../components/login/login";
import Register from "../components/register/register";
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import userReducer from "../reducers/userReducer"
import tournamentReducer from "../reducers/tournamentReducer"
import UserContainer from "./UserContainer";
import roundReducer from "../reducers/roundReducer";
import PrivacyPolicy from "../components/privacy-policy/privacy-policy";
import {HomePageComponent} from "../components/homePage";

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
                <Router history={this.props.history}>
                    <Provider store={store}>

                    <Route
                        exact path = "/"
                        render = {
                            () =>
                                <HomePageComponent/>

                        }
                    />


                    <Route
                        exact path = "/login"
                        render = {
                            () =>
                                <Login {...this.props} />

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
                    <Route
                        path = "/privacy-policy"
                        render = {
                            () =>
                                <div>
                                    <PrivacyPolicy/>
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

