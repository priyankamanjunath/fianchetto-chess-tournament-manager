export const FIND_TOURNAMENT_ROUNDS = "FIND_TOURNAMENT_ROUNDS";
export const CREATE_PAIRING = "CREATE_PAIRING";
export const CREATE_ROUND = "CREATE_ROUND";
export const UPDATE_ROUND = "UPDATE_ROUND";
export const FIND_ROUNDS_MATCHES = "FIND_ROUNDS_MATCHES"


export const findAllRoundsAction = (rounds) => {

    return {
        type: FIND_TOURNAMENT_ROUNDS,
        rounds : rounds
    }
}


export const findAllMatchesForRoundsAction = (matches) => {

    return {
        type: FIND_ROUNDS_MATCHES,
        matches : matches
    }
}


// findAllMatchesForRoundsAction

export const findAllRoundsForTournamnetAction = (rounds) => {

    return {
        type: FIND_TOURNAMENT_ROUNDS,
        rounds : rounds
    }
}


export const createRoundAction = (round) => {
    return {
        type: CREATE_ROUND,
        round : round
    }
}



export const createPairingAction = (round) => {
    return {
        type: CREATE_PAIRING,
        round : round
    }
}

export const updateRoundAction = (roundid, round) => ({
    type: "UPDATE_ROUND",
    roundid: roundid,
    round: round
})



// findAllRoundsForTournamnetAction(rounds)

