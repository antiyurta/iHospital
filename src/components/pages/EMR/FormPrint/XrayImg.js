import { Button } from "antd";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function XrayImg({ printImage, type }) {
    //type 0 bol A4   .. 1 bol A5
    const printRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => printRef.current
    });
    return (
        <>
            <div ref={printRef} style={{ margin: "auto" }}>
                {
                    type === 0 ?
                        <div className="flex flex-wrap">
                            {
                                printImage?.map((photo, index) => {
                                    return (
                                        <div key={index} className="basis-1/2">
                                            <img style={{ height: "145mm" }} src={photo.photoSrc} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <>
                            {
                                printImage?.map((photo, index) => {
                                    const ii = photo.photoSrc;
                                    return (
                                        <img key={index} style={{
                                            width: '145mm',
                                            height: '102mm',
                                            // transform: "rotate(90deg)",
                                            // marginLeft: 100,
                                            // marginTop: -160,
                                        }} src={photo.photoSrc} />
                                    )
                                })
                            }
                        </>
                }
            </div>
            <Button type="primary" onClick={handlePrint}>Хэвлэх</Button>
        </>
    )
}
export default XrayImg;