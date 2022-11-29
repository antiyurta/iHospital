import { Button } from "antd";
import { useRef } from "react";
import { Table } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import QRCode from 'react-qr-code';
import moment from "moment";
//
//

function EbarimtPrint(props) {
    const printRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => printRef.current
    });
    return (
        <div className="pt-6">
            <div ref={printRef} style={{ width: '72mm', height: 'auto' }}>
                <Table bordered style={{ borderColor: 'black', paddingTop: '10' }}>
                    <tbody>
                        <tr>
                            <td>
                                <div className="flex flex-wrap">
                                    <div className="basis-1/2 self-center">
                                        <p style={{ fontSize: 14, fontWeight: "bold", textAlign: 'start' }}>Төлбөрийн баримт</p>
                                    </div>
                                    <div className="basis-1/2">
                                        <p style={{ fontSize: 14, fontWeight: "bold", textAlign: "end" }}>UNIVERSAL MED HOSPITAL</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p style={{ fontSize: 14, textAlign: "center" }}>ТӨЛБӨРИЙН БАРИМТ</p>
                                <p style={{ fontSize: 14, fontWeight: "bold" }}>Картын №:{props.props?.patient?.cardNumber}</p>
                                <div className="flex flex-wrap">
                                    <div className="basis-1/2">
                                        <p style={{ fontSize: 14, fontWeight: "bold" }}>Овог:{props?.props?.patient?.lastName}</p>
                                    </div>
                                    <div className="basis-1/2">
                                        <p className="float-right" style={{ fontSize: 14, fontWeight: "bold" }}>Нэр:{props?.props?.patient?.firstName}</p>
                                    </div>
                                </div>
                                <p style={{ fontSize: 14, textAlign: "center" }}>ОНОШИЛГОО</p>
                                {
                                    props?.props?.invoices?.map((invoice, index) => {
                                        return (
                                            <div key={index} className="flex flex-wrap">
                                                <div className="basis-1/2">
                                                    <p style={{ fontSize: 12, fontWeight: "bold" }}>{invoice.name}</p>
                                                </div>
                                                <div className="basis-1/2">
                                                    <p className="float-right" style={{ fontSize: 12, fontWeight: "bold" }}>{invoice.amount}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <p style={{ fontSize: 14, fontWeight: "bold" }} className="text-end">Нийт үнэ: {props.props.totalAmount}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p style={{ fontSize: 14, fontWeight: "bold" }}>Cугалааны дугаар: {props.props.lottery}</p>
                                <p style={{ fontSize: 14, fontWeight: "bold" }}>ДДТД:{props.props.billId}</p>
                                <div style={{ height: "auto", margin: "0 auto", maxWidth: 150, width: "100%" }}>
                                    <QRCode
                                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                        value={props.props.qrData}
                                        viewBox={`0 0 256 256`}
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Захиалсан цаг:{moment(props.props.createdAt).format('YYYY-MM-DD HH:mm:ss')} </p>
                                <p>Ажилтан: </p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Button className="w-full bg-green-500 text-white font-bold" onClick={handlePrint}>Хэвлэх</Button>
        </div>
    )
}
export default EbarimtPrint;