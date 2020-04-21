export const FIND_USER_TOURNAMENT_INFO = "FIND_USER_TOURNAMENT_INFO";
export const CREATE_USER = "CREATE_USER";
export const findTournamentsForUser = (findTournamentsForUser) => {
    return {
        type: FIND_USER_TOURNAMENT_INFO,
        userInfo: findTournamentsForUser
    }
}

export const createUser = (newUserInfo) => ({
    type: CREATE_USER,
    module: newUserInfo
})

