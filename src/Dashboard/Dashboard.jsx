import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Blog from '../Blog/Blog';


function Dashboard() {

    const navigate = useNavigate();


 const logout = () => {
    axios.post('/api/auth/logout')
      .then(() => navigate('/login'))
      .catch(console.log);
  };


//     const logout = () => {
   
//     //console.log('when i click this button, admin will log in');

    

//     axios.post(`/api/auth/logout`)
//         .then((response) => {
//             console.log(response);
//             navigate('/login')
//         })
//         .catch((error) => {
//             console.log(error)
//         })

// }

    return (
        <div>
            Admin's Dashboard
            <button onClick={logout}>Logout</button>

            <button onClick={()=> navigate('/admin/blog')}>Blog</button>
            <button onClick={()=> navigate('/admin/gallery')}>Gallery</button>

            
        </div>
    )
}

export default Dashboard;