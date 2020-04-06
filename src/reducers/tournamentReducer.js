

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
    switch (action.type) {
        case "FIND_ALL_TOURNAMENT":
            return {
                ...state,
                tournamentInfo: action.tournamentInfo
            };
        default:
            return state
    }
}

export default tournamentReducer
