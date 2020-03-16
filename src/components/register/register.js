import React from 'react';

const Register = () =>


    <div className="container">
        <h1 className={"text-center"}>Sign Up</h1>

        <form>
            <div className="form-group row">
                <label htmlFor="Name" className="col-sm-2 col-form-label">
                    Name
                </label>
                <div className="col-sm-10">
                    <input className="form-control"
                           id="name"/>

                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="username" className="col-sm-2 col-form-label">
                    Email
                </label>
                <div className="col-sm-10">
                    <input className="form-control "
                           id="email"/>

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
                           id="password" />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                    <button className="btn btn-primary btn-block wbdv-login">Register</button>
                </div>
            </div>

        </form>
    </div>



export default Register
