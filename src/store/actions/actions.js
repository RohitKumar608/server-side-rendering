import axios from 'axios';

export const FETCH_USER = "fetch_user";
export const FETCH_ADMIN = "FETCH_ADMIN";
export const FETCH_ADMIN_DATA = "FETCH_ADMIN_DATA";
export const LOGOUT = "LOGOUT"
export const LOGIN = "LOGIN"

const CancelToken = axios.CancelToken.source()
const token = CancelToken.token;

export const cancelApiRequest = () => {
    CancelToken.cancel("Operation canceled by the user.");
}

export const fetchUser = () => async(dispatch, getState, getApi) => {
    const userData = await axios.get(`${process.env.BASE_URL}/users`);
    if (userData) {
        dispatch({
            type: FETCH_USER,
            data: userData.data
        })
    }
}

export const fetchAdminData = () => async(dispatch, getState, getApi) => {
    const adminData = await axios.get(`${process.env.BASE_URL}/photos`, { cancelToken: token });
    if (adminData) {
        dispatch({
            type: FETCH_ADMIN,
            data: adminData.data
        })
    }
}

export const logout = (dispatch, getState, getApi) => {
    dispatch({ type: LOGOUT })
}
export const login = (dispatch, getState, getApi) => {
    dispatch({ type: LOGIN })
}
