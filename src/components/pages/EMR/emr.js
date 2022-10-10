import {
  Card,
  Col,
  Radio,
  Row,
  Collapse,
  Tabs,
  Tag,
  Table,
  Typography,
} from "antd";
import { FolderOutlined, FolderOpenOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import male from "../../../assets/images/maleAvatar.svg";
import Step1 from "./patientHistory/Step1";
import Step2 from "./patientHistory/Step2";
import Step3 from "./patientHistory/Step3";
import Step4 from "./patientHistory/Step4";
import Step5 from "./patientHistory/Step5";
import Step6 from "./patientHistory/Step6";
import Step7 from "./patientHistory/Step7";
import Step8 from "./patientHistory/Step8";
import GeneralInspection from "./GeneralInspection";

function EMR() {
  const { Panel } = Collapse;
  const { CheckableTag } = Tag;
  const { Text } = Typography;
  const [cardLoading, setCardLoading] = useState(false);
  const [selectedTags, setSelectedTags] = useState({
    value: 0,
    label: "Төрөлт, өсөлт бойжилт",
  });
  useEffect(() => {}, []);

  const handleChange = (tag, checked) => {
    setSelectedTags(tag);
  };

  const tagsData = [
    { value: 0, label: "Төрөлт, өсөлт бойжилт" },
    { value: 1, label: "Өвчний түүх" },
    { value: 2, label: "Амьдралын хэв маяг" },
    { value: 3, label: "Амьдралын нөхцөл" },
    { value: 4, label: "Харшил" },
    { value: 5, label: "Эмийн хэрэглээ" },
    { value: 6, label: "Тархвар зүйн асуумж" },
    { value: 7, label: "Удамшлын асуумж" },
  ];
  const columns = [
    {
      title: "Огноо",
      dataIndex: "date",
      key: "date",
      className: "bg-white",
    },
    {
      title: "Асуудал",
      dataIndex: "problem",
      key: "problem",
      className: "bg-white",
    },
  ];
  const data = [
    {
      key: "1",
      date: "2022-10-01",
      problem: "Самарны харшилтай",
    },
    {
      key: "2",
      date: "2022-09-01",
      problem: "Тууралт",
    },
  ];
  const Tab1Content = (key) => {
    return (
      <div className="items-center">
        {tagsData.map((tag, index) => {
          return (
            <CheckableTag
              key={tag.value}
              checked={selectedTags.value == tag.value}
              onChange={(checked) => handleChange(tag, checked)}
              color="red"
              style={{
                backgroundColor:
                  selectedTags.value == tag.value ? "#1890ff" : "#d9d9d9",
                marginBottom: 5,
              }}
            >
              {tag.label}
            </CheckableTag>
          );
        })}
        {selectedTags.value == tagsData[0].value ? (
          <Step1 nextBtn={() => handleChange(tagsData[1])} />
        ) : null}
        {selectedTags.value == tagsData[1].value ? (
          <Step2
            nextBtn={() => handleChange(tagsData[2])}
            backBtn={() => handleChange(tagsData[0])}
          />
        ) : null}
        {selectedTags.value == tagsData[2].value ? (
          <Step3
            nextBtn={() => handleChange(tagsData[3])}
            backBtn={() => handleChange(tagsData[1])}
          />
        ) : null}
        {selectedTags.value == tagsData[3].value ? (
          <Step4
            nextBtn={() => handleChange(tagsData[4])}
            backBtn={() => handleChange(tagsData[2])}
          />
        ) : null}
        {selectedTags.value == tagsData[4].value ? (
          <Step5
            nextBtn={() => handleChange(tagsData[5])}
            backBtn={() => handleChange(tagsData[3])}
          />
        ) : null}
        {selectedTags.value == tagsData[5].value ? (
          <Step6
            nextBtn={() => handleChange(tagsData[6])}
            backBtn={() => handleChange(tagsData[4])}
          />
        ) : null}
        {selectedTags.value == tagsData[6].value ? (
          <Step7
            nextBtn={() => handleChange(tagsData[7])}
            backBtn={() => handleChange(tagsData[5])}
          />
        ) : null}
        {selectedTags.value == tagsData[7].value ? (
          <Step8
            nextBtn={() => console.log("SAVED")}
            backBtn={() => handleChange(tagsData[6])}
          />
        ) : null}
      </div>
    );
  };
  const Tab2Content = (key) => {
    return <GeneralInspection />;
  };
  const items = [
    {
      label: "Өвчтөний түүх",
      key: "item-1",
      children: <Tab1Content />,
    },
    {
      label: "Ерөнхий үзлэг",
      key: "item-2",
      children: <Tab2Content />,
    },
  ];

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
          <Col span={14}>
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
                    <span className="w-1/6">Овог:</span>
                    <span className="font-bold ml-2">Ширчиндэмбэрэл</span>
                  </label>
                  <label className="w-full flex mb-2">
                    <span className="w-1/6">Нэр:</span>
                    <span className="font-bold ml-2">Амарбат</span>
                  </label>
                  <label className="w-full flex mb-2">
                    <span className="w-1/6">Хүйс:</span>
                    <span className="font-bold ml-2">Эр</span>
                  </label>
                  <label className="w-full flex mb-2">
                    <span className="w-1/6">Нас:</span>
                    <span className="font-bold ml-2">25</span>
                  </label>
                  <label className="w-full flex mb-2">
                    <span className="w-1/6">РД:</span>
                    <span className="font-bold ml-2">ЙЮ97043019</span>
                  </label>
                  <label className="w-full flex mb-2">
                    <span className="w-1/6">Утас:</span>
                    <span className="font-bold ml-2">86681325</span>
                  </label>
                  <label className="w-full flex mb-2">
                    <span className="w-1/6">Хаяг:</span>
                    <span className="font-bold ml-2">
                      Улаанбаатар, Баянзүрх, 8 Хороо, 68-50
                    </span>
                  </label>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={10}>
            <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">Гол асуудлууд</h6>}
              className="header-solid h-full"
              loading={cardLoading}
            >
              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                size="small"
                sticky={false}
              />
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
