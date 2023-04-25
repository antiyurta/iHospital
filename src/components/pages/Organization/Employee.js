import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get } from '../../comman';

import UTable from '../../UTable';

function Employee() {
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [degree, setDegree] = useState([]);
   const [positions, setPositions] = useState([]);
   const [departments, setDepartments] = useState([]);
   const [roles, setRoles] = useState([]);
   const [mobile, setMoblie] = useState([]);
   const getDegree = async () => {
      const response = await Get('reference/degree', token, config);
      if (response.data.length != 0) {
         setDegree(response.data);
      }
   };

   const getPosition = async () => {
      config.params.type = 1;
      const response = await Get('organization/structure', token, config);
      if (response.data.length != 0) {
         setPositions(response.data);
      }
   };

   const getDepartment = async () => {
      config.params.type = 2;
      const response = await Get('organization/structure', token, config);
      if (response.data.length != 0) {
         setDepartments(response.data);
      }
   };

   const getRoles = async () => {
      const response = await Get('reference/role', token, config);
      if (response.data.length != 0) {
         setRoles(response.data);
      }
   };
   const getMoblieStructure = async () => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Get('sub-organization', token, conf);
      if (response.data.length != 0) {
         setMoblie(response.data);
      }
   };
   useEffect(() => {
      getDegree();
      getPosition();
      getDepartment();
      getRoles();
      getMoblieStructure();
   }, []);
   const column = [
      {
         index: 'lastName',
         label: 'Овог',
         isView: true,
         input: 'input',
         col: 12
      },
      {
         index: 'firstName',
         label: 'Нэр',
         isView: true,
         input: 'input',
         col: 12
      },
      {
         index: 'registerNumber',
         label: 'Регистр №',
         isView: true,
         input: 'input',
         col: 12
      },
      {
         index: 'email',
         label: 'Email',
         isView: false,
         input: 'input',
         rules: [
            {
               required: true,
               message: 'Хоосон байж болохгүй'
            },
            {
               type: 'email',
               message: 'Хэлбэрийн алдаа'
            }
         ],
         col: 12
      },
      {
         index: 'phoneNo',
         label: 'Утасны дугаар',
         isView: false,
         input: 'input',
         col: 12
      },
      {
         index: 'isWorking',
         label: 'Ажилж байгаа эсэх',
         isView: true,
         input: 'switch',
         col: 12
      },
      {
         index: 'homeAddress',
         label: 'Гэрийн хаяг',
         isView: true,
         input: 'input',
         col: 12
      },
      {
         index: 'depId',
         label: 'Тасаг',
         isView: false,
         input: 'select',
         inputData: departments,
         relIndex: 'name',
         col: 12
      },
      {
         index: 'subOrganizationId',
         label: 'Тасаг(Mobile)',
         isView: false,
         input: 'select',
         // inputData: mobile,
         inputData: [
            {
               id: 1,
               name: 'dasd'
            }
         ],
         relIndex: 'name',
         col: 12
      },
      {
         index: 'appId',
         label: 'Албан Тушаал',
         isView: false,
         input: 'select',
         inputData: positions,
         relIndex: 'name',
         col: 12
      },
      {
         index: 'degreeId',
         label: 'Зэрэг',
         isView: false,
         input: 'select',
         inputData: degree,
         relIndex: 'name',
         col: 12
      },
      {
         index: 'roleId',
         label: 'role',
         isView: true,
         input: 'select',
         inputData: roles,
         relIndex: 'name',
         col: 24
      },
      {
         index: 'dateInEmployment',
         label: 'Ажилд орсон огноо',
         isView: false,
         input: 'date',
         col: 12
      },
      {
         index: 'dateOutEmployment',
         label: 'Ажилаас гарсан огноо',
         isView: false,
         input: 'date',
         col: 12
      }
   ];
   const params = {};
   return (
      <div className="flex flex-wrap">
         <div className="w-full">
            <UTable
               title={'Ажилтан'}
               url={'organization/employee'}
               column={column}
               isCreate={true}
               isRead={true}
               isUpdate={true}
               isDelete={true}
               width="80%"
            />
         </div>
      </div>
   );
}
export default Employee;
