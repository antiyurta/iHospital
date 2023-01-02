import { Button, Checkbox, Divider } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react"
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useReactToPrint } from 'react-to-print';
import { selectCurrentToken } from "../../../../features/authReducer";
import { Get } from "../../../comman";
// import logo from '../../../../assets/logo/logo.png'
import logo from '../../../../assets/logo/universal.png'
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

    const RenderHTMLDiagnose = (data) => {
        return data?.data?.map((diagnose, index) => {
            return (
                <div key={index} className="flex">
                    <p className="font-semibold mx-2">{diagnose.type}: </p>
                    <p>{"[" + diagnose.code + "]" + diagnose.nameMn}</p>
                </div>
            )
        })
    };
    const RenderHTML = (data) => {
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

    const getPatientInfo = async (patientId) => {
        const response = await Get('pms/patient/' + patientId, token, config);
        setPatientInfo(response);
    };

    useEffect(() => {
        getPatientInfo(props.props.patientId);
    }, [props])
    return (
        <>
            <div ref={printRef} className="magadlagaa">
                <div className="flex flex-row">
                    <div className="basis-1/2">
                        <img style={{ width: '50%' }} src={logo} />
                    </div>
                    <div className="basis-1/2">
                        <p className="text-center">Эрүүл мэндийн сайдын 2019 оны 12 сарын 30-ны</p>
                        <p className="text-center">өдрийн А/611 дүгээр тушаалын арваннэгдүгээр хавсралт</p>
                        <p className="text-center font-bold">Эрүүл мэндын бүртгэлийн маягт CT-1</p>
                    </div>
                </div>
                <p className="text-center py-8" style={{ fontSize: '25px', fontWeight: 'bold' }}>{props.props.structures.name}</p>
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
                <Divider orientation="left" className="text-sm my-2">
                    Онош
                </Divider>
                <RenderHTMLDiagnose data={JSON.parse(props.props.diagnose)} />
                <div className="text-right">
                    <div className="inline-flex">
                        <p className="font-semibold mr-2">Үзлэг хийсэн эмч:</p>
                        <p>{props.props.employees.lastName.substring(0, 1) + ". " + props.props.employees.firstName}</p>
                    </div>
                </div>
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