import React from "react";

export interface TableDataType{
    id: React.Key;
    name : string;
    age: number;
    address: string
}

export type TableDataIndex = keyof TableDataType