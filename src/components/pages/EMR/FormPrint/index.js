import { Button, Divider } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react"
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useReactToPrint } from 'react-to-print';
import { selectCurrentToken } from "../../../../features/authReducer";
import { Get } from "../../../comman";
import logo from '../../../../assets/logo/logo.png'
import moment from "moment";
export default function Index(props) {
    const printRef = useRef();
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {}
    }
    const [patientInfo, setPatientInfo] = useState([]);
    const handlePrint = useReactToPrint({
        content: () => printRef.current
    });
    const RenderHTML = (data) => {
        return Object.entries(data.data).map(([key, value], index) => {
            return (
                <div key={index} className="inline-flex">
                    {
                        Object.keys(value).map((e, index) => {
                            return <p key={index} className="font-semibold mr-2">{e}: </p>
                        })
                    }
                    {Object.values(value).map((elValues, index) => {
                        return typeof elValues === "string" ? (
                            <p key={index} className="pr-3">{elValues}</p>
                        ) : (
                            <div key={index}>
                                {elValues.map((el, index) => {
                                    return <p key={index} className="pr-3">{el}</p>;
                                })}
                            </div>
                        );
                    })}
                </div>
            );
        });
    };

    const getPatientInfo = async (patientId) => {
        const response = await Get('pms/patient/' + patientId, token, config);
        setPatientInfo(response);
    }

    useEffect(() => {
        getPatientInfo(props.props.patientId);
    }, [props])
    return (
        <>
            <div ref={printRef} style={{ width: '21cm', height: '29.7cm' }}>
                <Table bordered style={{ borderColor: 'black', paddingTop: '10' }}>
                    <tbody>
                        <tr>
                            <td>
                                <div className="flex flex-row">
                                    <div className="basis-1/2">
                                        <img style={{ width: '100%' }} src={logo} />
                                    </div>
                                    <div className="basis-1/2">
                                        <p className="text-right">
                                            ЭМСайдын 2013 оны 11 сарын 450 тоот тушаалаар батлав.
                                            Эрүүл мэндын бүртгэлийн маягт АМ-15
                                        </p>
                                    </div>
                                </div>
                                <p className="text-center py-10" style={{ fontSize: '25px', fontWeight: 'bold' }}>{props.props.structures.name}</p>
                                <div className="flex flex-row">
                                    <div className="basis-1/2">
                                        <div className="flex">
                                            <p className="font-semibold mr-2">Эцэг эхийн нэр:</p>
                                            <p className="pr-3">{patientInfo.lastName}</p>
                                        </div>
                                        <div className="flex">
                                            <p className="font-semibold mr-2">РД:</p>
                                            <p className="pr-3">{patientInfo.registerNumber}</p>
                                        </div>
                                        <div className="flex">
                                            <p className="font-semibold mr-2">Хүйс:</p>
                                            <p className="pr-3">{patientInfo.genderType}</p>
                                        </div>
                                        <div className="flex">
                                            <p className="font-semibold mr-2">Тогтмол хаяг:</p>
                                            <p className="pr-3">{patientInfo.address}</p>
                                        </div>
                                    </div>
                                    <div className="basis-1/2">
                                        <div className="flex">
                                            <p className="font-semibold mr-2">Нэр:</p>
                                            <p className="pr-3">{patientInfo.firstName}</p>
                                        </div>
                                        <div className="flex">
                                            <p className="font-semibold mr-2">Нас:</p>
                                            <p className="pr-3">{patientInfo.age}</p>
                                        </div>
                                        <div className="flex">
                                            <p className="font-semibold mr-2">Утас:</p>
                                            <p className="pr-3">{patientInfo.phoneNo}</p>
                                        </div>
                                    </div>
                                </div>
                                <Divider orientation="left" className="text-sm my-2">
                                    Зовиурь
                                </Divider>
                                <RenderHTML data={JSON.parse(props.props.pain)} />
                                <Divider orientation="left" className="text-sm my-2">
                                    Бодит үзлэг
                                </Divider>
                                <RenderHTML data={JSON.parse(props.props.inspection)} />
                                <Divider orientation="left" className="text-sm my-2">
                                    Асуумж
                                </Divider>
                                <RenderHTML data={JSON.parse(props.props.question)} />
                                <Divider orientation="left" className="text-sm my-2">
                                    Төлөвлөгөө
                                </Divider>
                                <RenderHTML data={JSON.parse(props.props.plan)} />
                                <div className="text-right">
                                    <div className="inline-flex">
                                        <p className="font-semibold mr-2">Үзлэг хийсэн эмч:</p>
                                        <p>{props.props.employees.lastName.substring(0, 1) + ". " + props.props.employees.firstName}</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <div className="text-right">
                    <div className="inline-flex">
                        <p className="font-semibold mr-2">Үзлэг хийсэн огноо:</p>
                        <p>{moment(props.props.createdAt).format("YYYY-MM-DD")}</p>
                    </div>
                </div>
                <div className="text-right">
                    <div className="inline-flex">
                        <p className="font-semibold mr-2">Хэвлэсэн огноо:</p>
                        <p>{moment().format("YYYY-MM-DD")}</p>
                    </div>
                </div>
            </div>
            <Button onClick={handlePrint}>Хэвлэх</Button>
        </>
    )
}