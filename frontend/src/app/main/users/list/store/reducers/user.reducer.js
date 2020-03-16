import * as Actions from "../actions";

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case Actions.GET_USER_DATA:
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;
