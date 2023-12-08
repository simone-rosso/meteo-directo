import React from "react";
import Layout from "../../components/Layout/Layout";
import Table from "../../components/Table/Table";
import { useDataFetching } from "../../hooks/useDataFetching";
import { hardcodedCoins } from "../../utils/costants";
import Loader, { LoaderSize } from "../../components/Loader/Loader";

const Homepage = () => {
  const { loading, data } = useDataFetching({
    cryptoValues: hardcodedCoins
  });
  console.log(data)

  return (
    <Layout goTo="" url="/">
      {
        loading
          ? <Loader size={LoaderSize.Xl} />
          : <Table rawData={data} />
      }
    </Layout>
  );
};

export default Homepage;