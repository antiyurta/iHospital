import { Button, Card, Col, Radio, Row, Tree } from "antd";
import React, { useState } from "react";
import male from '../../../assets/images/maleAvatar.svg';

const { DirectoryTree } = Tree;
const treeData = [
    {
        title: '2022-01-01',
        key: '0-0',
        children: [
            {
                title: 'leaf 0-0',
                key: '0-0-0',
                isLeaf: true,
            },
            {
                title: 'leaf 0-1',
                key: '0-0-1',
                isLeaf: true,
            },
        ],
    },
    {
        title: '2022-01-02',
        key: '0-1',
        children: [
            {
                title: 'leaf 1-0',
                key: '0-1-0',
                isLeaf: true,
            },
            {
                title: 'leaf 1-1',
                key: '0-1-1',
                isLeaf: true,
            },
        ],
    },
];

function EMR() {
    const [cardLoading, setCardLoading] = useState(false);
    const onSelect = (keys, info) => {
        console.log('Trigger Select', keys, info);
    };

    const onExpand = (keys, info) => {
        console.log('Trigger Expand', keys, info);
    };
    return (
        <Row gutter={[8, 8]}>
            <Col span={12}>
                <Row gutter={[8, 8]}>
                    <Col span={24}>
                        <Card
                            bordered={false}
                            title={<h6 className="font-semibold m-0">Үйлчлүүлэгчийн мэдээлэл</h6>}
                            className="header-solid h-full"
                            loading={cardLoading}
                            bodyStyle={{ paddingTop: 0, paddingBottom: 16, maxHeight: 200, minHeight: 200, height: 200 }}
                        >
                            <Row gutter={[16, 16]}>
                                <Col span={8}>
                                    <img className="max-h-16" src={male} alt="avatar" />
                                </Col>
                                <Col span={16}>
                                    <label style={{ width: '100%', paddingBottom: 5 }}>Овог: <b>Ширчиндэмбэрэл</b></label>
                                    <br />
                                    <label style={{ width: '100%', paddingBottom: 5 }}>Нэр: <b>Амарбат</b></label>
                                    <br />
                                    <label style={{ width: '100%' }}>Хүйс: <b>Эр</b></label>
                                    <br />
                                    <label style={{ width: '100%' }}>Нас: <b>25</b></label>
                                    <br />
                                    <label style={{ width: '100%' }}>РД: <b>ЙЮ97043019</b></label>
                                    <br />
                                    <label style={{ width: '100%' }}>Утас: <b>86681325</b></label>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            bordered={false}
                            title={<h6 className="font-semibold m-0">Өвчтөний түүx</h6>}
                            className="header-solid h-full"
                            loading={cardLoading}
                            bodyStyle={{ paddingTop: 0, paddingBottom: 16, maxHeight: 200, minHeight: 200, height: 200 }}
                        >
                            <DirectoryTree
                                multiple
                                defaultExpandAll
                                onSelect={onSelect}
                                onExpand={onExpand}
                                treeData={treeData}
                            />
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col span={12}>
                <Card
                    bordered={false}
                    title={<h6 className="font-semibold m-0">Явцын үзлэг</h6>}
                    className="header-solid h-full"
                    loading={cardLoading}
                    bodyStyle={{ paddingTop: 0, paddingBottom: 16, maxHeight: 200, minHeight: 200, height: 200 }}
                    extra={
                        <>
                            <Radio.Group>
                                <Radio value={1}>Анхан</Radio>
                                <Radio value={2}>Давтан</Radio>
                            </Radio.Group>
                        </>
                    }
                >

                </Card>
            </Col>
        </Row>
    );
}

export default EMR;
