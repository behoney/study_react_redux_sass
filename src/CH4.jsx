// part2

import React, { useState, useEffect, useRef, useReducer, useMemo } from 'react'
import "./CH4.scss"
import moment from 'moment-timezone'
import { add, compareAsc, format } from "date-fns"
//antd
import { Layout, Menu, Breadcrumb, DatePicker, message, Alert, Typography } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { Modal } from 'antd';
import { Progress } from 'antd';





const { Header, Sider, Content, Footer } = Layout;
const { Text, Link } = Typography;

function CH4() {
    return (<>
        {/* <MomentExample /> */}
        {/* <FnsExample /> */}
        {/* <Sass></Sass> */}
        <Row>
            <Col span={32}>
                <Antd4></Antd4>
            </Col>
        </Row>
    </>)
}

export default CH4;

const Antd4 = () => {
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');

    const showModal = () => {
        setVisible(true);
    };

    const [progress, setProgress] = useState(0);
    let itv = undefined;

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
        if (itv === undefined) itv = setInterval(() => {
            if (progress > 100) {
                clearInterval(itv);
                itv = undefined;
            }

            setProgress(prev => prev + 1);

        }, 2000 / 100)

    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal with async logic
            </Button>
            <Modal
                title="Title"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>

                <>
                    <Progress strokeLinecap="square" percent={progress} />
                    <Progress strokeLinecap="square" type="circle" percent={progress} />
                    <Progress strokeLinecap="square" type="dashboard" percent={progress} />
                </>

            </Modal>
        </>
    );
};

const Antd3 = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

const Antd2 = () => {
    return (
        <div>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" style={{ backgroundColor: "pink", width: "16px", height: "16px" }} />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                        <Menu.Item key="4" icon={<UserOutlined />}>
                            nav 4
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, height: "100vh" }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        Content
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    )

}
const Antd = () => {

    const [date, setDate] = useState(null);
    const handleChange = value => {
        message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
        setDate(value);
    };
    return (
        <div style={{ width: 400, margin: '100px auto' }}>
            <DatePicker onChange={handleChange} />
            <div style={{ marginTop: 16 }}>
                Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
                <Alert message={
                    "Selected Date:"
                } description={date ? date.format("YYYY-MM-DD") : "None"}></Alert>
            </div>


            <Text>Ant Design (default)</Text>
            <Text type="secondary">Ant Design (secondary)</Text>
            <Text type="success">Ant Design (success)</Text>
            <Text type="warning">Ant Design (warning)</Text>
            <Text type="danger">Ant Design (danger)</Text>
            <Text disabled>Ant Design (disabled)</Text>
            <Text mark>Ant Design (mark)</Text>
            <Text code>Ant Design (code)</Text>
            <Text keyboard>Ant Design (keyboard)</Text>
            <Text underline>Ant Design (underline)</Text>
            <Text delete>Ant Design (delete)</Text>
            <Text strong>Ant Design (strong)</Text>
            <Text italic>Ant Design (italic)</Text>

        </div>
    );

}

// const Sass = () => {
//     return (<div className='sidebar gray pulse'>
//         hi
//         <button className='button'>button</button>
//     </div>)

// }

const FnsExample = () => {

    const dates = [
        add(new Date("2000-01-02"), { years: 1 }),
        add(new Date("2000-01-02"), { month: 1 }),
        add(new Date("2000-01-02"), { minutes: 1 }),
        add(new Date("2000-01-02"), { seconds: 1 }),
        add(new Date("2000-01-02"), { day: 1 }),

    ]
    dates.sort(compareAsc)
    return (<div>
        {
            format(new Date(), "yyyy-mm-dd")
        }
        {dates.map(e => {
            return (<div>
                {e.toString()}
            </div>)
        })}
    </div>)
}

const MomentExample = () => {
    const [result, setResult] = useState("")
    const [date, setDate] = useState("")

    const momentDate = moment();
    return (<div>
        {/* {momentDate.add(1, "day").format("YY-MM-DD")} */}

        <div>
            <input type="date" onChange={(e) => {
                console.log(e.target.value);
                setResult(moment(e.target.value).format("ddd"))
            }} />
            {result}
        </div>



    </div>)

}

