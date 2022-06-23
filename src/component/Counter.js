import {
  Button,

  DatePicker,
  Form,
  Input,
  InputNumber,


  Switch,

} from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import moment from 'moment';

const Counter = (props) => {
  const [componentSize, setComponentSize] = useState('default');
  console.log("props", props);
  const [dataSource, setDataSource] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  const Cid = parseInt(searchParams.get("q"));

  // const staDa = {
  //   CId: 1,
  //   CompanyId: 1,
  //   CounterLocation: "Ratna Park",
  //   CounterName: "Counter 1",
  //   // EntryDate: '',
  //   IsActive: true
  // }

  useEffect(() => {
    console.log('asdf');
    // https://lunivacare.ddns.net/LunivaRouteAPI/LunivarouteManagementApi/GetCounterDetails
    fetch("https://lunivacare.ddns.net/LunivaRouteAPI/LunivarouteManagementApi/GetCounterDetails ")
      .then(res => res.json())
      .then(
        (result) => {
          let res = result.CounterDetails
          const vari = res.map((js) => {
            if (js.CId === Cid) {
              return js;

            }
            return ''
          })
          console.log()

          console.log("variable...", vari);

        },

        (error) => {

        }
      );
  }, [])


  console.log("data", dataSource);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };


  const onFinish = (values) => {
    console.log(values);
  };

  let prevVal = {}
  if (dataSource !== undefined) {
    prevVal = {
      ...dataSource,
      EntryDate: moment(dataSource?.EntryDate)
    }
  }
  console.log('asdasd', prevVal);

  return (
    <>

      <Form
        onFinish={onFinish}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={prevVal}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >

        <Form.Item name="CId" type="number" label="CId">
          <InputNumber />
        </Form.Item>
        <Form.Item name="CounterName" type="name" label="Counter Name">
          <Input />
        </Form.Item>
        <Form.Item name="CounterLocation" type="location" label="Counter Location">
          <Input />
        </Form.Item>
        <Form.Item name="EntryDate" label="Entry Date" >
          <DatePicker />
        </Form.Item>
        <Form.Item name="CompanyId" type="number" label="CompanyId">
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

    </>
  )
}
export default Counter;





