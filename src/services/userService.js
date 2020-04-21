import {JPA_SERVER} from "../constants/endpoints";



export const findUserInfo = (userId) =>
    fetch(`${JPA_SERVER}/api/user/${userId}`, {
        withCredentials: true
    })
        .then(response => response.json());

export const createUser = async (userInfo) => {
    const response = await fetch(`${JPA_SERVER}/api/users`, {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const login = async (userInfo) => {
    const response = await fetch(`${JPA_SERVER}/api/login`, {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const registerForTournament = async (userId, tournamentId) => {
    const response = await fetch ( `${JPA_SERVER}/api/user/${userId}/tournament/${tournamentId}`, {
        method: "PUT"
    })
    return await response.json()
}

export default {
    findUserInfo,
    createUser,
    login
}
