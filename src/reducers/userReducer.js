import {CREATE_USER, FIND_USER_INFO, LOGIN, FIND_USER_TOURNAMENT_INFO} from "../actions/userActions";

let userInfo = {
        id: "123",
        name: "ABC XYZ",
        email: "abcxyz@gmail.com",
        password: "not_useful",
};

const userReducer = (state={userInfo: userInfo}, action) => {
    let users;
    switch (action.type) {
        case FIND_USER_INFO:
            return {
                ...state,
                userInfo: action.userInfo
            }
        case CREATE_USER:
            users = [...state.users];
            users.push(action.userInfo);

            return {
                users: userInfo
            }
        case LOGIN:
            users = [...state.users];
            users.push(action.userInfo);

            return {
                ...state,
                users: userInfo
            }
        case FIND_USER_TOURNAMENT_INFO:
            return {
                ...state,
                userTournament: action.userInfo
            }
        default:
            return state
    }
};

export default userReducer;
