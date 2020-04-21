import {CREATE_USER, FIND_USER_TOURNAMENT_INFO} from "../actions/userActions";

// let userInfo = {
//         id: "123",
//         name: "ABC XYZ",
//         email: "abcxyz@gmail.com",
//         password: "not_useful",
// };

let userTournament =  [
    {
        id: "100",
        name: "Active Tournament 11",
        type: "online",
        location: "",
        prize: "",
        startDate: "",
        endDate: "",
        inProgress: true,
        winner: "",
        master: "",
        playerlist: [],
        roundList: [],
    }
]

const userReducer = (state={userTournament: userTournament}, action) => {
    let users;
    switch (action.type) {
        case FIND_USER_TOURNAMENT_INFO:
            return {
                ...state,
                userTournament: action.userInfo
            }
        case CREATE_USER:
            users = [...state.users];
            users.push(action.userInfo);

            return {
                ...state,
                users: userTournament
            }
        default:
            return state
    }
};

export default userReducer;
