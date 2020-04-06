export const FIND_USER_INFO = "FIND_USER_INFO";
export const findUserInfo = (userInfo) => {
    return {
        type: FIND_USER_INFO,
        userInfo: userInfo
    }
}
