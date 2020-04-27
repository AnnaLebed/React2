import React from 'react';
import './App.css';
import UserData from './usersList.json'


class Users extends React.Component{
    render(){
        return(
            <div>
                {UserData.map((element, index) =>{
                    return <div key = {index}>
                        <h4>{element.first_name}</h4>
                        <p>{element.email}</p>
                        <p>{element.country}</p>
                        </div>
                })}
            </div>
        )
    }
}

export default Users;





















