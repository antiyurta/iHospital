import EarlyWarning from "../EarlyWarning";

function VitalSign({ PatientId, listId }) {
    return <EarlyWarning PatientId={PatientId} listId={listId} />
}
export default VitalSign;