import React, {Component} from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import Chess from "chess.js";
import openSocket from 'socket.io-client';
import {NODE_SERVER} from "../constants/endpoints";

const game = new Chess();
const socket = openSocket(NODE_SERVER);

class HumanVsHuman extends Component {
    constructor(props){
        super(props);
    }

    static propTypes = {children: PropTypes.func};

    state = {fen: "start", selectedSquares: [], myPosition: {}, socket: null, color: null};

    updateBoard = (data) => {
        game.move({from: data.source, to: data.target, promotion: "q"});
        this.setState({fen: ""}, ()=>{
                        this.setState({
                                          fen: data.fen,
                                          myPosition: data.myPosition,
                                          selecedSquares: data.selectedSquares
                                      })
                      })
    };

    componentDidMount() {
        this.setState({
                          socket: socket
                      })
        socket.on('users:get', data => this.updateBoard(data));
        this.setState(prevState =>{
            prevState.color= this.props.color
            return prevState
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.fen !== this.props.fen) {
            this.setState({
                              fen: this.props.fen
                          })
        }
        if (prevState.color !== this.props.color){
            this.setState({
                color: this.props.color
            })
        }
    }
    removeHighlightSquare = () => {
        this.setState({selectedSquares: []});
    };

    highlightSquare = (sourceSquare, squares = []) => {
        this.setState(() => ({
            selectedSquares: [sourceSquare, ...squares]
        }));
    };

    getPosition = position => this.setState({myPosition: position});

    onDrop = (source, target) => {
        if(game.turn() === this.state.color) {
            this.removeHighlightSquare();
            // see if the move is legal
            var move = game.move({from: source, to: target, promotion: "q"});
            console.log("move: ", move);
            // illegal move
            if (move === null) {
                return;
            }
            this.setState({fen: game.fen()});
            let message = {
                fen: this.state.fen,
                selectedSquares: this.state.selectedSquares,
                myPosition: this.state.myPosition,
                source: source,
                target: target,
                color: this.state.color
            }
            this.state.socket.emit("message:send", message);
        }
    };

    onMouseOverSquare = square => {
        // get list of possible moves for this square
        var moves = game.moves({
                                   square: square,
                                   verbose: true
                               });

    };

    onMouseOutSquare = () => {
        this.removeHighlightSquare();
    };

    render() {
        return this.props.children({
                                       position: this.state.fen,
                                       selectedSquares: this.state.selectedSquares,
                                       onMouseOverSquare: this.onMouseOverSquare,
                                       onMouseOutSquare: this.onMouseOutSquare,
                                       onDrop: this.onDrop
                                   });
    }
}

export default HumanVsHuman;
