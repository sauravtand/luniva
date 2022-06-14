import {
    Button,

    DatePicker,
    Form,
    Input,
    InputNumber,


    Switch,

} from 'antd';
import React, { useState } from 'react';

const Post = () => {
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

            <Form.Item name="ownerid" type="number" label="OId">
                <InputNumber />
            </Form.Item>

            <Form.Item name="ownername" type="name" label="Owner Name">
                <Input />
            </Form.Item>

            <Form.Item name="owneraddress" type="address" label="Owner Address">
                <Input />
            </Form.Item>

            <Form.Item name="mobilenumber" type="number" label="Owner Mobile Number">
                <Input />
            </Form.Item>

            <Form.Item name="contactnumber" type="number" label="Owner Contact Number">
                <Input />
            </Form.Item>

            <Form.Item name="email" type="email" label="Owner Email" rules={[{ type: 'email' }]}>
                <Input />
            </Form.Item>

            <Form.Item name="userid" label="User Id" >
                <InputNumber />
            </Form.Item>

            <Form.Item name="vehicleid" label="Vehicle Id" >
                <InputNumber />
            </Form.Item>

            <Form.Item name="date" label="Entry Date" >
                <DatePicker />
            </Form.Item>

            <Form.Item name="companyid" label="Company Id" >
                <InputNumber />
            </Form.Item>

            <Form.Item name="reamrks " type="remarks" label="Remarks">
                <Input />
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

export default Post;




