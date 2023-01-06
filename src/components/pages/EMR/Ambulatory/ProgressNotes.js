//Явцын тэмдэглэл
import React, { useEffect, useState } from "react";
import { Card, Collapse, Divider, Modal, Tree } from "antd";
import { FolderOutlined, FolderOpenOutlined, PrinterOutlined, FilePdfOutlined, CarryOutOutlined, FormOutlined, MedicineBoxOutlined, MediumOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";
import { Get } from "../../../comman";
import FormIndex from "../FormPrint";
import Prescription from "../PrescriptionPrint";
import Magadlaga from '../MagadlagaPrint';

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
  const [printPrescription, setPrintPrescription] = useState([]);
  const [printMagadlaga, setPrintMagadlaga] = useState({});
  const [isOpenModalForm, setIsOpenModalForm] = useState(false);
  const [isOpenModalPrescription, setIsOpenModalPrescription] = useState(false);
  const [isOpenModalMagadlaga, setIsOpenModalMagadlaga] = useState(false);
  const onChange = async (id) => {
    if (id) {
      const conf = {
        headers: {},
        params: {}
      }
      console.log("===========>asdskladsahasdklashdkashdasdhksahdklsahd");
      const response = await Get('appointment/show/' + id, token, conf);
      if (response.inspectionNotes.length > 0) {
        setInspectionNotes(response.inspectionNotes);
        setServiceRequests(response.serviceRequests);
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
    if (data.data) {
      return Object.entries(data?.data).map(([key, value], index) => {
        return (
          <div key={index} className="flex flex-wrap">
            {Object.entries(value).map((elValues, index) => {
              return (
                <p className="pr-2">{elValues[0] + ": " + elValues[1]}</p>
              )
            })}
          </div>
        );
      });
    }
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
                                      <MediumOutlined
                                        title="Магадлага"
                                        className="p-1"
                                        onClick={(event) => {
                                          setPrintMagadlaga(note);
                                          console.log(note);
                                          setIsOpenModalMagadlaga(true);
                                        }
                                        }
                                      />
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
                                  <FormIndex props={printData} />
                                </Card>
                              )
                            })
                            :
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
      <Modal
        open={isOpenModalMagadlaga}
        onCancel={() => setIsOpenModalMagadlaga(false)}
        footer={null}
        width={860}
        title={'Эмнэлэгийн магадлагаа'}
      >
        <Magadlaga data={printMagadlaga} />
      </Modal>
    </>
  );
}
