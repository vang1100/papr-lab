import { useNavigate } from "react-router-dom";

function Gallery() {

   const navigate = useNavigate();
    return (
        <>

        <div>
            This is where the gallery pictures are

            <button onClick={()=>navigate('/dashboard')}>Dashboard</button>
        </div>
        </>
    )
}

export default Gallery;