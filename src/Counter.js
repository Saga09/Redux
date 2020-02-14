import React, { Component } from 'react';
import { connect } from 'react-redux';

import {getUserComment, getUserDetail, getAllUsers} from './actions/index';

class Counter extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount()
    {
        this.props.dispatch(getUserDetail());
        this.props.dispatch(getUserComment());
        this.props.dispatch(getAllUsers())
    }
    getClicks(){

    }
    render(){
        console.log("userDetails",this.props.userDetails.user);
        console.log("userComment",this.props.userDetails.userComment);
        console.log("allUsers----",this.props.allUsers);
        return(
            <div className="cotainer">
                <div className="notification">
                    <h1>
                        {this.props.count}
                    </h1>
                </div>
                <div>
                    {this.getClicks()}
                </div>


            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        count: state.counterReducer,
        userDetails: state.userDetails,
        allUsers: state.allUsersReducers
    }
}
export default connect(mapStateToProps)(Counter);