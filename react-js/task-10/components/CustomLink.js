import React from "react";
import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ to, children }) => {
  const match = useMatch(to);

  return (
    <Link to={to} className={match ? "active" : ""}>
      <p className={match ? "active" : ""}>{children}</p>
    </Link>
  );
};

export default CustomLink;
