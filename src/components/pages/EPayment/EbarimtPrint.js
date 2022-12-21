import { Button } from "antd";
import { useRef } from "react";
import { Table } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import QRCode from 'react-qr-code';
import moment from "moment";
import { numberToCurrency, Patch } from "../../comman";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";

function EbarimtPrint(props) {
    const printRef = useRef();
    const token = useSelector(selectCurrentToken);
    const handleBack = async (id) => {
        const conf = {
            headers: {},
            params: {},
        }
        await Patch('payment/payment/' + id, token, conf, {
            isReturn: true,
        });
    };
    const handlePrint = useReactToPrint({
        content: () => printRef.current
    });
    return (
        <div className="pt-6">
            <div ref={printRef} style={{ width: '80mm' }}>
                <div>
                    <div className="flow-root">
                        <p className="float-right font-normal whitespace-pre-wrap">
                            UNIVERSAL MED HOSPITAL
                        </p>
                    </div>
                    <div>
                        <p className="text-center pt-2">ТӨЛБӨРИЙН БАРИМТ</p>
                        <p>Картын №:{props?.props?.patient?.cardNumber}</p>
                    </div>
                    <div className="flow-root">
                        <p className="float-left">Овог:{props?.props?.patient?.lastName}</p>
                        <p className="float-right">Нэр:{props?.props?.patient?.firstName}</p>
                    </div>
                    <p style={{ fontSize: 17, textAlign: "center" }}>Жагсаалт</p>
                    {
                        props?.props?.invoices?.map((invoice, index) => {
                            return (
                                <div key={index} className="flex flex-wrap">
                                    <div className="basis-1/2">
                                        <p style={{ fontSize: 12, fontWeight: "bold" }}>{invoice.name}</p>
                                        <p style={{ fontSize: 12, fontWeight: "bold" }}>{invoice.description}</p>
                                    </div>
                                    <div className="basis-1/2 text-center">
                                        <p className="float-right" style={{ fontSize: 13, fontWeight: "bold" }}>{numberToCurrency(invoice.amount)}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <p style={{ fontSize: 14, fontWeight: "bold" }} className="text-end">Нийт үнэ: {numberToCurrency(props?.props?.totalAmount)}</p>
                    <p style={{ fontSize: 14, fontWeight: "bold" }}>Cугалааны дугаар: {props?.props?.lottery}</p>
                    <p style={{ fontSize: 14, fontWeight: "bold" }}>ДДТД:{props?.props?.billId}</p>
                    <div style={{ height: "auto", margin: "0 auto", maxWidth: 150, width: "100%" }}>
                        <QRCode
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value={props?.props?.qrData ? props?.props?.qrData : 0}
                            viewBox={`0 0 256 256`}
                        />
                    </div>
                    <p>Захиалсан цаг:{moment(props?.props?.createdAt).format('YYYY-MM-DD HH:mm:ss')} </p>
                    <p>Ажилтан: {props?.props?.createdEmployeeName} </p>
                </div>
            </div>
            {
                props?.isBackPayment ?
                    <Button className="w-full bg-red-600 text-white font-bold" onClick={() => handleBack(props?.props?.id)}>Буцаалт</Button>
                    :
                    <Button className="w-full bg-green-500 text-white font-bold" onClick={handlePrint}>Хэвлэх</Button>
            }

        </div>
    )
}
export default EbarimtPrint;
