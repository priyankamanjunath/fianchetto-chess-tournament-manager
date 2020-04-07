import React from "react";

class TournamnetInfo extends React.Component{

    state = {
        image : "https://upload.wikimedia.org/wikipedia/commons/c/c4/Sahovska_olimpiada_Bled_2002_1.JPG"
    }

    render(){
        return(
            <div className="container p-2">
                <div className="card">

                    <img src={this.state.image} className="card-img-top" alt="..." height="500"
                         width="42"/>
                    <div className="card-body">

                        <h5 className="card-title">Tournament</h5>

                        <p className="card-text">A chess tournament is a series of chess games
                            played competitively to determine a winning individual or team. Since
                            the first international chess tournament in London, 1851, chess
                            tournaments have become the standard form of chess competition among
                            serious players.</p>
                        <p className="card-text">
                            Today, the most recognized chess tournaments for individual competition
                            include the Linares chess tournament (now defunct) and the Tata Steel
                            chess tournament. The largest team chess tournament is the Chess
                            Olympiad, in which players compete for their country's team in the same
                            fashion as the Olympic Games. Since the 1950s, chess computers have even
                            begun entering the tournament scene.
                        </p>
                        <p className="card-text">
                            Most chess tournaments are organized and ruled according to the World
                            Chess Federation (FIDE) handbook, which offers guidelines and
                            regulations for conducting tournaments. Chess tournaments are mainly
                            held in either round-robin style, Swiss system style or elimination
                            style to determine a winning party.
                        </p>

                    </div>
                </div>
            </div>
        )
    }
}

export default TournamnetInfo
