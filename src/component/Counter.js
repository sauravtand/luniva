import {
    Button,

    DatePicker,
    Form,
    Input,
    InputNumber,


    Switch,

} from 'antd';
import React, { useState } from 'react';

const Counter = () => {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const onFinish = (values) => {
        console.log(values);
    };
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

            <Form.Item name="cid" type="number" label="CId">
                <InputNumber />
            </Form.Item>
            <Form.Item name="countername" type="name" label="Counter Name">
                <Input />
            </Form.Item>
            <Form.Item name="counterlocation" type="location" label="Counter Location">
                <Input />
            </Form.Item>
            <Form.Item name="date" label="Entry Date" >
                <DatePicker />
            </Form.Item>
            <Form.Item name="companyid" type="number" label="CompanyId">
                <InputNumber />
            </Form.Item>




            <Form.Item label="IsActive" valuePropName="checked" >
                <Switch />
            </Form.Item>
            <Form.Item >
                <Button htmlType='submit'
                    type='link'
                    onClick={onFinish}
                >Save</Button>

            </Form.Item>
        </Form>
    );
};

export default Counter;




