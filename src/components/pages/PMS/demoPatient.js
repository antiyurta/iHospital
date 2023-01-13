import { Button, Card, Input, Space, Table } from "antd";
import { SearchOutlined } from '@ant-design/icons';
const { Search } = Input;
function DemoPatient() {
    const onSearch = (e, f) => {
        console.log(e, f)
    }
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ }) => (
            <div style={{ padding: 8 }}>
                <Search
                    placeholder={"Овог хайх"}
                    allowClear
                    onSearch={(e) => onSearch(e, "lastName")}
                    enterButton={"Хайх"}
                />
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{ color: '#2d8cff' }}
            />
        ),
    })
    const colums = [
        {
            title: "№"
        },
        {
            title: "Картын №",
            ...getColumnSearchProps('carNumber')
        },
        {
            title: "Овог",
        },
        {
            title: "Нэр",
        },
        {
            title: "Регистр №",
        },
        {
            title: "Утас",
        },
        {
            title: "Гэрийн хаяг",
        },
        {
            title: "Карт нээлгэсэн огноо",
        },
        {
            title: "Үйлдэл"
        }
    ];
    const data = [];
    return (
        <Card
            bordered={false}
            className="header-solid max-h-max rounded-md"
            title="Өвчтөн"
        >
            <Table
                rowKey={"id"}
                bordered
                columns={colums}
                dataSource={data}
            />
        </Card>
    )
}
export default DemoPatient;