import React, { useEffect, useState } from 'react';
import { Badge, Button, Card, DatePicker, Form, Input, InputNumber, Modal, Radio, Spin } from 'antd';
import dayjs from 'dayjs';
//comps
import { QuestionRender } from './QuestionRender';
//common
import { openNofi } from '@Comman/common';
//api
import HealtInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';
//defualts
import { labelstyle } from './index';

const ChildBook = ({ patient, hicsSeal, pregnancyNo }) => {
   const [form] = Form.useForm();
   const [formChildBook] = Form.useForm();
   const [isLoading, setLoading] = useState(false);
   const [isOpenModal, setOpenModal] = useState(false);
   const [isOpenModalBook, setOpenModalBook] = useState(false);
   const [childBook, setChildBook] = useState([]);
   const [selectedBook, setSelectedBook] = useState({});
   const getCheckChildBook = async () => {
      setLoading(true);
      await HealtInsuranceApi.getChildBook(1, patient.registerNumber)
         .then(({ data }) => {
            if (data.code === 200) {
               setChildBook(data.result);
               openNofi('success', 'Амжилттай', data.description);
            } else {
               openNofi('warning', 'Анхааруулга', data.description);
            }
         })
         .finally(() => {
            setLoading(false);
         });
   };
   const createChildBook = async (values) => {
      setLoading(true);
      await HealtInsuranceApi.postCreateRequestChildBook({
         serviceNo: hicsSeal.hicsSealCode,
         motherRegNo: patient.registerNumber,
         pregnancyNo: pregnancyNo,
         ...values
      })
         .then(({ data }) => {
            if (data.code === 200) {
               getCheckChildBook();
               setOpenModal(false);
               openNofi('warning', 'Анхааруулга', data.description);
            }
         })
         .finally(() => {
            setLoading(false);
         });
   };
   const getCategory = async (book) => {
      setSelectedBook(book);
      setLoading(true);
      formChildBook.resetFields();
      await HealtInsuranceApi.getQuestionCategories(patient.registerNumber).then(({ data }) => {
         if (data.code === 200) {
            configurePanels(data.result);
         }
      });
   };
   const getQuestionsByCategory = async (categoryId) => {
      return await HealtInsuranceApi.getQuestionsByCategory(patient.registerNumber, categoryId).then(({ data }) => {
         if (data.code === 200) return data.result;
         return [];
      });
   };
   const configurePanels = async (catergories) => {
      Promise.all(
         await catergories?.map(async (catergory) => {
            const questions = await getQuestionsByCategory(catergory.categoryId);
            return questions?.map((question) => ({
               ...question,
               categoryId: catergory.categoryId,
               categoryName: catergory.categoryName
            }));
         })
      ).then(async (datas) => {
         const d = datas?.flatMap((e) => e);
         await formChildBook.setFieldValue('formdata', d);
         setLoading(false);
         setOpenModalBook(true);
      });
   };
   const onFinish = async (values) => {
      const newFormData = values.formdata?.map((data) => {
         if (data.type === 'inputDate') {
            return {
               ...data,
               value: dayjs(data.value || new Date()).format('YYYY-MM-DD')
            };
         }
         return data;
      });
      await HealtInsuranceApi.postSendChildBookData({
         regNo: selectedBook.childRegNo,
         bookNo: selectedBook.bookNo,
         doctor: 'AMARBAT',
         formdata: newFormData
      }).then(({ data }) => {
         if (data.code === 200) {
            setOpenModalBook(false);
            getCheckSummary();
         }

         console.log(data);
      });
   };
   const getColor = (gender) => {
      if (gender === 'эр') return 'blue';
      return 'pink';
   };
   useEffect(() => {
      getCheckChildBook();
   }, []);
   return (
      <>
         <div
            className="rounded-md bg-[#F3F4F6] w-full inline-block p-2"
            style={{
               height: 'calc(100vh - 495px)',
               overflow: 'auto'
            }}
         >
            <Spin wrapperClassName="h-full" spinning={isLoading}>
               <div className="flex flex-col gap-2">
                  <Button
                     type="primary"
                     onClick={() => {
                        form.resetFields();
                        setOpenModal(true);
                     }}
                  >
                     Хүүхдийн дэвтэр нээх
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
                     {childBook?.map((book, index) => (
                        <Badge.Ribbon
                           key={index}
                           rootClassName="w-[calc(100%-1rem)]"
                           text={book.gender}
                           color={getColor(book.gender)}
                        >
                           <Card className="h-full">
                              <div>
                                 <Button
                                    onClick={() => {
                                       getCategory(book);
                                    }}
                                 >
                                    Дэвтрийн форм нэмэх
                                 </Button>
                              </div>
                              <p className="pt-6" style={labelstyle}>
                                 Эмнэлэг: {book.hospital}
                              </p>
                              <p style={labelstyle}>Төрсөн огноо: {dayjs(book.birthDate).format('YYYY/MM/DD HH:mm')}</p>
                              <p style={labelstyle}>Дугаар: {book.bookNo}</p>
                              <p style={labelstyle}>Ээжийн РД: {book.motherRegNo}</p>
                              <p style={labelstyle}>Хүүхдийн РД: {book.childRegNo}</p>
                              <p style={labelstyle}>Эмчийн нэр: {book.doctor}</p>
                              <p style={labelstyle}>Хүүхдийн жин: {book.weight}-г</p>
                              <p style={labelstyle}>Хүүхдийн урт: {book.height}-см</p>
                              <p style={labelstyle}>Хүүхдийн толгойн тойрог: {book.tcircle}-см</p>
                              <p style={labelstyle}>Хүүхдийн мөрний тойрог: {book.mcircle}-см</p>
                           </Card>
                        </Badge.Ribbon>
                     ))}
                  </div>
               </div>
            </Spin>
         </div>
         <Modal
            title="Эх хүүхдийн цахим дэвтрийг нээх сервис"
            open={isOpenModal}
            onCancel={() => {
               setOpenModal(false);
            }}
            onOk={() => {
               form.validateFields().then(createChildBook);
            }}
         >
            <Form form={form} layout="vertical">
               <Form.Item label="Хүүхдийн РД" name="childRegNo">
                  <Input />
               </Form.Item>
               <Form.Item label="Төрсөн огноо" name="birthDate">
                  <DatePicker />
               </Form.Item>
               <Form.Item label="Төрсөн эмнэлгийн нэр" name="hospital">
                  <Input />
               </Form.Item>
               <Form.Item label="Үзлэг хийсэн эмчийн нэр" name="doctor">
                  <Input />
               </Form.Item>
               <div className="grid grid-cols-3 gap-2 items-end">
                  <Form.Item label="Хүүхдийн жин - г" name="weight">
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Хүүхдийн урт - см" name="height">
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Хүүхдийн толгойн тойрог - см" name="tcircle">
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Хүүхдийн мөрний тойрог - см" name="mcircle">
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Хүүхдийн хүйс" name="gender">
                     <Radio.Group className="white-radio">
                        <Radio value={1}>эрэгтэй</Radio>
                        <Radio value={2}>эмэгтэй</Radio>
                     </Radio.Group>
                  </Form.Item>
               </div>
            </Form>
         </Modal>
         <Modal
            title="Мэдээлэл оруулах"
            open={isOpenModalBook}
            onCancel={() => {
               setOpenModalBook(false);
            }}
            onOk={() => {
               formChildBook.validateFields().then(onFinish);
            }}
         >
            <Form form={formChildBook} layout="vertical">
               <QuestionRender form={formChildBook} />
            </Form>
         </Modal>
      </>
   );
};
export default ChildBook;
