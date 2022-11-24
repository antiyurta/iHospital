//Явцын тэмдэглэл
import React, { useEffect, useState } from "react";
import { Collapse, Divider, Modal } from "antd";
import { FolderOutlined, FolderOpenOutlined, PrinterOutlined, FilePdfOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";
import { Get } from "../../../comman";
import Index from "../FormPrint";

export default function ProgressNotes({ PatientId }) {
  const { Panel } = Collapse;
  const token = useSelector(selectCurrentToken);
  const config = {
    headers: {},
    params: {}
  };
  const [inspectionNotes, setInspectionNotes] = useState([]);
  const [printData, setPrintData] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const onChange = (key) => {
    // console.log(key);
  };
  const genExtra = (value) => (
    <>
      <PrinterOutlined className="p-1"
        onClick={(event) => {
          setPrintData(value);
          console.log(value);
          setIsOpenModal(true);
        }
        }
      />
    </>
  );

  useEffect(() => {
    if (PatientId) {
      getInspectionNotes();
    }
  }, [PatientId]);

  const getInspectionNotes = async () => {
    config.params.patientId = PatientId;
    const response = await Get('emr/inspectionNote', token, config);
    if (response.data.length != 0) {
      var result = response.data.reduce(function (r, a) {
        //Оноор бүлэглэх
        r[a.createdAt.substring(0, 4)] = r[a.createdAt.substring(0, 4)] || [];
        r[a.createdAt.substring(0, 4)].push(a);
        return r;
      }, Object.create(null));
      setInspectionNotes(result);
    } else {
      setInspectionNotes([]);
    }
  };

  const RenderNotesDetail = (data) => {
    return Object.entries(data.data).map(([key, value], index) => {
      return (
        <div key={index} className="inline-flex">
          <p className="font-semibold mx-2">{key}: </p>
          {Object.values(value).map((elValues, index) => {
            return typeof elValues === "string" ? (
              <p key={index}>{elValues}</p>
            ) : (
              <div key={index}>
                {elValues.map((el, index) => {
                  return <p key={index}>{el}</p>;
                })}
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <>
      <Collapse
        onChange={onChange}
        collapsible="header"
        expandIcon={({ isActive }) => {
          return isActive ? (
            <FolderOpenOutlined style={{ fontSize: "24px" }} />
          ) : (
            <FolderOutlined style={{ fontSize: "24px" }} />
          );
        }}
        ghost
      >
        {Object.entries(inspectionNotes).map(([key, value], index) => {
          return (
            <Panel header={`${key} Он`} key={index}>
              <Collapse collapsible="header">
                {value.map((el, index) => {
                  return (
                    <Panel
                      header={
                        <div className="grid">
                          <span className="font-semibold">
                            {
                              el.structures?.name + "->" +
                              el.employees?.lastName + " " + el.employees?.firstName
                            }
                          </span>
                          <span>
                            {el.createdAt?.replace(/T/, " ").replace(/\..+/, "")}
                          </span>
                        </div>
                      }
                      key={index}
                      extra={genExtra(el)}
                    >
                      <Divider orientation="left" className="text-sm my-2">
                        Зовиур
                      </Divider>
                      <RenderNotesDetail data={JSON.parse(el["pain"])} />
                      <Divider orientation="left" className="text-sm my-2">
                        Бодит үзлэг
                      </Divider>
                      <RenderNotesDetail data={JSON.parse(el["inspection"])} />
                      <Divider orientation="left" className="text-sm my-2">
                        Асуумж
                      </Divider>
                      <RenderNotesDetail data={JSON.parse(el["question"])} />
                      <Divider orientation="left" className="text-sm my-2">
                        Төлөвлөгөө
                      </Divider>
                      <RenderNotesDetail data={JSON.parse(el["plan"])} />
                    </Panel>
                  );
                })}
              </Collapse>
            </Panel>
          );
        })}
      </Collapse>
      <Modal
        open={isOpenModal}
        onCancel={() => setIsOpenModal(false)}
        footer={null}
        width={845}
        title={'CT-1'}
      >
        <Index props={printData} />
      </Modal>
    </>
  );
}
