import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Divider, Image, Input, Modal, Select, Spin } from 'antd';
import { PrinterOutlined, SearchOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
//comp
import FormXray from './XrayForm';
import ImagePicker from './ImagePicker';
import FormRenderHtml from '@Pages/BeforeAmbulatory/Customized/FormRenderHtml';
//common
import { openNofi } from '@Comman/common';
import RegularTree from '@Comman/RegularTree';
import { ListPatientInfo } from '@Comman/ListInjection';
//context
import EmrContext from '@Features/EmrContext';
//redux
import { selectCurrentEmrData } from '@Features/emrReducer';
import { selectCurrentHospitalId } from '@Features/authReducer';
//api
import pacsApi from '@ApiServices/pacs/pacs.api';
import XrayRequestApi from '@ApiServices/service/service';
import DocumentApi from '@ApiServices/organization/document';
import localFileApi from '@ApiServices/file/local-file/local-file.api';
//extens
import * as XrayDocumentIndex from '../../Xray/Document/Index';
const XrayDocumentReturnById = XrayDocumentIndex.ReturnById;

export const RenderNotesDetail = ({ data }) => {
   if (data) {
      return Object.entries(JSON.parse(data)).map(([key, value], index) => {
         return (
            <div key={index} className="inline-flex">
               <p className="font-semibold mx-2">{key}: </p>
               {Object.values(value).map((elValues, index) => {
                  return typeof elValues === 'string' ? (
                     <p key={index}>{elValues}</p>
                  ) : (
                     <div key={index}>
                        {elValues.map((el, index) => {
                           return <p key={index}>{el}</p>;
                        })}
                     </div>
                  );
               })}
            </div>
         );
      });
   }
   return;
};

const options = [
   {
      label: 1,
      value: 1
   },
   {
      label: 2,
      value: 2
   },
   {
      label: 3,
      value: 3
   }
];

const NewXray = () => {
   const { setKeys, activeKey, setActiveKeyId } = useContext(EmrContext);
   const printRef = useRef();
   const printRefPicture = useRef();
   const hospitalId = useSelector(selectCurrentHospitalId);
   const incomeEMRData = useSelector(selectCurrentEmrData);
   const [doctor, setDoctor] = useState({});
   const [patient, setPatient] = useState({});
   const [deviceType, setDeviceType] = useState(null);
   const [searchValue, setSearchValue] = useState('');
   const [isLoading, setLoading] = useState(false);
   const [isLoadingInfo, setLoadingInfo] = useState(false);
   const [serviceName, setServiceName] = useState('');
   const [pages, setPages] = useState([
      {
         rows: 1,
         cols: 1
      }
   ]);
   //xray
   const [isOpenModalForm, setIsOpenModalForm] = useState(false);
   const [appInspection, setAppInspection] = useState({});
   //xray
   //exo
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [imageUrls, setImageUrls] = useState([]);
   const [osimisViewerUrl, setOsimisViewerUrl] = useState('');
   const [isViewPacs, setIsViewPacs] = useState(false);
   const [document, setDocument] = useState();
   //exo
   const [data, setData] = useState([]);

   const getXrays = async () => {
      setLoading(true);
      await XrayRequestApi.getXrayRequest({
         params: {
            patientId: incomeEMRData.patientId,
            isPayment: true
         }
      })
         .then(({ data: { response } }) => {
            setData(response.data);
         })
         .finally(() => {
            setLoading(false);
         });
   };
   const getPhoto = async (id) => {
      return localFileApi.getFile(id);
   };
   const getImages = async (serialNumber) => {
      await pacsApi
         .getBySerialNumber(serialNumber.toString())
         .then(({ data: { response } }) => {
            setIsViewPacs(true);
            if (response) {
               setOsimisViewerUrl(response?.osimisViewerUrl);
               const newUrls = response?.series[0]?.instances?.map((url) =>
                  url.replace('http://192.82.92.168', 'https://ihospital.mn/pacs')
               );
               setImageUrls(newUrls);
            }
         })
         .catch((error) => {
            setIsViewPacs(false);
            openNofi('error', 'Алдаа', 'Рентгэн зураг байхгүй байна.');
         });
   };
   const getDocumentData = async (id) => {
      setLoadingInfo(true);
      await DocumentApi.getById(id)
         .then(
            ({
               data: {
                  response: { response }
               }
            }) => {
               if (response.serialNumber) {
                  getImages(response.serialNumber);
               } else {
                  setOsimisViewerUrl('');
                  setImageUrls([]);
               }
               setDocument(response);
            }
         )
         .finally(() => {
            setLoadingInfo(false);
         });
   };

   const getXray = async (id) => {
      setLoadingInfo(true);
      await XrayRequestApi.getXrayRequestById(id)
         .then(async ({ data: { response } }) => {
            setDoctor(response.employee);
            setPatient(response.patient);
            if (response.deviceType === 0) {
               setAppInspection({
                  patient: response.patient,
                  xrayName: response.xray?.name,
                  employee: response.employee?.lastName.substring(0, 1) + '.' + response.employee?.firstName,
                  inspectionNote: response.inspectionNotes,
                  photos: await Promise.all(
                     response.photos?.map(async (photo) => {
                        const src = await getPhoto(photo.id);
                        return {
                           url: src
                        };
                     })
                  )
               });
            } else if (response.deviceType === 1) {
               if (response.inspectionNoteId) {
                  getDocumentData(response.inspectionNoteId);
               }
            }
            const year = dayjs(response.createdAt).get('year');
            const month = dayjs(response.createdAt).get('month') + 1;
            const day = dayjs(response.createdAt).get('date');
            setKeys([`${year}`, `${month}-${day}`]);
         })
         .finally(() => {
            setLoadingInfo(false);
         });
   };

   const treeData = useMemo(() => {
      const newTreeData = [];
      var newData = [];
      if (searchValue != undefined) {
         newData = data.filter((res) => res.xray?.name.toLowerCase().includes(searchValue?.toLowerCase()));
      } else {
         newData = data;
      }
      newData?.map((item) => {
         const id = item.id;
         const year = dayjs(item?.createdAt).get('year');
         const month = dayjs(item?.createdAt).get('month') + 1;
         const day = dayjs(item?.createdAt).get('date');
         newTreeData[year] = newTreeData[year] || {};
         newTreeData[year][`${month}-${day}`] = newTreeData[year][`${month}-${day}`] || { children: [] };
         newTreeData[year][`${month}-${day}`].children.push({
            key: id,
            title: item.xray?.name,
            deviceType: item.deviceType,
            isLeaf: true
         });
      });
      return newTreeData;
   }, [searchValue, data]);

   const handlePrint = useReactToPrint({
      content: () => printRefPicture.current
   });

   useEffect(() => {
      setSearchValue('');
      activeKey && getXray(activeKey);
   }, [activeKey]);

   useEffect(() => {
      getXrays();
   }, []);

   return (
      <>
         <div className="flex flex-row gap-2">
            <Spin wrapperClassName="h-[500px] min-w-[200px]" spinning={isLoading}>
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block overflow-auto h-full">
                  <div className="p-1">
                     <div className="flex flex-col gap-2 p-2">
                        <Input
                           prefix={<SearchOutlined />}
                           placeholder="Хайх"
                           value={searchValue}
                           onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <RegularTree
                           data={treeData}
                           searchValue={searchValue}
                           getData={(item) => {
                              setActiveKeyId(item.key);
                              setDeviceType(item.deviceType);
                              //   getXray(item.key);
                              setServiceName(item.title);
                           }}
                        />
                     </div>
                  </div>
               </div>
            </Spin>
            <div className="w-full">
               <Spin wrapperClassName="h-[500px]" spinning={isLoadingInfo}>
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block overflow-auto h-full">
                     <div className="m-1 bg-white h-full flex flex-col gap-2">
                        <div className="flex flex-row justify-between py-3 px-1 bg-[#F3F4F6]">
                           <ListPatientInfo patientData={doctor} />
                           <div className="flex flex-row gap-2">
                              <Button
                                 type="primary"
                                 onClick={() => {
                                    if (deviceType === 0) {
                                       setImageUrls(appInspection.photos?.map((photo) => photo.url));
                                    }
                                    setIsOpenModal(true);
                                 }}
                              >
                                 Зураг хэвлэх
                              </Button>
                              {deviceType === 1 ? (
                                 <ReactToPrint
                                    trigger={() => {
                                       return <Button type="primary" icon={<PrinterOutlined />} />;
                                    }}
                                    content={() => printRef.current}
                                 />
                              ) : null}
                              {deviceType === 0 ? (
                                 <Button
                                    type="primary"
                                    onClick={() => {
                                       setIsOpenModalForm(true);
                                    }}
                                    icon={<PrinterOutlined />}
                                 />
                              ) : null}
                           </div>
                        </div>
                        {deviceType === 1 ? (
                           <>
                              <div ref={printRef}>
                                 <XrayDocumentReturnById
                                    serviceName={serviceName}
                                    hospitalId={hospitalId}
                                    document={document}
                                    patient={patient}
                                    body={<FormRenderHtml formId={document?.formId} documentData={document?.data} />}
                                 />
                              </div>
                              {isViewPacs ? (
                                 <div className="flex flex-col gap-2">
                                    <Divider>Зураг</Divider>
                                    <Button
                                       onClick={() => {
                                          window.open(osimisViewerUrl, '_blank');
                                       }}
                                    >
                                       Дэлгэрэнгүй харах (VIEWER)
                                    </Button>
                                    <Image.PreviewGroup>
                                       <div className="grid grid-cols-4 gap-2">
                                          {imageUrls?.map((url, index) => (
                                             <Image key={index} src={url} alt={index} crossOrigin="anonymous" />
                                          ))}
                                       </div>
                                    </Image.PreviewGroup>
                                 </div>
                              ) : null}
                           </>
                        ) : null}
                        {deviceType === 0 ? (
                           <ul className="list-disc list-inside">
                              <li>Зураг</li>
                              <div className="grid grid-cols-2 gap-1">
                                 {appInspection.photos?.map((photo, index) => {
                                    return <Image key={index} src={photo.url} />;
                                 })}
                              </div>
                              <li>ЭМЧИЙН ҮЗЛЭГ</li>
                              <RenderNotesDetail data={appInspection?.inspectionNote?.conclusion} />
                              <RenderNotesDetail data={appInspection?.inspectionNote?.advice} />
                           </ul>
                        ) : null}
                     </div>
                  </div>
               </Spin>
            </div>
         </div>
         <Modal
            open={isOpenModalForm}
            onCancel={() => setIsOpenModalForm(false)}
            footer={null}
            title={'Дүгнэлт хэвлэх'}
         >
            <FormXray printData={appInspection} />
         </Modal>
         <Modal
            title="Зураг хэвлэх хэсэг"
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            width={'23cm'}
            bodyStyle={{
               position: 'relative',
               overflow: 'auto',
               width: '22cm',
               margin: 'auto',
               maxHeight: 900
            }}
            cancelText="Болих"
            okText="Хэвлэх"
            onOk={() => {
               handlePrint();
            }}
            destroyOnClose
         >
            <div ref={printRefPicture}>
               {pages?.map((page, index) => (
                  <React.Fragment key={index}>
                     <div className="flex flex-row gap-3 px-[1cm] xray-selector">
                        <div>
                           <label>Багана:</label>
                           <Select
                              options={options}
                              defaultValue={1}
                              onChange={(value) => handleChange('rows', value, index)}
                           />
                        </div>
                        <div>
                           <label>Мөр:</label>
                           <Select
                              options={options}
                              defaultValue={1}
                              onChange={(value) => handleChange('cols', value, index)}
                           />
                        </div>
                        <Button danger onClick={() => removePage(index)}>
                           Хуудас устгах
                        </Button>
                     </div>
                     <div className="page">
                        <div
                           className="subpage"
                           style={{
                              height: 'inherit'
                           }}
                        >
                           <table className="table table-bordered h-full">
                              <tbody>
                                 {[...Array(page.cols)]?.map((_col, colIndex) => (
                                    <tr key={colIndex}>
                                       {[...Array(page.rows)]?.map((_row, rowIndex) => (
                                          <td key={rowIndex}>
                                             <ImagePicker rows={page.rows} cols={page.cols} images={imageUrls} />
                                          </td>
                                       ))}
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </React.Fragment>
               ))}
            </div>
            <Button
               type="primary"
               onClick={() => {
                  setPages([
                     ...pages,
                     {
                        rows: 1,
                        cols: 1
                     }
                  ]);
               }}
            >
               Хуудас нэмэх
            </Button>
         </Modal>
      </>
   );
};
export default NewXray;
