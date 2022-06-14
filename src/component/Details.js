
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Switch,

} from 'antd';
import React, { useState } from 'react';

const Detail = () => {
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

            <Form.Item name="detailid" type="number" label="DId">
                <InputNumber />
            </Form.Item>

            <Form.Item name="vehicleid" type="number" label="Vehicle Id">
                <InputNumber />
            </Form.Item>

            <Form.Item name="routeid" type="number" label="Route Id">
                <InputNumber />
            </Form.Item>

            <Form.Item name="date" label="Entry Date" >
                <DatePicker />
            </Form.Item>

            <Form.Item name="rdate" label="Route Date" >
                <DatePicker />
            </Form.Item>

            <Form.Item name="counterid" type="number" label="Customer Id">
                <InputNumber />
            </Form.Item>

            <Form.Item name="userid" type="number" label="User Id">
                <InputNumber />
            </Form.Item>

            <Form.Item name="active" label="IsActive" valuePropName="checked" >
                <Switch />
            </Form.Item>

            <Form.Item name="reamrks " type="remarks" label="Remarks">
                <Input />
            </Form.Item>

            <Form.Item name="companyid" type="number" label="Company Id">
                <InputNumber />
            </Form.Item>

            <Form.Item name="receiptamt" type="number" label="Receipt Amt">
                <InputNumber />
            </Form.Item>

            <Form.Item name="nepalidate" type="number" label="Nepali Date">
                <Input />
            </Form.Item>




            <Form.Item >
                <Button htmlType='submit'
                    type='link'
                >Save</Button>

            </Form.Item>
        </Form>
    );
};

export default Detail;




