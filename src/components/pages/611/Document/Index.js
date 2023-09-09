import React, { useEffect, useState } from 'react';
import { CloseOutlined, EyeOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { openNofi } from '../../../comman';
import { NewInput } from '../../../Input/Input';
import { NewColumn, NewTable } from '../../../Table/Table';
import NewModal from '../../../Modal/Modal';
// AM start
import AM1B from './AM1B';
import AM_1V from './AM_1V';
import AM2A from './AM2A';
import AM2B from './AM2B';
import AM3 from './AM3';
import AM4 from './AM4';
import AM5 from './AM5';
import AM6 from './AM6';
import AM7 from './am7';
import AM8 from './AM8';
import AM9A from './am9A';
import AM9B from './AM9B';
import AM9C from './AM9C';
import AM9D from './AM9D';
import AM10 from './AM10';
import AM11 from './AM11';
import AM11H1 from './AM11H1';
import AM11H1_1 from './AM11H1.1';
import AM11H2 from './AM11H2';
import AM_12A from './AM_12A';
import AM12B from './AM_12B';
import AM13A from './AM13A';
import AM13B from './AM13B';
import AM13V from './AM_13V';
import AM14A from './AM_14A';
import AM14B from './AM_14B';
import AM14V from './AM_14V';
import AM15 from './AM15';
import AM16 from './AM16';
import AM17 from './AM17';
import AM18 from './AM18';
import AM19 from './AM_19';
import AM20 from './AM20';
import AM21A from './AM21A';
import AM21B from './AM21B';
import AM21V from './AM21V';
import AM21G from './AM21G';
import AM22A from './AM22A';
import AM22B from './AM22B';
import AM22V from './AM22V';
import AM22G from './AM22G';
import AM22D from './AM22D';
import AM22E from './AM22E';
import AM22J from './AM22J';
import AM22Z from './AM22Z';
import AM22II from './AM22II';
import AM22K from './AM22K1';
import AM22L from './AM22L';
import AM22M from './AM22M';
import AM23 from './AM23';
import AM24A from './AM24A';
import AM24B from './AM24Б';
import AM25A from './AM25A';
import AM25B from './AM25B';
import AM26A from './AM26А';
import AM26B from './AM26B';
import AM27 from './AM27';
import AM28A from './AM28А';
import AM28B from './AM28B';
import AM29A from './AM29A';
import AM29B from './AM29B';
import AM29V from './AM29V';
import AM30A from './AM30A';
import AM30B from './AM30B';
import AM31 from './AM31';
import AM32 from './AM32';
import AM33 from './AM33';
import AM34 from './AM34';
import AM35 from './AM35';
import AM36 from './AM36';
import AM37 from './AM37';
import AM38 from './AM38';
import AM39 from './AM39';
import AM40 from './AM40';
import AM41 from './AM41';
// AM end
// EIM start
import EIM4_2 from './../EIM/EIM4_2';
import EIM5_2 from './../EIM/EIM5_2';
// EIM end

//CT
import CT1_2H2 from './CT_1_2H2';
//
//
import EMT201_4_2 from '../EMT/EMT201_4_2';
//

// nemelt tushaal
const C537M1 = React.lazy(() => import('../Command/537M1')); // tushaal maygt
const A293 = React.lazy(() => import('../Command/A293')); // ert seremjulleg yaralta
const FC537M1 = React.lazy(() => import('../Forms/Command/537M1')); // form
// nemelt tushaal

const options = [
   {
      value: 1,
      label: 'A/611 AM-1Б',
      docName: 'ЭМЧИЙН ҮЗЛЭГИЙН БҮРТГЭЛ'
   },
   {
      value: 2,
      label: 'A/611 АМ-1В',
      docName: 'БЗДХ-ЫН КАБИНЕТЫН ЭМЧИЙН ҮЗЛЭГИЙН БҮРТГЭЛ'
   },
   {
      value: 3,
      label: 'A/611 АМ-2A',
      docName: 'ХАЛДВАРТ ӨВЧНИЙ ХАМШИНЖ, СЭЖИГТЭЙ ТОХИОЛДЛЫГ МЭДЭЭЛЭХ ХУУДАС'
   },
   {
      value: 4,
      label: 'A/611 АМ-2Б',
      docName: 'ВИРҮСТ ХЕПАТИТИЙН СЭЖИГТЭЙ ТОХИОЛДЛЫГ МЭДЭЭЛЭХ ХУУДАС'
   },
   {
      value: 5,
      label: 'A/611 АМ-3',
      docName: 'БЗДХ-ЫГ МЭДЭЭЛЭХ ХУУДАС'
   },
   {
      value: 6,
      label: 'A/611 АМ-4',
      docName: 'СҮРЬЕЭГИЙН ТОХИОЛДЛЫГ МЭДЭЭЛЭХ ХУУДАС'
   },
   {
      value: 7,
      label: 'A/611 АМ-5',
      docName: 'ХОРТ ХАВДРЫГ МЭДЭЭЛЭХ ХУУДАС'
   },
   {
      value: 8,
      label: 'A/611 АМ-5 Хавсралт 1',
      docName: 'ЭМГЭГ СУДЛАЛААС ХОРТОЙ ХАВДРЫГ МЭДЭЭЛЭХ ХУУДАС'
   },
   {
      value: 9,
      label: 'A/611 АМ-6',
      docName: 'ГЕМОДИАЛИЗ ХЯНАЛТЫН КАРТ'
   },
   {
      value: 10,
      label: 'A/611 АМ-7',
      docName: 'НАС БАРСАН ТУХАЙ ЭМНЭЛГИЙН ГЭРЧИЛГЭЭ'
   },
   {
      value: 11,
      label: 'A/611 АМ-8',
      docName: 'ЭМНЭЛГИЙН МАГАДЛАГАА'
   },
   {
      value: 12,
      label: 'A/611 АМ-9A',
      docName: 'Энгийн эмийн жорын маягт'
   },
   {
      value: 13,
      label: 'A/611 АМ-9В',
      docName: 'Сэтгэцэд нөлөөт эмийн жорын маягт'
   },
   {
      value: 14,
      label: 'A/611 АМ-9C',
      docName: 'Мансууруулах эмийн жорын маягт'
   },
   {
      value: 15,
      label: 'A/611 АМ-9D',
      docName: 'Уламжлалт эмийн жорын маягт'
   },
   {
      value: 16,
      label: 'A/611 АМ-10',
      docName: 'ЭРҮҮЛ МЭНДИЙН ХУУДАС'
   },
   {
      value: 17,
      label: 'A/611 АМ-11',
      docName: 'ХЯНАЛТЫН КАРТ'
   },
   {
      value: 18,
      label: 'A/611 АМ-11 Хавсралт-1',
      docName: 'АРТЕРИЙН ГИПЕРТЕНЗИЙН ХЯНАЛТ'
   },
   {
      value: 19,
      label: 'A/611 АМ-11 Хавсралт-1.1',
      docName: 'ЧИХРИЙН ШИЖИНГИЙН ХЯНАЛТЫН КАРТ'
   },
   {
      value: 20,
      label: 'A/611 АМ-11 Хавсралт-2',
      docName: 'НҮДНИЙ ЭМЧИЙН ХЯНАЛТ'
   },
   {
      value: 21,
      label: 'A/611 АМ-12A',
      docName: 'ЭМНЭЛЭГ ХЯНАЛТЫН КОМИССООР ОРОГЧДЫН БҮРТГЭЛ'
   },
   {
      value: 22,
      label: 'A/611 АМ-12Б',
      docName: 'КОМИССЫН ШИЙДВЭР'
   },
   {
      value: 23,
      label: 'A/611 АМ-13A',
      docName: 'ЭМНЭЛЭГТ ӨВЧТӨН ИЛГЭЭХ ХУУДАС'
   },
   {
      value: 24,
      label: 'A/611 АМ-13Б',
      docName: 'ЭМНЭЛЭГТ ӨВЧТӨН ИЛГЭЭХ ХУУДАС'
   },
   {
      value: 25,
      label: 'A/611 АМ-13В',
      docName: 'ЭМНЭЛЭГТ ИРГЭНИЙГ ИЛГЭЭХ ЦАХИМ БҮРТГЭЛИЙН МАЯГТ'
   },
   {
      value: 26,
      label: 'A/611 АМ-14A',
      docName: 'ЖИРЭМСЭН ЭМЭГТЭЙЧҮҮДИЙН БҮРТГЭЛ'
   },
   {
      value: 27,
      label: 'A/611 АМ-14Б',
      docName: 'ТЭМБҮҮГИЙН ХАЛДВАРТАЙ ЖИРЭМСЭН ЭМЭГТЭЙН ХЯНАЛТЫН БҮРТГЭЛ'
   },
   {
      value: 28,
      label: 'A/611 АМ-14В',
      docName: ' АМАРЖИХ ГАЗАР /ТӨРӨХ ТАСАГ/ ТЭМБҮҮ ИЛРҮҮЛЭХ ШИНЖИЛГЭЭНИЙ БҮРТГЭЛ'
   },
   {
      value: 29,
      label: 'A/611 АМ-15',
      docName: 'ЖИРЭМСЭН ЭМЭГТЭЙН ХЯНАЛТЫН ХӨТӨЧ КАРТ №'
   },
   {
      value: 30,
      label: 'A/611 АМ-16',
      docName: 'СОЛИЛЦОХ ХУУДАС А'
   },
   {
      value: 31,
      label: 'A/611 АМ-17',
      docName: 'ЭХИЙН ЭНДЭГДЭЛ, НОЦТОЙ ХҮНДРЭЛИЙГ МЭДЭЭЛЭХ МАЯГТ'
   },
   {
      value: 32,
      label: 'A/611 АМ-18',
      docName: 'ҮР ХӨНДӨЛТИЙН ТҮҮХ'
   },
   {
      value: 33,
      label: 'A/611 АМ-18 Хавсралт 01',
      docName: 'ҮР ХӨНДӨЛТИЙН ТҮҮХИЙН ХАВСРАЛТ /ЭМИЙН/'
   },
   {
      value: 34,
      label: 'A/611 АМ-19',
      docName: 'ҮР ХӨНДӨЛТИЙН БҮРТГЭЛ'
   },
   {
      value: 35,
      label: 'A/611 АМ-20',
      docName: 'АМБУЛАТОРИОР ЭМЧЛҮҮЛЭГСДИЙН КАРТ №'
   },
   {
      value: 36,
      label: 'A/611 АМ-21A',
      docName: 'Шинжилгээнд явуулах бичиг'
   },
   {
      value: 37,
      label: 'A/611 АМ-21Б',
      docName: 'Шинжилгээнд явуулах бичиг'
   },
   {
      value: 38,
      label: 'A/611 АМ-21В',
      docName: 'Шинжилгээнд явуулах бичиг'
   },
   {
      value: 39,
      label: 'A/611 АМ-21Г',
      docName: 'Шинжилгээнд явуулах бичиг'
   },
   {
      value: 40,
      label: 'A/611 АМ-22A',
      docName: 'ЛАБОРАТОРИЙН ШИНЖИЛГЭЭНИЙ ХУУДСУУД'
   },
   {
      value: 41,
      label: 'A/611 АМ-22Б',
      docName: 'ЛАБОРАТОРИЙН ШИНЖИЛГЭЭНИЙ ХУУДСУУД'
   },
   {
      value: 42,
      label: 'A/611 АМ-22В',
      docName: 'ЛАБОРАТОРИЙН ШИНЖИЛГЭЭНИЙ ХУУДСУУД'
   },
   {
      value: 43,
      label: 'A/611 АМ-22Г',
      docName: 'ИММУНОЛОГИЙН ШИНЖИЛГЭЭ №'
   },
   {
      value: 44,
      label: 'A/611 АМ-22Д',
      docName: 'ЦӨСНИЙ ШИНЖИЛГЭЭ №'
   },
   {
      value: 45,
      label: 'A/611 АМ-22E',
      docName: 'ХОНОГИЙН ШЭЭСЭНД УУРАГ ТОДОРХОЙЛОХ'
   },
   {
      value: 46,
      label: 'A/611 АМ-22Ж',
      docName: 'ЦЭРИЙГ МИКРОСКОПООР ШИНЖЛЭХ'
   },
   {
      value: 47,
      label: 'A/611 АМ-22 З',
      docName: 'НИЧЕПОРЕНКИЙН СОРИЛООР ШЭЭСИЙГ ШИНЖЛЭХ'
   },
   {
      value: 48,
      label: 'A/611 АМ-22Й',
      docName: 'ЗИМНИЦКИЙН СОРИЛ'
   },
   {
      value: 49,
      label: 'A/611 АМ-22К',
      docName: 'Шинжилгээний хариуны маягт Нян судлалын лабораторийн шинжилгээний дүн'
   },
   {
      value: 50,
      label: 'A/611 АМ-22Л',
      docName: 'Шинжилгээний хариуны маягт ХДХВ-ийн халдвар илрүүлэх шинжилгээний дүн'
   },
   {
      value: 51,
      label: 'A/611 АМ-22M',
      docName: 'Шинжилгээний хариуны маягт ТЭМБҮҮГИЙН ҮҮСГЭГЧ ИЛРҮҮЛЭХ ШИНЖИЛГЭЭНИЙ ДҮН'
   },
   {
      value: 52,
      label: 'A/611 АМ-23',
      docName: 'ЛАБОРАТОРИЙН ШИНЖИЛГЭЭНИЙ БҮРТГЭЛ'
   },
   {
      value: 53,
      label: 'A/611 АМ-24A',
      docName: 'ҮЙЛ ОНОШИЙН ШИНЖИЛГЭЭНИЙ БҮРТГЭЛ'
   },
   {
      value: 54,
      label: 'A/611 АМ-24Б',
      docName: 'ХЭВЛИЙН ХӨНДИЙН ЭРХТНҮҮДИЙН ХЭТ АВИАН ОНОШИЛГОО'
   },
   {
      value: 55,
      label: 'A/611 АМ-25A',
      docName: 'СЭРГЭЭН ЗАСАХ ЭМЧИЛГЭЭНИЙ КАРТ'
   },
   {
      value: 56,
      label: 'A/611 АМ-25Б',
      docName: 'СЭРГЭЭН ЗАСАХ ЭМЧИЛГЭЭНИЙ БҮРТГЭЛ'
   },
   {
      value: 57,
      label: 'A/611 АМ-26A',
      docName: 'ХӨНГӨВЧЛӨХ ЭМЧИЛГЭЭНД ХАМРАГСДЫН БҮРТГЭЛ /АМБУЛАТОРИТ/'
   },
   {
      value: 58,
      label: 'A/611 АМ-26Б',
      docName: 'ХӨНГӨВЧЛӨХ ЭМЧИЛГЭЭНД ХАМРАГСДЫН БҮРТГЭЛ /СТАЦИОНАРТ/'
   },
   {
      value: 59,
      label: 'A/611 АМ-27',
      docName: 'НАСТНЫ ЭРҮҮЛ МЭНДИЙН БҮРТГЭЛ'
   },
   {
      value: 60,
      label: 'A/611 АМ-28A',
      docName: 'ЗҮҮ ЗАСАЛ ЭМЧИЛГЭЭНИЙ КАРТ'
   },
   {
      value: 61,
      label: 'A/611 АМ-28Б',
      docName: 'ТӨӨНӨ ЗАСАЛ ЭМЧИЛГЭЭНИЙ КАРТ'
   },
   {
      value: 62,
      label: 'A/611 АМ-29A',
      docName: 'ДЭВТЭЭЛГЭ ЗАСАЛ ЭМЧИЛГЭЭНИЙ КАРТ'
   },
   {
      value: 63,
      label: 'A/611 АМ-29Б',
      docName: 'БАРИА ЗАСАЛ ЭМЧИЛГЭЭНИЙ КАРТ'
   },
   {
      value: 64,
      label: 'A/611 АМ-29В',
      docName: 'ХАТГАХ ЗАСАЛ ЭМЧИЛГЭЭНИЙ КАРТ'
   },
   {
      value: 65,
      label: 'A/611 АМ-30A',
      docName: 'ӨДРИЙН ЭМЧИЛГЭЭНИЙ БҮРТГЭЛ /Хүүхэд/'
   },
   {
      value: 66,
      label: 'A/611 АМ-30Б',
      docName: 'ӨДРИЙН ЭМЧИЛГЭЭНИЙ БҮРТГЭЛ /Насанд хүрэгчид/'
   },
   {
      value: 67,
      label: 'A/611 АМ-31',
      docName: '29 ХОНОГООС 5 ХҮРТЭЛХ НАСНЫ ХҮҮХДИЙН ЭНДЭГДЛИЙГ МЭДЭЭЛЭХ ХУУДАС'
   },
   {
      value: 68,
      label: 'A/611 АМ-32',
      docName: '29 ХОНОГООС 5 ХҮРТЭЛХ НАСНЫ ХҮҮХДИЙН ТӨРӨЛХИЙН ХӨГЖЛИЙН ГАЖГИЙГ МЭДЭЭЛЭХ ХУУДАС'
   },
   {
      value: 69,
      label: 'A/611 АМ-33',
      docName: 'ОСОЛ ГЭМТЛИЙН ТОХИОЛДЛЫГ БҮРТГЭХ ХУУДАС'
   },
   {
      value: 70,
      label: 'A/611 АМ-34',
      docName: 'ХӨДӨЛГӨӨН ЗАСАЛ ЭМЧИЛГЭЭНИЙ ҮНЭЛГЭЭНИЙ ХУУДАС'
   },
   {
      value: 71,
      label: 'A/611 АМ-35',
      docName: 'ХӨДӨЛМӨР ЗАСЛЫН ҮНЭЛГЭЭНИЙ ХУУДАС'
   },
   {
      value: 72,
      label: 'A/611 АМ-36',
      docName:
         'БҮХ НИЙТЭЭР ТЭМДЭГЛЭХ БАЯР, ТЭМДЭГЛЭЛТ ӨДРИЙН АМРАЛТЫН ҮЕИЙН ЭМНЭЛГИЙН ТУСЛАМЖ, ҮЙЛЧИЛГЭЭГ МЭДЭЭЛЭХ БҮРТГЭЛ'
   },
   {
      value: 73,
      label: 'A/611 АМ-37',
      docName: 'НҮҮР АМНЫ ЭМЧЛЭГЧ ЭМЧИЙН ЭМЧИЛГЭЭНИЙ БҮРТГЭЛ'
   },
   {
      value: 74,
      label: 'A/611 АМ-38',
      docName: 'НҮҮР АМНЫ МЭС ЗАСЛЫН ЭМЧИЙН ЭМЧИЛГЭЭНИЙ БҮРТГЭЛ'
   },
   {
      value: 75,
      label: 'A/611 АМ-39',
      docName: 'НҮҮР АМНЫ СОГОГ ЗАСЛЫН ЭМЧИЙН ЭМЧИЛГЭЭНИЙ БҮРТГЭЛ'
   },
   {
      value: 76,
      label: 'A/611 АМ-40',
      docName: 'НҮҮР АМНЫ ГАЖИГ ЗАСЛЫН ЭМЧИЙН ЭМЧИЛГЭЭНИЙ БҮРТГЭЛ'
   },
   {
      value: 77,
      label: 'A/611 АМ-41',
      docName: 'НҮҮР АМНЫ УРЬДЧИЛАН СЭРГИЙЛЭХ ҮЗЛЭГИЙН БҮРТГЭЛ'
   },
   {
      value: 78,
      label: 'A/611 ЭИМ-4.1',
      docName: 'ХӨХНИЙ ХОРТ ХАВДРЫН ЭРТ ИЛРҮҮЛЭГ ҮЗЛЭГИЙН ХУУДАC'
   },
   {
      value: 79,
      label: 'A/611 ЭИМ-4.2',
      docName: 'ХӨХНИЙ ХОРТ ХАВДРЫН ЭРТ ИЛРҮҮЛЭГ ҮЗЛЭГИЙН ХУУДАC'
   },
   {
      value: 80,
      label: 'A/611 ЭИМ-4.3',
      docName: 'Маммографи шинжилгээний маягт'
   },
   {
      value: 81,
      label: 'A/611 ЭИМ-5.1',
      docName: 'УМАЙН ХҮЗҮҮНИЙ ХОРТ ХАВДРЫН ЭРТ ИЛРҮҮЛЭГ ҮЗЛЭГИЙН ХУУДАС'
   },
   {
      value: 82,
      label: 'A/611 ЭИМ-5.2',
      docName: 'УМАЙН ХҮЗҮҮНИЙ ХОРТ ХАВДРЫН ЭРТ ИЛРҮҮЛЭГ ҮЗЛЭГИЙН ХУУДАС'
   },
   {
      value: 83,
      label: 'A/611 СТ-1 /НҮҮР/',
      docName: 'ӨВЧНИЙ ТҮҮХ /НҮҮР/'
   },
   {
      value: 84,
      label: 'A/611 СТ-1 ЭМЧЛҮҮЛЭГЧИЙН АНАМНЕЗ',
      docName: 'ЭМЧЛҮҮЛЭГЧИЙН АНАМНЕЗ'
   },
   {
      value: 85,
      label: 'A/611 СТ-1 ЕРӨНХИЙ ҮЗЛЭГ',
      docName: 'ЕРӨНХИЙ ҮЗЛЭГ'
   },
   {
      value: 86,
      label: 'А/293',
      docName: 'Яаралтай үнэлэх'
   },
   {
      value: 87,
      label: 'CT-1,2 Хавсралт 2',
      docName: 'Амин үзүүлэлтийг хянах'
   },
   {
      value: 88,
      label: 'ЭМТ- 201.4.2',
      docName: 'Амбулаторын үзлэгт хамрагдсан хүний тоо насны бүлэг, хүйсээр'
   }
];

class ReturnByIdComponent extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isOpenModal: false
      };
   }
   render() {
      return (
         <>
            <Button
               icon={<EyeOutlined />}
               onClick={() => {
                  this.setState({ isOpenModal: true });
               }}
            />
            <NewModal
               title={options?.find((e) => e.value === this.props.value)?.label}
               open={this.state.isOpenModal}
               onCancel={() => this.setState({ isOpenModal: false })}
               width={'90%'}
               bodyStyle={{
                  overflow: 'auto'
               }}
            >
               <ReturnById type={true} id={this.props.value} />
            </NewModal>
         </>
      );
   }
}

