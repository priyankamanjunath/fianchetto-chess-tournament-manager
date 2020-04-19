
import rounds from "./rounds"
const url = "https://wbdv-generic-server.herokuapp.com/api/akshay"


export const findAllRoundsService = () =>
    fetch(`${url}/rounds/`)
        .then(response => response.json());

export const createRoundService = async (round) =>
{
    const response = await fetch(`${url}/rounds/`, {
        method: "POST",
        body: JSON.stringify(round),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const updateRoundService = async (roundid, round) => {
    const response = await fetch(`${url}/rounds/${roundid}`, {
        method: 'PUT',
        body: JSON.stringify(round),
        headers: {
            'content-type': 'application/json',
        }
    })
    return await response.json()
}
