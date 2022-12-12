//Явцын тэмдэглэл
import React, { useEffect, useState } from "react";
import { Card, Collapse, Divider, Modal, Tree } from "antd";
import { FolderOutlined, FolderOpenOutlined, PrinterOutlined, FilePdfOutlined, CarryOutOutlined, FormOutlined, MedicineBoxOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";
import { Get } from "../../../comman";
import FormIndex from "../FormPrint";
import Prescription from "../PrescriptionPrint";

export default function ProgressNotes({ Appointments }) {
  const { Panel } = Collapse;
  const token = useSelector(selectCurrentToken);
  const config = {
    headers: {},
    params: {}
  };
  const [inspectionNotes, setInspectionNotes] = useState([]);
  const [serviceRequests, setServiceRequests] = useState([]);
  const [printData, setPrintData] = useState([]);
  const [printPrescription, setPrintPrescription] = useState([])
  const [isOpenModalForm, setIsOpenModalForm] = useState(false);
  const [isOpenModalPrescription, setIsOpenModalPrescription] = useState(false);
  const onChange = async (id) => {
    if (id) {
      const response = await Get('appointment/show/' + id, token, config);
      if (response.inspectionNotes.length > 0) {
        setInspectionNotes(response.inspectionNotes);
        setServiceRequests(response.serviceRequests);
        console.log(response)
      } else {
        setInspectionNotes([]);
        setServiceRequests([]);
      }
    }
  };

  const RenderNotesDiagnose = (data) => {
    return data?.data?.map((diagnose, index) => {
      return (
        <div key={index} className="flex">
          <p className="font-semibold mx-2">{diagnose.type}: </p>
          <p>{"[" + diagnose.code + "]" + diagnose.nameMn}</p>
        </div>
      )
    })
  }

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
        {Object.entries(Appointments).map(([key, value], index) => {
          return (
            <Panel header={`${key} Он`} key={index}>
              <Collapse Collapse collapsible="header" onChange={onChange} accordion >
                {
                  value.map((el, index) => {
                    return (
                      <Panel
                        header={
                          <div className="grid">
                            <span>
                              {el.createdAt?.replace(/T/, " ").replace(/\..+/, "")}
                            </span>
                          </div>
                        }
                        key={value[index].id}
                      >
                        {
                          inspectionNotes.length > 0 ?
                            inspectionNotes.map((note, index) => {
                              return (
                                <Card
                                  className="m-3"
                                  key={index}
                                  title={
                                    note.structures?.name + "->" +
                                    note.employees?.lastName + " " + note.employees?.firstName
                                  }
                                  extra={
                                    <>
                                      <PrinterOutlined
                                        title="Маягт хэвлэх"
                                        className="p-1"
                                        onClick={(event) => {
                                          setPrintData(note);
                                          console.log(value);
                                          setIsOpenModalForm(true);
                                        }
                                        }
                                      />
                                      <MedicineBoxOutlined
                                        title="Эмийн жор хэвлэх"
                                        className="p-1"
                                        onClick={(event) => {
                                          // setPrintPrescription(serviceRequests);
                                          console.log(serviceRequests);
                                          // setIsOpenModalPrescription(true);
                                        }}
                                      />
                                    </>
                                  }
                                >
                                  <Divider orientation="left" className="text-sm my-2">
                                    Зовиур
                                  </Divider>
                                  <RenderNotesDetail data={JSON.parse(note["pain"])} />
                                  <Divider orientation="left" className="text-sm my-2">
                                    Бодит үзлэг
                                  </Divider>
                                  <RenderNotesDetail data={JSON.parse(note["inspection"])} />
                                  <Divider orientation="left" className="text-sm my-2">
                                    Асуумж
                                  </Divider>
                                  <RenderNotesDetail data={JSON.parse(note["question"])} />
                                  <Divider orientation="left" className="text-sm my-2">
                                    Төлөвлөгөө
                                  </Divider>
                                  <RenderNotesDetail data={JSON.parse(note["plan"])} />
                                  <Divider orientation="left" className="text-sm my-2">
                                    Онош
                                  </Divider>
                                  {note["diagnose"] && <RenderNotesDiagnose data={JSON.parse(note["diagnose"])} />}
                                </Card>
                              )
                            }) :
                            <p>Тэмдэглэл байхгүй</p>
                        }
                      </Panel>
                    );
                  })
                }
              </Collapse>
            </Panel>
          );
        })}
      </Collapse >
      <Modal
        open={isOpenModalForm}
        onCancel={() => setIsOpenModalForm(false)}
        footer={null}
        width={845}
        title={'CT-1'}
      >
        <FormIndex props={printData} />
      </Modal>
      <Modal
        open={isOpenModalPrescription}
        onCancel={() => setIsOpenModalPrescription(false)}
        footer={null}
        width={845}
        title={'CT-1'}
      >
        <Prescription props={printPrescription} />
      </Modal>
    </>
  );
}
