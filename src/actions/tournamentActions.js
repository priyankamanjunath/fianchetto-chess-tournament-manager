export const FIND_TOURNAMENT_INFO = "FIND_TOURNAMENT_INFO";
export const findTournamentInfo = (tournamentInfo) => {
    return {
        type: FIND_TOURNAMENT_INFO,
        tournamentInfo: tournamentInfo
    }
}
