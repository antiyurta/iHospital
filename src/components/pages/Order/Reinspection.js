import { Modal } from "antd";
import Appointment from "../Appointment/Schedule/Appointment";

function Reinspection({ isOpen, isClose, selectedPatient }) {
    return (
        <>
            <Modal
                title="Шинжилгээ сонгох"
                width={"80%"}
                open={isOpen}
                onCancel={() => isClose("Reinspection", false)}
                onOk={() => {
                    // handleclick(selectedExaminations);
                    isClose("Reinspection", false);
                }}
                okText={"Хадгалах"}
                cancelText={"Болих"}
            >
                <Appointment selectedPatient={selectedPatient} type={1} />
            </Modal>
        </>
    )
}
export default Reinspection;