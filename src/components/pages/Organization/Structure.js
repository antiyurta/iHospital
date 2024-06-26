import React, { useState, useEffect } from 'react';
import UTable from '../../UTable';
//api
import StructureApi from '@ApiServices/organization/structure';
import healthInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';

function Structure() {
   const [testParam, setTestParam] = useState(true);
   const [hicsServices, setHicsServices] = useState([]);

   const [departments, setDepartments] = useState([]);
   const department = {
      params: {
         type: 2
      }
   };
   const cabinet = {
      params: {
         type: 3
      }
   };
   const otherDepartment = {
      params: {
         type: 0
      }
   };
   const DepartmentColumn = [
      {
         index: 'name',
         label: 'Нэр',
         isView: true,
         input: 'input',
         col: 24
      },
      {
         index: 'type',
         label: 'Төрөл',
         isView: true,
         input: 'select',
         inputData: [
            {
               id: 2,
               label: 'Тасаг'
            }
         ],
         relIndex: 'label',
         col: 24
      },
      {
         index: 'isStorage',
         label: 'Санхүү',
         isView: false,
         col: 24
      },
      {
         index: 'isOrder',
         label: 'Захиалга авах эсэх',
         isView: true,
         input: 'switch',
         col: 24
      },
      {
         label: 'Даатгал',
         index: 'hicsServiceIds',
         isView: true,
         input: 'multipleSelect',
         inputData: hicsServices,
         relValueIndex: 'id',
         relIndex: 'id',
         col: 24
      }
   ];
   const CabinetColumn = [
      {
         index: 'parentId',
         label: 'Тасаг',
         isView: true,
         input: 'select',
         inputData: departments,
         relIndex: 'name',
         col: 24
      },
      {
         index: 'name',
         label: 'Нэр',
         isView: true,
         input: 'input',
         col: 24
      },
      {
         index: 'type',
         label: 'Төрөл',
         isView: true,
         input: 'select',
         inputData: [
            {
               id: 3,
               label: 'Кабинет'
            }
         ],
         relIndex: 'label',
         col: 24
      },
      {
         index: 'isOrder',
         label: 'Захиалга авах эсэх',
         isView: true,
         input: 'switch',
         col: 24
      },
      {
         label: 'Даатгал',
         index: 'hicsServiceIds',
         isView: true,
         input: 'multipleSelect',
         inputData: hicsServices,
         relValueIndex: 'id',
         relIndex: 'id',
         col: 24
      }
   ];
   const otherDepartmentColumn = [
      {
         index: 'name',
         label: 'Нэр',
         isView: true,
         input: 'input',
         col: 24
      },
      {
         index: 'type',
         label: 'Төрөл',
         isView: true,
         input: 'select',
         inputData: [
            {
               id: 0,
               label: 'Бусад тасаг'
            }
         ],
         relIndex: 'label',
         col: 24
      },
      {
         index: 'isOrder',
         label: 'Захиалга авах эсэх',
         isView: true,
         input: 'switch',
         col: 24
      }
   ];
   const getDepartments = async () => {
      await StructureApi.get({
         params: {
            type: 2
         }
      }).then(({ data: { response } }) => {
         setDepartments(response.data);
      });
   };
   const getHicsServices = async () => {
      await healthInsuranceApi.getHicsService().then(({ data }) => {
         if (data.code === 200) {
            setHicsServices(data.result);
         }
      });
   };
   useEffect(() => {
      getDepartments();
      getHicsServices();
   }, []);
   return (
      <div className="w-full overflow-auto h-screen bg-[#f5f6f7] p-3">
         <div className="flex flex-col gap-2">
            <UTable
               title={'Tасаг'}
               url={'organization/structure'}
               params={department}
               column={DepartmentColumn}
               isCreate={true}
               isRead={true}
               isUpdate={true}
               isDelete={true}
               width="50%"
               isRefresh={testParam}
            />
            <UTable
               title={'Кабинет'}
               url={'organization/structure'}
               params={cabinet}
               column={CabinetColumn}
               isCreate={true}
               isRead={true}
               isUpdate={true}
               isDelete={true}
               width="80%"
            />
            <UTable
               title={'Харьяалал'}
               url={'organization/structure'}
               params={otherDepartment}
               column={otherDepartmentColumn}
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
export default Structure;
