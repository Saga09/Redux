import * as actionType from './ActionType';

export const addCounter = () => ({
    type: actionType.ADD_COUNTER,
    payload: 1
});

export const removeCounter = () => ({
    type: actionType.REMOVE_COUNTER,
    payload: 1
});

export function userDetail(userDetail)
{
    return {
        type: actionType.USER_DETAIL,
        user: userDetail
    }
}

export function getUserDetail()
{
    return (dispatch) => {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then((response) => {
                response.json().then(function(data) {
                    dispatch(userDetail(data));
                });
            })
            .then((myJson) => {

            });
    }
}


export function userComment(userComment)
{
    console.log('userComment', userComment);
    return {
        type: actionType.USER_COMMENT,
        comments: userComment
    }
}

export function getUserComment()
{
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then((response) => {
            response.json().then(function (data) {
                dispatch(userComment(data))
            })
                .then((myJson) => {

                });
        })
    }
}

export function allUsers(allUsers)
{
    return {
        type: actionType.ALL_USERS,
        allUsers: allUsers
    }
}

export function getAllUsers()
{
    return(dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then((response) => {
                response.json().then(function(data){
                    dispatch(allUsers(data))
            })
        })
    }
}
