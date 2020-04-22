
import rounds from "./rounds"
import {JPA_SERVER} from "../constants/endpoints";

const urlJavaServer = "https://fianchetto-java.herokuapp.com/api"

export const findAllRoundsService = () =>
    fetch(`${urlJavaServer}/rounds/`, {
        // withCredentials: true
    })
        .then(response => response.json());


export const findAllMatchesForRoundService = (roundid) =>
    fetch(`${urlJavaServer}/round/${roundid}/matches/`)
        .then(
            response => response.json()
        );


export const findAllMatchesForTournamentService = (tid) =>
    fetch(`${urlJavaServer}/tournament/${tid}/matches/`)
        .then(
            response => response.json()
        );

export const findAllRoundsForTournamnetService = (tournamnentid) =>
    fetch(`${urlJavaServer}/tournament/${tournamnentid}/rounds/`)
        .then(response => response.json());

export const findAllParticipantForTournamentService = (tournamnentid) =>
    fetch(`${urlJavaServer}/tournament/${tournamnentid}/users/`)
        .then(response => response.json());

export const createRoundService = async (tournamentid, round) =>
{
    const response = await fetch(`${urlJavaServer}/tournament/${tournamentid}/rounds/`, {
        method: "POST",
        body: JSON.stringify(round),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}



export const createMatchesForRound = async (roundid, matches) =>
{
    const response = await fetch(`${urlJavaServer}/round/${roundid}/matches`, {
        method: "POST",
        body: JSON.stringify(matches),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const updateRoundService = async (roundid, matches) => {
    const response = await fetch(`${urlJavaServer}/matches`, {
        method: 'PUT',
        body: JSON.stringify(matches),
        headers: {
            'content-type': 'application/json',
        }
    });
    return await response.json()
};

export const findRoundsByTournament = async (tournamentId) => {
    const response = await fetch(`${JPA_SERVER}/api/tournament/${tournamentId}/rounds`);
    return await response.json()
}

