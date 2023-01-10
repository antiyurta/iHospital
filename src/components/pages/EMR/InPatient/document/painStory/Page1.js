import { Checkbox, Form } from 'antd';
import moment from 'moment';
import { useState } from 'react';
import logo from '../../../../../../assets/logo/universal.png';
const educationType = [
    {
        label: 'Боловсролгүй',
        value: 0,
    },
    {
        label: 'Бага',
        value: 1,
    },
    {
        label: 'Бүрэн дунд',
        value: 2,
    },
    {
        label: 'Мэргэжлийн болон техникийн',
        value: 3,
    },
    {
        label: 'Дипломын',
        value: 4,
    },
    {
        label: 'Бакалавр',
        value: 5,
    },
    {
        label: 'Магистр',
        value: 6,
    },
    {
        label: 'Доктор',
        value: 7,
    },
];
function Page1({ patient, anemis, diagnose }) {
    const [eeo, setEeo] = useState(false);
    const [te, setTe] = useState(false);
    const [echm, setEchm] = useState(false);
    const [o, setO] = useState(false);
    const ddd = (index) => {
        if (index === 0) {
            setEeo(!eeo);
        } else if (index === 1) {
            setTe(!te);
        } else if (index === 2) {
            setEchm(!echm);
        } else if (index === 3) {
            setO(!o);
        }
    };
    return (
        <div className="page">
            <div className="flex flex-wrap">
                <div className="basis-1/2">
                    {/* <img style={{ width: '50%' }} src={logo} /> */}
                </div>
                <div className="basis-1/2">
                    <p className="text-end">Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны</p>
                    <p className="text-end">өдрийн А/611 дүгээр тушаалын арваннэгдүгээр хавсралт</p>
                    <p className="text-end font-bold">Эрүүл мэндын бүртгэлийн маягт CT-1</p>
                </div>
            </div>
            <p className="text-center py-4" style={{ fontSize: '15px', fontWeight: 'bold' }}>ӨВЧНИЙ ТҮҮХ №</p>
            <div className="flex flex-wrap">
                <div className="w-7/12">
                    <img style={{ width: '50%' }} src={logo} />
                </div>
                <div className="w-5/12">
                    <div className='flex flex-wrap'>
                        <div className='w-2/12 amaraDeer amaraZuun'>
                            <p>РД</p>
                        </div>
                        <div className='w-10/12 amaraDeer amaraZuun amaraBaruun'>

                        </div>
                        <div className='w-2/12 amaraDeer amaraZuun'>
                            <p>НДД</p>
                        </div>
                        <div className='w-10/12 amaraDeer amaraZuun amaraBaruun'>

                        </div>
                        <div className='w-full amaraDeer amaraZuun amaraBaruun'>
                            <p>Өвчний түүх нээсэн</p>
                        </div>
                        <div className='w-full amaraDeer amaraZuun amaraBaruun'>
                            <p>Тасгийн нэр:</p>
                        </div>
                    </div>
                </div>
                <div className='w-7/12 amaraDeer amaraZuun'>
                    <p>Эцэг /эх/-ийн нэр:</p>
                </div>
                <div className='w-5/12 amaraDeer amaraZuun amaraBaruun'>
                    <p>Өөрийн нэр:</p>
                </div>
                <div className='w-3/12 amaraDeer amaraZuun'>
                    <p>Төрсөн он сар</p>
                </div>
                <div className='w-2/12 amaraDeer amaraZuun'>
                    <p className='ml-2'>Хүйс</p>
                    <Checkbox.Group className="ddd ml-0" defaultValue={[patient.genderType]}>
                        <Checkbox className="ml-2" value={"MAN"}>Эрэгтэй</Checkbox>
                        <Checkbox value={"WOMEN"}>Эмэгтэй</Checkbox>
                    </Checkbox.Group>
                </div>
                <div className='w-3/12 amaraDeer amaraZuun'>
                    <p className="ml-2 font-bold">Гэрлэлтийн байдал</p>
                    <Checkbox.Group className="ddd ml-0" defaultValue={[patient.educationType]}>
                        <Checkbox className="ml-2" value={0}>Огт гэрлээгүй</Checkbox>
                        <Checkbox value={1}>Батлуулсан гэр бүлтэй</Checkbox>
                        <Checkbox value={2}>Батлуулаагүй гэр бүлтэй</Checkbox>
                        <Checkbox value={3}>Тусгаарласан</Checkbox>
                        <Checkbox className='w-full' value={4}>Цуцалсан</Checkbox>
                        <Checkbox className='w-full' value={5}>Бэлэвсэн</Checkbox>
                    </Checkbox.Group>
                </div>
                <div className='w-4/12 amaraDeer amaraZuun amaraBaruun'>
                    <p className="ml-2 font-bold">Боловсролын байдал:</p>
                    <Checkbox.Group className="ddd ml-0" defaultValue={[patient.educationType]}>
                        <Checkbox className="ml-2" value={0}>Боловсролгүй</Checkbox>
                        <Checkbox value={1}>Бага</Checkbox>
                        <Checkbox value={2}>Бүрэн дунд</Checkbox>
                        <Checkbox value={3}>Мэргэжлийн болон техникийн</Checkbox>
                        <Checkbox className='w-full' value={4}>Дипломын</Checkbox>
                        <Checkbox className='w-full' value={5}>Бакалавр</Checkbox>
                        <Checkbox className='w-full' value={6}>Магистр</Checkbox>
                        <Checkbox className='w-full' value={7}>Доктор</Checkbox>
                    </Checkbox.Group>
                </div>
                <div className='w-6/12 amaraDeer amaraZuun'>
                    <p className='ml-2'>Тогтмол хаяг:</p>
                    <div className='inline-flex'>
                        <p className='ml-2'>Аймаг/хот:</p>
                        <p className='underline'>asdsadsadsadsadadsadsadasdsadsa</p>
                    </div>
                    <div className='inline-flex'>
                        <p className='ml-2'>Сум/дүүрэг:</p>
                        <p className='underline'>asdsadsadsaa</p>
                        <p className='ml-2'>Баг/Хороо:</p>
                        <p className='underline'>asdsadssadsa</p>
                    </div>
                    <div className='inline-flex'>
                        <p className='ml-2'>Гудамж/Байшин:</p>
                        <p className='underline'>asdsads</p>
                        <p className='ml-2'>Тоот:</p>
                        <p className='underline'>asdsadssadsa</p>
                    </div>
                </div>
                <div className='w-4/12 amaraDeer amaraZuun'>
                    <p className='ml-2'>Ажлын газар, албан тушаал:</p>
                    <p className='ml-2 underline'>{patient.jobPosition}</p>
                    <p className='ml-2'>Мэргэжил:</p>
                    <p className='ml-2 underline'>{patient.jobPosition}</p>
                </div>
                <div className='w-2/12 amaraDeer amaraZuun amaraBaruun'>
                    <p className='ml-2'>Цусны бүлэг:</p>
                </div>
                <div className='w-4/12 amaraDeer amaraZuun'>
                    <p className='ml-2'>Яаралтай үед холбоо барих</p>
                    <div className='inline-flex'>
                        <p className='ml-2'>Өөрийн утас:</p>
                        <p className='ml-2 underline'>{patient.phoneNo}</p>
                    </div>
                    <div className='inline-flex'>
                        <p className='ml-2'>Ар гэрийн утас:</p>
                        <p className='ml-2 underline'>{patient.homePhoneNo}</p>
                    </div>
                </div>
                <div className='w-3/12 amaraDeer amaraZuun'>
                    <p className='ml-2'>Төлбөрийн төрөл:</p>
                    <Checkbox.Group className="ddd ml-0" defaultValue={[patient.educationType]}>
                        <Checkbox className="ml-2" value={0}>Төр хариуцсан</Checkbox>
                        <Checkbox className='w-full' value={1}>15%</Checkbox>
                        <Checkbox value={2}>10%</Checkbox>
                        <Checkbox value={3}>Өвчтөн хариуцсан</Checkbox>
                    </Checkbox.Group>
                </div>
                <div className='w-2/12 amaraDeer amaraZuun'>
                    <p className='ml-2'>Доод шатлалаас илгээсэн эсэх:</p>
                    <Checkbox.Group className="ddd ml-0" defaultValue={["false"]}>
                        <Checkbox className="ml-2" value={"true"}>Тийм</Checkbox>
                        <Checkbox className='w-full' value={"false"}>Үгүй</Checkbox>
                    </Checkbox.Group>
                </div>
                <div className='w-3/12 amaraDeer amaraZuun amaraBaruun'>
                    <p className='ml-2'>Харшлын анамнез:</p>
                    <Checkbox className='w-full ml-2' defaultChecked={anemis.allergy.isMedical ? true : false}>Эмийн бодис</Checkbox>
                    <Checkbox className='w-full' defaultChecked={anemis.allergy.isFood ? true : false}>Хоол хүнс</Checkbox>
                    <Checkbox className='w-full' defaultChecked={anemis.allergy.isOther ? true : false}>Бусад</Checkbox>
                </div>
                <div className='w-full amaraDeer amaraZuun amaraBaruun'>
                    <p className='inline-flex'>
                        <p className="ml-2 font-extrabold w-max whitespace-nowrap">Хэвтэх үеийн онош</p>
                        <p className='text-red-400'>{diagnose.inpatientDiagnose}</p>
                    </p>
                </div>
                <div className='w-9/12 amaraDeer amaraZuun'>
                    <p className='inline-flex'>
                        <p className="ml-2 font-extrabold w-max whitespace-nowrap">Үндсэн онош</p>
                        <p className='text-red-400'>{diagnose.mainDiagnoseICD10}</p>
                    </p>
                </div>
                <div className='w-3/12 amaraDeer amaraZuun amaraBaruun'>
                    <p className='text-center'>ӨОУА-код</p>
                    <p className='text-center'>{moment(diagnose.mainDiagnoseDate).format("YYYYон MMсар DDөдөр")}</p>
                </div>
                <div className='w-9/12 amaraDeer amaraZuun'>
                    <p className='inline-flex'>
                        <p className="ml-2 font-extrabold w-max whitespace-nowrap">Дагалдах онош</p>
                        <p className='text-red-400'>{diagnose.mainDiagnoseICD10}</p>
                    </p>
                </div>
                <div className='w-3/12 amaraDeer amaraZuun amaraBaruun'>

                </div>
                <div className='w-9/12 amaraDeer amaraZuun'>
                    <p className="ml-2 font-extrabold">Хүндрэл</p>
                </div>
                <div className='w-3/12 amaraDeer amaraZuun amaraBaruun'>
                </div>
                <div className='w-9/12 amaraDeer amaraZuun'>
                    <div className='inline-flex'>
                        <p className="ml-2 font-extrabold">Үйлдлийн онош</p>
                        <p>(Мэс засал, мэс ажилбар)</p>
                    </div>
                </div>
                <div className='w-3/12 amaraDeer amaraZuun amaraBaruun'>
                    <p className='text-center'>ҮОУА-код</p>
                </div>
                <div className='w-9/12 amaraDeer amaraZuun'>
                    <div className='inline-flex'>
                        <p className="ml-2 font-extrabold">Улалжлалтын онош</p>
                    </div>
                </div>
                <div className='w-3/12 amaraDeer amaraZuun amaraBaruun'>
                </div>
                <div className='w-2/12 amaraDeer amaraZuun'>
                    <p className='ml-2'>Өвчний төгсгөл:</p>
                    <Checkbox.Group className="ddd ml-0" defaultValue={["false"]}>
                        <Checkbox className="ml-2" value={"true"}>Эдгэрсэн</Checkbox>
                        <Checkbox className='w-full' value={"false"}>Сайжирсан</Checkbox>
                        <Checkbox className="ml-2" value={"true"}>Хэвэндээ</Checkbox>
                        <Checkbox className='w-full' value={"false"}>Нас барсан</Checkbox>
                    </Checkbox.Group>
                </div>
                <div className='w-2/12 amaraDeer amaraZuun'>
                    <p className='ml-2'>Эмнэлгээс:</p>
                    <Checkbox.Group className="ddd ml-0" defaultValue={["false"]}>
                        <Checkbox className="ml-2" value={"true"}>Гарсан</Checkbox>
                        <Checkbox className='w-full' value={"false"}>Шилжсэн</Checkbox>
                        <Checkbox className="ml-2" value={"true"}>Нас барсан</Checkbox>
                    </Checkbox.Group>
                </div>
                <div className='w-3/12 amaraDeer amaraZuun'>
                    <p className='ml-2'>Он сар өдөр</p>
                </div>
                <div className='w-2/12 amaraDeer amaraZuun'>
                    <p className='ml-2'>Ор хоног</p>
                </div>
                <div className='w-3/12 amaraDeer amaraZuun amaraBaruun'>
                    <p className='ml-2'>Эмчилгээний зардал:</p>
                </div>
                <div className='w-5/12 amaraDeer amaraZuun amaraDoor'>
                    <p>Эмчлэгч эмчийн нэр, гарын үсэг</p>
                </div>
                <div className='w-7/12 amaraDeer amaraZuun amaraBaruun amaraDoor'>
                    <div className='inline-flex'>
                        <p>Хянасан эмчийн нэр, гарын үсэг</p>
                        <p>(</p>
                        <a style={{ fontSize: "14px" }} className={eeo ? "underline pr-1" : "pr-1"} onClick={() => ddd(0)}>Эмчилгээ эрхэлсэн орлогч</a>
                    </div>
                    <div className='inline-flex'>
                        <a style={{ fontSize: "14px" }} className={te ? "underline pr-1" : "pr-1"} onClick={() => ddd(1)}>тасгийн эрхлэгч</a>
                        <a style={{ fontSize: "14px" }} className={echm ? "underline pr-1" : "pr-1"} onClick={() => ddd(2)}>эмчилгээний чанарын менежер</a>
                        <a style={{ fontSize: "14px" }} className={o ? "underline pr-1" : "pr-1"} onClick={() => ddd(3)}>бусад</a>
                        <p>)/зур/</p>
                    </div>
                </div>
                <div className='w-full'>
                    <p className='ml-4'>Үзлэг эхэлсэн ----он----сар----өдөр---цаг-----минут</p>
                    <p className='ml-4'>ХЧТА-ын ---- хоног</p>
                </div>
                <div className='w-6/12 amaraDeer amaraZuun amaraDoor'>
                    <p>Өндөр (см)</p>
                    <p>Жин (см)</p>
                    <p>Биеийн жингийн индекс(кг/м2)</p>
                </div>
                <div className='w-6/12 amaraDeer amaraZuun amaraBaruun amaraDoor'>
                    <p>Өндөр (см)</p>
                </div>
            </div>
        </div>
    )
}
export default Page1;