import React from "react";

function Navbar() {
  return (
    <div>
      <header className="header">
        <div className="uniform-width">
          <img
            src="./src/images/world.png"
            alt="logo-of-globe"
            className="globe-logo"
          ></img>

          <h4>my travel journal</h4>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
