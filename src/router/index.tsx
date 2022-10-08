import { HashRouter } from "react-router-dom";
import App from "../App";
import React, { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"
const Home = lazy(() => import("../views/Home"))
const Layouts = lazy(() => import("../Layouts"))

const CompositeTable = lazy(() => import("../views/CompositeTable"))
const CompositeForm = lazy(() => import("../views/CompositeForm"))
const StepForm = lazy(() => import("../views/StepForm"))
const EditTable = lazy(() => import("../views/EditTable"))
const CustomIcon = lazy(() => import("../views/CustomIcon"))
const WangEdit = lazy(() => import("../views/WangEdit"))

// import Home from "../pages/Home";


const Router = () => {
    return (
        <HashRouter>
            <Suspense fallback={<div>loading</div>}>
                <Routes>
                    <Route path="" element={<App></App>}></Route>
                    <Route path="/" element={<Layouts />}>
                        <Route path="/home" element={<Home/>}></Route>
                        <Route path="/c/table" element={<CompositeTable/>}></Route>
                        <Route path="/e/table" element={<EditTable/>}></Route>
                        <Route path="/s/form" element={<StepForm/>}></Route>
                        <Route path="/c/form" element={<CompositeForm/>}></Route>
                        <Route path="/c/icon" element={<CustomIcon />}></Route>
                        <Route path="/wangedit" element={<WangEdit/>}></Route>
                    </Route>
                </Routes>
            </Suspense>
        </HashRouter>
    )
}

export default Router;
