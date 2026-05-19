import { useNavigate } from "react-router-dom";

function Blog() {

    const navigate = useNavigate();

    return (
        <>This is wehere the Blog exists
        1. List of blogs
        2. BUttons to click edit and then directs to editing the blog

        <button onClick={()=> navigate('/dashboard')}>Dashboard</button>
        </>
    )
}

export default Blog;