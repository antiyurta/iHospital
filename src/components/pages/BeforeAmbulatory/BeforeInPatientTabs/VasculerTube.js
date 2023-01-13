import { Button } from "antd";
import { useRef } from "react";
import { Table } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";

function VasculerTube({ PatientData }) {
    const printRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => printRef.current
    });
    return (
        <>
            <Button onClick={handlePrint}>Хэвлэх</Button>
            <div ref={printRef}>
                <page size="A4" layout="landscape">
                    <div className="flow-root">
                        <div className="float-right">
                            <p style={{ fontSize: 10 }}>Эрүүл мэндийн сайдын 2019 оны 11 сарын 29-ны</p>
                            <p style={{ fontSize: 10 }}>өдрийн А539 дугаар тушаалын 3-р хавсралт</p>
                        </div>
                    </div>
                    <p className="font-bold text-center" style={{ fontSize: 12 }}>Судасны гуурстай холбоотой тандалт</p>
                    <div className="flow-root py-1">
                        <div className="inline-flex">
                            <p style={{ fontSize: 10 }}>Эмчлүүлэгчийн овог, нэр:</p>
                            <p style={{ fontSize: 10 }}>{PatientData?.lastName.substring(0, 1) + "." + PatientData?.firstName}</p>
                        </div>
                    </div>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th rowSpan={3} className="rotate-180" style={{ writingMode: "vertical-lr", textAlign: "right", verticalAlign: 'middle' }}>Сар өдөр</th>
                                <th rowSpan={3} className="rotate-180" style={{ writingMode: "vertical-lr", textAlign: "right", verticalAlign: 'middle' }}>Цаг</th>
                                <th rowSpan={3} className="rotate-180" style={{ writingMode: "vertical-lr", textAlign: "right", verticalAlign: 'middle' }}>Цаг</th>
                                <th rowSpan={3}>Гуурс тависан талбай</th>
                                <th rowSpan={3} className="rotate-180" style={{ writingMode: "vertical-lr", textAlign: "right", verticalAlign: 'middle' }}>Цаг</th>
                                <th>Судасны гуурсны</th>
                            </tr>
                        </thead>
                    </Table>
                </page>
            </div>
        </>
    )
}
export default VasculerTube;