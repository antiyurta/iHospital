import { FolderOpenOutlined, FolderOutlined } from "@ant-design/icons";
import { Button, Card, Collapse } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";
import { Get } from "../../../comman";
const { Panel } = Collapse;
function InPatientNotes({ Appointments }) {
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {}
    }
    const [inspectionNotes, setInspectionNotes] = useState([]);
    const onChangee = async (id) => {
        if (id) {
            const conf = {
                headers: {},
                params: {}
            }
            const response = await Get('service/inPatient-request/show/' + id, token, conf);
            if (response.inspectionNotes.length > 0) {
                setInspectionNotes(response.inspectionNotes);
                getForm(response.inspectionNotes.formId);
            } else {
                setInspectionNotes([]);
            }
        }
    }
    const getForm = async () => {
        console.log(inspectionNotes);
        inspectionNotes.map((note, index) => {
            return (
                <Card
                    key={index}
                    className="m-3"
                >
                </Card>
            )

        })
        // const conf = {
        //     headers: {},
        //     params: {}
        // }
        // const response = await Get('emr/inspection-form/8', token, conf);
        // console.log(response);
    }
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
                                                        <p className="pl-2 font-extrabold">{el.structure.name}</p>
                                                    </div>
                                                }
                                                key={value[index].id}
                                            >
                                                {
                                                    inspectionNotes.length > 0 ?
                                                        getForm(inspectionNotes)
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
        </>
    )
}
export default InPatientNotes;