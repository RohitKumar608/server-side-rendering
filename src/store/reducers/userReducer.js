import * as actionTypes from '../actions/actions';

const userReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER:
            return {...state, userList: action.data };
        default:
            return state;
    }
}

export default userReducer;