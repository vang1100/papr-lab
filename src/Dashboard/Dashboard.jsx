import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Dashboard() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const logout = () => {
   
    //console.log('when i click this button, admin will log in');

    

    axios.post(`api/auth/logout`)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
        })

}

    return (
        <div>
            Admin's Dashboard

             <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard;