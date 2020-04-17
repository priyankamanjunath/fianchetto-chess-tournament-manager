import React from 'react';
import {Route} from "react-router-dom";

import HeaderTournamentDashboard from "../components/tournamentDashboard/header";
import PairingTableView from "../components/tournamentDashboard/PairingTable/pairingTableView";
import TournamentInfo from "../components/tournamentDashboard/TournamentInfo/tournamentInfo";


class TournamentContainer extends React.Component
{
    render()
    {
        return(

            <div>
                <HeaderTournamentDashboard/>
                <Route
                    path = "/user/123/tournament/123/home"
                    render = {
                        () =>
                            <div>
                                <TournamentInfo/>
                            </div>
                    }
                />
                <Route
                    path = "/user/123/tournament/123/mymatches"
                    render = {
                        () =>
                            <div>
                                <h1>My Matches</h1>
                            </div>
                    }
                />
                <Route
                    path = "/user/123/tournament/123/resultentry"
                    render = {
                        () =>
                            <div>
                                <h1>Enter Results</h1>
                            </div>
                    }
                />
                <Route
                    path = "/user/:userid/tournament/:tournamentid/pairings"
                    render = {
                        () =>
                            <div>
                                <PairingTableView/>
                            </div>
                    }
                />


            </div>
        )
    }
}


export default TournamentContainer

