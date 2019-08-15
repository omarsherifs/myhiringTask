import React, { Component } from 'react';
import User from './user';

export class Users extends Component {
    render() {
        
        return this.props.users.map((user)=>(
                <User users={user}/>
        ));
    }
}


export default Users;
