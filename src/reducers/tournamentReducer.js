import {CREATE_TOURNAMENT, FIND_TOURNAMENT_INFO} from "../actions/tournamentActions";

let tournamentInfo = {
    id: "100",
    name: "Active Tournament 1",
    type: "online",
    location: "Boston",
    prize: "",
    startDate: "",
    endDate: "",
    inProgress: true,
    winner: "",
    master: "",
    playerlist: [],
    roundList: []
};

const tournamentReducer = (state={tournamentInfo: tournamentInfo}, action) => {
    console.log("action: ", action);
    let tournaments;
    switch (action.type) {
        case FIND_TOURNAMENT_INFO:
            return {
                ...state,
                tournamentInfo: action.tournamentInfo
            }
        case CREATE_TOURNAMENT:
            tournaments = [...state.tournaments];
            tournaments.push(action.tournamentInfo);

            return {
                tournaments: tournamentInfo
            }
        default:
            return state
    }
}

export default tournamentReducer
