export const FIND_TOURNAMENT_INFO = "FIND_TOURNAMENT_INFO";
export const CREATE_TOURNAMENT = "CREATE_TOURNAMENT";

export const findTournamentInfo = (tournamentInfo) => {
    console.log("tournamentInfo: ", tournamentInfo)
    return {
        type: FIND_TOURNAMENT_INFO,
        tournamentInfo: tournamentInfo
    }
}

export const createTournament = (newTournamentInfo) => ({
    type: CREATE_TOURNAMENT,
    module: newTournamentInfo
})
