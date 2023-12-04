import React, { useEffect, useState } from "react";
import { Api, Coins } from "../../utils/costants";
import Layout from "../../components/Layout/Layout";

import "./Homepage.css";
import Table from "../../components/Table/Table";

const Homepage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState([])

  
  const url = `${Api.Path}${Coins.Bitcoin}&x_cg_demo_api_key=${Api.Key}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('data:', data);
      setData(data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error:', error);
      setLoading(false);
    });

  return (
    <Layout goTo="" url="/">
      <Table rawData={data}/>
    </Layout>
  );
};

export default Homepage;
