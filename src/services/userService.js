import {JPA_SERVER} from "../constants/endpoints";



export const findUserInfo = (userId) =>
    fetch(`${JPA_SERVER}/api/user/${userId}`)
        .then(response => response.json());


export default {
    findUserInfo
}
