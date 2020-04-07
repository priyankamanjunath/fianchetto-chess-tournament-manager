import React, { Component } from 'react';
import {Link} from "react-router-dom";
import userService from "../../services/userService";

class Register extends Component {
    state = {
        newUsername: "",
        newUserPassword: "",
        newUserEmail: ""
    };

    handleUsernameChange = e => {
        this.setState({newUsername: e.target.value});
    };

    handlEmailChange = e => {
        this.setState({newUserEmail: e.target.value});
    };

    handlePasswordChange = e => {
        this.setState({newUserPassword: e.target.value});
    };

    submitNewUser = () => {
        const userToCreate = {
            name: this.state.newUsername,
            email: this.state.newUserEmail,
            password: this.state.newUserPassword
        };

        userService.createUser(userToCreate).then();
    };

    render() {
        return(
            <div className="container">
                <h1 className={"text-center"}>Sign Up</h1>

                <form>
                    <div className="form-group row">
                        <label htmlFor="Name" className="col-sm-2 col-form-label">
                            Name
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="name"
                                   onChange={this.handleUsernameChange}/>

                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Email
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control "
                                   id="email"
                                   onChange={this.handlEmailChange}/>

                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Confirm Email
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control "
                                   id="username"/>
                        </div>
                    </div>



                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="username"/>

                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control wbdv-field wbdv-password"
                                   id="password"
                                   onChange={this.handlePasswordChange}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-10">

                                <button className="btn btn-primary btn-block wbdv-login" onClick={this.submitNewUser()}>Register</button>

                        </div>
                    </div>

                </form>
            </div>
        )

    }

}

export default Register
