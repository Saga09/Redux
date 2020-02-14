import * as actionType from '../actions/ActionType';

const initialState = {
    user: {},
    userComment: {},
    allUsers: {}
}

const counterReducer = (state = initialState, action) => {
    
    switch (action.type)
    {
        case actionType.USER_DETAIL:
            return Object.assign({}, state, {user: action.user})
        case actionType.USER_COMMENT:
            return Object.assign({}, state, {userComment: action.comments})
        default:
            return state
    }
}

export default counterReducer