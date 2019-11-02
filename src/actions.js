import axios from 'axios';

export const FETCH_USER = "fetch_user";

export const fetchUser = () => async dispatch => {
    const userData = await axios.get('https://react-ssr-api.herokuapp.com/users');
    if (userData) {
        dispatch({
            type: FETCH_USER,
            data: userData.data
        })
    }
}