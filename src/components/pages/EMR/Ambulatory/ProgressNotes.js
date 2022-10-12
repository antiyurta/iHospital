//Явцын тэмдэглэл
import React from "react";
import { Collapse } from "antd";
import { FolderOutlined, FolderOpenOutlined } from "@ant-design/icons";

export default function ProgressNotes(props) {
  const { Panel } = Collapse;
  const onChange = (key) => {
    console.log(key);
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
      <Panel header="2021 Он" key="1">
        <Collapse accordion>
          <Panel
            header={
              <div className="grid">
                <span className="font-semibold">
                  Чих хамар хоолой - Цэнд-Аюуш
                </span>
                <span>2021-07-01 08:20</span>
              </div>
            }
            key="1"
          >
            <table cellSpacing={2} cellPadding="5">
              <tbody>
                <tr className="border-b-2">
                  <td className="font-semibold">Ерөнхий үзлэг:</td>
                  <td>Мэдээлэл байхгүй</td>
                </tr>
                <tr className="border-b-2">
                  <td className="font-semibold">Зовиур:</td>
                  <td>ерөнхий үзлэг : Зовиургүй</td>
                </tr>
                <tr className="border-b-2">
                  <td className="font-semibold">Асуумж:</td>
                  <td>
                    Арьс : Өвчин анх эхэлсэн Баруун гарын чигчий хуруунд тууралт
                    гарсан.
                  </td>
                </tr>
                <tr className="border-b-2">
                  <td className="font-semibold">Бодит үзлэг:</td>
                  <td>
                    Арьс : Үзлэг : Баруун гарын чигчий хуруун дээр 0,3*0,3см
                    гүвдрүүтэй ургацаг гарсан.
                  </td>
                </tr>
                <tr className="border-b-2">
                  <td className="font-semibold">Онош:</td>
                  <td>
                    Урьдчилсан:General examination and investigation of persons
                    without complaint and reported diagnosis - Z00
                  </td>
                </tr>
                <tr className="border-b-2">
                  <td className="font-semibold">Төлөвлөгөө:</td>
                  <td>Үү авахуулах ( Электрокоагуляци )</td>
                </tr>
                <tr className="border-b-2">
                  <td className="font-semibold">Захиалга:</td>
                  <td>
                    <div>Хэвлийн цуцлаг дотор эрхтэний эхо ()</div>
                    <div>ЦДШ (CBC+DIFF) ()</div>
                    <div>Биохимийн шинжилгээ ()</div>
                  </td>
                </tr>
                <tr className="border-b-2">
                  <td className="font-semibold">Нэмэлт:</td>
                  <td>Мэдээлэл байхгүй</td>
                </tr>
              </tbody>
            </table>
          </Panel>
          <Panel
            header={
              <div className="grid">
                <span className="font-semibold">Арьс харшлын - Ундрам</span>
                <span>2021-08-01 08:20</span>
              </div>
            }
            key="2"
          >
            <div></div>
          </Panel>
        </Collapse>
      </Panel>
      <Panel header="2022 Он" key="2">
        <Collapse accordion>
          <Panel
            header={
              <div className="grid">
                <span className="font-semibold">
                  Эрүүл мэндийг дэмжих төв - Алтантуяа
                </span>
                <span>2022-07-01 08:20</span>
              </div>
            }
            key="1"
          >
            <div>text</div>
          </Panel>
        </Collapse>
      </Panel>
    </Collapse>
  );
}
