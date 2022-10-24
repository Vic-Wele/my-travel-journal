import React from "react";

function Cards(props) {
  return (
    <div className="card-wrapper">
      <img
        src={`./src/images/${props.coverImage}`}
        alt="image of location"
        className="card-image"
      ></img>

      <div className="card-details">
        <div className="card-details-location general-styles">
          <div className="name">
            <p>{props.country}</p>
            <span>
              <a href="google.com" target="_blank">
                view on Google Maps
              </a>
            </span>
          </div>

          <h4>{props.site}</h4>
        </div>

        <div className="card-details-description general-styles">
          <h6 className="date">{props.date}</h6>

          <p className="fun-facts">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
