import React from "react";
import "./index.scss"
import { HeartIcon } from "../CustomIcon";
//FC function
const EditTable: React.FC = () => {
    return (
        <div>
            可编辑表格
            <HeartIcon style={{ color: 'hotpink' }} />
        </div>
    )
}
export default EditTable