import { Input, Card, Radio } from "antd";
import { useParams } from "react-router-dom";
import male from '../../assets/images/maleAvatar.svg';

const { Search } = Input;

function PatientInformation({ handlesearch, patient, handleTypeChange, OCS }) {
    const onSearch = async (value) => {
        handlesearch(value);
    }

    const handleTypeChangePatient = async (value) => {
        handleTypeChange(value);
    }

    const getGender = (registerNumber) => {
        if (registerNumber != undefined) {
            if (registerNumber[registerNumber.length - 1] % 2 === 1) {
                return 'Эр'
            } else {
                return 'Эм'
            }
        } else {
            return null;
        }
    }
    const getAge = (registerNumber) => {
        if (registerNumber != undefined) {
            const date = new Date();
            let year = parseInt(registerNumber.substring(2, 4));
            let month = parseInt(registerNumber.substring(4, 6));
            if (month > 20 && month < 33) {
                year += 2000;
                month -= 20;
            } else {
                year += 1900;
            }
            const currentYear = date.getFullYear();
            const age = currentYear - year;
            return age;
        } else {
            return null;
        }
    }
    const getAddress = (aimag, soum, address) => {
        console.log(aimag, soum, address)
    }
    return (
        <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Өвчтөний мэдээлэл</h6>}
            className="header-solid max-h-max rounded-md"
            bodyStyle={{ paddingTop: 0, paddingBottom: 16, maxHeight: 200, minHeight: 200, height: 200 }}
            extra={
                <Search placeholder="Регистр хайх" onSearch={onSearch} enterButton="Хайх" />
            }
        >
            <div className="flex flex-row">
                <div className="basis-1/3">
                    <div className="container h-48 min-h-48 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url(" + male + ")" }}>
                    </div>
                    {
                        OCS && <div className="absolute bottom-1 left-10">
                            <Radio.Group
                                size="small"
                                onChange={handleTypeChangePatient}
                                optionType="button"
                                buttonStyle="solid"
                                className="small-radio-button mt-2"
                            >
                                <Radio.Button value="OCS">OCS</Radio.Button>
                                <Radio.Button value="EMR">EMR</Radio.Button>
                            </Radio.Group>
                        </div>
                    }
                    <div>
                        {

                        }
                    </div>
                </div>
                <div className="basis-2/3">
                    <div className="container">
                        <label className="w-full flex mb-1">
                            <span className="w-1/5">Овог:</span>
                            <span className="font-bold ml-2">{patient?.lastName}</span>
                        </label>
                        <label className="w-full flex mb-1">
                            <span className="w-1/5">Нэр:</span>
                            <span className="font-bold ml-2">{patient?.firstName}</span>
                        </label>
                        <label className="w-full flex mb-1">
                            <span className="w-1/5">Хүйс:</span>
                            <span className="font-bold ml-2">{getGender(patient?.registerNumber)}</span>
                        </label>
                        <label className="w-full flex mb-1">
                            <span className="w-1/5">Нас:</span>
                            <span className="font-bold ml-2">{getAge(patient?.registerNumber)}</span>
                        </label>
                        <label className="w-full flex mb-1">
                            <span className="w-1/5">РД:</span>
                            <span className="font-bold ml-2">{patient?.registerNumber}</span>
                        </label>
                        <label className="w-full flex mb-1">
                            <span className="w-1/5">Утас:</span>
                            <span className="font-bold ml-2">{patient?.phoneNo}</span>
                        </label>
                        <label className="w-full flex mb-1">
                            <span className="w-1/5">Хаяг:</span>
                            <span className="font-bold ml-2">
                                {getAddress(patient?.aimagId, patient?.soumId, patient?.address)}
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </Card>
    )
}
export default PatientInformation;