import React from "react";
import {Link} from "react-router-dom";


class UserHeader extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                <Link to={"/login"} className="btn btn-primary">

                        <i className="fas fa fa-times text-white"/>
                </Link>
                <a className="navbar-brand wbdv-course-title" href="#">Player Dashboard</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/user/1/activity">
                                Activity
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link" to="/user/1/profile">
                                Profile
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link" to="/user/1/settings">
                                Settings
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/user/1/create"} className = "nav-link">
                                Create New Tournament
                            </Link>
                        </li>


                    </ul>
                </div>
            </nav>
        )
    }


}
export default UserHeader
