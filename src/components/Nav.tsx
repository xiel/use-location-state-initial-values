import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">useQueryReducer</Link>
        </li>
        <li>
          <Link to="/array-demo">Array</Link>
        </li>
      </ul>
    </nav>
  );
}
