import React from "react";
import {Link} from "react-router-dom";


class UserHeader extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                {/*<Link to={"/login"} className="btn btn-primary">*/}
                {/*        <i className="fas fa fa-times text-white"/>*/}
                {/*</Link>*/}
                <Link className="navbar-brand wbdv-course-title" to={`/user/${this.props.userId}/home`}>Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to={`dashboard`}>
                                Dashboard
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link" to={`profile`}>
                                Profile
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link" to={`settings`}>
                                Settings
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`create`} className = "nav-link">
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
