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
      <span>{townWeather.municipio.NOMBRE_PROVINCIA}</span>
      <span>
        {" "}
        <EuiIcon type="temperature" />
        {townWeather.temperatura_actual} °C
      </span>
      <span>Probabilidad de LLuvia</span>
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
