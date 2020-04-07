import {CREATE_USER, FIND_USER_INFO} from "../actions/userActions";

let userInfo = {
        id: "123",
        name: "ABC XYZ",
        email: "abcxyz@gmail.com",
        password: "not_useful",
        tournamentList: [
            {
                id: "100",
                name: "Active Tournament 1",
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
            },
            {
                id: "102",
                name: "Active Tournament 2",
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
            },
            {
                id: "103",
                name: "Active Tournament 3",
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
            },
            {
                id: "104",
                name: "Active Tournament 4",
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
            },
            {
                id: "105",
                name: "Past Tournament 1",
                type: "online",
                location: "",
                prize: "",
                startDate: "",
                endDate: "",
                inProgress: false,
                winner: "",
                master: "",
                playerlist: [],
                roundList: [],
            }
        ]
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
        default:
            return state
    }
};

export default userReducer;
