import React,{useEffect} from "react";
import VabNavBar from "./VabNavBar";
import VabMain from "./VabMain";
import { useSelector,useDispatch } from "react-redux";
import { useLocation,useNavigate } from "react-router-dom";
import { initRoute } from "../features/routes/routesSlice";

import "./index.scss"

const Layouts:React.FC =() => {
    // router Hooks
    const location = useLocation()
    const navigate = useNavigate()

    // redux Hooks
    const stateRoutes = useSelector((state:any) => state.routes)
    const dispatch = useDispatch()

    useEffect(() => {
        window.addEventListener("beforeunload", ()=>{
            sessionStorage.setItem("currentRoute",JSON.stringify(location.pathname))
        })
    },[location.pathname])


    useEffect(() => {
        window.addEventListener("beforeunload", ()=>{
            sessionStorage.setItem("Routes",JSON.stringify(stateRoutes))
        })
    },[stateRoutes])

    useEffect(() => {
        const sessionRoutes = JSON.parse(sessionStorage.getItem('Routes') || '[]')
        console.log(sessionRoutes)
        if(sessionRoutes.length > 0){
            dispatch(initRoute({value:sessionRoutes}))
        }
        const currentRoute:any = JSON.parse(sessionStorage.getItem("currentRoute") || '')
        if(currentRoute){
            navigate(currentRoute)
        }
    },[])
    return (
        <div>
            <VabNavBar></VabNavBar>
            <VabMain></VabMain>
        </div>
    )
}

export default Layouts