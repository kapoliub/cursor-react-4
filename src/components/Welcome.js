import React from "react";

import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="Welcome">
      <h1>
        Hello,{" "}
        {localStorage.getItem("firstName") + " " + localStorage.getItem("lastName")}
      </h1>
      <Link to="/signin">
        <button>Exit</button>
      </Link>
    </div>
  );
}

export default Welcome;
