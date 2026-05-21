import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Blog() {

    const navigate = useNavigate();
    const [blog, setBlog] = useState([]);

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
        <>
        
        <h3> List of blog items</h3>
        <br/>
        
       
        <ul>
            {blog.map (
                function(blog) {
                    return (
                        <li key={blog.id}>

                            {blog.title}
                            <br/>
                            {blog.text}

                        </li>
                    )
                }
            )}
            
        </ul>
        


        
        
        


        <button onClick={()=> navigate('/dashboard')}>Dashboard</button>
        </>
    )
}

export default Blog;