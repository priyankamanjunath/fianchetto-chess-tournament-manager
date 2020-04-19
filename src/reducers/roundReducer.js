import {CREATE_ROUND, FIND_TOURNAMENT_ROUNDS} from "../actions/pairingActions";


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
    else {
        return state
    }
}

export default roundReducer
