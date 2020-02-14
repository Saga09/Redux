import * as actionType from '../actions/ActionType';

const initialState = {
    allUsers: {}
}

const allUsersReducers = (state = initialState, action) => {
    switch (action.type)
    {
        case actionType.ALL_USERS:
            return Object.assign({}, state, {allUsers: action.allUsers})
        default:
            return state

    }
}


export default allUsersReducers