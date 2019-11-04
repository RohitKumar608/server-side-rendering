import axios from 'axios';

export const FETCH_USER = "fetch_user";

export const fetchUser = () => async(dispatch, getState, getApi) => {
    const userData = await getApi.get('/users');
    if (userData) {
        dispatch({
            type: FETCH_USER,
            data: userData.data
        })
    }
}