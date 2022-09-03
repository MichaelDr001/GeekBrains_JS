import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <Link to={'/chats'}>Chats</Link>
            <Link to={'/profilepage'}>Profiles</Link>
        </div>
    )
}

export default HomePage