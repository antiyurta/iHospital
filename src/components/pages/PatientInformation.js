import { Input, Card, Radio, Descriptions } from "antd";
import male from '../../assets/images/maleAvatar.svg';

const { Search } = Input;

function PatientInformation({ handlesearch, patient, handleTypeChange, OCS, type }) {
    const onSearch = async (value) => {
        handlesearch(value);
    }

    const handleTypeChangePatient = async (value) => {
        handleTypeChange(value);
        console.log(value);
    }

    const getGender = (registerNumber) => {
        if (registerNumber != undefined) {
            console.log(registerNumber[registerNumber.length - 2]);
            if (registerNumber[registerNumber.length - 2] % 2 === 1) {
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
        // console.log(aimag, soum, address)
    }
    return (
        <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Өвчтөний мэдээлэл</h6>}
            className="header-solid max-h-max rounded-md"
            bodyStyle={{
                paddingTop: 10,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 10,
                minHeight: 150,
                maxHeight: 150,
            }}
            extra={
                <Search placeholder="Регистр хайх" onSearch={onSearch} enterButton="Хайх" />
            }
        >
            <div className="flex flex-row">
                <div className="basis-1/4 p-1">
                    <div className="container h-24 min-h-24 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url(" + male + ")" }}>
                    </div>
                    {
                        OCS && <div className="absolute bottom-1 left-10">
                            <Radio.Group
                                size="small"
                                onChange={handleTypeChangePatient}
                                value={type}
                                optionType="button"
                                buttonStyle="solid"
                                className="small-radio-button mt-2"
                            >
                                <Radio.Button value="OCS">OCS</Radio.Button>
                                <Radio.Button value="EMR">EMR</Radio.Button>
                            </Radio.Group>
                        </div>
                    }
                </div>
                <div className="basis-3/4 p-1">
                    <div className="container">
                        <Descriptions>
                            <Descriptions.Item label="Овог">{patient?.lastName}</Descriptions.Item>
                            <Descriptions.Item label="Нэр">{patient?.firstName}</Descriptions.Item>
                            <Descriptions.Item label="Хүйс">{getGender(patient?.registerNumber)}</Descriptions.Item>
                            <Descriptions.Item label="Нас">{getAge(patient?.registerNumber)}</Descriptions.Item>
                            <Descriptions.Item label="РД">{patient?.registerNumber}</Descriptions.Item>
                            <Descriptions.Item label="Утас">{patient?.phoneNo}</Descriptions.Item>
                            <Descriptions.Item label="Хаяг">{getAddress(patient?.aimagId, patient?.soumId, patient?.address)}</Descriptions.Item>
                        </Descriptions>
                    </div>
                </div>
            </div>
        </Card>
    )
}
export default PatientInformation;