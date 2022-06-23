import { Button, Form, Table, Input } from "antd";
import "antd/dist/antd.css";
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

import { SearchOutlined } from '@ant-design/icons'

function Design() {
    const [dataSource, setDataSource] = useState([]);
    const [editingRow, setEditingRow] = useState(null);
    const [form] = Form.useForm();


    let navigate = useNavigate();

    // useEffect(() => {
    //     const data = [];
    //     for (let index = 0; index < 7; index++) {
    //         data.push({
    //             key: `${index}`,
    //             name: `Name ${index}`,
    //             address: `Address ${index}`,

    //         })
    //     }
    //     setDataSource(data);
    // }, []);

    useEffect(() => {
        console.log('asdf');
        // https://lunivacare.ddns.net/LunivaRouteAPI/LunivarouteManagementApi/GetCounterDetails
        fetch("        https://lunivacare.ddns.net/LunivaRouteAPI/LunivarouteManagementApi/GetCounterDetails ")
            .then(res => res.json())
            .then(
                (result) => {
                    let res = result.CounterDetails
                    console.log(res)
                    setDataSource(res)
                },
                // Note: it's important to handle errors here
                // instead of a catch()  so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {

                }
            )
    }, [])

    //   const newCol = [
    //       {
    //           title: " CounterName",
    //           dataIndex: "CounterName",
    //           key: "countername",
    //           render: function (text, record, index) {
    //               console.log(text, record, index);
    //               return <button>asdf</button>
    //           }
    //       },
    //       // history.push('edit/CID')
    //   ]

    const columns = [
        {
            title: 'Name',
            dataIndex: "CounterName",
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
                return <><Input autoFocus placeholder="Type text here"
                    vale={selectedKeys[0]}
                    onchange={(e) => {
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }}
                    onPressEnter={() => {
                        confirm()
                    }}
                    onBlur={() => {
                        confirm()
                    }}
                ></Input>
                    <Button onClick={() => { confirm() }} type='primary'>Search</Button>

                </>
            },

            filterIcon: () => {
                return <SearchOutlined />
            },
            onFilter: (value, record) => {
                return record.name.toLowerCase().includes(value.toLowerCase());
            },

            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        < Form.Item
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your name",
                                },
                            ]}>
                            <Input />
                        </Form.Item >);

                } else {
                    return <p>{text}</p>;
                }
            },
        },

        {
            title: 'Address',
            dataIndex: "CounterLocation",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        < Form.Item name="address">

                            <Input />

                        </Form.Item >
                    );

                } else {
                    return <p>{text}</p>
                }
            }
        },

        {
            title: 'Actions',
            render: (_, record) => {
                return (
                    <>
                        <Button

                            type="link "
                            onClick={() => {
                                navigate(`/counter?q=${record.CId}`)
                            }}
                        >Edit
                        </Button>
                        <Button type="link" htmlType="submit">Save</Button>
                    </>
                );
            },
        },


    ];
    const onFinish = (values) => {
        const updatedDataSource = [...dataSource];
        updatedDataSource.splice(editingRow, 1, { ...values, key: editingRow });
        setDataSource(updatedDataSource);
        setEditingRow(null);
    };

    return (
        <>
            <div className="Design">
                <header className="Design-header">
                    <Form form={form} onFinish={onFinish}>
                        <Table
                            columns={columns}
                            dataSource={dataSource}>

                        </Table>
                    </Form>
                </header>
            </div>
        </>
    );
}
export default Design;