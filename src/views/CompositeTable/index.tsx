import { SearchOutlined } from "@ant-design/icons"
import { Button, Table, Input, Pagination } from "antd"
import type { ColumnsType, ColumnType } from "antd/lib/table";
import type { FilterConfirmProps } from 'antd/es/table/interface';
import React, { useState, useEffect } from "react";
import { TableDataType, TableDataIndex } from "./typeings"
import "./index.scss"


const CompositeTable: React.FC = () => {
    // 定义表格数据
    const [tableData, setTableData] = useState<TableDataType[]>([])
    // 定义id列表
    const [seletedRowsIds, setSeletedRowsIds] = useState<React.Key[]>([])


    //定义列
    const columns: ColumnsType<TableDataType> = [
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            sorter: (a, b) => a.age - b.age //排序
        },
        {
            title: '地址',
            dataIndex: 'address',
        },
        {
            title: "操作",
            dataIndex: '操作',//rander函数的第二个参数是选中行的所有数据
            render: (_, b) => (
                <>
                    <Button type="primary" onClick={() => clickAction(b)} className="operate-button">修改</Button>
                    <Button type="primary" danger onClick={() => clickAction(b)} className="operate-button">删除</Button>
                </>
            )
        }
    ]


    // 初始化表格数据
    useEffect(() => {
        setTableData([
            {
                id: 23,
                name: `Edward King 32`,
                age: 22,
                address: `London, Park Lane no.234`,
            },
            {
                id: 23433,
                name: `Edward King 32`,
                age: 32,
                address: `London, Park Lane no.234`,
            },
            {
                id: 23134,
                name: `Edward King 32`,
                age: 12,
                address: `London, Park Lane no.234`,
            },
            {
                id: 2343,
                name: `Edward King 32`,
                age: 42,
                address: `London, Park Lane no.234`,
            },
            {
                id: 23243,
                name: `Edward King 32`,
                age: 33,
                address: `London, Park Lane no.234`,
            }
        ])
    }, [])

    const clickAction = (id: any) => {
        console.log(id)
    }




    // 选项改变时更新selectid
    const onSelectChange = (currentSelectIds: React.Key[]) => {
        console.log(currentSelectIds)
        setSeletedRowsIds(currentSelectIds)
    }


    // 行选中选项
    const rowSelection = {
        seletedRowsIds,
        onChange: onSelectChange
    }

    return (
        <div className="composite-table">
            {/* pagination={false} 不使用table封装的分页器 scroll={{y: 340}}滚动条 */}
            <Table className="van-table" style={{background: "#fff"}} rowSelection={rowSelection} rowKey="id" columns={columns} sticky={true} dataSource={tableData} pagination={false}></Table>
            <Pagination
                style={{padding: "20px 0 20px 50px"}}
                total={85}
                showSizeChanger
                showQuickJumper
                pageSizeOptions={[10,20,30,100]}
                showTotal={total => `总条数为${total}`}
            />
        </div>
    )
}
export default CompositeTable