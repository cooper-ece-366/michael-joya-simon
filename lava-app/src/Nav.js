import React from 'react';
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav
        style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
        }}>
        <Link to="/">Home</Link>
        <Link to="/FilterTool">Search</Link>
        
    </nav>
);
}