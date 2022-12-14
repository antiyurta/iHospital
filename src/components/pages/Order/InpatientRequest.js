import { Form, InputNumber, Modal, Select } from "antd";
import { useState, useEffect } from "react";
import { Get } from "../../comman";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
const { Option } = Select;

function InpatientRequest({ isOpen, isClose, handleClick }) {
  const [InpatientRequestForm] = Form.useForm();
  const [isDuration, setIsDuration] = useState(true);
  const [doctors, setDoctors] = useState([]);
  const [structures, setStructures] = useState([]);
  const [selectedDep, setSelectedDep] = useState();
  const [selectedDoctor, setSelectedDoctor] = useState();
  const token = useSelector(selectCurrentToken);

  const config = {
    headers: {},
    params: {},
  };

  const checkDuration = (e) => {
    if (e === "PLAN") {
      setIsDuration(false);
    } else {
      setIsDuration(true);
    }
  };
  const getStructures = async () => {
    config.params.type = 2;
    const response = await Get("organization/structure", token, config);
    if (response.data.length != 0) {
      setStructures(response.data);
    }
  };
  const getDoctor = async (value) => {
    setSelectedDep(structures.filter((e) => e["id"] === value));
    config.params.depId = value;
    config.params.registerNumber = null;
    config.params.type = null;
    const response = await Get("organization/employee", token, config);
    if (response.data.length != 0) {
      setDoctors(response.data);
    } else {
      setDoctors([]);
    }
  };
  const selectDoctor = (value) => {
    const selectedDoctor = doctors.filter((e) => e.id === value);
    setSelectedDoctor(selectedDoctor[0]);
  };

  useEffect(() => {
    getStructures();
  }, []);

  return (
    <>
      <Modal
        title="Хэвтүүлэх хүсэлт"
        open={isOpen}
        onCancel={() => {
          isClose("inpatient", false);
        }}
        okText="Захилах"
        cancelText="Болих"
        onOk={() => {
          InpatientRequestForm.validateFields().then((values) => {
            handleClick(values);
          });
        }}
      >
        <Form
          form={InpatientRequestForm}
          wrapperCol={{ span: 15 }}
          labelCol={{ span: 9 }}
        >
          <div className="flex flex-wrap">
            <div className="w-full">
              <Form.Item
                label="Тасаг"
                name="inDepartmentId"
                rules={[
                  {
                    required: true,
                    message: "Заавал",
                  },
                ]}
              >
                <Select
                  allowClear
                  onChange={getDoctor}
                  placeholder="Тасаг сонгох"
                >
                  {structures.map((structure, index) => {
                    return (
                      <Option key={index} value={structure.id}>
                        {structure.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                label="Эмч"
                name="doctorId"
                rules={[
                  {
                    required: true,
                    message: "Заавал",
                  },
                ]}
              >
                <Select
                  allowClear
                  onChange={selectDoctor}
                  placeholder="Эмч сонгох"
                >
                  {doctors.map((doctor, index) => {
                    return (
                      <Option key={index} value={doctor.id}>
                        {doctor.firstName}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                label="Хүндийн зэрэг"
                name="severity"
                rules={[
                  {
                    required: true,
                    message: "Заавал",
                  },
                ]}
              >
                <Select>
                  <Option value={0}>Маш хүнд</Option>
                  <Option value={1}>Хүндэвтэр</Option>
                  <Option value={2}>Дунд</Option>
                  <Option value={3}>Хөнгөн</Option>
                </Select>
              </Form.Item>
            </div>

            <div className="w-full">
              <Form.Item
                label="Хэвтэнгийн төлөв"
                name="InType"
                rules={[
                  {
                    required: true,
                    message: "Заавал",
                  },
                ]}
              >
                <Select onChange={(e) => checkDuration(e)}>
                  <Option value="EMERGENCY">Яаралтай</Option>
                  <Option value="PLAN">Төлөвлөгөөт</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="w-full">
              <Form.Item
                label="Хэвтэх хоног"
                name="duration"
                rules={[
                  {
                    required: !isDuration,
                    message: "Заавал",
                  },
                ]}
              >
                <InputNumber disabled={isDuration} />
              </Form.Item>
            </div>
            <div className="w-full">
              <Form.Item
                label="Эмнэлэгт хэвтэх шалтгаан"
                name="reason"
                rules={[
                  {
                    required: true,
                    message: "Заавал",
                  },
                ]}
              >
                <Select>
                  <Option value={0}>Онош тодруулах</Option>
                  <Option value={1}>Эмчилгээ хийлгэх</Option>
                  <Option value={2}>Нөхөн сэргээх эмчилгээ</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
}
export default InpatientRequest;
