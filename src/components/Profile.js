import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../features/authReducer';
import bg from '../assets/images/background/bg-profile.jpg';
import profile from '../assets/images/maleAvatar.svg';
import { Avatar, Button, Card, Col, Descriptions, Row } from "antd";

const pencil = [
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        key={0}
    >
        <path
            d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
            className="fill-gray-7"
        ></path>
        <path
            d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
            className="fill-gray-7"
        ></path>
    </svg>,
];

function Profile() {
    const token = useSelector(selectCurrentToken);
    useEffect(() => {
        console.log(token);
    })
    return (
        <div>
            <div
                className="profile-nav-bg"
                style={{ backgroundImage: "url(" + bg + ")" }}
            ></div>
            <Card
                className="card-profile-head rounded-md"
                bodyStyle={{ display: "none" }}
                title={
                    <Row justify="space-between" align="middle" gutter={[24, 0]}>
                        <Col span={24} md={12} className="col-info">
                            <Avatar.Group>
                                <Avatar size={74} shape="square" src={profile} />

                                <div className="avatar-info">
                                    <h4 className="font-semibold m-0">Ширчиндэмбэрэл Амарбат</h4>
                                    <p>IT / Программист</p>
                                </div>
                            </Avatar.Group>
                        </Col>
                        <Col
                            span={24}
                            md={12}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                            }}
                        >
                        </Col>
                    </Row>
                }
            ></Card>
            <Card
                bordered={false}
                title={<h6 className="font-semibold m-0">Профайл мэдээлэл</h6>}
                className="header-solid h-full card-profile-information rounded-md"
                extra={<Button type="link">{pencil}</Button>}
                bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
            >
                <p className="text-dark">
                    {" "}
                    Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer
                    is no. If two equally difficult paths, choose the one more painful
                    in the short term (pain avoidance is creating an illusion of
                    equality).{" "}
                </p>
                <hr className="my-25" />
                <Descriptions title="Oliver Liam">
                    <Descriptions.Item label="Full Name" span={3}>
                        Sarah Emily Jacob
                    </Descriptions.Item>
                    <Descriptions.Item label="Mobile" span={3}>
                        (44) 123 1234 123
                    </Descriptions.Item>
                    <Descriptions.Item label="Email" span={3}>
                        sarahjacob@mail.com
                    </Descriptions.Item>
                    <Descriptions.Item label="Location" span={3}>
                        USA
                    </Descriptions.Item>
                </Descriptions>
            </Card>
        </div>
    );
}

export default Profile;