const NotFound = () => {
   return <div>NotFound</div>;
};

export function ReturnById({ type, id, appointmentId, data, hospitalName, doctorName, cabinetName }) {
   //type ni maygt harulah esvel form harulah
   if (id === 1)
      return (
         <AM1B
            type={type}
            data={data}
            appointmentId={appointmentId}
            hospitalName={hospitalName}
            doctorName={doctorName}
            cabinetName={cabinetName}
         />
      );
   else if (id === 2)
      return <AM_1V type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 3) return <AM2A type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 4) return <AM2B type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 5) return <AM3 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 6) return <AM4 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 7) return <AM5 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 8)
      return <NotFound type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 9) return <AM6 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 10) return <AM7 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 11) return <AM8 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 12)
      return <AM9A type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 13)
      return <AM9B type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 14)
      return <AM9C type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 15)
      return <AM9D type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 16)
      return <AM10 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 17)
      return <AM11 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 18)
      return <AM11H1 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 19)
      return <AM11H1_1 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 20)
      return <AM11H2 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 21)
      return <AM_12A type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 22)
      return <AM12B type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 23)
      return <AM13A type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 24)
      return <AM13B type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 25)
      return <AM13V type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 26)
      return <AM14A type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 27)
      return <AM14B type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 28)
      return <AM14V type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 29)
      return <AM15 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 30)
      return <AM16 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 31)
      return <AM17 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 32)
      return <AM18 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 33)
      return <NotFound type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 34)
      return <AM19 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 35)
      return <AM20 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 36)
      return <AM21A type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 37)
      return <AM21B type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 38)
      return <AM21V type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 39)
      return <AM21G type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 40)
      return <AM22A type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 41)
      return <AM22B type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 42)
      return <AM22V type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 43)
      return <AM22G type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 44)
      return <AM22D type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 45)
      return <AM22E type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 46)
      return <AM22J type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 47)
      return <AM22Z type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 48)
      return <AM22II type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 49)
      return <AM22K type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 50)
      return <AM22L type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 51)
      return <AM22M type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 52)
      return <AM23 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 53)
      return <AM24A type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 54)
      return <AM24B type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 55)
      return <AM25A type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 56)
      return <AM25B type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 57)
      return <AM26A type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 58)
      return <AM26B type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 59)
      return <AM27 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 60)
      return <AM28A type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 61)
      return <AM28B type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 62)
      return <AM29A type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 63)
      return <AM29B type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 64)
      return <AM29V type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 65)
      return <AM30A type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 66)
      return <AM30B type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 67)
      return <AM31 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 68)
      return <AM32 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 69)
      return <AM33 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 70)
      return <AM34 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 71)
      return <AM35 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 72)
      return <AM36 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 73)
      return <AM37 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 74)
      return <AM38 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 75)
      return <AM39 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 76)
      return <AM40 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 77)
      return <AM41 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 78)
      return <NotFound type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 79)
      return <EIM4_2 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 80)
      return <NotFound type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 81)
      return <NotFound type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 82)
      return <EIM5_2 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 86)
      return <A293 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 87)
      return <CT1_2H2 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 88) {
      return <EMT201_4_2 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   }
}

