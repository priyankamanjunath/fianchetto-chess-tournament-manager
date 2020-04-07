import React from "react";
import Header from "./header";
import TournamnetInfo from "./TournamentInfo/tournamentInfo";

class TournamentPage extends React.Component {
    componentDidMount() {
    }

    render() {
        let config = {
            num: [4, 7],
            rps: 0.1,
            radius: [5, 40],
            life: [1.5, 3],
            v: [2, 3],
            tha: [-50, 50],
            alpha: [0.6, 0],
            scale: [.1, 0.9],
            position: "all",
            color: ["random", "#ff0000"],
            cross: "dead",
            random: 10
        };
        return (
            <div>
                <Header userId={this.props.userId}/>
                <TournamnetInfo/>
            </div>
        )

    }


}
export default TournamentPage
