import React from "react";
import { EuiLoadingChart } from "@elastic/eui";
import './Loader.css'

export enum LoaderSize {
    Xl = 'xl'
}

interface Loader {
    size: LoaderSize
}

const Loader: React.FC<Loader> = ({ size }:Loader) => {
    return (
        <div className="loader__container">
            <EuiLoadingChart size={size} />
        </div>
    );
};

export default Loader;