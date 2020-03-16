import React from "react";
import Header from "./header";
import TournamnetInfo from "./TournamentInfo/tournammnetInfo";

class TournamentPage extends React.Component {
    render() {
       return(
           <div>
               <Header/>
           <TournamnetInfo/>
           </div>
       )

    }


}
export default TournamentPage
