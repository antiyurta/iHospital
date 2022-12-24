import React from "react";
import { Tabs, Card } from "antd";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

export default function Dashboard() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Сул", "Засвартай", "Дүүрсэн"],
    datasets: [
      {
        label: "Нийт",
        data: [12, 19, 3],
        backgroundColor: ["#52c41a", "#ff4d4f", "#faad14"],
        borderWidth: 1,
      },
    ],
  };
  const onChange = (key) => {
    console.log(key);
  };

  const RenderAmbulatory = () => {
    return <div>renderAmbulatory</div>;
  };
  const RenderBed = () => {
    return (
      <div>
        <div className="site-card-border-less-wrapper">
          <Card
            title="Орны мэдээлэл"
            bordered={false}
            style={{
              width: 300,
            }}
          >
            <Pie data={data} />
          </Card>
        </div>
      </div>
    );
  };
  return (
    <Tabs
      defaultActiveKey="1"
      onChange={onChange}
      type="card"
      items={[
        {
          label: `Амбулатори`,
          key: "1",
          children: <RenderAmbulatory />,
        },
        {
          label: `Хэвтэн`,
          key: "2",
          children: <RenderBed />,
        },
      ]}
    />
  );
}
