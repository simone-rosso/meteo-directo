export interface town {
  CODIGOINE: string;
  ID_REL: string;
  COD_GEO: string;
  CODPROV: string;
  NOMBRE_PROVINCIA: string;
  NOMBRE: string;
  POBLACION_MUNI: number;
  SUPERFICIE: number;
  PERIMETRO: number;
  CODIGOINE_CAPITAL: string;
  NOMBRE_CAPITAL: string;
  POBLACION_CAPITAL: string;
  HOJA_MTN25: string;
  LONGITUD_ETRS89_REGCAN95: number;
  LATITUD_ETRS89_REGCAN95: number;
  ORIGEN_COORD: string;
  ALTITUD: number;
  ORIGEN_ALTITUD: string;
  DISCREPANTE_INE: number;
}

export interface APICallFields {
  label: string;
  CODIGOINE: string;
  CODPROV: string;
}

export interface TownWeather {
  municipio: {
    NOMBRE: string;
    NOMBRE_PROVINCIA: string;
  };
  stateSky: {
    description: string;
  };
  temperatura_actual: string;
  pronostico: { hoy: { prob_precipitacion: string[] } };
  breadcrumb: object[];
  fecha: string;
  humedad: string;
  imagen: null;
  keywords: string;
  lluvia: string;
  proximos_dias: object[];
  temperaturas: { max: string; min: string };
  viento: string;
}
