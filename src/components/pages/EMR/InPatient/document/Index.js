// import Endocrinology from './Endocrinology';
import Endocrinology from './Endocrinology/Index';
import Rebuild from './Rebuild';
function Index({ id, data }) {
    /// id nas depId ym ennes hamarch hewleh maygt oor2 bn
    console.log(id);
    return (
        <>
            {/* {data.inpatientRequestId === 31 && <Rebuild data={data} />} */}
            {/* {id === 31 && <Rebuild data={data} />} */}
            {id === 2 && <Endocrinology data={data} />}
        </>
    )
}
export default Index;