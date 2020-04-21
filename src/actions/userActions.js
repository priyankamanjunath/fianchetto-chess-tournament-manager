export const FIND_USER_INFO = "FIND_USER_INFO";
export const CREATE_USER = "CREATE_USER";
export const LOGIN = "LOGIN";
export const FIND_USER_TOURNAMENT_INFO = "FIND_USER_TOURNAMENT_INFO";


export const findUserInfo = (userInfo) => {
    return {
        type: FIND_USER_INFO,
        userInfo: userInfo
    }
}

export const createUser = (newUserInfo) => ({
    type: CREATE_USER,
    module: newUserInfo
})

export const login = (UserInfo) => ({
    type: LOGIN,
    module: UserInfo
})

export const findTournamentsForUser = (findTournamentsForUser) => {
    return {
        type: FIND_USER_TOURNAMENT_INFO,
        userInfo: findTournamentsForUser
    }
}
