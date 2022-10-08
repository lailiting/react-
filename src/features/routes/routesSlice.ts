import { createSlice } from "@reduxjs/toolkit";
import { RoutesMap } from "../../map/routeMap";

export interface RouteState {
    label: string,
    key: string,
    closable?: boolean,
}

export interface IRoutes {
    routesList: RouteState[]
}


const initialState: RouteState[] = [
    {
        label: "首页",
        key: "/home",
        closable:false
    }]
export const routesSlice = createSlice({
    name: "routes",
    initialState, //名字一定要是initialState
    reducers: {
        increaseRoute:(state,{payload}) =>{
            //state是当前store的state
            const isExist = state.some((item:RouteState) => {
                return item.key == payload.value.key
            })

            if(!isExist){
                state.push({
                    label:RoutesMap[payload.value.key],
                    key: payload.value.key
                })
            }
        },
        removeRoute:(state,{payload}) =>{
            state.forEach((item, index) => {
                if(item.key == payload.value){
                    state.splice(index,1)
                }
            })
        },
        initRoute:(state,{payload}) => {
            //根据数据结构，这里不能直接把state=[]，会改变引用位置,useEffect监听不到
            state.splice(0,state.length)
            payload.value.map((item:RouteState) => {
                state.push(item)
            })
        }
    }
})

export const { increaseRoute,removeRoute,initRoute} = routesSlice.actions;

// 默认导出
export default routesSlice.reducer;