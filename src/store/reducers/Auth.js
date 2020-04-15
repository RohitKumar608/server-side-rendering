import * as actionTypes from '../actions/actions';

const initialState = {
    albumList: [],
    isUserLogin: false
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ADMIN:
            return {...state, albumList: action.data };
        case actionTypes.LOGIN:
            return {...state, isUserLogin: true };
        case actionTypes.LOGOUT:
            return {...state, isUserLogin: false }
        default:
            return state;
    }
}

export default userReducer;