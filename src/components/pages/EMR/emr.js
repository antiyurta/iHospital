import { Button, Card, Col, Radio, Row, Collapse, Tabs } from "antd";
import { FolderOutlined, FolderOpenOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import male from "../../../assets/images/maleAvatar.svg";

const { Panel } = Collapse;

const Tab1Content = (key) => {
  return <div>ASDASD</div>;
};
const items = [
  {
    label: "Tab 1",
    key: "item-1",
    children: <Tab1Content />,
  }, // remember to pass the key prop
  { label: "Tab 2", key: "item-2", children: "Content 2" },
];

function EMR() {
  const [cardLoading, setCardLoading] = useState(false);

  const onChange = (key) => {
    console.log(key);
  };

  const loop = (data) => {
    console.log("data", data);
    return {
      title: data.title,
      key: data.key,
    };
  };
  return (
    <Row gutter={[8, 8]}>
      <Col span={12}>
        <Row gutter={[8, 8]}>
          <Col span={24}>
            <Card
              bordered={false}
              title={
                <h6 className="font-semibold m-0">Үйлчлүүлэгчийн мэдээлэл</h6>
              }
              className="header-solid max-h-max"
              loading={cardLoading}
              bodyStyle={{
                paddingTop: 0,
                paddingBottom: 16,
              }}
            >
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <img className="max-h-full" src={male} alt="avatar" />
                </Col>
                <Col span={16}>
                  <label className="w-full flex mb-2">
                    <span className="w-1/12">Овог:</span>
                    <span className="font-bold ml-2 w-3/4">Ширчиндэмбэрэл</span>
                  </label>
                  <label className="w-full flex mb-2">
                    <span className="w-1/12">Нэр:</span>
                    <span className="font-bold ml-2 w-3/4">Амарбат</span>
                  </label>
                  <label className="w-full flex mb-2">
                    <span className="w-1/12">Хүйс:</span>
                    <span className="font-bold ml-2 w-3/4">Эр</span>
                  </label>
                  <label className="w-full flex mb-2">
                    <span className="w-1/12">Нас:</span>
                    <span className="font-bold ml-2 w-3/4">25</span>
                  </label>
                  <label className="w-full flex mb-2">
                    <span className="w-1/12">РД:</span>
                    <span className="font-bold ml-2 w-3/4">ЙЮ97043019</span>
                  </label>
                  <label className="w-full flex mb-2">
                    <span className="w-1/12">Утас:</span>
                    <span className="font-bold ml-2 w-3/4">86681325</span>
                  </label>
                  <label className="w-full flex mb-2">
                    <span className="w-1/12">Хаяг:</span>
                    <span className="font-bold ml-2 w-3/4">
                      Улаанбаатар, Баянзүрх, 8 Хороо, 68-50
                    </span>
                  </label>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={24}>
            <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">Өвчтөний түүx</h6>}
              className="header-solid h-full"
              loading={cardLoading}
              bodyStyle={{
                paddingTop: 0,
                paddingBottom: 16,
                minHeight: 200,
                maxHeight: 400,
                overflowX: "hidden",
                overflowY: "scroll",
              }}
            >
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
                              Арьс : Өвчин анх эхэлсэн Баруун гарын чигчий
                              хуруунд тууралт гарсан.
                            </td>
                          </tr>
                          <tr className="border-b-2">
                            <td className="font-semibold">Бодит үзлэг:</td>
                            <td>
                              Арьс : Үзлэг : Баруун гарын чигчий хуруун дээр
                              0,3*0,3см гүвдрүүтэй ургацаг гарсан.
                            </td>
                          </tr>
                          <tr className="border-b-2">
                            <td className="font-semibold">Онош:</td>
                            <td>
                              Урьдчилсан:General examination and investigation
                              of persons without complaint and reported
                              diagnosis - Z00
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
                          <span className="font-semibold">
                            Арьс харшлын - Ундрам
                          </span>
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
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        <Card
          bordered={false}
          title={<h6 className="font-semibold m-0">Явцын үзлэг</h6>}
          className="header-solid h-full"
          loading={cardLoading}
          bodyStyle={{
            paddingTop: 0,
            paddingBottom: 16,
            maxHeight: 200,
            minHeight: 200,
            height: 200,
          }}
          extra={
            <>
              <Radio.Group>
                <Radio value={1}>Анхан</Radio>
                <Radio value={2}>Давтан</Radio>
              </Radio.Group>
            </>
          }
        >
          <Tabs items={items} />
        </Card>
      </Col>
    </Row>
  );
}

export default EMR;
