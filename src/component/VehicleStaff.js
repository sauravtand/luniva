import {
    Button,

    DatePicker,
    Form,
    Input,
    InputNumber,


    Switch,

} from 'antd';
import React, { useState } from 'react';

const Staff = () => {
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

            <Form.Item name="vsid" type="number" label="VsId">
                <InputNumber />
            </Form.Item>

            <Form.Item name="vehicleid" type="number" label="VehicleId">
                <InputNumber />
            </Form.Item>

            <Form.Item name="staffname" type="name" label="Staff Name">
                <Input />
            </Form.Item>



            <Form.Item name="staffcontactnumber" type="" label="Staff Contact Number">
                <Input />
            </Form.Item>

            <Form.Item name="stafftypeid" type="number" label="Staff Type Id">
                <InputNumber />
            </Form.Item>





            <Form.Item name="date" label="Entry Date" >
                <DatePicker />
            </Form.Item>

            <Form.Item name="companyid" type="number" label="Company Id">
                <InputNumber />
            </Form.Item>






            <Form.Item name="reamrks" type="remarks" label="Remarks">
                <Input />
            </Form.Item>


            <Form.Item name="isactive" label="IsActive" valuePropName="checked" >
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

export default Staff;




