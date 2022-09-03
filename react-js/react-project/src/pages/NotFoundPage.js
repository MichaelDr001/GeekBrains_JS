import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            This page is not found. Please go <Link to={'/'}>Home</Link>
        </div>
    )
}

export default NotFoundPage