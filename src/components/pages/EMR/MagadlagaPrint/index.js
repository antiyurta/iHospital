import { Button, Card, DatePicker, Form, Input, Select } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import logo from '../../../../assets/logo/universal.png'
import { selectCurrentToken } from "../../../../features/authReducer";
import { Get } from "../../../comman";
import mnMN from "antd/es/calendar/locale/mn_MN";
import moment from "moment";
const { RangePicker } = DatePicker;
const { Option } = Select;
function Index({ data }) {
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {}
    }
    const [patientInfo, setPatientInfo] = useState([]);
    const printRef = useRef();
    const [form] = Form.useForm();
    const handlePrint = useReactToPrint({
        content: () => printRef.current
    });
    const getPatientInfo = async (patientId) => {
        const response = await Get('pms/patient/' + patientId, token, config);
        setPatientInfo(response);
    };
    const [ob, setOb] = useState(false);
    const [oa, setOa] = useState(false);
    const [hh, setHh] = useState(false);
    const [eu, setEu] = useState(false);
    const [sh, setSh] = useState(false);
    const [ae, setAe] = useState(false);
    const [pz, setPz] = useState(false);
    const [work, setWork] = useState(false);
    const [school, setSchool] = useState(false);
    const ddd = (index) => {
        if (index === 0) {
            setOb(!ob);
        } else if (index === 1) {
            setOa(!oa);
        } else if (index === 2) {
            setHh(!hh);
        } else if (index === 3) {
            setEu(!eu);
        } else if (index === 4) {
            setSh(!sh);
        } else if (index === 5) {
            setAe(!ae);
        } else {
            setPz(!pz);
        }
    };
    const dddd = (index) => {
        if (index === 0) {
            setWork(!work);
        } else {
            setSchool(!school);
        }
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
    useEffect(() => {
        getPatientInfo(data.patientId);
    }, [data]);
    return (
        <>
            <div>

            </div>
            <div ref={printRef} className="magadlagaa">
                <div className="flex flex-wrap">
                    <div className="basis-1/2">
                        <img style={{ width: '50%' }} src={logo} alt="logo" />
                    </div>
                    <div className="basis-1/2">
                        <p className="text-center">?????????? ???????????? ???????????? 2019 ?????? 12 ???????????? ?????????? 30-????</p>
                        <p className="text-center">???????????? ??/611 ???????????? ???????????????? ???????????????????????????? ????????????????</p>
                        <p className="text-center font-bold">?????????? ?????????????? ???????????????????? ?????????? AM-8</p>
                    </div>
                </div>
                <p className="text-center font-bold" style={{ fontSize: "18px" }}>?????????????????? ????????????????????</p>
                <Table style={{ float: "right", maxWidth: 250, textAlign: "center" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: '0px', padding: 0 }}>????</td>
                            <td style={{ border: '1px solid black', padding: 0, minHeight: 20 }}>{patientInfo?.registerNumber?.slice(0, 1)}</td>
                            <td style={{ border: '1px solid black', padding: 0, minHeight: 20 }}>{patientInfo?.registerNumber?.slice(1, 2)}</td>
                            <td style={{ border: '1px solid black', padding: 0, minHeight: 20 }}>{patientInfo?.registerNumber?.slice(2, 3)}</td>
                            <td style={{ border: '1px solid black', padding: 0, minHeight: 20 }}>{patientInfo?.registerNumber?.slice(3, 4)}</td>
                            <td style={{ border: '1px solid black', padding: 0, minHeight: 20 }}>{patientInfo?.registerNumber?.slice(4, 5)}</td>
                            <td style={{ border: '1px solid black', padding: 0, minHeight: 20 }}>{patientInfo?.registerNumber?.slice(5, 6)}</td>
                            <td style={{ border: '1px solid black', padding: 0, minHeight: 20 }}>{patientInfo?.registerNumber?.slice(6, 7)}</td>
                            <td style={{ border: '1px solid black', padding: 0, minHeight: 20 }}>{patientInfo?.registerNumber?.slice(7, 8)}</td>
                            <td style={{ border: '1px solid black', padding: 0, minHeight: 20 }}>{patientInfo?.registerNumber?.slice(8, 9)}</td>
                            <td style={{ border: '1px solid black', padding: 0, minHeight: 20 }}>{patientInfo?.registerNumber?.slice(9, 10)}</td>
                        </tr>
                    </tbody>
                </Table>
                <br />
                <div className="inline-flex">
                    <p style={{ fontSize: "14px" }}>1.</p>
                    <p style={{ fontSize: "14px" }}>????????/????/-?????? ??????</p>
                    <p style={{ fontSize: "14px" }} className="underline px-1">{patientInfo?.lastName}</p>
                    <p style={{ fontSize: "14px" }}>??????</p>
                    <p style={{ fontSize: "14px" }} className="underline px-1">{patientInfo?.firstName}</p>
                    <p style={{ fontSize: "14px" }}>2.</p>
                    <p style={{ fontSize: "14px" }}>{`????????:(??????)`}</p>
                    <p style={{ fontSize: "14px" }} className={patientInfo?.genderType === 'MAN' ? "underline pr-1" : "pr-1"}>??????????????</p>
                    <p style={{ fontSize: "14px" }}>,</p>
                    <p style={{ fontSize: "14px" }} className={patientInfo?.genderType === 'WOMEN' ? "underline pr-1" : "pr-1"}>??????????????</p>
                </div>
                <div className="inline-flex">
                    <p style={{ fontSize: "14px" }}>3.</p>
                    <p style={{ fontSize: "14px" }}>??????</p>
                    <p style={{ fontSize: "14px" }} className="underline pr-1">{patientInfo?.age}</p>
                    <p style={{ fontSize: "14px" }}>4. ???????????? ???????? (????????)-?????? ????????????</p>
                    <p style={{ fontSize: "14px" }} className="underline pr-1"><Input /></p>
                </div>
                <div>
                    <p style={{ fontSize: "14px" }}>5. ?????????????? ????????______________________________________________________________</p>
                    <p style={{ fontSize: "14px" }}>_______________________________________________________________________________</p>
                </div>
                <div>
                    <p style={{ fontSize: "14px" }}>6. ?????????? ??????????, ?????????? ????????????______________________________________________</p>
                    <p style={{ fontSize: "14px" }}>_______________________________________________________________________________</p>
                </div>
                <div>
                    <p style={{ fontSize: "14px" }}>7. ????????????????_________________________________________________________________</p>
                    <p style={{ fontSize: "14px" }}>_______________________________________________________________________________</p>
                </div>
                <div className="inline-flex">
                    <p style={{ fontSize: "14px" }}>8.</p>
                    <p style={{ fontSize: "14px" }}>(??????)</p>
                    <a style={{ fontSize: "14px" }} className={ob ? "underline pr-1" : "pr-1"} onClick={() => ddd(0)}>???????????? ????????????</a>
                    <p style={{ fontSize: "14px" }}>,</p>
                    <a style={{ fontSize: "14px" }} className={oa ? "underline pr-1" : "pr-1"} onClick={() => ddd(1)}>???????????? ??????????????????????</a>
                    <p style={{ fontSize: "14px" }}>,</p>
                    <a style={{ fontSize: "14px" }} className={hh ? "underline pr-1" : "pr-1"} onClick={() => ddd(2)}>?????? ??????????????????</a>
                    <p style={{ fontSize: "14px" }}>,</p>
                    <a style={{ fontSize: "14px" }} className={eu ? "underline pr-1" : "pr-1"} onClick={() => ddd(3)}>?????????? ????????????????</a>
                    <p style={{ fontSize: "14px" }}>,</p>
                    <a style={{ fontSize: "14px" }} className={sh ? "underline pr-1" : "pr-1"} onClick={() => ddd(4)}>??????????????????</a>
                    <p style={{ fontSize: "14px" }}>,</p>
                    <a style={{ fontSize: "14px" }} className={ae ? "underline pr-1" : "pr-1"} onClick={() => ddd(5)}>???????????????? ????????????????</a>
                    <p style={{ fontSize: "14px" }}>,</p>
                </div>
                <div className="inline-flex align-middle">
                    <a style={{ fontSize: "14px" }} className={pz ? "underline pr-1" : "pr-1"} onClick={() => ddd(6)}>????????????</a>
                    <p style={{ fontSize: "14px" }}>??????????????????</p>
                    <DatePicker picker="year" />
                    <p style={{ fontSize: "14px" }}>??????</p>
                    <DatePicker picker="month" format={"MM"} />
                    <p style={{ fontSize: "14px" }}>??????????</p>
                    <DatePicker picker="date" format={"DD"} />
                    <p style={{ fontSize: "14px" }}>????????????</p>
                    <DatePicker picker="year" />
                    <p style={{ fontSize: "14px" }}>??????</p>
                    <DatePicker picker="month" format={"MM"} />
                    <p style={{ fontSize: "14px" }}>??????????</p>
                    <DatePicker picker="date" format={"DD"} />
                    <p style={{ fontSize: "14px" }}>????????</p>
                </div>
                <br />
                <div className="inline-flex">
                    <p style={{ fontSize: "14px" }}>???????????? (??????)</p>
                    <a style={{ fontSize: "14px" }} className={work ? "underline pr-1" : "pr-1"} onClick={() => dddd(0)}>????????????</a>
                    <p style={{ fontSize: "14px" }}>,</p>
                    <a style={{ fontSize: "14px" }} className={school ? "underline pr-1" : "pr-1"} onClick={() => dddd(1)}>??????????????????</a>
                    <p style={{ fontSize: "14px" }}>{`)`}</p>
                    <p style={{ fontSize: "14px" }}>?????????????????????? ????????????????.</p>
                </div>
                <br />
                <div>
                    <p style={{ fontSize: "14px" }}>9. ?????????????????? ???????????? ?????????? ???????? /????/-?????? ??????, ?????? ??????????____________________________</p>
                    <p style={{ fontSize: "14px" }}>_______________________________________________________________________________</p>
                </div>
                <div className="inline-flex">
                    <p style={{ fontSize: '14px' }}>10. ???????????? ????????</p>
                    {data["diagnose"] && <RenderNotesDiagnose data={JSON.parse(data["diagnose"])} />}
                </div>
                <br />
                <div className="flex flex-wrap">
                    <div className="basis-1/2 self-center flex">
                        {/* <p>T?????????? {today}</p> */}
                        <p className="pr-4">????????????</p>
                        <p className="px-1">
                            {
                                moment(new Date).year() + " " +
                                "???? " +
                                (moment(new Date).month() + 1) + " " +
                                "?????? " +
                                moment(new Date).date() + " " +
                                "????????"
                            }
                        </p>
                    </div>
                    <div className="basis-1/2">
                        <p>?????????????? ??????____________________________________</p>
                        <br />
                        <p>?????????????? ?????? {data?.employees?.lastName?.slice(0, 1) + "." + data?.employees?.firstName}</p>
                    </div>
                </div>
                <p className="font-bold" style={{ fontSize: "16px" }}>??????????????</p>
                <div>
                    <p style={{ fontSize: "14px" }}>1. _______ ?????? _______ ?????????? _______ ???????????? _______ ?????? _______ ?????????? _______ ???????? ???????????? ????????</p>
                    <p style={{ fontSize: "14px" }}>_____________________???????????????? ????????????</p>
                </div>
                <div className="flex flex-wrap">
                    <div className="basis-1/2 text-center">
                        <p className="pr-4">????????????</p>
                    </div>
                    <div className="basis-1/2">
                        <p>???????????? ?????????? ????????______________________</p>
                    </div>
                </div>
                <div>
                    <p style={{ fontSize: "14px" }}>2. _______ ?????? _______ ?????????? _______ ???????????? _______ ?????? _______ ?????????? _______ ???????? ???????????? ????????</p>
                    <p style={{ fontSize: "14px" }}>_____________________???????????????? ????????????</p>
                </div>
                <div className="flex flex-wrap">
                    <div className="basis-1/2 text-center">
                        <p className="pr-4">????????????</p>
                    </div>
                    <div className="basis-1/2">
                        <p>???????????? ?????????? ????????______________________</p>
                    </div>
                </div>
                <div>
                    <p style={{ fontSize: "14px" }}>3. _______ ?????? _______ ?????????? _______ ???????????? _______ ?????? _______ ?????????? _______ ???????? ???????????? ????????</p>
                    <p style={{ fontSize: "14px" }}>_____________________???????????????? ????????????</p>
                </div>
                <div className="flex flex-wrap">
                    <div className="basis-1/2 text-center">
                        <p className="pr-4">????????????</p>
                    </div>
                    <div className="basis-1/2">
                        <p>???????????? ?????????? ????????______________________</p>
                    </div>
                </div>
            </div>
            <Button onClick={() => handlePrint()}>????????????</Button>
        </>
    )
}
export default Index;