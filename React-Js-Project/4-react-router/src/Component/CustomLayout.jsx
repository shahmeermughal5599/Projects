import React from "react";
import { Link, Outlet } from "react-router-dom";

function CustomLayout() {
  return (
    <div>
      <h2>Header 1</h2>
      <nav>
        <ul>
          <li>
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
          </li>

          <li>
            {/* <a href="/about">About</a> */}
            <Link to="/about">About</Link>
          </li>

          <li>
            {/* <a href="/contact">Contact</a> */}
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {/* <a href="/products">Products</a> */}
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      {/* it will render your children routes */}
      <Outlet />
      <h2>Footer</h2>
    </div>
  );
}

export default CustomLayout;
