import React from "react";
import {Link} from "react-router-dom";


class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                <Link to={"/login"}>
                    <a className="btn btn-primary" >
                        <i className="fas fa fa-times text-white"/>
                    </a>
                </Link>
                <a className="navbar-brand wbdv-course-title" href="#">User Dashboard</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Activity<span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link" href="#">Profile<span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link" href="#">Settings<span className="sr-only">(current)</span></a>
                        </li>
                        <li>
                            <Link to={"/createTournament"}><a class = "nav-link">Create New Tournamanet</a></Link>
                        </li>


                    </ul>
                </div>
            </nav>
        )
    }


}
export default Header
