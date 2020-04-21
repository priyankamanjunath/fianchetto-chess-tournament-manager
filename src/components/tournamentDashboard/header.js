import React from "react";
import {Link} from "react-router-dom";
import {findTournamentInfo} from "../../services/tournamentService";


class HeaderTournamentDashboard extends React.Component {

    state = {
        tournament: {}
    }


    componentDidMount() {
        findTournamentInfo(this.props.tournamentId)
            .then(tournament => this.setState({
                tournament: tournament
            }))
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <Link className="btn btn-dark text-white" to={`/user/${this.props.userId}/dashboard`}>
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
                            <Link className="nav-link" to={`/user/${this.props.userId}/tournament/${this.props.tournamentId}/home`}>Home</Link>
                        </li>


                        {
                            this.state.tournament.master &&
                            this.state.tournament.master.id != this.props.userId &&
                            <li className="nav-item active">
                                <Link className="nav-link"
                                      to={`/user/${this.props.userId}/tournament/${this.props.tournamentId}/mymatches`}>
                                    My Matches
                                </Link>
                            </li>
                        }

                       {
                           this.state.tournament.master &&
                           this.state.tournament.master.id == this.props.userId &&
                           <li className="nav-item active">
                            <Link className="nav-link" to={"pairings"}>
                                Round Pairings
                                {/*<a className="nav-link" href="#">Round Pairings<span className="sr-only">(current)</span></a>*/}
                            </Link>
                            {/*<a className="nav-link" href="#">Round Pairings<span className="sr-only">(current)</span></a>*/}
                        </li>
                       }

                    </ul>
                    <div className="text-white ml-auto">
                        <Link to={`/user/${this.props.userId}/dashboard`} className = "nav-link">
                            <span className="text-white">Exit Tournament</span>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }


}
export default HeaderTournamentDashboard
