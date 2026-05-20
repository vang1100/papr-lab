import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Blog() {

    const navigate = useNavigate();
    const [blog, setBlog] = useState('');

    useEffect(() =>{

        fetchBlog();
        
    }, []);

     const fetchBlog = () => {

        //axios

        axios.get(`/api/admin`, )
        .then((response) => {
            console.log('this is axios get', response.data);
            setBlog(response.data);
        })
        .catch((error) => {
            console.log('whats the error', error);
        })

    }

    

    return (
        <>This is wehere the Blog exists
        <br/>

        <ul>
            <li>
             List of blogs
        <li>buttons to click edit and then directs to editing the blog
            </li>
            </li>
        </ul>
        

<ul>
    05/19 planning:

        1. display list of blog
        2. create edit form for blog
</ul>
        
        
        


        <button onClick={()=> navigate('/dashboard')}>Dashboard</button>
        </>
    )
}

export default Blog;