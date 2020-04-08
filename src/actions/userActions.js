export const FIND_USER_INFO = "FIND_USER_INFO";
export const CREATE_USER = "CREATE_USER";
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

