import { FolderOpenOutlined, FolderOutlined, PrinterOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Collapse, Divider, Image, Modal } from "antd";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get } from "../../comman";
import FormXray from "./FormPrint/Xray";
const { Panel } = Collapse;
const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
function Xrays({ PatientId }) {
    const token = useSelector(selectCurrentToken);
    const [xrayHistory, setXrayHistory] = useState([]);
    const config = {
        headers: {},
        params: {}
    }
    const [spinner, setSpinner] = useState(false);
    const [printData, setPrintData] = useState({});
    const [isOpenModalForm, setIsOpenModalForm] = useState(false);
    const getPatientXrays = async (id) => {
        setSpinner(true);
        config.params.patientId = id;
        const response = await Get('service/xrayRequest', token, config);
        await Promise.all(response.data.map(async (xray) => {
            await Promise.all(xray.photos.map(async (equip) => {
                const equipPhotoSrc = await getPhoto(equip.id);
                equip['photoSrc'] = equipPhotoSrc;
            }));
        }));
        if (response.data.length > 0) {
            var result = response.data.reduce(function (r, a) {
                //Оноор бүлэглэх
                r[a.createdAt.substring(0, 4)] = r[a.createdAt.substring(0, 4)] || [];
                r[a.createdAt.substring(0, 4)].push(a);
                return r;
            }, Object.create(null));
            setXrayHistory(result);
        }
        setSpinner(false);
    };
    const getPhoto = async (id) => {
        const response = await axios.get(DEV_URL + 'local-files/' + id, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "x-api-key": API_KEY
            },
            responseType: 'blob'
        });
        const file = new Blob([response.data], { type: response.type });
        const fileURL = URL.createObjectURL(file);
        return fileURL;
    };
    const RenderNotesDiagnose = (data) => {
        return data?.data?.map((diagnose, index) => {
            return (
                <div key={index} className="flex">
                    <p className="font-semibold mx-2">{diagnose.type}: </p>
                    <p>{"[" + diagnose.code + "]" + diagnose.nameMn}</p>
                </div>
            )
        })
    };
    const RenderNotesDetail = (data) => {
        return Object.entries(data.data).map(([key, value], index) => {
            return (
                <div key={index} className="inline-flex">
                    <p className="font-semibold mx-2">{key}: </p>
                    {Object.values(value).map((elValues, index) => {
                        return typeof elValues === "string" ? (
                            <p key={index}>{elValues}</p>
                        ) : (
                            <div key={index}>
                                {elValues.map((el, index) => {
                                    return <p key={index}>{el}</p>;
                                })}
                            </div>
                        );
                    })}
                </div>
            );
        });
    };
    const refresh = () => (
        <Button title="Сэргээх" type="primary" onClick={() => getPatientXrays()}>
            <ReloadOutlined spin={spinner} />
        </Button>
    );
    const getPrint = () => {

    };
    useEffect(() => {
        getPatientXrays(PatientId);
    }, [PatientId])
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
                {Object.entries(xrayHistory).map(([key, value], index) => {
                    return (
                        <Panel header={`${key} Он`} key={index} extra={refresh()}>
                            <Collapse Collapse collapsible="header" accordion >
                                {
                                    value.map((el, index) => {
                                        return (
                                            <Panel
                                                header={
                                                    <div className="grid">
                                                        <span>
                                                            {el.createdAt?.replace(/T/, " ").replace(/\..+/, "")}
                                                        </span>
                                                    </div>
                                                }
                                                key={value[index].id}
                                                extra={
                                                    <PrinterOutlined
                                                        title="Маягт хэвлэх"
                                                        className="p-1"
                                                        onClick={(event) => {
                                                            const data = {
                                                                inspectionNotes: value[index].inspectionNotes ? value[index].inspectionNotes : [],
                                                                photos: value[index].photos ? value[index].photos : []
                                                            }
                                                            setPrintData(data);
                                                            setIsOpenModalForm(true);
                                                        }}
                                                    />}
                                            >
                                                <Divider>Зураг</Divider>
                                                {
                                                    el.photos.map((photo, index) => {
                                                        return (
                                                            <Image key={index}
                                                                width={200}
                                                                src={photo.photoSrc}
                                                            />
                                                        )
                                                    })
                                                }
                                                <Divider>Дүгнэлт</Divider>
                                                {
                                                    el.inspectionNotes?.map((note, index) => {
                                                        return (
                                                            <div key={index}>
                                                                <RenderNotesDetail data={JSON.parse(note.conclusion)} />
                                                                <RenderNotesDiagnose data={JSON.parse(note.diagnose)} />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </Panel>
                                        )
                                    })
                                }
                            </Collapse>
                        </Panel>
                    )
                })}
            </Collapse>
            <Modal
                open={isOpenModalForm}
                onCancel={() => setIsOpenModalForm(false)}
                footer={null}
                width={845}
                title={'Дүгнэлт хэвлэх'}
            >
                <FormXray props={printData} />
            </Modal>
        </>
    )
}
export default Xrays;