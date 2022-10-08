import React from "react";
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect
} from "antd"
import type { DefaultOptionType } from 'antd/es/cascader';
import "./index.scss"

// 设置表单label和输入框占据的列

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 8 }
}

const buttonLayout = {
    wrapperCol: {
        offset: 6,
        span: 16
    }
}
// 从Select组件中获得Option组件
const { Option } = Select

const CompositeForm: React.FC = () => {
    const [form] = Form.useForm()

    //提交按钮
    const submitData = () => {
        console.log(form.getFieldsValue())
    }

    // 重置
    const onReset = () => {
        form.resetFields()
    }

    //级联选选择器的过滤器
    const filter = (inputValue: string, path: DefaultOptionType[]) => {
        return path.some(
            option => (option.label as string).toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
        );
    }
    return (
        <div className="composite-form">
            <Form {...layout} form={form} name="com-form">
                <Form.Item name="name" label="姓名" rules={[{ required: true }]}>
                    <Input></Input>
                </Form.Item>
                <Form.Item name="sex" label="性别" rules={[{ required: true }]}>
                    <Select placeholder="请选择性别" allowClear>
                        <Option value="男">男</Option>
                        <Option value="女">女</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="TreeSelect" name="tree">
                    <TreeSelect
                        treeData={[
                            { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="Cascader" name="cascader">
                    <Cascader
                        showSearch={{ filter }} //是否展示搜索字段
                        options={[
                            {
                                value: 'zhejiang',
                                label: 'Zhejiang',
                                children: [
                                    {
                                        value: 'hangzhou',
                                        label: 'Hangzhou',
                                    },
                                ],
                            },
                        ]}
                        changeOnSelect={false}
                        expandTrigger="hover"
                    />
                </Form.Item>
                <Form.Item label="DatePicker" name="time">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="InputNumber" name="number">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Switch" valuePropName="checked" name="switch">
                    <Switch />
                </Form.Item>
                <Form.Item {...buttonLayout}>
                    <Button type="primary" htmlType="submit" onClick={submitData}>
                        提交
                    </Button>
                    <Button htmlType="button" onClick={onReset}>重置</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default CompositeForm