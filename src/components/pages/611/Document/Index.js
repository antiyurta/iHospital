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

import CT1Nuur from './CT_1_nuur';
import CT1Anamnes from './CT_1_ana';
import CT1Dotor from './CT_1_Dotor';
import CT1ClinalDiagnose from './CT_1_ClinicalDiagnose';
import CT1BaseOfClinicalDiagnose from './CT_1_BaseOfClinicalDiagnose';
import CT1Inspection from './CT_1_Inspection';
import CT1End from './CT_1_End';
// EIM start
import EIM4_2 from './../EIM/EIM4_2';
import EIM5_2 from './../EIM/EIM5_2';
// EIM end

//CT
import CT1_2H2 from './CT_1_2H2';
import CT1_2H11 from './CT_1_2H11';
import CT1_2H12 from './CT_1_2H12';
import CT1_2H14 from './CT_1_2H14';
//
//
import EMT201_4_2 from '../EMT/EMT201_4_2';
//

import OrganizationDocumentFormService from '../../../../services/organization/documentForm';

// nemelt tushaal
const C537M1 = React.lazy(() => import('../Command/537M1')); // tushaal maygt
const A293 = React.lazy(() => import('../Command/A293')); // ert seremjulleg yaralta
const FC537M1 = React.lazy(() => import('../Forms/Command/537M1')); // form
// nemelt tushaal

