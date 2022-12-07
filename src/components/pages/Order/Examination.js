import { CloseOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, openNofi } from "../../comman";

function Examination({ isOpen, isClose, handleclick }) {
  const token = useSelector(selectCurrentToken);
  const [examinations, setExaminations] = useState([]);
  const [examination, setExamination] = useState([]);
  const [selectedExaminations, setSelectedExaminations] = useState([]);

  const config = {
    headers: {},
    params: {},
  };
  const getExamination = async () => {
    config.params.type = 0;
    const response = await Get("service/type", token, config);
    setExaminations(response.data);
  };

  const getTypeById = async (id) => {
    config.params.type = null;
    config.params.examinationTypeId = id;
    const response = await Get("service/examination", token, config);
    setExamination(response.data);
  };
  const add = (examination) => {
    const state = selectedExaminations.includes(examination);
    if (state) {
      openNofi("warning", "EXA", "EXA сонгогдсон байна");
    } else {
      examination.type = examination.types.type;
      setSelectedExaminations([...selectedExaminations, examination]);
    }
  };
  const remove = (index) => {
    var arr = [...selectedExaminations];
    arr.splice(index, 1);
    setSelectedExaminations(arr);
  };
  useEffect(() => {
    getExamination();
  }, [isOpen]);
  return (
    <>
      <Modal
        title="Шинжилгээ сонгох"
        width={"80%"}
        open={isOpen}
        onCancel={() => isClose("examination", false)}
        onOk={() => {
          handleclick(selectedExaminations);
          isClose("examination", false);
        }}
        okText={"Хадгалах"}
        cancelText={"Болих"}
      >
        <div className="flex flex-row">
          <div className="basis-1/5">
            {examinations.map((examination, index) => {
              return (
                <Button
                  onClick={() => getTypeById(examination.id)}
                  className="w-full mb-1 bg-[#3d9970] text-white rounded-lg"
                  key={index}
                >
                  {examination.name}
                </Button>
              );
            })}
          </div>
          <div className="basis-2/5">
            <div
              className="table-responsive px-4 pb-4"
              id="style-8"
              style={{ maxHeight: "500px" }}
            >
              <Table className="ant-border-space" style={{ width: "100%" }}>
                <thead className="ant-table-thead bg-slate-200">
                  <tr>
                    <th className="font-bold text-sm align-middle">Нэр</th>
                    <th className="font-bold text-sm align-middle">Үнэ</th>
                  </tr>
                </thead>
                <tbody className="ant-table-tbody p-0">
                  {examination.map((item, index) => {
                    return (
                      <tr
                        onDoubleClick={() => add(item)}
                        key={index}
                        className="ant-table-row ant-table-row-level-0 hover:cursor-pointer"
                      >
                        <td className="whitespace-pre-line">{item.name}</td>
                        <td>{item.price}₮</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
          <div className="basis-2/5">
            <div
              className="table-responsive px-4 pb-4"
              id="style-8"
              style={{ maxHeight: "500px" }}
            >
              <Table className="ant-border-space" style={{ width: "100%" }}>
                <thead className="ant-table-thead bg-slate-200">
                  <tr>
                    <th className="font-bold text-sm align-middle">Нэр</th>
                    <th className="font-bold text-sm align-middle">Үнэ</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="ant-table-tbody p-0">
                  {selectedExaminations.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className="ant-table-row ant-table-row-level-0"
                      >
                        <td className="whitespace-pre-line">{item.name}</td>
                        <td>{item.price}₮</td>
                        <td
                          onDoubleClick={() => remove(index)}
                          className="hover:cursor-pointer"
                        >
                          <CloseOutlined
                            style={{ color: "red", verticalAlign: "middle" }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default Examination;
