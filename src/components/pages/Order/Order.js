import { Button, Tabs } from "antd";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
// parts
import RecentRecipe from "./RecentRecipe";
import SetOrder from "./SetOrder";
import Medicine from "./Medicine";
import Examination from "./Examination";
import Xray from "./Xray";
import Treatment from "./Treatment";
import Surgery from './Surgery';
import Endo from "./Endo";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
//
function Order(props) {
    const [orders, setOrders] = useState([]);
    const [total, setTotal] = useState(Number);


    const handleclick = (value) => {
        setOrders([...orders, value]);
        setTotal(total + value.prices?.price);
    }

    const remove = (index) => {
        var arr = [...orders];
        arr.splice(index, 1);
        setTotal(total - orders[index].prices?.price);
        setOrders(arr);
    }

    const categories = [];
    props.categories.map((category, index) => {
        if (category.name == 'Examination') {
            categories.push(
                {
                    label: "Шинэжилгээ",
                    key: index,
                    children: <Examination handleclick={handleclick} />
                }
            )
        }
        if (category.name == 'Xray') {
            categories.push(
                {
                    label: "Оношилгоо",
                    key: index,
                    children: <Xray />
                }
            )
        }
        if (category.name == 'Treatment') {
            categories.push(
                {
                    label: "Эмчилгээ",
                    key: index,
                    children: <Treatment />
                }
            )
        }
        if (category.name == 'Surgery') {
            categories.push(
                {
                    label: "Мэс, засал",
                    key: index,
                    children: <Surgery />
                }
            )
        }
        if (category.name == 'Endo') {
            categories.push(
                {
                    label: "Дуран",
                    key: index,
                    children: <Endo />
                }
            )
        }
        if (category.name == 'RecentRecipe') {
            categories.push(
                {
                    label: "Өмнөх жор",
                    key: index,
                    children: <RecentRecipe />
                }
            )
        }
        if (category.name == 'SetOrder') {
            categories.push(
                {
                    label: "Set Order",
                    key: index,
                    children: <SetOrder />
                }
            )
        }
        if (category.name == 'Medicine') {
            categories.push(
                {
                    label: "Эм",
                    key: index,
                    children: <Medicine />
                }
            )
        }
    })

    return (
        <div className="flex flex-row">
            <div className="basis-2/3">
                {categories ? <Tabs tabPosition="left" items={categories} /> : null}
            </div>
            <div className="basis-1/3">
                <div className='table-responsive px-4 pb-4' id='style-8' style={{ maxHeight: '420px' }}>
                    <Table className='ant-border-space' style={{ width: '100%' }}>
                        <thead className='ant-table-thead bg-slate-200'>
                            <tr>
                                <th className="font-bold text-sm align-middle">Нэр</th>
                                <th className="font-bold text-sm align-middle">Үнэ</th>
                            </tr>
                        </thead>
                        <tbody className='ant-table-tbody p-0'>
                            {
                                orders?.map((order, index) => {
                                    return (
                                        <tr onDoubleClick={() => remove(index)} key={index} className='ant-table-row ant-table-row-level-0 hover:cursor-pointer'>
                                            <td>{order.name}</td>
                                            <td>{order.prices?.price}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
                <div>
                    <p className="float-left font-extrabold">Нийт Үнэ</p>
                    <p className="float-right font-extrabold">{total}₮</p>
                </div>
            </div>
        </div>
    )
}
export default Order;