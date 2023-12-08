import React from "react";
import { EuiLoadingChart } from "@elastic/eui";
import './Loader.css'

export enum LoaderSize {
    Xl = 'xl'
}

interface ILoader {
    size: LoaderSize
}

const Loader = ({ size }:ILoader) => {
    return (
        <div className="loader__container">
            <EuiLoadingChart size={size} />
        </div>
    );
};

export default Loader;