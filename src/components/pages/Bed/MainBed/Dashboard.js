import { Card } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { UserAddOutlined } from '@ant-design/icons';
import OrganizationBedServices from '../../../../services/organization/bed';
import BedManagementContext from '../../../../features/BedContext';

function Dashboard() {
   const { setActiveKey, setBedStatus } = useContext(BedManagementContext);
   const [emptyBeds, setEmptyBeds] = useState([]); //Сул өрөө
   const [usedBeds, setUsedBeds] = useState([]); //Дүүрсэн өрөө
   const [repairBeds, setRepairBeds] = useState([]); //Засвартай өрөө

   const getAllBed = async () => {
      await OrganizationBedServices.get().then(({ data: { response } }) => {
         setUsedBeds(response?.data?.filter((bed) => bed.status === 0));
         setRepairBeds(response?.data?.filter((bed) => bed.status === 2));
         setEmptyBeds(response?.data?.filter((bed) => bed.status === 3));
      });
   };
   useEffect(() => {
      getAllBed();
   }, []);
   return (
      <>
         <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <div>
               <Card
                  style={styles.cardStyle}
                  className="rounded-xl cursor-pointer"
                  bodyStyle={styles.cardBodyStyle}
                  onClick={() => {
                     setActiveKey('4');
                     setBedStatus(3);
                  }}
               >
                  <div style={{ width: '70%' }}>
                     <p>Сул орны тоо</p>
                     <p style={styles.total}>Нийт: {emptyBeds !== '' && emptyBeds.length}</p>
                  </div>
                  <div>
                     <UserAddOutlined style={styles.iconStyle} />
                  </div>
               </Card>
            </div>
            <div>
               <Card
                  style={styles.cardStyle}
                  className="rounded-xl cursor-pointer"
                  bodyStyle={styles.cardBodyStyle}
                  onClick={() => {
                     setActiveKey('4');
                     setBedStatus(2);
                  }}
               >
                  <div style={{ width: '70%' }}>
                     <p>Засвартай өрөө</p>
                     <p style={styles.total}>Нийт: {repairBeds !== '' && repairBeds.length}</p>
                  </div>
                  <div>
                     <UserAddOutlined style={styles.iconStyle} />
                  </div>
               </Card>
            </div>
            <div>
               <Card
                  style={styles.cardStyle}
                  className="rounded-xl cursor-pointer"
                  bodyStyle={styles.cardBodyStyle}
                  onClick={() => {
                     setActiveKey('4');
                     setBedStatus(0);
                  }}
               >
                  <div style={{ width: '70%' }}>
                     <p>Дүүрсэн өрөө</p>
                     <p style={styles.total}>Нийт: {usedBeds !== '' && usedBeds.length}</p>
                  </div>
                  <div>
                     <UserAddOutlined style={styles.iconStyle} />
                  </div>
               </Card>
            </div>
         </div>
      </>
   );
}
export default Dashboard;
const styles = {
   cardStyle: {
      // borderColor: blue.primary
   },
   cardBodyStyle: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      padding: 12,
      paddingRight: 10,
      paddingLeft: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
   },
   iconStyle: {
      // backgroundColor: blue.primary,
      padding: 15,
      borderRadius: 12,
      fontSize: 20,
      color: '#fff'
   },
   total: {
      fontSize: 20,
      fontWeight: 'bold'
   }
};
