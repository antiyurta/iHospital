import { Tree, Image, Modal, Spin, Card, Result, Tabs, Button, Divider, Select } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { dataToTree, openNofi } from '../../comman';
import FormXray from './FormPrint/Xray';
import XrayImg from './FormPrint/XrayImg';
import male from '../../../assets/images/maleAvatar.svg';
import jwtInterceopter from '../../jwtInterceopter';

//
import * as XrayDocumentIndex from '../Xray/Document/Index';

const XrayDocumentReturnById = XrayDocumentIndex.ReturnById;

import { selectCurrentHospitalId } from '../../../features/authReducer';
import { useSelector } from 'react-redux';
//
import PmsPatientServices from '../../../services/pms/patient.api';
import DocumentsFormPatientServices from '../../../services/organization/document';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import dayjs from 'dayjs';
import FormRenderHtml from '../BeforeAmbulatory/Customized/FormRenderHtml';
//
import pacsApi from '../../../services/pacs/pacs.api';
import ImagePicker from './Xray/ImagePicker';

const { DirectoryTree } = Tree;
function Xrays({ PatientId }) {
   const [patient, setPatient] = useState({});
   const hospitalId = useSelector(selectCurrentHospitalId);
   const [testData, setTestData] = useState([]);
   const [spinerInfo, setSpinnerInfo] = useState(false);
   const [appointment, setAppointment] = useState([]);
   const [spinner, setSpinner] = useState(false);
   const [printData, setPrintData] = useState({});
   const [printImg, setPrintImg] = useState([]);
   const [isOpenModalImg, setIsOpenModalImg] = useState(false);
   const [isSizeType, setIsSizeType] = useState(Number);
   const [isOpenModalForm, setIsOpenModalForm] = useState(false);
   const getPhoto = async (id) => {
      return await jwtInterceopter
         .get('local-files/' + id, {
            responseType: 'blob'
         })
         .then((response) => {
            const file = new Blob([response.data], { type: response.type });
            const fileURL = URL.createObjectURL(file);
            return fileURL;
         });
   };
   const RenderNotesDetail = ({ data }) => {
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
   const getXrays = async () => {
      setSpinner(true);
      await jwtInterceopter
         .get('service/xrayRequest', {
            params: { patientId: PatientId, deviceType: 0 }
         })
         .then((response) => {
            const data = dataToTree(response.data.response.data);
            setTestData(data);
         })
         .finally(() => {
            setSpinner(false);
         });
   };
   const onChangeTree = async (key, evnt) => {
      if (evnt?.node?.isLeaf) {
         setSpinnerInfo(true);
         await jwtInterceopter
            .get('service/xrayRequest/' + key[0])
            .then(async (response) => {
               const data = response.data.response;
               const photos = await Promise.all(
                  data.photos?.map(async (photo) => {
                     const src = await getPhoto(photo.id);
                     return {
                        url: src
                     };
                  })
               );
               return {
                  employee: data.employee?.lastName.substring(0, 1) + '.' + data.employee?.firstName,
                  inspectionNotes: data.inspectionNotes,
                  photos: photos
               };
            })
            .then((item) => {
               setAppointment(item);
            })
            .catch((error) => {
               console.log(error);
            })
            .finally(() => {
               setSpinnerInfo(false);
            });
      }
   };
   const getByIdPatient = async () => {
      await PmsPatientServices.getById(PatientId).then((response) => {
         setPatient(response.data?.response);
      });
   };
   useEffect(() => {
      getXrays();
   }, []);
   useEffect(() => {
      getByIdPatient();
   }, [PatientId]);

   //rentgen
   const Rentgen = () => (
      <>
         <div className="flex flex-row gap-3">
            <Spin wrapperClassName="h-[440px] w-[200px]" spinning={spinner}>
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block overflow-auto h-full">
                  <div className="p-3">
                     <DirectoryTree
                        className="bg-white"
                        multiple
                        treeData={testData}
                        onSelect={(keys, info) => onChangeTree(keys, info)}
                     />
                  </div>
               </div>
            </Spin>
            <div className="w-full">
               <Spin wrapperClassName="h-[440px]" spinning={spinerInfo}>
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block overflow-auto h-full">
                     <div className="p-2">
                        {Object.entries(appointment)?.length > 0 ? (
                           <Card
                              title={appointment?.employee}
                              className="header-solid max-h-max rounded-md"
                              bodyStyle={{
                                 padding: 10
                              }}
                           >
                              <ul className="list-disc list-inside">
                                 <li>Зураг</li>
                                 <div className="grid grid-cols-2 gap-1">
                                    {appointment.photos?.map((photo, index) => {
                                       return <Image key={index} src={photo.url} />;
                                    })}
                                 </div>
                                 <li>ЭМЧИЙН ҮЗЛЭГ</li>
                                 <RenderNotesDetail data={appointment?.inspectionNotes?.conclusion} />
                                 <RenderNotesDetail data={appointment?.inspectionNotes?.advice} />
                              </ul>
                           </Card>
                        ) : (
                           <Result />
                        )}
                     </div>
                  </div>
               </Spin>
            </div>
         </div>
         <Modal
            open={isOpenModalForm}
            onCancel={() => setIsOpenModalForm(false)}
            footer={null}
            // width={"auto"}
            title={'Дүгнэлт хэвлэх'}
         >
            <FormXray printData={printData} />
         </Modal>
         <Modal open={isOpenModalImg} onCancel={() => setIsOpenModalImg(false)} width="60%" footer={null}>
            <XrayImg printImage={printImg} type={isSizeType} />
         </Modal>
      </>
   );
   //EXO

   const Exo = () => {
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
      const printRef = useRef();
      const printRefPicture = useRef();
      const [spinner, setSpinner] = useState(false);
      const [spinerInfo, setSpinnerInfo] = useState(false);
      const [document, setDocument] = useState();
      const [test, setTest] = useState({});
      const [serviceName, setServiceName] = useState('');
      const [isViewPacs, setIsViewPacs] = useState(false);
      const [pages, setPages] = useState([
         {
            rows: 1,
            cols: 1
         }
      ]);
      const [isOpenModal, setIsOpenModal] = useState(false);
      const [imageUrls, setImageUrls] = useState([]);
      const [osimisViewerUrl, setOsimisViewerUrl] = useState('');
      //
      const getImages = async (serialNumber) => {
         await pacsApi
            .getBySerialNumber(serialNumber.toString())
            .then(({ data: { response } }) => {
               setIsViewPacs(true);
               if (response) {
                  setOsimisViewerUrl(response?.osimisViewerUrl);
                  setImageUrls(response?.series[0]?.instances);
               }
            })
            .catch((error) => {
               openNofi('error', 'Алдаа', 'Рентгэн зураг байхгүй байна.');
            });
      };
      const getDocumentData = async (id) => {
         setSpinnerInfo(true);
         await DocumentsFormPatientServices.getById(id)
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
               setSpinnerInfo(false);
            });
      };
      const getExos = async () => {
         setSpinner(true);
         await jwtInterceopter
            .get('document-middleware', {
               params: {
                  patientId: PatientId,
                  type: 'XRAY'
               }
            })
            .then((response) => {
               const treeData = [];
               const data = response.data.response;
               data?.map((item) => {
                  const id = item._id;
                  const year = dayjs(item?.data.createdAt).get('year');
                  const month = dayjs(item?.data.createdAt).get('month') + 1;
                  const day = dayjs(item?.data.createdAt).get('date');
                  const name = XrayDocumentIndex.ReturnByIdToName(hospitalId, item.documentId);
                  treeData[year] = treeData[year] || {};
                  treeData[year][`${month}-${day}`] = treeData[year][`${month}-${day}`] || { children: [] };
                  treeData[year][`${month}-${day}`].children.push({
                     key: id,
                     title: name.toLowerCase(),
                     isLeaf: true
                  });
               });
               setTest(treeData);
            })
            .finally(() => {
               setSpinner(false);
            });
      };
      const renderTreeNodes = (data) => {
         return Object.keys(data).map((key) => {
            if (Array.isArray(data[key])) {
               return data[key].map((leaf) => <Tree.TreeNode key={leaf.key} title={leaf.title} isLeaf={leaf.isLeaf} />);
            }
            return (
               <Tree.TreeNode key={key} title={key}>
                  {renderTreeNodes(data[key])}
               </Tree.TreeNode>
            );
         });
      };

      const handleChange = (type, value, index) => {
         const clone = [...pages];
         clone[index] = {
            ...clone[index],
            [`${type}`]: value
         };
         setPages(clone);
      };
      const removePage = (index) => {
         const clone = [...pages];
         clone.splice(index, 1);
         setPages(clone);
      };
      const handlePrint = useReactToPrint({
         content: () => printRefPicture.current
      });
      useEffect(() => {
         getExos();
      }, []);
      return (
         <div>
            <div className="flex flex-row gap-2">
               <Spin wrapperClassName="h-[440px] w-[200px]" spinning={spinner}>
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block overflow-auto h-full">
                     <div className="p-1">
                        <Tree
                           className="bg-white"
                           onSelect={(_selectedKeys, info) => {
                              if (info?.node?.isLeaf) {
                                 setServiceName(info.node?.title);
                                 getDocumentData(info?.node?.key);
                                 setIsViewPacs(false);
                              }
                           }}
                           showLine
                        >
                           {renderTreeNodes(test)}
                        </Tree>
                     </div>
                  </div>
               </Spin>
               <div className="w-full">
                  <Spin wrapperClassName="h-[440px]" spinning={spinerInfo}>
                     <div className="rounded-md bg-[#F3F4F6] w-full inline-block overflow-auto h-full">
                        <div className="m-1 bg-white">
                           {document ? (
                              <div className="flex flex-col gap-2">
                                 <div
                                    className="flex flex-row gap-2"
                                    style={{
                                       padding: '0px 0px 4px 0px',
                                       borderBottom: '1px solid #C9CDD4'
                                    }}
                                 >
                                    <img src={male} width={70} alt="d" />
                                    <div className="flex flex-col gap-1">
                                       <p className="text-xs text-[#86909C]">
                                          <span>Овог:</span>
                                          <span className="text-black">{document.createdByName?.split(' ')?.[0]}</span>
                                       </p>
                                       <p className="text-xs text-[#86909C]">
                                          <span>Нэр:</span>
                                          <span className="text-black">{document.createdByName?.split(' ')?.[1]}</span>
                                       </p>
                                       <p className="text-xs text-[#86909C]">
                                          <span>Төлөв:</span>
                                          <span className="text-black">TEST</span>
                                       </p>
                                    </div>
                                 </div>
                                 <ReactToPrint
                                    trigger={() => {
                                       return <Button type="primary">Хэвлэх</Button>;
                                    }}
                                    content={() => printRef.current}
                                 />
                                 <div ref={printRef}>
                                    <XrayDocumentReturnById
                                       serviceName={serviceName}
                                       hospitalId={hospitalId}
                                       document={document}
                                       patient={patient}
                                       body={<FormRenderHtml formId={document.formId} documentData={document.data} />}
                                    />
                                 </div>
                                 {isViewPacs ? (
                                    <div className="flex flex-col gap-2">
                                       <Divider>Зураг</Divider>
                                       <div className="grid grid-cols-2 gap-2">
                                          <Button
                                             onClick={() => {
                                                window.open(osimisViewerUrl, '_blank');
                                             }}
                                          >
                                             Дэлгэрэнгүй харах (VIEWER)
                                          </Button>
                                          <Button
                                             type="primary"
                                             onClick={() => {
                                                setIsOpenModal(true);
                                             }}
                                          >
                                             Зураг хэвлэх
                                          </Button>
                                       </div>
                                       <Image.PreviewGroup>
                                          <div className="grid grid-cols-4 gap-2">
                                             {imageUrls?.map((url, index) => (
                                                <Image key={index} src={url} alt={index} />
                                             ))}
                                          </div>
                                       </Image.PreviewGroup>
                                    </div>
                                 ) : null}
                              </div>
                           ) : (
                              <Result title={'Хугацаа сонгох'} />
                           )}
                        </div>
                     </div>
                  </Spin>
               </div>
            </div>
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
         </div>
      );
   };

   return (
      <>
         <Tabs
            destroyInactiveTabPane
            items={[
               {
                  key: 0,
                  label: 'Рентген',
                  children: <Rentgen />
               },
               {
                  key: 1,
                  label: 'EXO',
                  children: <Exo />
               }
            ]}
         />
      </>
   );
}
export default Xrays;
