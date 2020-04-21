import {JPA_SERVER} from "../constants/endpoints";

export const findMatchById = (matchId) =>
    fetch(`${JPA_SERVER}/api/match/${matchId}`)
        .then(response => response.json());

export const findMatchesByRound = async (roundId) => {
    const response = await fetch (`${JPA_SERVER}/api/round/${roundId}/matches`)
    return await response.json()
}
