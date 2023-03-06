import { FolderOpenOutlined, FolderOutlined } from '@ant-design/icons';
import { Collapse, Divider, Spin } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get } from '../../../comman';
const { Panel } = Collapse;
function InPatient() {
   let location = useLocation();
   const token = useSelector(selectCurrentToken);
   const [isLoading, setIsLoading] = useState(false);
   const [inpatient, setInpatient] = useState([]);
   const getInPatient = async () => {
      setIsLoading(true);
      const conf = {
         headers: {},
         params: {
            patientId: location?.state?.patientId
         }
      };
      const response = await Get('emr/general-inspection', token, conf);
      if (response.data.length > 0) {
         var result = response.data.reduce(function (r, a) {
            //Оноор бүлэглэх
            r[a.createdAt.substring(0, 4)] =
               r[a.createdAt.substring(0, 4)] || [];
            r[a.createdAt.substring(0, 4)].push(a);
            return r;
         }, Object.create(null));
         setInpatient(result);
      } else {
         setInpatient([]);
      }
      setIsLoading(false);
   };
   const RenderHTML = (data) => {
      if (data.data) {
         return Object.entries(data?.data).map(([key, value], index) => {
            return (
               <div key={index} className="flex flex-wrap">
                  {Object.entries(value).map((elValues, index) => {
                     return (
                        <p className="pr-2" key={index}>
                           {elValues[0] + ': ' + elValues[1]}
                        </p>
                     );
                  })}
               </div>
            );
         });
      }
   };
   useEffect(() => {
      getInPatient();
   }, [location]);
   return (
      <Spin spinning={isLoading} tip="Уншиж байна...">
         <Collapse
            collapsible="header"
            expandIcon={({ isActive }) => {
               return isActive ? (
                  <FolderOpenOutlined style={{ fontSize: '24px' }} />
               ) : (
                  <FolderOutlined style={{ fontSize: '24px' }} />
               );
            }}
            ghost
            accordion
         >
            {Object.entries(inpatient).map(([key, value], index) => {
               return (
                  <Panel header={`${key} Он`} key={index}>
                     <Collapse
                        Collapse
                        collapsible="header"
                        // onChange={onChange}
                        accordion
                     >
                        {value?.map((item, index) => {
                           return (
                              <Panel
                                 header={
                                    <div className="grid">
                                       <span>
                                          {moment(item.createdAt)
                                             .utcOffset('+0800')
                                             .format('YYYY-MM-DD HH:mm')}
                                       </span>
                                    </div>
                                 }
                                 key={value[index].id}
                              >
                                 <p className="font-bold">Хэвтэх үе:</p>
                                 <Divider
                                    orientation="left"
                                    className="text-sm my-2"
                                 >
                                    Зовиурь
                                 </Divider>
                                 <RenderHTML
                                    data={JSON.parse(
                                       item?.appointment?.inspectionNote?.pain
                                    )}
                                 />
                                 <Divider
                                    orientation="left"
                                    className="text-sm my-2"
                                 >
                                    Асуумж
                                 </Divider>
                                 <RenderHTML
                                    data={JSON.parse(
                                       item?.appointment?.inspectionNote
                                          ?.question
                                    )}
                                 />
                                 <Divider
                                    orientation="left"
                                    className="text-sm my-2"
                                 >
                                    Бодит үзлэг
                                 </Divider>
                                 <RenderHTML
                                    data={JSON.parse(
                                       item?.appointment?.inspectionNote
                                          ?.inspection
                                    )}
                                 />
                                 <Divider
                                    orientation="left"
                                    className="text-sm my-2"
                                 >
                                    Төлөвлөгөө
                                 </Divider>
                                 <RenderHTML
                                    data={JSON.parse(
                                       item?.appointment?.inspectionNote?.plan
                                    )}
                                 />
                                 <Divider
                                    orientation="left"
                                    className="text-sm my-2"
                                 >
                                    Онош
                                 </Divider>
                                 <span className="font-bold">
                                    Ерөнхий үзлэг:
                                 </span>
                                 <span>
                                    Биеийн ерөнхий байдал:{' '}
                                    {item.bodyCondition === 0 && 'Дунд'}
                                    {item.bodyCondition === 1 && 'Хүндэвтэр'}
                                    {item.bodyCondition === 2 && 'Хүнд'}
                                    {item.bodyCondition === 3 && 'Маш хүнд'}
                                 </span>
                                 <span>{', '}</span>
                                 <span>
                                    Ухаан санаа:{' '}
                                    {item.mind === 'REASONABLE' && 'Саруул'}
                                    {item.mind === 'FADED' && 'Бүдгэрсэн'}
                                    {item.mind === 'UNREASONABLE' && 'Ухаангүй'}
                                 </span>
                                 <span>{', '}</span>
                                 <span>
                                    Арьс салст:{' '}
                                    {item.skin === 'NORMAL' && 'Хэвийн'}
                                    {item.skin === 'UNNORMAL' && 'Хэвийн бус'}
                                 </span>
                                 <span>
                                    Амьсгал 1 минутанд:{' '}
                                    {item.respiratoryOneMinute}
                                 </span>
                                 <span>{', '}</span>
                                 <span>
                                    Чагналтаар:{' '}
                                    {item.respiratoryListen === 'LUNG' &&
                                       'Уушги цулцангийн'}
                                    {item.respiratoryListen === 'TUBE' &&
                                       'Гуурсан хоолойн'}
                                    {item.respiratoryListen === 'IMPORTANT' &&
                                       'Хэржигнүүртэй'}
                                    {item.respiratoryListen ===
                                       'SHORT_BREATH' && 'Амьсгал сулавтар'}
                                 </span>
                                 <span>{', '}</span>
                                 <span>
                                    Судасны цохилт 1 минутанд:{' '}
                                    {item.pulseOneMinute}
                                 </span>
                                 <span>{', '}</span>
                                 <span>Хүчдэл дүүрэлт: {item.volt}</span>
                                 <span>{', '}</span>
                                 <span>
                                    Тогшилтоор /Зүрхний хил/:{' '}
                                    {item.heartTapping === 'NORMAL' && 'Хэвийн'}
                                    {item.heartTapping === 'LARGER' &&
                                       'Томорсон'}
                                 </span>
                                 <span>{', '}</span>
                                 <span>
                                    Чагналтаар /Зүрхний авиа/:{' '}
                                    {item.heartSound === 'BRIGHT' && 'Тод'}
                                    {item.heartSound === 'DIM' && 'Бүдэг'}
                                    {item.heartSound === 'DIMMY' && 'Бүдгэвтэр'}
                                    {item.heartSound === 'SMOOTH' && 'Хэм жигд'}
                                    {item.heartSound === 'UNEVEN' && 'Жигд бус'}
                                    {item.heartSound === 'HEMOLYSIS' &&
                                       'Хэм алдалттай'}
                                 </span>
                                 <span>{', '}</span>
                                 <span>
                                    АД баруун талд: {item.heartBPRight}
                                 </span>
                                 <span>{', '}</span>
                                 <span>Зүүн талд: {item.heartBPLeft}</span>
                                 <span>{', '}</span>
                                 <span>Зүүн талд: {item.heartBPLeft}</span>
                                 <span>{', '}</span>
                                 <span>
                                    Хэл: {item.tongue === 'NORMAL' && 'Ердийн'}
                                    {item.tongue === 'DRY' && 'Хуурай'}
                                    {item.tongue === 'NO_COLORFUL' &&
                                       'Өнгөргүй'}
                                    {item.tongue === 'COLORFUL' && 'Өнгөртэй'}
                                 </span>
                                 <span>{', '}</span>
                                 <span>
                                    Хэвлийн үзлэг:
                                    {item.abdomen === 'PALPATION' &&
                                       'Өнгөц тэмтрэлтээр'}
                                    {item.abdomen === 'DEEP_PALPATION' &&
                                       'Гүн тэмтрэлтээр'}
                                    {item.abdomen === 'HURFUL' && 'Ердийн'}
                                    {item.abdomen === 'MILD_PLEURAL' &&
                                       'Зөөлөн гялтан цочрол үгүй'}
                                    {item.abdomen === 'SYMTOMS_SHOCK' &&
                                       'Гялтан цочролтын шинж илэрсэн'}
                                 </span>
                                 <span>{', '}</span>
                                 <span>
                                    Сонсох чадвар:
                                    {item.audition === 'NORMAL' && 'Хэвийн'}
                                    {item.audition === 'DECREASED' && 'Буурсан'}
                                 </span>
                                 <span>{', '}</span>
                                 <span>Бусад: {item.other}</span>
                                 <span>{', '}</span>
                                 <span>
                                    Cэтгэцийн байдал: {item.mentalState}
                                 </span>
                                 <span>{', '}</span>
                              </Panel>
                           );
                        })}
                     </Collapse>
                  </Panel>
               );
            })}
         </Collapse>
      </Spin>
   );
}
export default InPatient;
