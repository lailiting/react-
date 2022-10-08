import React from "react";
import VabChart from "./VabChart";
import VabTextCard from "./VabTextCard";
import "./index.scss"

const Home: React.FC = () => {
    return (
        <div className="home-page">
            <VabChart />
            <VabTextCard /></div>
    )
}

export default Home