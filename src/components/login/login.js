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
                    <Link to={"/user/123/dashboard"}>
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
                        <Link to={"/register"}>
                        <a href="../signup/signup.template.client.html"
                           className="float-right">
                            Sign up</a>
                        </Link>
                    </div>
                </div>
            </div>

        </form>
    </div>


// <div className="container-fluid pm-sign-in-content">
    //     <div className="row justify-content-center">
    //         <span className="whiteboard-title">WhiteBoard</span>
    //     </div>
    //
    //     <span>Sign In</span>
    //
    // <div>
    //     <form>
    //         <div className="form-group row">
    //             <label htmlFor="username" className="col-sm-2 col-form-label">
    //                 Username </label>
    //             <div className="col-sm-10">
    //                 <input className="form-control wbdv-field wbdv-username"
    //                        id="username"/>
    //             </div>
    //         </div>
    //         <div className="form-group row">
    //             <label htmlFor="password" className="col-sm-2 col-form-label">
    //                 Password </label>
    //             <div className="col-sm-10">
    //                 <input type="password" className="form-control wbdv-field wbdv-password"
    //                        id="password"/>
    //             </div>
    //         </div>
    //         <div className="form-group row">
    //             <label className="col-sm-2 col-form-label"></label>
    //             <div className="col-sm-10 wbdv-button wbdv-login">
    //
    //             <Link className="text-white" to="./Chessboard">
    //                 <button className="btn btn-primary btn-block wbdv-button wbdv-login pm-login-button">
    //                     Sign in
    //                 </button>
    //             </Link>
    //
    //                 {/*<div>*/}
    //                 {/*    <div className="row justify-content-center p-sm-3 ">*/}
    //                 {/*        <Link className="wbdv-link wbdv-forgot-password" to="#">Forgot Password?</Link>*/}
    //                 {/*    </div>*/}
    //                 {/*    <Link className="row justify-content-center p-sm-3" to="./Chessboard">*/}
    //                 {/*        Sign up*/}
    //                 {/*    </Link>*/}
    //
    //                 {/*    <Link className="text-white"*/}
    //                 {/*          to="./Chessboard">*/}
    //                 {/*        Go to Chessboard*/}
    //                 {/*    </Link>*/}
    //                 {/*</div>*/}
    //                 {/*<button className="btn btn-danger btn-block wbdv-login text-white mt-5"><a*/}
    //                 {/*    className="text-white" href="../index.html">Cancel</a>*/}
    //                 {/*</button>*/}
    //             </div>
    //         </div>
    //     </form>
    // </div>
{/*</div>;*/}


export default Login