const options = [
   {
      value: 1,
      label: 'A/611 AM-1Б',
      docName: 'Эмчийн үзлэгийн бүртгэл'
   },
   {
      value: 2,
      label: 'A/611 АМ-1В',
      docName: 'БЗДХ кабинетын эмчийн үзлэгийн бүртгэл'
   },
   {
      value: 3,
      label: 'A/611 АМ-2A',
      docName: 'Халдварт өвчний хамшинж, сэжигтэй тохиолдлыг мэдээлэх хуудас'
   },
   {
      value: 4,
      label: 'A/611 АМ-2Б',
      docName: 'Вирүст хепатитийн сэжигтэй тохиолдлыг мэдээлэх хуудас'
   },
   {
      value: 5,
      label: 'A/611 АМ-3',
      docName: 'БЗДХ-ыг мэдээлэх хуудас'
   },
   {
      value: 6,
      label: 'A/611 АМ-4',
      docName: 'Сүрьеэгийн тохиолдлыг мэдээлэх хуудас'
   },
   {
      value: 7,
      label: 'A/611 АМ-5',
      docName: 'Хорт хавдрыг мэдээлэх хуудас'
   },
   {
      value: 8,
      label: 'A/611 АМ-5 Хавсралт 1',
      docName: 'Эмгэг судлалаас хортой хавдрыг мэдээлэх хуудас'
   },
   {
      value: 9,
      label: 'A/611 АМ-6',
      docName: 'Гемодиализ хяналтын карт'
   },
   {
      value: 10,
      label: 'A/611 АМ-7',
      docName: 'Нас барсан тухай эмнэлгийн гэрчилгээ'
   },
   {
      value: 11,
      label: 'A/611 АМ-8',
      docName: 'Эмнэлгийн магадлагаа'
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
      docName: 'Эрүүл мэндийн хуудас'
   },
   {
      value: 17,
      label: 'A/611 АМ-11',
      docName: 'Хяналтын карт'
   },
   {
      value: 18,
      label: 'A/611 АМ-11 Хавсралт-1',
      docName: 'Артерийн гипертензийн хяналт'
   },
   {
      value: 19,
      label: 'A/611 АМ-11 Хавсралт-1.1',
      docName: 'Чихрийн шижингийн хяналтын карт'
   },
   {
      value: 20,
      label: 'A/611 АМ-11 Хавсралт-2',
      docName: 'Нүдний эмчийн хяналт'
   },
   {
      value: 21,
      label: 'A/611 АМ-12A',
      docName: 'Эмнэлэг хяналтын комиссоор орогчдын бүртгэл'
   },
   {
      value: 22,
      label: 'A/611 АМ-12Б',
      docName: 'Комиссын шийдвэр'
   },
   {
      value: 23,
      label: 'A/611 АМ-13A',
      docName: 'Эмнэлэгт өвчтөн илгээх хуудас'
   },
   {
      value: 24,
      label: 'A/611 АМ-13Б',
      docName: 'Эмнэлэгт өвчтөн илгээх хуудас'
   },
   {
      value: 25,
      label: 'A/611 АМ-13В',
      docName: 'Эмнэлэгт иргэнийг илгээх цахим бүртгэлийн маягт'
   },
   {
      value: 26,
      label: 'A/611 АМ-14A',
      docName: 'Жирэмсэн эмэгтэйчүүдийн бүртгэл'
   },
   {
      value: 27,
      label: 'A/611 АМ-14Б',
      docName: 'Тэмбүүгийн халдвартай жирэмсэн эмэгтэйн хяналтын бүртгэл'
   },
   {
      value: 28,
      label: 'A/611 АМ-14В',
      docName: 'Амаржих газар /төрөх тасаг/ тэмбүү илрүүлэх шинжилгээний бүртгэл'
   },
   {
      value: 29,
      label: 'A/611 АМ-15',
      docName: 'Жирэмсэн эмэгтэйн хяналтын хөтөч карт №'
   },
   {
      value: 30,
      label: 'A/611 АМ-16',
      docName: 'Солилцох хуудас A'
   },
   {
      value: 31,
      label: 'A/611 АМ-17',
      docName: 'Эхийн эндэгдэл, ноцтой хүндрэлийг мэдээлэх маягт'
   },
   {
      value: 32,
      label: 'A/611 АМ-18',
      docName: 'Үр хөндөлтийн түүх'
   },
   {
      value: 33,
      label: 'A/611 АМ-18 Хавсралт 01',
      docName: 'Үр хөндөлтийн түүхийн хавсралт /эмийн/'
   },
   {
      value: 34,
      label: 'A/611 АМ-19',
      docName: 'Үр хөндөлтийн бүртгэл'
   },
   {
      value: 35,
      label: 'A/611 АМ-20',
      docName: 'Амбулаториор эмчлүүлэгсдийн карт №'
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
      docName: 'Лабораторийн шинжилгээний хуудсууд'
   },
   {
      value: 41,
      label: 'A/611 АМ-22Б',
      docName: 'Лабораторийн шинжилгээний хуудсууд'
   },
   {
      value: 42,
      label: 'A/611 АМ-22В',
      docName: 'Лабораторийн шинжилгээний хуудсууд'
   },
   {
      value: 43,
      label: 'A/611 АМ-22Г',
      docName: 'Иммунологийн шинжилгээ №'
   },
   {
      value: 44,
      label: 'A/611 АМ-22Д',
      docName: 'Цөсний шинжилгээ №'
   },
   {
      value: 45,
      label: 'A/611 АМ-22E',
      docName: 'Хоногийн шээсэнд уураг тодорхойлох'
   },
   {
      value: 46,
      label: 'A/611 АМ-22Ж',
      docName: 'Цэрийг микроскопоор шинжлэх'
   },
   {
      value: 47,
      label: 'A/611 АМ-22 З',
      docName: 'Ничепоренкийн сорилоор шээсийг шинжлэх'
   },
   {
      value: 48,
      label: 'A/611 АМ-22Й',
      docName: 'Зимницкийн сорил'
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
      docName: 'Шинжилгээний хариуны маягт тэмбүүгийн үүсгэгч илрүүлэх шинжилгээний дүн'
   },
   {
      value: 52,
      label: 'A/611 АМ-23',
      docName: 'Лабораторийн шинжилгээний бүртгэл'
   },
   {
      value: 53,
      label: 'A/611 АМ-24A',
      docName: 'Үйл оношийн шинжилгээний бүртгэл'
   },
   {
      value: 54,
      label: 'A/611 АМ-24Б',
      docName: 'Хэвлийн хөндийн эрхтнүүдийн хэт авиан оношилгоо'
   },
   {
      value: 55,
      label: 'A/611 АМ-25A',
      docName: 'Сэргээн засах эмчилгээний карт'
   },
   {
      value: 56,
      label: 'A/611 АМ-25Б',
      docName: 'Сэргээн засах эмчилгээний бүртгэл'
   },
   {
      value: 57,
      label: 'A/611 АМ-26A',
      docName: 'Хөнгөвчлөх эмчилгээнд хамрагсдын бүртгэл /амбулаторит/'
   },
   {
      value: 58,
      label: 'A/611 АМ-26Б',
      docName: 'Хөнгөвчлөх эмчилгээнд хамрагсдын бүртгэл /стационарт/'
   },
   {
      value: 59,
      label: 'A/611 АМ-27',
      docName: 'Настны эрүүл мэндийн бүртгэл'
   },
   {
      value: 60,
      label: 'A/611 АМ-28A',
      docName: 'Зүү засал эмчилгээний карт'
   },
   {
      value: 61,
      label: 'A/611 АМ-28Б',
      docName: 'Төөнө засал эмчилгээний карт'
   },
   {
      value: 62,
      label: 'A/611 АМ-29A',
      docName: 'Дэвтээлгэ засал эмчилгээний карт'
   },
   {
      value: 63,
      label: 'A/611 АМ-29Б',
      docName: 'Бариа засал эмчилгээний карт'
   },
   {
      value: 64,
      label: 'A/611 АМ-29В',
      docName: 'Хатгах засал эмчилгээний карт'
   },
   {
      value: 65,
      label: 'A/611 АМ-30A',
      docName: 'Өдрийн эмчилгээний бүртгэл /хүүхэд/'
   },
   {
      value: 66,
      label: 'A/611 АМ-30Б',
      docName: 'Өдрийн эмчилгээний бүртгэл /насанд хүрэгчид/'
   },
   {
      value: 67,
      label: 'A/611 АМ-31',
      docName: '29 хоногоос 5 хүртэлх насны хүүхдийн эндэгдлийг мэдээлэх хуудас'
   },
   {
      value: 68,
      label: 'A/611 АМ-32',
      docName: '29 хоногоос 5 хүртэлх насны хүүхдийн төрөлхийн хөгжлийн гажгийг мэдээлэх хуудас'
   },
   {
      value: 69,
      label: 'A/611 АМ-33',
      docName: 'Осол гэмтлийн тохиолдлыг бүртгэх хуудас'
   },
   {
      value: 70,
      label: 'A/611 АМ-34',
      docName: 'Хөдөлгөөн засал эмчилгээний үнэлгээний хуудас'
   },
   {
      value: 71,
      label: 'A/611 АМ-35',
      docName: 'Хөдөлмөр заслын үнэлгээний хуудас'
   },
   {
      value: 72,
      label: 'A/611 АМ-36',
      docName:
         'Бүх нийтээр тэмдэглэх баяр, тэмдэглэлт өдрийн амралтын үеийн эмнэлгийн тусламж, үйлчилгээг мэдээлэх бүртгэл'
   },
   {
      value: 73,
      label: 'A/611 АМ-37',
      docName: 'Нүүр амны эмчлэгч эмчийн эмчилгээний бүртгэл'
   },
   {
      value: 74,
      label: 'A/611 АМ-38',
      docName: 'Нүүр амны мэс заслын эмчийн эмчилгээний бүртгэл'
   },
   {
      value: 75,
      label: 'A/611 АМ-39',
      docName: 'Нүүр амны согог заслын эмчийн эмчилгээний бүртгэл'
   },
   {
      value: 76,
      label: 'A/611 АМ-40',
      docName: 'Нүүр амны гажиг заслын эмчийн эмчилгээний бүртгэл'
   },
   {
      value: 77,
      label: 'A/611 АМ-41',
      docName: 'Нүүр амны урьдчилан сэргийлэх үзлэгийн бүртгэл'
   },
   {
      value: 78,
      label: 'A/611 ЭИМ-4.1',
      docName: 'Хөхний хорт хавдрын эрт илрүүлэг үзлэгийн хуудаc'
   },
   {
      value: 79,
      label: 'A/611 ЭИМ-4.2',
      docName: 'Хөхний хорт хавдрын эрт илрүүлэг үзлэгийн хуудаc'
   },
   {
      value: 80,
      label: 'A/611 ЭИМ-4.3',
      docName: 'Маммографи шинжилгээний маягт'
   },
   {
      value: 81,
      label: 'A/611 ЭИМ-5.1',
      docName: 'Умайн хүзүүний хорт хавдрын эрт илрүүлэг үзлэгийн хуудас'
   },
   {
      value: 82,
      label: 'A/611 ЭИМ-5.2',
      docName: 'Умайн хүзүүний хорт хавдрын эрт илрүүлэг үзлэгийн хуудас'
   },
   {
      value: 83,
      label: 'A/611 СТ-1 /НҮҮР/',
      docName: 'Өвчний түүх /нүүр/'
   },
   {
      value: 84,
      label: 'A/611 СТ-1 Эмчлүүлэгчийн анамнез',
      docName: 'Эмчлүүлэгчийн анамнез'
   },
   {
      value: 85,
      label: 'A/611 СТ-1 Дотрын эмчийн үзлэг',
      docName: 'Дотрын эмчийн үзлэг'
   },
   {
      value: 86,
      label: 'А/293',
      docName: 'Яаралтай үнэлэх'
   },
   {
      value: 87,
      label: 'CT-1,2 Хавсралт 2',
      docName: 'Амин үзүүлэлт'
   },
   {
      value: 88,
      label: 'ЭМТ- 201.4.2',
      docName: 'Амбулаторын үзлэгт хамрагдсан хүний тоо насны бүлэг, хүйсээр'
   },
   {
      value: 89,
      label: 'CT-1,2 Хавсралт 11',
      docName: 'Эмчлүүлэгчийн биеийн байдлыг үнэлэх хуудас'
   },
   {
      value: 90,
      label: 'CT-1,2 Хавсралт 12',
      docName: 'Сувилгааны тэмдэглэл'
   },
   {
      value: 91,
      label: 'CT-1,2 Хавсралт 13',
      docName: 'Шингэний баланс хянах хуудас'
   },
   {
      value: 92,
      label: 'CT-1 Клиникийн урьдчилсан онош',
      docName: 'Клиникийн урьдчилсан онош'
   },
   {
      value: 93,
      label: 'CT-1 Клиникийн оношийн үндэслэл',
      docName: 'Клиникийн оношийн үндэслэл'
   },
   {
      value: 94,
      label: 'CT-1 Үзлэгийн тэмдэглэл',
      docName: 'Үзлэгийн тэмдэглэл'
   },
   {
      value: 95,
      label: 'CT-1 Эмнэлгээс гарах, шилжих үеийн дүгнэлт',
      docName: 'Эмнэлгээс гарах, шилжих үеийн дүгнэлт'
   },
   {
      value: 96,
      label: 'CT-1,2 Хавсралт 14',
      docName: 'Өвдөлтийг хянах хуудас'
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
   console.log('end end end2', id);
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
   else if (id === 83)
      return <CT1Nuur type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 84)
      return <CT1Anamnes type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 85)
      return <CT1Dotor type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 86)
      return <A293 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 87)
      return <CT1_2H2 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   else if (id === 88) {
      return <EMT201_4_2 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   } else if (id === 89) {
      return <CT1_2H11 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   } else if (id === 90) {
      return <CT1_2H12 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   } else if (id === 92) {
      return <CT1ClinalDiagnose type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   } else if (id === 93) {
      return (
         <CT1BaseOfClinicalDiagnose type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />
      );
   } else if (id === 94) {
      return <CT1Inspection type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   } else if (id === 95) {
      return <CT1End type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
   } else if (id === 96) {
      return <CT1_2H14 type={type} data={data} appointmentId={appointmentId} hospitalName={hospitalName} />;
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
   const [documentForms, setDocumentForms] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const [searchValueSelect, setSearchValueSelect] = useState('');
   const [documentId, setDocumentId] = useState(Number);
   const [selectedOptions, setSelectedOptions] = useState([]);
   const filteredOptions = options?.filter((e) => {
      return e.label.toLowerCase().includes(searchValue.toLowerCase());
   });
   const filteredOptionsSelectDf = documentForms?.filter((e) => {
      return e.label.toLowerCase().includes(searchValue.toLowerCase());
   });
   const filteredOptionsSelect = options?.filter((e) => {
      return e.docName.toLowerCase().includes(searchValueSelect.toLowerCase());
   });
   const add = (row) => {
      const result = selectedOptions?.find((option) => {
         return option.formId === row.formId;
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

   const getDocumentForms = async () => {
      await OrganizationDocumentFormService.getByPageFilter({
         params: {
            type: 'FORM'
         }
      }).then(({ data: { response } }) => {
         setDocumentForms(
            response.map((res) => ({
               value: res.documentValue,
               docName: ReturnByIdToName(res.documentValue),
               label: ReturnByIdToCode(res.documentValue),
               formId: res.id,
               formType: res.formType
            }))
         );
      });
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
   useEffect(() => {
      getDocumentForms();
   }, []);
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
                     dataSource: filteredOptionsSelectDf
                  }}
                  meta={{
                     page: 1,
                     limit: filteredOptionsSelectDf.length
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
                     title="FORM ID"
                     dataIndex="formId"
                     render={(text) => {
                        return <p className="whitespace-normal text-start text-black">{text}</p>;
                     }}
                  />
                  <NewColumn
                     title="FORM TYPE"
                     dataIndex="formType"
                     render={(text) => {
                        console.log(text);
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
                     title=" asd"
                     dataIndex="formType"
                     render={(text) => {
                        return <p className="whitespace-normal text-start text-black">{text}</p>;
                     }}
                  />
                  <NewColumn
                     title=""
                     width={40}
                     dataIndex="formId"
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
