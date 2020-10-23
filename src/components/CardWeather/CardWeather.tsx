import {
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiStat,
} from "@elastic/eui";
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
      <h5>{townWeather.municipio.NOMBRE_PROVINCIA}</h5>
      <h2>
        {" "}
        <EuiIcon type="temperature" />
        {townWeather.temperatura_actual} °C
      </h2>
      <h3 className="rain-title">Probabilidad de LLuvia</h3>
      <EuiFlexGroup>
        {townWeather.pronostico.hoy.prob_precipitacion.map((quarter, index) => {
          return (
            <EuiFlexItem key={`${index}-quarter`}>
              <EuiStat
                title={typeof quarter === "string" ? `${quarter}%` : "-"}
                description={quarters[index]}
                titleSize="m"
              />
              {typeof quarter === "string" && parseInt(quarter) >= 50 ? (
                <EuiIcon type="alert" color="danger" />
              ) : null}
            </EuiFlexItem>
          );
        })}
      </EuiFlexGroup>
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
