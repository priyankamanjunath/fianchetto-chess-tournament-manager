import React, { Component } from "react";

import Chessboard from "chessboardjsx";
import HumanVsHuman from "../../integrations/HumanVsHuman";

class Demo extends Component {
  state = {
    color: "w",
    position: "start"
  };

  constructor(props){
    super(props);
  }

  render() {
    return (
        <div style={boardsContainer}>
          <HumanVsHuman color={this.state.color} >
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
                />
            )}
          </HumanVsHuman>
          <select onChange={(e)=>{
            const col = e.target.value;
            this.setState(prevState => {
              prevState.color = col;
              return prevState
            })
          }}>
            <option value={"w"}>
              White
            </option>
            <option value={"b"}>
              Black
            </option>
          </select>
        </div>
    );
  }
}

export default Demo;

const boardsContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
const boardStyle = {
  borderRadius: "5px",
  boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`
};
