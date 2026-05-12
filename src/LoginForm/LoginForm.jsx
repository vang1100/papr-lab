import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm({setIsLoggedIn}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    



// useEffect(() => {

// }, []);

const login = (event) => {
    event.preventDefault();
    //console.log('when i click this button, admin will log in');

    

    axios.post('/api/auth/login', {username, password})
          .then((response) => {
      console.log(response);
      setUsername('');
      setPassword('');
      setIsLoggedIn(true); // Update parent state
      navigate('/dashboard');
    })
    .catch((error) => {
      console.log(error);
        })

}
    return (
        
        <div>

            Admin's Login Page
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
        
       
       <button 
            type="submit"
            
          >Login</button>
       
            </form>
        </div>
     
    )
}

export default LoginForm;