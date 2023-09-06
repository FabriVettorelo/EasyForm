export const LOGOUT = 'LOGOUT';

export const logout = () => {
    return async function (dispatch) {
        localStorage.setItem("clientId", 0)
        localStorage.setItem("access", false)
        return  dispatch({type: LOGOUT});
    }
};