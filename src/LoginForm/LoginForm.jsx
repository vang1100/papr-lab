import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



// useEffect(() => {

// }, []);

const login = (event) => {
    event.preventDefault();
    //console.log('when i click this button, admin will log in');

    

    axios.post(`api/auth/login`, {username, password})
        .then((response) => {
            console.log(response);

            

            setUsername();
            setPassword();
        })
        .catch((error) => {
            console.log(error)
        })

}
    return (
        
        <div>
            <form onSubmit={login}>
                <label >

                    Username:

                    <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    
                    />

                </label>

                <br/>

                <label>

                    Password:

                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    
                    />

                </label>
        
       <Link to="/dashboard">
       <button 
            type="submit"
             onClick={() => {
            
          }}
          >Login</button>
       </Link> 
            </form>
        </div>
     
    )
}

export default LoginForm;