import {JPA_SERVER} from "../constants/endpoints";

export const findTournamentInfo = (tournamentId) =>
    fetch(`${JPA_SERVER}/api/tournament/${tournamentId}`)
        .then(response => response.json());


export default {
    findTournamentInfo
}
