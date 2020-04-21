import React, { Component } from "react";

import Chessboard from "chessboardjsx";
import HumanVsHuman from "../../integrations/HumanVsHuman";
import {findMatchById} from "../../services/matchService"

class FianchettoChessboard extends Component {

  constructor(props){
    super(props);
    this.state = {
        color: "",
        turn: "w",
        validMatch: false,
        draggable: true,
        opponent_status: "offline"
                  }
  }

  toggleTurn = (color) => {
      this.setState({
                        turn: color
                    })
  };

  toggleDrag = (x) => {
      this.setState({
          draggable: x
                         })
  }

  opponentStatus = (data) => {
        this.setState({
                          opponent_status: data
                      })
    }

  componentDidMount(): void {
    // get color assigned to the user from match details
    findMatchById(this.props.matchId).then(
        res => {
            if(res.status)
                return
            this.setState({
                                   validMatch: true,
                               })
            // find color assigned to the userid
            if (String(res.home.id) === this.props.userId){
                this.setState({
                                  color: "w",
                              })
            }else if (String(res.away.id) === this.props.userId) {
                this.setState({
                                    color: "b",
                              })
            }
        }
    )
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
      if(prevState.color !== this.state.color || prevState.turn !== this.state.turn){
          this.setState({
              draggable: this.state.color === this.state.turn
                        })
      }
  }

    render() {
    return (
        <div>
            {
                <div style={{padding: "5px 100px"}}>
                    Opponent Status: <span
                    style = {{color: this.state.opponent_status === 'online' ? "green" : 'red'}}
                                        ><b>{this.state.opponent_status}</b></span>
                </div>
            }
            <div style={boardsContainer}>
                {
                    this.state.color === 'w' &&
                    <span style={{"font-weight": "600", "font-size": "28px", color: "#C3C3C3", padding:"0 40px 0 0"}}>You Are White</span> ||
                    this.state.color === 'b' &&
                    <span style={{"font-weight": "600", "font-size": "28px", color: "#C3C3C3", padding:"0 40px 0 0"}}>You Are Black</span>
                }
                {
                    this.state.validMatch &&
                    <HumanVsHuman color={this.state.color}
                                  userId={this.props.userId}
                                  matchId={this.props.matchId}
                                  toggleTurn={this.toggleTurn}
                                  toggleDrag={this.toggleDrag}
                                  opponentStatus={this.opponentStatus}>
                        {({
                              position,
                              selectedSquares,
                              onDrop,
                              pieces,
                              onMouseOverSquare,
                              onMouseOutSquare
                          }) => (
                            <Chessboard
                                id="humanVsHuman"
                                width={560}
                                position={position}
                                selectedSquares={selectedSquares}
                                onDrop={onDrop}
                                pieces={pieces}
                                onMouseOverSquare={onMouseOverSquare}
                                onMouseOutSquare={onMouseOutSquare}
                                boardStyle={boardStyle}
                                orientation= {this.state.color === 'b' ? 'black' : 'white'}
                                draggable= {this.state.draggable}
                            />
                        )}
                    </HumanVsHuman>
                }
                <br/>
                {
                    this.state.validMatch &&
                    this.state.turn === this.state.color &&
                     <h4 style={{"font-weight": "600", "font-size": "20px", color: "#839192", padding: "0 0 0 40px"}}>
                        <u>Now It's Your Turn</u>
                     </h4> ||
                    this.state.validMatch &&
                    this.state.turn !== this.state.color &&
                    <h4 style={{"font-weight": "600", "font-size": "20px", color: "#839192", padding: "0 0 0 40px"}}>
                        Other Player's Turn
                    </h4>

                }
                {
                    !this.state.validMatch &&
                    <h2 style={{color: "#839192"}}>
                       This is not your match. Get outta here. LOL!
                    </h2>
                }
            </div>
        </div>
    );
  }
}

export default FianchettoChessboard;

const boardsContainer = {
    padding: "40px 10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
const boardStyle = {
  borderRadius: "5px",
  boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`
};
