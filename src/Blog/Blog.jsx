import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Blog() {

    const navigate = useNavigate();
    const [blog, setBlog] = useState([]);

    const [addBlog, setAddBlog] = useState('');

    useEffect(() =>{

        fetchBlog();
        
    }, []);

    // GET

     const fetchBlog = () => {

        axios.get(`/api/admin`, )
        .then((response) => {
            console.log('this is axios get', response.data);
            setBlog(response.data);
        })
        .catch((error) => {
            console.log('whats the error', error);
        })

    }

    // POST
    
    const postBlog = () => {

    }
    // PUT

        const updateBlog = (id) => {

        }
    // DELETE

    const deleteBlog = (id) => {

        axios.delete(`/api/admin/${id}`)
        .then((response) => {
            console.log(response);
            fetchBlog();
        })
        .catch((error) =>
            console.log(error)
        )
    }



    

    return (
        <>

        <h4>FORM TO SUBMIT</h4>
        
        <form onSubmit={addBlog}>

            <input>
            </input>

            <button
            type="submit">
                Add Blog
            </button>

        </form>


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
                            <button onClick={()=>deleteBlog(blog.id)}>Delete Blog</button>
                            <button>Update Blog</button>

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