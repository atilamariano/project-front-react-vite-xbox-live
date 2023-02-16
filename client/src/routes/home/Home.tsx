import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Home.css';

function Home() {

    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        try {
            const response = await axios.get(
                "https://xbox-live-api.onrender.com/api/"
            );

            console.log(response);
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div>Home</div>
    )
}

export default Home