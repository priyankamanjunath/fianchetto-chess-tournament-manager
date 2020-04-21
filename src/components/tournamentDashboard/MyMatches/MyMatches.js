import React from "react"
import {Link} from "react-router-dom";
import {findRoundsByTournament} from "../../../services/roundService";
import {findMatchesByRound} from "../../../services/matchService";

class MyMatches extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            myMatches: []
        }
    }

    componentDidMount(): void {
        findRoundsByTournament(this.props.tournamentId).
        then(res => {
            if(res.length === 0)
                return;
            let lastRound = res[res.length-1]
            findMatchesByRound(lastRound.id).then(
                res => {
                    this.filterMyMatches(res)
                }
            )
        })
    }

    filterMyMatches = (obj) => {
        let myMatches = []
        obj.forEach(match => {
            if (match.home.id === parseInt(this.props.userId) || match.away.id === parseInt(this.props.userId)){
                myMatches.push(match)
            }
        })
        this.setState({
            myMatches: myMatches
                      })
    }



    render () {
        return (
            <div className={"container"}>
                <div style={{position: "absolute", left: "50%", transform: "translate(-50%, 0%)"}}>
                    <h2 style={{color: "#5D6D7E", padding: "20px 100px 10px 0"}}>My Matches</h2>
                    <div className="border-top my-3"/>
                    {
                        this.state.myMatches.map(match =>
                                                     <div className="card" style={{width: "18rem"}}>
                                                         <img className="card-img-top" src="https://images.chesscomfiles.com/uploads/v1/article/25126.7ba343a5.1200x674o.34772f7f578c.jpeg"
                                                              alt="Card image cap" />
                                                             <div className="card-body">
                                                                 <h5 className="card-title">{match.round.name}</h5>
                                                                 <p className="card-text">Opponent: &nbsp;
                                                                     <b>{parseInt(this.props.userId) === match.home.id ? match.away.name : match.home.name}</b>
                                                                 </p>
                                                                 <p className="card-text">Arbiter: &nbsp;
                                                                     <b>{match.arbiter.name}</b>
                                                                 </p>
                                                                 <Link to={`/user/${this.props.userId}/tournament/${this.props.tournamentId}/match/${match.id}/play`}
                                                                    className="btn btn-primary">Play Online
                                                                 </Link>
                                                             </div>
                                                     </div>
                        )
                    }
                </div>
            </div>
        )
    }

}

export default MyMatches
