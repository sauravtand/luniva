import { Button, Form, Table, Input } from "antd";
import "antd/dist/antd.css";
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

function Design() {
    const [dataSource, setDataSource] = useState([]);
    const [editingRow, setEditingRow] = useState(null);
    const [form] = Form.useForm();

    let navigate = useNavigate();

    useEffect(() => {
        const data = [];
        for (let index = 0; index < 7; index++) {
            data.push({
                key: `${index}`,
                name: `Name ${index}`,
                address: `Address ${index}`,

            })
        }
        setDataSource(data);
    }, []);


    const columns = [
        {
            title: 'Name',
            dataIndex: "name",
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
            dataIndex: "address",
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
                                navigate("/register")
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