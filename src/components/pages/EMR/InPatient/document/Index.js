import Rebuild from './Rebuild';
function Index({ data }) {
    /// id nas depId ym ennes hamarch hewleh maygt oor2 bn
    return (
        <>
            {data.inpatientRequestId === 31 && <Rebuild data={data} />}
        </>
    )
}
export default Index;