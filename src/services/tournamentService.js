import {JPA_SERVER} from "../constants/endpoints";

export const findTournamentInfo = (tournamentId) =>
    fetch(`${JPA_SERVER}/api/tournament/${tournamentId}`)
        .then(response => response.json());

export const createTournament = async (tournamentInfo) => {
    const response = await fetch(`${JPA_SERVER}/api/tournaments`, {
        method: "POST",
        body: JSON.stringify(tournamentInfo),
        headers: {
            'content-type': 'application/json'
        }
    })

    return await response.json()
}

export default {
    findTournamentInfo,
    createTournament
}
