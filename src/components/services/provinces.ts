import { EuiComboBoxOptionOption } from "@elastic/eui";
import axios, { AxiosResponse } from "axios";
import { ProvincesResource } from "../../models/provinces";

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

export const getProvinceResource = async (apiUrl: string) => {
  return await axios
    .get(`${apiUrl}/provincias`)
    .then((res): AxiosResponse<ProvincesResource> => res)
    .catch((err): void => console.warn(err));
};
