import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,

    Select,
    Switch,
    TreeSelect,
} from 'antd';
import React, { useState } from 'react';

const Register = () => {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const onFinish = (values) => {
        console.log(values);
    }

    return (
        <Form
            onFinish={onFinish}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
            initialValues={{
                size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
        >

            <Form.Item name="input" label="Input">
                <Input />
            </Form.Item>
            <Form.Item name="select" label="Select">
                <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item name="tree" label="TreeSelect">
                <TreeSelect
                    treeData={[
                        {
                            title: 'Light',
                            value: 'light',
                            children: [
                                {
                                    title: 'Bamboo',
                                    value: 'bamboo',
                                },
                            ],
                        },
                    ]}
                />
            </Form.Item>
            <Form.Item name="cascader" label="Cascader">
                <Cascader
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
                />
            </Form.Item>
            <Form.Item name="date" label="DatePicker">
                <DatePicker />
            </Form.Item>
            <Form.Item name="number" label="InputNumber">
                <InputNumber />
            </Form.Item>
            <Form.Item name="switch" label="Switch" valuePropName="checked">
                <Switch />
            </Form.Item>
            <Form.Item label="Button">
                <Button htmlType='submit'>Button</Button>
            </Form.Item>
        </Form>
    );
};

export default Register;