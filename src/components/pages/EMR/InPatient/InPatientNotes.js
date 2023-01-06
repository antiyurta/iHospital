import { FolderOpenOutlined, FolderOutlined } from "@ant-design/icons";
import { Button, Card, Collapse, Modal } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";
import { Get } from "../../../comman";
import Index from "./document/Index";
const { Panel } = Collapse;
function InPatientNotes({ Appointments }) {
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {}
    }
    const [inspectionNotes, setInspectionNotes] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [datas, setDatas] = useState({});
    const onChangee = async (id) => {
        if (id) {
            const conf = {
                headers: {},
                params: {}
            }
            const response = await Get('service/inPatient-request/show/' + id, token, conf);
            if (response.inspectionNotes.length > 0) {
                setInspectionNotes(response.inspectionNotes);
            } else {
                setInspectionNotes([]);
            }
        }
    }
    const RenderNotesDetail = (data) => {
        if (data.data) {
            return Object.entries(data?.data).map(([key, value], index) => {
                return (
                    <div key={index} className="flex flex-wrap">
                        {Object.entries(value).map((elValues, index) => {
                            return (
                                <p className="pr-2">{elValues[0] + ": " + elValues[1]}</p>
                            )
                        })}
                    </div>
                );
            });
        }
    };
    return (
        <>
            <Collapse
                collapsible="header"
                expandIcon={({ isActive }) => {
                    return isActive ? (
                        <FolderOpenOutlined style={{ fontSize: "24px" }} />
                    ) : (
                        <FolderOutlined style={{ fontSize: "24px" }} />
                    );
                }}
                ghost
            >
                {Object.entries(Appointments).map(([key, value], index) => {
                    return (
                        <Panel header={`${key} Он`} key={index}>
                            <Collapse Collapse collapsible="header" onChange={onChangee} accordion >
                                {
                                    value.map((el, index) => {
                                        return (
                                            <Panel
                                                header={
                                                    <div className="inline-flex">
                                                        <span>
                                                            {el.createdAt?.replace(/T/, " ").replace(/\..+/, "")}
                                                        </span>
                                                        <p className="pl-2 font-extrabold">{el.structure?.name}</p>
                                                    </div>
                                                }
                                                key={value[index].id}
                                            >
                                                {
                                                    inspectionNotes.length > 0 ?
                                                        inspectionNotes.map((note, index) => {
                                                            return (
                                                                <Card
                                                                    extra={
                                                                        <>
                                                                            <Button
                                                                                onClick={() => {
                                                                                    setIsOpen(true);
                                                                                    setDatas(note);
                                                                                    console.log(note);
                                                                                }}
                                                                            >
                                                                                {note.inpatientRequestId}
                                                                            </Button>
                                                                        </>
                                                                    }
                                                                >
                                                                    <RenderNotesDetail data={JSON.parse(note["pain"])} />
                                                                </Card>
                                                            )
                                                        })
                                                        :
                                                        <p>Тэмдэглэл байхгүй</p>
                                                }
                                            </Panel>
                                        );
                                    })
                                }
                            </Collapse>
                        </Panel>
                    );
                })}
            </Collapse>
            <Modal
                title="sada"
                open={isOpen}
                onCancel={() => setIsOpen(false)}
                width={"23cm"}
                footer={null}
            >
                <Index id={datas.formId} data={datas} />
            </Modal>
        </>
    )
}
export default InPatientNotes;