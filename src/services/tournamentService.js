import {JPA_SERVER} from "../constants/endpoints";

export const findTournamentInfo = (tournamentId) =>
    fetch(`${JPA_SERVER}/api/tournament/${tournamentId}`)
        .then(response => response.json());

export const createTournament = async (userId, tournamentInfo) => {
    const response = await fetch(`${JPA_SERVER}/api/user/${userId}/tournaments`, {
        method: "POST",
        body: JSON.stringify(tournamentInfo),
        headers: {
            'content-type': 'application/json'
        },
        withCredentials: true
    })

    return await response.json()
}

export const findAllTournaments = async () => {
    const response = await fetch(`${JPA_SERVER}/api/tournaments`)
    return await response.json()
}

export const findTournamentsForUser = async (userId) => {
    const response = await fetch(`${JPA_SERVER}/api/user/${userId}/tournaments`)
    return await response.json()
}


export default {
    findTournamentInfo,
    createTournament,
    findAllTournaments,
    findTournamentsForUser,
}
