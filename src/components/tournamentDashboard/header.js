import React from "react";
import {Link} from "react-router-dom";


class HeaderTournamentDashboard extends React.Component {

    state = {

    }


    componentDidMount() {
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                <Link className="btn btn-primary text-white" to={`/user/${this.props.userId}/dashboard`}>
                    {/*<a className="btn btn-primary text-white">*/}
                        <i className="fas fa fa-times"/>
                    {/*</a>*/}
                </Link>
                <a className="navbar-brand wbdv-course-title" href="#">Tournament</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                            <Link className="nav-link" to={`/user/${this.props.userId}/home`}>Home</Link>
                        </li>


                        <li className="nav-item active">
                            <Link className="nav-link" to={`/user/${this.props.userId}/tournament/${this.props.tournamentId}/mymatches`}>
                                My Matches
                            </Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link" to={"pairings"}>
                                Round Pairings
                                {/*<a className="nav-link" href="#">Round Pairings<span className="sr-only">(current)</span></a>*/}
                            </Link>
                            {/*<a className="nav-link" href="#">Round Pairings<span className="sr-only">(current)</span></a>*/}
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link" href="#">Result Entry<span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item  active   ">
                            <a className="nav-link " href="#">Settings<span className="sr-only">(current)</span></a>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }


}
export default HeaderTournamentDashboard
