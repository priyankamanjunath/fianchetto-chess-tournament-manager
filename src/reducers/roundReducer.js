import {CREATE_ROUND, FIND_TOURNAMENT_ROUNDS, UPDATE_ROUND} from "../actions/pairingActions";


const initialState = {
    rounds: []
}

const roundReducer = (state = initialState, action) => {

    if (action.type === FIND_TOURNAMENT_ROUNDS) {
        return {
            ...state,
            rounds : action.rounds
        }
    }
    else if(action.type === CREATE_ROUND){
        return {
            ...state,
            rounds: [
                ...state.rounds,
                action.round
            ]
        }
    }
    else if(action.type === UPDATE_ROUND){
        return {
            ...state,
            rounds: state.rounds.map(
                (round) => {
                    if(round._id === action.roundid){
                        round = action.round
                    }
                    return round;
                })
        }
    }
    else {
        return state
    }
}

export default roundReducer
