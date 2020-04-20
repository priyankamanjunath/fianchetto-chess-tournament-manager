import React, {Component} from 'react';
import "./login.css"
import {Link} from "react-router-dom";
import userService from "../../services/userService";

class Login extends Component {

    state = {
        newUserEmail: "",
        newUserPassword: ""
    };

    handlEmailChange = e => {
        this.setState({newUserEmail: e.target.value});
    };

    handlePasswordChange = e => {
        this.setState({newUserPassword: e.target.value});
    };

    submitLogin = () => {
        const userLogin = {
            email: this.state.newUserEmail,
            password: this.state.newUserPassword
        };

        userService.login(userLogin).then(
            response => {
                this.props.history.push(`/user/${response.id}/profile`);
            }
        )

    };

    render() {
        return (
            <div className="background">
                <div className=""><h1
                    className="font-weight-bolder text-center text-white">Fianchetto</h1></div>
                <div className="row">
                    <div className="col-sm-4"/>
                    <div className="col-sm-4"/>
                    <div className="col-sm-4 text-left">

                        <form className="m-5">
                            <div className="form-group row">
                                <label htmlFor="username"
                                       className="col-sm-3 col-form-label text-white">
                                    Email
                                </label>
                                <div className="col-sm-9">
                                    <input className="form-control wbdv-field wbdv-username"
                                           id="username"
                                           placeholder="Your User Name"
                                           onChange={this.handlEmailChange}/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="password"
                                       className="col-sm-3 col-form-label text-white">
                                    Password </label>
                                <div className="col-sm-9">
                                    <input type="password" className="form-control"
                                           id="password" placeholder="123qwe#$%"
                                           onChange={this.handlePasswordChange}/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"/>
                                <div className="col-sm-10">
                                    <Link to={"/"}>
                                        <button onClick={this.submitLogin}
                                                className="btn btn-primary btn-block wbdv-login">Sign
                                            in
                                        </button>
                                    </Link>
                                    <div className="row">

                                    </div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className={"col-sm-2"}/>
                                <div className={"col-sm-10"}>
                                    <div className="text-center">
                                        <a href="#" className="">Forgot Password?</a>
                                    </div>
                                    <div className="text-center">
                                        <Link to={"/register"}>
                                            <a className="">
                                                Sign up</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login
