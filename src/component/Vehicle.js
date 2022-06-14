import {
    Button,

    DatePicker,
    Form,
    Input,
    InputNumber,


    Switch,

} from 'antd';
import React, { useState } from 'react';

const Vehicle = () => {
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

            <Form.Item name="vid" type="number" label="VId">
                <InputNumber />
            </Form.Item>

            <Form.Item name="vehiclenum" type="name" label="Vehicle Number">
                <Input />
            </Form.Item>

            <Form.Item name="vehicletype" type="number" label="Vehicle Type">
                <InputNumber />
            </Form.Item>

            <Form.Item name="companyid" type="number" label="Company Id">
                <InputNumber />
            </Form.Item>

            <Form.Item name="date" label="Entry Date" >
                <DatePicker />
            </Form.Item>

            <Form.Item name="userid" label="User Id" >
                <InputNumber />
            </Form.Item>

            <Form.Item name="active" label="IsActive" valuePropName="checked" >
                <Switch />
            </Form.Item>

            <Form.Item >
                <Button htmlType='submit'
                    type='link'
                >Save</Button>

            </Form.Item>
        </Form>
    );
};

export default Vehicle;




