//Явцын тэмдэглэл
import React, { useEffect, useState } from "react";
import { Card, Collapse, Divider, Modal, Tree } from "antd";
import { FolderOutlined, FolderOpenOutlined, PrinterOutlined, FilePdfOutlined, CarryOutOutlined, FormOutlined, MedicineBoxOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";
import { Get } from "../../../comman";
import FormIndex from "../FormPrint";
import Prescription from "../PrescriptionPrint";

export default function ProgressNotes({ PatientId }) {
  const { Panel } = Collapse;
  const token = useSelector(selectCurrentToken);
  const config = {
    headers: {},
    params: {}
  };
  const [inspectionNotes, setInspectionNotes] = useState([]);
  const [serviceRequests, setServiceRequests] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [printData, setPrintData] = useState([]);
  const [printPrescription, setPrintPrescription] = useState([])
  const [isOpenModalForm, setIsOpenModalForm] = useState(false);
  const [isOpenModalPrescription, setIsOpenModalPrescription] = useState(false);
  const onChange = async (id) => {
    if (id) {
      const response = await Get('appointment/' + id, token, config);
      if (response.inspectionNotes.length > 0) {
        console.log(response.inspectionNotes);
        setInspectionNotes(response.inspectionNotes);
        setServiceRequests(response.setServiceRequests);
      } else {
        setInspectionNotes([]);
      }
    }
  };

  useEffect(() => {
    if (PatientId) {
      getInspectionNotes(PatientId);
    }
  }, [PatientId]);

  const getInspectionNotes = async (PatientId) => {
    config.params.patientId = PatientId;
    const response = await Get('appointment', token, config);
    if (response.data.length > 0) {
      var result = response.data.reduce(function (r, a) {
        //Оноор бүлэглэх
        r[a.createdAt.substring(0, 4)] = r[a.createdAt.substring(0, 4)] || [];
        r[a.createdAt.substring(0, 4)].push(a);
        return r;
      }, Object.create(null));
      console.log(result);
      setAppointments(result);
    } else {
      setAppointments([]);
    }
    config.params.patientId = null;
  };

  const RenderNotesDiagnose = (data) => {
    data?.data?.diagnose?.map((diagnose) => {
      console.log(diagnose);
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
      // ghost
      >
        {Object.entries(appointments).map(([key, value], index) => {
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
                                  key={index}
                                  title={
                                    note.structures?.name + "->" +
                                    note.employees?.lastName + " " + note.employees?.firstName
                                  }
                                  extra={
                                    <>
                                      <PrinterOutlined className="p-1"
                                        onClick={(event) => {
                                          setPrintData(note);
                                          console.log(value);
                                          setIsOpenModalForm(true);
                                        }
                                        }
                                      />
                                      <MedicineBoxOutlined className="p-1"
                                        onClick={(event) => {
                                          setPrintPrescription(value);
                                          console.log(value);
                                          setIsOpenModalPrescription(true);
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
