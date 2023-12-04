import React, { useEffect, useState } from "react";
import { EuiComboBoxOptionOption, EuiLoadingChart } from "@elastic/eui";
import { getTowns, getWeather } from "../../services/apiCalls";
import ComboboxHomepage from "../../components/ComboboxHomepage/ComboboxHomepage";
import CardWeather from "../../components/CardWeather/CardWeather";
import { APICallFields, town, TownWeather } from "../../models/towns";
import Layout from "../../components/Layout/Layout";
import SaveButton from "../../components/SaveButton/SaveButton";

import "./Homepage.css";
import { Api } from "../../utils/costants";

const Homepage = () => {}

export default Homepage;
