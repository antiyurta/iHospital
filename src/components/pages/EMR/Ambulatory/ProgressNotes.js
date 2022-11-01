//Явцын тэмдэглэл
import React, { useEffect, useState } from "react";
import { Collapse, Divider } from "antd";
import { FolderOutlined, FolderOpenOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";
import axios from "axios";
import { Get } from "../../../comman";

export default function ProgressNotes({ PatientId }) {
  const { Panel } = Collapse;
  const token = useSelector(selectCurrentToken);
  const config = {
    headers: {},
    params: {}
  };
  const [inspectionNotes, setInspectionNotes] = useState([]);
  const onChange = (key) => {
    // console.log(key);
  };

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
        <div key={index} className="flex">
          <p className="font-semibold mr-2">{key}: </p>
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
    <Collapse
      onChange={onChange}
      accordion
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
            <Collapse accordion>
              {value.map((el, index) => {
                return (
                  <Panel
                    header={
                      <div className="grid">
                        <span className="font-semibold">
                          {el.departmentId}Чих хамар хоолой - {el.departmentId}
                          Цэнд-Аюуш
                        </span>
                        <span>
                          {el.createdAt?.replace(/T/, " ").replace(/\..+/, "")}
                        </span>
                      </div>
                    }
                    key={index}
                  >
                    <Divider orientation="left" className="text-sm my-2">
                      Зовиур
                    </Divider>
                    <RenderNotesDetail data={JSON.parse(el["pain"])} />
                    <Divider orientation="left" className="text-sm my-2">
                      Үзлэг
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
  );
}
