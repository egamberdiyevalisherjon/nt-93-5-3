import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Sorry, Page you are looking for is not found! 404</h1>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default NotFound;
