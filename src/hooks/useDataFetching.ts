import { useState, useEffect } from "react";
import { Api } from "../utils/costants";

interface DataFetchingParams {
  cryptoValues: string[];
}

export const useDataFetching = ({ cryptoValues }: DataFetchingParams) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coins = cryptoValues.join(",");
        const url = `${Api.Path}${coins}&x_cg_demo_api_key=${Api.Key}`;

        const response = await fetch(url);
        const jsonData = await response.json();

        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    setTimeout(()=>fetchData(), 3500);
  }, [cryptoValues]);

  return { loading, data };
};
