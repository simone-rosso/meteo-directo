import { Breadcrumb } from "./components";

export interface Province {
  NOMBRE_PROVINCIA: string;
}

export interface ProvinceDetails extends Province {
  CODPROV: string;
  CODAUTON: string;
  COMUNIDAD_CIUDAD_AUTONOMA: string;
  CAPITAL_PROVINCIA: string;
}

export interface ProvincesResource {
  title: string;
  provincias: ProvinceDetails[];
  breadcrumb: Breadcrumb[];
  metadescripcion: string;
  keywords: string;
}
