import { Card, Divider } from "antd";
import { useRef } from "react"
import { PrinterOutlined, MedicineBoxOutlined, MediumOutlined } from "@ant-design/icons";
import { useReactToPrint } from 'react-to-print';
import logo from '../../../../assets/logo/universal.png'
import moment from "moment";
import DiagnoseTypes from '../../service/DiagnoseTypes.json';
export default function Index({ patientInfo, inspectionNote, diagnoses, services, employee }) {
    const printRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => printRef.current
    });
    const diagnoseTypeInfo = (diagnoseTypeId) => {
        const filteredData = DiagnoseTypes.filter((e) => e.value === diagnoseTypeId);
        return filteredData[0]?.label;
    };
    const RenderHTMLDiagnose = (diagnoses) => {
        return diagnoses?.map((diagnose, index) => {
            return (
                <div key={index} className="flex">
                    <p className="font-semibold mx-2">{diagnoseTypeInfo(diagnose.diagnoseType)}: </p>
                    <p>{"[" + diagnose.diagnose?.code + "]" + diagnose.diagnose?.nameMn}</p>
                </div>
            )
        })
    };
    const RenderHTMLServices = (services) => {
        return services?.map((service, index) => {
            return (
                <div key={index}>
                    <p>{service.name}</p>
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
                                <p className="pr-2" key={index}>{elValues[0] + ": " + elValues[1]}</p>
                            )
                        })}
                    </div>
                );
            });
        }
    };
    return (
        <Card
            className="m-3"
            extra={
                <>
                    <MediumOutlined
                        title="??????????????????"
                        className="p-1"
                        onClick={(event) => { }
                        }
                    />
                    <PrinterOutlined
                        title="?????????? ????????????"
                        className="p-1"
                        onClick={(event) => { handlePrint() }
                        }
                    />
                    <MedicineBoxOutlined
                        title="?????????? ?????? ????????????"
                        className="p-1"
                        onClick={(event) => { }
                        }
                    />
                </>
            }
        >
            <div ref={printRef} className="magadlagaa">
                <div className="flex flex-row">
                    <div className="basis-1/2">
                        <img style={{ width: '50%' }} src={logo} />
                    </div>
                    <div className="basis-1/2">
                        <p className="text-center">?????????? ?????????????? ???????????? 2019 ?????? 12 ?????????? 30-????</p>
                        <p className="text-center">???????????? ??/611 ???????????? ???????????????? ???????????????????????????? ????????????????</p>
                        <p className="text-center font-bold">?????????? ???????????? ???????????????????? ?????????? CT-1</p>
                    </div>
                </div>
                <p className="text-center py-8" style={{ fontSize: '25px', fontWeight: 'bold' }}>{inspectionNote?.structures?.name}</p>
                <div className="flex flex-row">
                    <div className="basis-1/2">
                        <div className="flex">
                            <p className="font-semibold mr-2">???????? ?????????? ??????:</p>
                            <p className="pr-3">{patientInfo.lastName}</p>
                        </div>
                        <div className="flex">
                            <p className="font-semibold mr-2">????:</p>
                            <p className="pr-3">{patientInfo.registerNumber}</p>
                        </div>
                        <div className="flex">
                            <p className="font-semibold mr-2">????????:</p>
                            <p className="pr-3">{patientInfo.genderType}</p>
                        </div>
                        <div className="flex">
                            <p className="font-semibold mr-2">?????????????? ????????:</p>
                            <p className="pr-3">{patientInfo.address}</p>
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <div className="flex">
                            <p className="font-semibold mr-2">??????:</p>
                            <p className="pr-3">{patientInfo.firstName}</p>
                        </div>
                        <div className="flex">
                            <p className="font-semibold mr-2">??????:</p>
                            <p className="pr-3">{patientInfo.age}</p>
                        </div>
                        <div className="flex">
                            <p className="font-semibold mr-2">????????:</p>
                            <p className="pr-3">{patientInfo.phoneNo}</p>
                        </div>
                    </div>
                </div>
                <Divider orientation="left" className="text-sm my-2">
                    ??????????????
                </Divider>
                {inspectionNote && <RenderHTML data={JSON.parse(inspectionNote?.pain)} />}
                <Divider orientation="left" className="text-sm my-2">
                    ?????????? ??????????
                </Divider>
                {inspectionNote && <RenderHTML data={JSON.parse(inspectionNote?.inspection)} />}
                <Divider orientation="left" className="text-sm my-2">
                    ????????????
                </Divider>
                {inspectionNote && <RenderHTML data={JSON.parse(inspectionNote?.question)} />}
                <Divider orientation="left" className="text-sm my-2">
                    ????????????????????
                </Divider>
                {inspectionNote && <RenderHTML data={JSON.parse(inspectionNote?.plan)} />}
                <Divider orientation="left" className="text-sm my-2">
                    ????????
                </Divider>
                {diagnoses && RenderHTMLDiagnose(diagnoses)}
                <Divider orientation="left" className="text-sm my-2">
                    ????????????????
                </Divider>
                {services && RenderHTMLServices(services)}
                <div className="text-right">
                    <div className="inline-flex">
                        <p className="font-semibold mr-2">?????????? ???????????? ??????:</p>
                        <p>{employee?.lastName?.substring(0, 1) + ". " + employee?.firstName}</p>
                    </div>
                </div>
                <div className="text-right">
                    <div className="inline-flex">
                        <p className="font-semibold mr-2">?????????? ???????????? ??????????:</p>
                        <p>{moment(inspectionNote?.createdAt).format("YYYY-MM-DD")}</p>
                    </div>
                </div>
                <div className="text-right">
                    <div className="inline-flex">
                        <p className="font-semibold mr-2">???????????????? ??????????:</p>
                        <p>{moment().format("YYYY-MM-DD")}</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}