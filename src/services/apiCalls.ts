import { EuiComboBoxOptionOption } from "@elastic/eui";
import axios, { AxiosResponse } from "axios";
import { ProvincesResource } from "../models/provinces";
import { TownWeather } from "../models/towns";

export const getTowns = async (apiUrl: string) => {
  const towns = await axios
    .get(`${apiUrl}/municipios`)
    .then((res) => res)
    .catch((err): void => console.warn(err));

  if (towns === undefined) return;
  return towns.data;
};

export const getProvinceResource = (apiUrl: string) => {
  return axios
    .get(`${apiUrl}/provincias`)
    .then((res): AxiosResponse<ProvincesResource> => res)
    .catch((err): void => console.warn(err));
};

export const getProvinces = async (apiUrl: string) => {
  const resource = await getProvinceResource(apiUrl);
  if (resource === undefined) return;

  let provincesNames: EuiComboBoxOptionOption[] = resource.data.provincias.map(
    (province) => {
      return { label: province.NOMBRE_PROVINCIA };
    }
  );
  return provincesNames;
};

export const getWeather = async (
  apiUrl: string,
  provinceId: string,
  townId: string
) => {
  const weather: AxiosResponse<TownWeather> | void = await axios
    .get(`${apiUrl}/provincias/${provinceId}/municipios/${townId}`)
    .then((res): AxiosResponse<TownWeather> => res)
    .catch((err) => console.warn(err));
  if (weather === undefined) return;
  return weather.data;
};
