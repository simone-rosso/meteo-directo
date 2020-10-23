import { EuiCard, EuiIcon } from "@elastic/eui";
import React from "react";
import { TownWeather } from "../../models/towns";
import "./CardWeather.css";

interface CardWeatherProps {
  townWeather: TownWeather;
}

const quarters = ["Mañana", "Mediodía", "Tarde", "Noche"];

const CardContent = ({ townWeather }: CardWeatherProps) => {
  return (
    <>
      <p>{townWeather.municipio.NOMBRE_PROVINCIA}</p>
      <h2>
        {" "}
        <EuiIcon type="temperature" />
        {townWeather.temperatura_actual} °C
      </h2>
      <h5>Probabilidad de LLuvia</h5>
      <ul>
        {townWeather.pronostico.hoy.prob_precipitacion.map((quarter, index) => {
          return (
            <li key={`${index}-quarter`}>
              {quarters[index]}-{quarter}%
            </li>
          );
        })}
      </ul>
    </>
  );
};

const CardWeather = ({ townWeather }: CardWeatherProps) => {
  return (
    <EuiCard
      className="card-weather"
      titleElement={"h2"}
      title={townWeather.municipio.NOMBRE}
      description={<CardContent townWeather={townWeather} />}
      onClick={() => console.log("clicked")}
    />
  );
};

export default CardWeather;
