import React from 'react';
import "./login.css"
import {Link} from "react-router-dom";

const Login = () =>


    <div className="container">
        <h1 className={"text-center"}>Sign In</h1>

        <form>
            <div className="form-group row">
                <label htmlFor="username" className="col-sm-2 col-form-label">
                    Username
                </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="username"
                           placeholder="Your User Name"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="password" className="col-sm-2 col-form-label">
                    Password </label>
                <div className="col-sm-10">
                    <input type="password" className="form-control"
                           id="password" placeholder="123qwe#$%"/>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                    <Link to={"/user/1/dashboard"}>
                        <button className="btn btn-primary btn-block wbdv-login">Sign in</button>
                    </Link>
                    <div className="row">

                    </div>
                </div>
            </div>

            <div className="form-group row">
                <div className={"col-sm-2"}></div>
                <div className={"col-sm-10"}>
                    <div className="col">
                        <a href="#" className="">Forgot Password?</a>
                    </div>
                    <div className="col">
                        <Link to={"/register"} className="float-right">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>

        </form>
    </div>


export default Login
