import { ManOutlined, WomanOutlined } from "@ant-design/icons";
import { Button, Card, Space, Select, Divider, Row, Col, Alert, Collapse, Modal } from "antd";
import { useState } from "react";

const { Option } = Select;
const { Panel } = Collapse;

const bed = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAABqklEQVR4nO2asU0DQRBFHxYi39BrU4FLACqgBlKXgIlAgogOIIUiKMCIDlwBaOVsc4JbAlsIQcKNb/UPbl7+9979G83J1oEzbPYsoclkclpKuQcmHftYeWuaZr5er5/aBkeWq5VS7ujPzQNMR6PRvSW4b70gQErJNEFdE2MswKEla5qA/4R1An7FbDY7yDnfAGfAuGU8AY8hhMvVavXevd2GqgXknK+Bc2M8AoucM8BFZ1LfqFoAmycPcJRSemkTjDEeA8vtGdUKqL0DIkDbm99mnr+eUYvBL0EvQC2gxguofH6Cz43eivF4fPL1jFrUfg0+AgtgGaN5mT90p/OTqhMQQrgEbrE9xQTchhCuurXqgBhj2f4A6QW7+Ax+Ce60A/o0BVZ8AnYJ9+wPERODnwAvQC2gxt8CagE1/hboUuQv4gWoBdR4AWoBNV6AWkCNF6AWUOMFqAXUeAFqATVegFpAjRegFlDjBagF1HgBagE1XoBaQI0XoBZQ4wWoBdR4AWoBNV6AWkDN4AuwfiDxBkx79onMqyVkmoCmaeZsSugLr6WUuVrC+Yt8AHPcWZF/dER2AAAAAElFTkSuQmCC";


function Inpatient() {
    const [isInpatientModal, setInpatientModal] = useState(false);
    return (
        <>
            <Card
                bordered={false}
                title={<h6 className="font-semibold m-0">Өрөөний менежмент</h6>}
                className="header-solid h-full card-profile-information rounded-md"
                extra={
                    <Space>
                        <Alert className="h-6 bg-[#39CCFF] rounded-md border-white font-bold" message="Эр" />
                        <Alert className="h-6 bg-[#FF79FC] rounded-md border-white font-bold" message="Эм" />
                    </Space>
                }
                bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
            >
                <Row>
                    <Col span={12}>
                        <Alert className="text-2xl text-center" message="А Блок" type="success" />
                        <Divider>1 давхар</Divider>
                        <Collapse accordion>
                            <Panel className="bg-[#FF79FC]" header="Тасаг: Дотор  Өрөө: 101" key="1" extra={
                                <div>
                                    <p>Нийт ор : 4</p>
                                    <p>Сул ор : 1</p>
                                </div>
                            }>
                                <div className="flex flex-wrap">
                                    <div className="w-full md:w-3/12 p-4 hover:cursor-pointer" onClick={() => setInpatientModal(true)}>
                                        <img className="bg-green-500" src={bed} />
                                    </div>
                                    <div className="w-full md:w-3/12 p-4">
                                        <img className="bg-green-500" src={bed} />
                                    </div>
                                    <div className="w-full md:w-3/12 p-4">
                                        <img className="bg-red-500" src={bed} />
                                    </div>
                                    <div className="w-full md:w-3/12 p-4">
                                        <img src={bed} />
                                    </div>
                                </div>
                            </Panel>
                            <Panel className="bg-[#39CCFF]" header="Тасаг: Дотор  Өрөө: 102" key="2">
                                <p>102</p>
                            </Panel>
                            <Panel header="Тасаг: Дотор  Өрөө: 103" key="3">
                                <p>103</p>
                            </Panel>
                        </Collapse>
                    </Col>
                    <Col>
                        <Divider type="vertical" className="h-full" />
                    </Col>
                    <Col span={11}>
                        <Alert className="text-2xl text-center" message="Б Блок" type="success" />
                        <Divider>1 давхар</Divider>
                    </Col>
                </Row>
            </Card >
            <Modal title="Basic Modal" open={isInpatientModal}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}
export default Inpatient;