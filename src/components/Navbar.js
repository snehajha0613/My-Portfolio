import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="#home">Sneha Jha</a>

      <div className="ms-auto">
        <a className="nav-link d-inline text-white" href="#about">About</a>
        <a className="nav-link d-inline text-white" href="#projects">Projects</a>
        <a className="nav-link d-inline text-white" href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;