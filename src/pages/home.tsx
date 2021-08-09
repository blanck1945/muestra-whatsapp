import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <div>
        <p>Routes</p>
        <ul>
          <Link to="/">home</Link>
          <Link to="actual">actual</Link>
          <Link to="link">link</Link>
          <Link to="tarjetin">tarjetin</Link>
          <Link to="chat">bot</Link>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
