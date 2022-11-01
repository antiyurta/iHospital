import { Button, Tabs } from "antd";
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
function Order({ isDoctor, categories, save }) {
    const [orders, setOrders] = useState([]);
    const [total, setTotal] = useState(Number);

    const saveClick = (e) => {
        save(e);
    }

    const handleclick = (value) => {

        console.log(value);

        const order = {
            id: value.id,
            name: value.name,
            price: value.price,
            type: value.types.type,
            isCito: 0,
            qty: 1,
            requestDate: new Date(),
            usageType: 'OUT',
        }

        if (value.qty) {
            order.price = value.price * value.qty;
            order.qty = value.qty;
            order.dayLength = value.dayLength;
        }


        setOrders([...orders, order]);
        setTotal(total + order.price);
    }

    const remove = (index) => {
        var arr = [...orders];
        arr.splice(index, 1);
        setTotal(total - orders[index].price);
        setOrders(arr);
    }

    const Tabss = [];
    categories.map((category, index) => {
        if (category.name == 'Examination') {
            Tabss.push(
                {
                    label: "Шинэжилгээ",
                    key: index,
                    children: <Examination handleclick={handleclick} />
                }
            )
        }
        if (category.name == 'Xray') {
            Tabss.push(
                {
                    label: "Оношилгоо",
                    key: index,
                    children: <Xray handleclick={handleclick} />
                }
            )
        }
        if (category.name == 'Treatment') {
            Tabss.push(
                {
                    label: "Эмчилгээ",
                    key: index,
                    children: <Treatment handleclick={handleclick} />
                }
            )
        }
        if (category.name == 'Surgery') {
            Tabss.push(
                {
                    label: "Мэс, засал",
                    key: index,
                    children: <Surgery />
                }
            )
        }
        if (category.name == 'Endo') {
            Tabss.push(
                {
                    label: "Дуран",
                    key: index,
                    children: <Endo />
                }
            )
        }
        if (category.name == 'RecentRecipe') {
            Tabss.push(
                {
                    label: "Өмнөх жор",
                    key: index,
                    children: <RecentRecipe />
                }
            )
        }
        if (category.name == 'SetOrder') {
            Tabss.push(
                {
                    label: "Set Order",
                    key: index,
                    children: <SetOrder />
                }
            )
        }
        if (category.name == 'Medicine') {
            Tabss.push(
                {
                    label: "Эм",
                    key: index,
                    children: <Medicine />
                }
            )
        }
    })

    return (
        <div className="flex flex-wrap">
            <div className={isDoctor ? 'w-full' : 'w-full md:w-2/3'}>
                <Tabs tabPosition="left" items={Tabss} />
            </div>
            <div className={isDoctor ? 'w-full' : 'w-full md:w-1/3'}>
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
                                            <td>{order.price}</td>
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
                <Button onClick={() => saveClick(orders)}>Хадгалах</Button>
            </div>
        </div>
    )
}
export default Order;