export function ReturnAll() {
   return options;
}

export function ReturnByIdToName(id) {
   return options.find((e) => e.value === id)?.docName;
}
export function ReturnByIdToCode(id) {
   return options.find((e) => e.value === id)?.label;
}

export function ReturnDetails({ type, oldDocuments, handleClick }) {
   // type = 0 bol list awah 1 bol select
   const [searchValue, setSearchValue] = useState('');
   const [searchValueSelect, setSearchValueSelect] = useState('');
   const [documentId, setDocumentId] = useState(Number);
   const [selectedOptions, setSelectedOptions] = useState([]);
   const filteredOptions = options?.filter((e) => {
      return e.label.toLowerCase().includes(searchValue.toLowerCase());
   });
   const filteredOptionsSelect = options?.filter((e) => {
      return e.docName.toLowerCase().includes(searchValueSelect.toLowerCase());
   });
   const add = (row) => {
      const result = selectedOptions?.find((option) => {
         return option.value === row.value;
      });
      if (result === undefined || result === null) {
         if (selectedOptions?.length === 0) {
            setSelectedOptions([row]);
         } else {
            setSelectedOptions([...selectedOptions, row]);
         }
      } else {
         openNofi('warning', 'Анхааруулга', `${result.label} орсон байна.`);
      }
   };
   const remove = (index) => {
      var arr = [...selectedOptions];
      arr.splice(index, 1);
      setSelectedOptions(arr);
   };
   useEffect(() => {
      if (type === 1) {
         if (oldDocuments === undefined || oldDocuments === null) {
            setSelectedOptions([]);
         } else {
            setSelectedOptions(oldDocuments);
         }
      }
   }, [oldDocuments]);
   if (type === 0) {
      return (
         <div className="flex flex-row gap-3">
            <div className="sm:w-full md:w-1/12 lg:w-1/12">
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     gap: '6px'
                  }}
               >
                  <div>
                     <NewInput
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Хайх"
                        style={{
                           width: '100%'
                        }}
                     />
                  </div>
                  {filteredOptions?.map((option, index) => {
                     return (
                        <button
                           style={{
                              border: '1px solid black'
                           }}
                           key={index}
                           onClick={() => setDocumentId(option.value)}
                        >
                           {option.label}
                        </button>
                     );
                  })}
               </div>
            </div>
            <div className="sm:w-full md:w-11/12 lg:w-11/12">
               <div
                  style={{
                     transform: 'scale(0.7)',
                     transformOrigin: 'top center'
                  }}
               >
                  <ReturnById type={true} id={documentId} />
               </div>
            </div>
         </div>
      );
   } else if (type === 1) {
      return (
         <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-6">
               <NewInput onChange={(e) => setSearchValueSelect(e.target.value)} placeholder="Хайх" />
               <NewTable
                  prop={{
                     rowKey: 'value',
                     bordered: true,
                     scroll: {
                        y: 500
                     },
                     dataSource: filteredOptionsSelect
                  }}
                  meta={{
                     page: 1,
                     limit: filteredOptionsSelect.length
                  }}
                  isLoading={false}
                  isPagination={false}
               >
                  <NewColumn
                     title="Баримт бичгийн нэр"
                     dataIndex="docName"
                     render={(text) => {
                        return <p className="whitespace-normal text-start text-black">{text}</p>;
                     }}
                  />
                  <NewColumn
                     title="Тушаал шийдвэрийн дугаар"
                     dataIndex="label"
                     render={(text) => {
                        return <p className="whitespace-normal text-start text-black">{text}</p>;
                     }}
                  />
                  <NewColumn
                     title=""
                     width={40}
                     render={(_text, row) => {
                        return (
                           <Button
                              onClick={() => add(row)}
                              icon={
                                 <RightOutlined
                                    style={{
                                       color: 'blue'
                                    }}
                                 />
                              }
                           />
                        );
                     }}
                  />
               </NewTable>
            </div>
            <div className="grid gap-6">
               <NewTable
                  prop={{
                     rowKey: 'value',
                     bordered: true,
                     scroll: {
                        y: 500
                     },
                     dataSource: selectedOptions
                  }}
                  meta={{
                     page: 1,
                     limit: selectedOptions.length
                  }}
                  isLoading={false}
                  isPagination={false}
               >
                  <NewColumn title="Баримт бичгийн нэр" dataIndex="docName" />
                  <NewColumn title="Тушаал шийдвэрийн дугаар" dataIndex="label" />
                  <NewColumn
                     title=""
                     width={40}
                     dataIndex="value"
                     render={(_text, _row, index) => {
                        return (
                           <CloseOutlined
                              style={{
                                 color: 'red'
                              }}
                              onClick={() => remove(index)}
                           />
                        );
                     }}
                  />
               </NewTable>
               <Button type="primary" onClick={() => handleClick(selectedOptions)}>
                  Хадгалах
               </Button>
            </div>
         </div>
      );
   }
}

export { ReturnByIdComponent };
