import React from "react";
import propType from "prop-types"
import App from "./App";


function Card({data}) {
    const {
        location,
        current,
      } = data;

    return (
        <div className="card">
        <div>
        <span id="cidade">
          {location.name}
        </span>
        <span>
          {`${location.region},${location.country}`}
        </span>
        </div>
        <div className="tabela-temp">
          <span id="temperatura">
           {current.temp_c}
          </span>
          <span id="temp">
            °C
          </span>
        </div>
        <div>
          <span>
            {`Umidade: ${current.humidity}%`}
          </span>
          <span id="icon">
            <img src={current.condition.icon}/>
          </span>
          <span>
            {current.condition.text}
          </span>
        </div>
      </div>
    );
}

export default Card;

Card.propType = {
    data: propType.object,
}.isRequired