import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentToken, selectCurrentInsurance, set as setAuth, Delete, logout } from '../features/authReducer';
import bg from '../assets/images/background/bg-profile.jpg';
import profile from '../assets/images/maleAvatar.svg';
import { Avatar, Button, Card, Col, Descriptions, Form, Input, Modal, Row } from 'antd';
import { openNofi, Patch } from './comman';
import { KeyOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import PasswordChecklist from 'react-password-checklist';
import { useCookies } from 'react-cookie';
import authenticationApi from '../services/authentication/authentication.api';
import { set as setHospital } from '../features/hospitalReducer';
import { useContext } from 'react';
import AuthContext from '../features/AuthContext';
import { useNavigate } from 'react-router-dom';

function Profile() {
   const { logoutt } = useContext(AuthContext);
   const token = useSelector(selectCurrentToken);
   const isInsurance = useSelector(selectCurrentInsurance);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [profileForm] = Form.useForm();
   const [user, setUser] = useState([]);
   const [profileModal, setProfileModal] = useState(false);
   const [passwordModal, setPasswordModal] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [passwordValid, setPasswordValid] = useState(false);
   const [password, setPassword] = useState('');
   const [cookies, setCookie] = useCookies();

   const config = {
      headers: {},
      params: {}
   };

   const handelLogOut = async () => {
      dispatch(Delete());
      dispatch(logout()); // tur bicew jwtBugdin ajilah ued ustagna
      await logoutt();
      navigate('/');
   };

   const getProfile = async () => {
      await authenticationApi
         .get()
         .then((response) => {
            profileForm.setFieldsValue(response.data.response);
            dispatch(
               setAuth({
                  firstName: response.data.response.employee?.firstName,
                  lastName: response.data.response.employee?.lastName,
                  depId: response.data.response.employee?.depIds,
                  appIds: response.data.response.employee?.appIds,
                  userId: response.data.response.employee?.id,
                  isInsurance: response.data.response.hospital?.isInsurance,
                  roleId: response.data.response?.roleId,
                  phoneNo: response.data.response?.employee?.phoneNo,
                  hospitalName: response.data.response.hospital?.name,
                  hospitalId: response.data.response.hospital?.id,
                  isAfterPay: response.data.response.hospital?.isAfterPay
               })
            );
            dispatch(setHospital(response.data.response.hospital));
            setUser(response.data.response);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {});
   };
   const onFinish = async (values) => {
      setIsLoading(true);
      const response = await Patch('organization/employee/' + user.employee.id, token, config, values.employee);
      if (response === 200) {
         profileForm.resetFields();
         getProfile();
         setProfileModal(false);
      }
      setIsLoading(false);
   };
   const onFinishPassword = async () => {
      setIsLoading(true);
      if (passwordValid) {
         await axios
            .post(
               process.env.REACT_APP_DEV_URL + 'authentication/change-password',
               { password: password, token: token },
               {
                  headers: {
                     Authorization: `Bearer ${token}`,
                     'X-API-KEY': process.env.REACT_APP_API_KEY
                  }
               }
            )
            .then((response) => {
               if (response.status === 200) {
                  setPasswordModal(false);
                  setPassword('');
                  openNofi('success', 'Нууц үг', 'Нууц үг амжилттай солигдлоо');
               }
            })
            .catch((error) => {
               if (error.response.status === 400) {
                  openNofi('warning', 'Нууц үг', 'Нууц үг шаардлага хангахгүй');
               }
            });
      } else {
         openNofi('warning', 'Нууц үг', 'Нууц үг шаардлага хангахгүй');
      }
      setIsLoading(false);
   };
   useEffect(() => {
      getProfile();
      setCookie('current_token', token);
   }, []);
   const validPasswordHandle = (isValid) => {
      isValid ? setPasswordValid(true) : setPasswordValid(false);
   };
   return (
      <div className="flex flex-col gap-2">
         <div className="profile-nav-bg" style={{ backgroundImage: 'url(' + bg + ')' }}></div>
         <Card
            className="card-profile-head rounded-md h-28"
            bodyStyle={{ display: 'none' }}
            title={
               <Row justify="space-between" align="middle" gutter={[24, 0]}>
                  <Col span={24} md={12} className="col-info">
                     <Avatar.Group>
                        <Avatar size={74} shape="square" src={profile} />
                        <div className="avatar-info">
                           <h4 className="font-semibold m-0">
                              {user.employee?.lastName + ' ' + user.employee?.firstName}
                           </h4>
                           <p>
                              {user.role?.name} / {user.role?.description}
                           </p>
                        </div>
                     </Avatar.Group>
                  </Col>
                  <Col
                     span={24}
                     md={12}
                     style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                     }}
                  ></Col>
               </Row>
            }
         ></Card>
         <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Профайл мэдээлэл</h6>}
            className="header-solid card-profile-information rounded-md"
            extra={
               <>
                  <Button className="mx-1" type="primary" icon={<UserOutlined />} onClick={() => setProfileModal(true)}>
                     Мэдээлэл солих
                  </Button>
                  <Button className="mx-1" type="primary" icon={<KeyOutlined />} onClick={() => setPasswordModal(true)}>
                     Нууц үг солих
                  </Button>
                  <Button
                     danger
                     className="mx-1"
                     type="primary"
                     icon={<LoginOutlined />}
                     onClick={() => handelLogOut(true)}
                  >
                     Системээс гарах
                  </Button>
               </>
            }
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
         >
            <hr className="my-2" />
            <Descriptions>
               <Descriptions.Item label="Утас" span={3}>
                  {user.employee?.phoneNo}
               </Descriptions.Item>
               <Descriptions.Item label="Email" span={3}>
                  {user?.email}
               </Descriptions.Item>
               <Descriptions.Item label="Гэрийн хаяг" span={3}>
                  {user?.employee?.homeAddress}
               </Descriptions.Item>
               <Descriptions.Item label="Эмнэлэг" span={3}>
                  <p className="text-white p-1" style={{ background: isInsurance ? 'green' : 'red' }}>
                     {user?.hospital?.name}
                  </p>
               </Descriptions.Item>
            </Descriptions>
         </Card>
         <Modal
            title="Хувийн мэдээлэл засах"
            forceRender={true}
            open={profileModal}
            onCancel={() => setProfileModal(false)}
            onOk={() => {
               profileForm
                  .validateFields()
                  .then((values) => {
                     onFinish(values);
                  })
                  .catch(() => {
                     openNofi('warning', 'Мэдээлэл дутуу', 'Мэдээлэл дутуу');
                  });
            }}
            isLoading={isLoading}
            okText="Хадгалах"
            cancelText="Болих"
         >
            <Form
               form={profileForm}
               labelCol={{
                  span: 5
               }}
               wrapperCol={{
                  span: 19
               }}
            >
               <Form.Item
                  label="Овог"
                  name={['employee', 'lastName']}
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  label="Нэр"
                  name={['employee', 'firstName']}
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  label="И-мэйл"
                  name={['employee', 'email']}
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Input type="email" />
               </Form.Item>
            </Form>
         </Modal>
         <Modal
            title={'Нууц үг солих'}
            open={passwordModal}
            isLoading={isLoading}
            onCancel={() => setPasswordModal(false)}
            onOk={onFinishPassword}
            okText="Хадгалах"
            cancelText="Болих"
            width={400}
         >
            <Input.Password
               size="small"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder=""
               prefix={<KeyOutlined />}
            />

            <PasswordChecklist
               rules={['minLength', 'specialChar', 'capital']}
               minLength={8}
               value={password}
               onChange={validPasswordHandle}
               messages={{
                  minLength: '8 болон түүнээс дээш тэмдэг',
                  specialChar: '1 тусгай тэмдэгт эсвэл 1 тоо (!@#$%^&*_)',
                  capital: 'Багадаа 1 том үсэг'
               }}
               style={{ padding: 10 }}
            />
         </Modal>
      </div>
   );
}

export default Profile;
