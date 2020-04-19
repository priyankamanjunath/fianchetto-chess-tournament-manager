export const FIND_TOURNAMENT_ROUNDS = "FIND_TOURNAMENT_ROUNDS";
export const CREATE_ROUND = "CREATE_ROUND";

export const findAllRoundsAction = (rounds) => {
    console.log("calling action")
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

export const updateRoundAction = (roundid, round) => ({
    type: "UPDATE_ROUND",
    roundid: roundid,
    round: round
})


