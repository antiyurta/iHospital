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
//

const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function Order(props) {
    const token = useSelector(selectCurrentToken);

    const categories = [];

    props.categories.map((category, index) => {
        if (category.name == 'Examination') {
            categories.push(
                {
                    label: "Шинэжилгээ",
                    key: index,
                    children: <Examination />
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

    const getData = (value) => {
        console.log(value);
    }

    return (
        <div className="flex flex-row">
            <div className="basis-1/3">
                <Tabs tabPosition="left" onChange={getData} items={categories} />
            </div>
            <div className="basis-2/3">
                sadasdasd
            </div>
            {/* <div className="flex flex-wrap">
                {
                    categories.map((category, index) => {
                        return (
                            <div key={index} className="w-full md:w-2/12 p-4">
                                <Button onClick={() => getType(category.render)} className="bg-[#00a4ef] w-full text-white rounded-lg">{category.name}</Button>
                            </div>
                        )
                    })
                }
            </div> */}
            {/* <div className="flex flex-row">
                <div className="basis-1/3">
                    {
                        types.map((type, index) => {
                            return (
                                <Button onClick={() => getTypeById(type.id)} className="w-full my-1 bg-[#3d9970] text-white rounded-lg" key={index}>{type.name}</Button>
                            )
                        })
                    }
                </div>
                <div className="basis-1/3">
                    <div className='table-responsive p-4' id='style-8' ref={scrollRef} style={{ maxHeight: '400px' }}>
                        <Table className='ant-border-space' style={{ width: '100%' }}>
                            <thead className='ant-table-thead bg-slate-200'>
                                <tr>
                                    <th className="font-bold text-sm align-middle">Нэр</th>
                                    <th className="font-bold text-sm align-middle">Үнэ</th>
                                </tr>
                            </thead>
                            <tbody className='ant-table-tbody p-0'>
                                {
                                    typeById.map((item, index) => {
                                        return (
                                            <tr onClick={() => addType(item)} key={index} className='ant-table-row ant-table-row-level-0 hover:cursor-pointer'>
                                                <td>{item.name}</td>
                                                <td>{item.prices?.price}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="basis-1/3">
                    <div className='table-responsive p-4' id='style-8' ref={scrollRef}>
                        <Table className='ant-border-space' style={{ width: '100%' }}>
                            <thead className='ant-table-thead bg-slate-200'>
                                <tr>
                                    <th className="font-bold text-sm align-middle">Нэр</th>
                                    <th className="font-bold text-sm align-middle">Үнэ</th>
                                    <th className="font-bold text-sm align-middle"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderTypes.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.name}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
export default Order;