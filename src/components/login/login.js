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

            <div className="background">
                <div className={'jumbotron bg-transparent'}>
                    <h1 className={'text-center text-white text-top'} style={{fontSize: "48px"}}>FIANCHETTO</h1>
                </div>


                    <div className="row">

                        <div className="col-sm-0 col-md-4 col-lg-8"/>
                        <div className="col-flex border border-white">
                            <div className={"m-4"}>
                                <h1 className={"text-white text-center"}>Sign In</h1>
                            </div>
                            <form className="m-4">
                                <div className="form-group row">
                                    <label htmlFor="username"
                                           className="text-white my-4 col-sm-4 col-form-label">
                                        Email
                                    </label>
                                    <div className="col-sm-8">
                                        <input className="form-control my-4 bg-transparent text-white"
                                               id="username"
                                               placeholder="Email"
                                               onChange={this.handlEmailChange}/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="password"
                                           className="col-sm-4 col-form-label text-white">
                                        Password </label>
                                    <div className="col-sm-8">
                                        <input type="password" className="form-control bg-transparent text-white"
                                               id="password"
                                               placeholder="password"
                                               onChange={this.handlePasswordChange}/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label"></label>
                                    <div className="col-sm-10">
                                        <Link className="btn  btn-block" to={"/login"}>
                                            <button
                                                className="btn btn-primary btn-block"
                                                onClick={this.submitLogin}>
                                                    Sign in
                                            </button>
                                        </Link>
                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <Link to="/" className="text-white">Forgot
                                                    Password?</Link>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <Link to="/register"
                                                   className="    text-white ">
                                                    Sign up</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <label className="col-form-label"/>
                                    <div className=" ">

                                    <div className="row">

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
