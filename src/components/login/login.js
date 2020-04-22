import React, {Component} from 'react';
import "./login.css"
import {Link} from "react-router-dom";
import userService from "../../services/userService";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const MySwal = withReactContent(Swal);

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
                if(response.id !== -1){
                    this.props.history.push(`/user/${response.id}/home`);
                } else {
                    MySwal.fire({
                                  icon: 'error',
                                  title: 'Wrong Passwrod',
                                  text: 'Your password and email do not match',
                                  footer: 'Try again or Click on the Sign up link'
                              })
                }

            }
        )

    };

    render() {
        return (
            <div className="container-fluid background">
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
                                    <input className="form-control wbdv-field wbdv-username bg-transparent text-white"
                                           id="username"
                                           placeholder="email"
                                           onChange={this.handlEmailChange}/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="password"
                                       className="col-sm-3 col-form-label text-white">
                                    Password </label>
                                <div className="col-sm-9">
                                    <input type="password" className="form-control bg-transparent text-white"
                                           id="password" placeholder="password"
                                           onChange={this.handlePasswordChange}/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label"/>
                                <div className="col-sm-9">
                                    <Link to={"/login"}>
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
                <div className = "privacy-policy">
                    <Link to={"/privacy-policy"}>
                        Privacy Policy
                    </Link>
                </div>
            </div>
        )
    }

}

export default Login
