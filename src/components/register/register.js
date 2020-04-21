import React, {Component} from 'react';
import userService from "../../services/userService";
import "./../login/login.css"
import {Link} from "react-router-dom";

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
        return (
            <div className="background">
                <div className=""><h1
                    className="font-weight-bolder text-center text-white">Fianchetto</h1></div>
                <h1 className={"text-center"}>Sign Up</h1>
                <div className="row">
                    <div className="col-sm-4"/>
                    <div className="col-sm-4"/>
                    <div className="col-sm-4 text-left">

                        <form>
                            <div className="form-group row">
                                <label htmlFor="Name"
                                       className="col-sm-2 col-form-label text-white">
                                    Name
                                </label>
                                <div className="col-sm-9">
                                    <input className="form-control "
                                           id="name"
                                           onChange={this.handleUsernameChange}
                                            placeholder="Name"/>
                                </div>


                            </div>

                            <div className="form-group row">
                                <label htmlFor="username"
                                       className="col-sm-2 col-form-label text-white">
                                    Email
                                </label>
                                <div className="col-sm-9">
                                    <input className="form-control "
                                           id="email"
                                           onChange={this.handlEmailChange}
                                           placeholder="Email"/>
                                </div>

                            </div>

                            <div className="form-group row">
                                <label htmlFor="username"
                                       className="col-sm-2 col-form-label text-white">
                                    Confirm Email
                                </label>
                                <div className="col-sm-9">
                                    <input className="form-control  "
                                           id="username"
                                           placeholder="Confirm Email"/>
                                </div>


                            </div>

                            <div className="form-group row">
                                <label htmlFor="password"
                                       className="col-sm-2 col-form-label text-white">
                                    Password </label>
                                <div className="col-sm-9">
                                    <input type="password"
                                           className="form-control  wbdv-field wbdv-password"
                                           id="password"
                                           onChange={this.handlePasswordChange}
                                           placeholder="password"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label text-white"/>
                                <div className="col-sm-9">

                                    <button className="btn btn-primary btn-block wbdv-login"
                                            onClick={() => this.submitNewUser()}>Register
                                    </button>

                                </div>
                                <div className="col-sm-1"/>
                            </div>
                            <div className="form-group row">
                                <div className={"col-sm-2"}/>
                                <div className={"col-sm-10"}>
                                    <div className="text-center">
                                        <Link to={"/login"}>
                                            <a className="">
                                                Login </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className = "privacy-policy">
                    <Link to={"/privacy-policy"}>
                        Privacy Policy
                    </Link>
                </div>
            </div>
        )

    }

}

export default Register
