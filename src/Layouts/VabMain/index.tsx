import React from "react";
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import VabTabs from "../VabTabs";
import VabBreadCrumb from "../VabBreadCrumb";
import "./index.scss"


const VabMain: React.FC = () => {
    return (
        <div className="app-main">
            <div className="app-top-header">
                <div className="vab-nav">
                    <VabBreadCrumb/>
                </div>
                <VabTabs />
            </div>
            <div className="app-content">
                <Outlet/>
            </div>
        </div>
    )
}

export default VabMain