import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

//service
import OrganizationStructureService from '../../../../services/organization/structure';

//маягт ЭМТ - 201.4.2
function EMT201_4_2(props) {
   const { type, data, appointmentId, hospitalName } = props;
   const [list, setList] = useState({});
   const [cabinets, setCabinets] = useState([]);
   useEffect(() => {
      if (data) {
         const cloneData = { ...data };
         delete cloneData['65-150'];
         delete cloneData.Other;
         cloneData['65+'] = data['65-150'];
         setList(cloneData);
      }
   }, [data]);
   const styles = {
      verticalText: {
         writingMode: 'vertical-rl',
         verticalAlign: 'middle',
         padding: 5,
         rotate: '180deg',
         maxHeight: 130,
         maxWidth: 50,
         lineHeight: 1,
         fontSize: 12
      },
      leftText: {
         padding: 1,
         verticalAlign: 'middle',
         fontSize: 11
      },
      centerText: {
         padding: 1,
         textAlign: 'center',
         verticalAlign: 'middle',
         fontSize: 11
      }
   };
   const getCabinets = async () => {
      await OrganizationStructureService.get({
         params: {
            type: 3
         }
      }).then((response) => {
         setCabinets(response.data.response.data);
      });
   };
   const getAll = (name) => {
      var total = 0;
      var man = 0;
      var woman = 0;
      Promise.all(
         Object.entries(list)?.map(([_key, value]) => {
            if (value) {
               Object.entries(value)?.map(([cabinetName, value1]) => {
                  if (cabinetName === name) {
                     if (value1.WOMAN) {
                        total += value1.WOMAN;
                        woman += value1.WOMAN;
                     }
                     if (value1.MAN) {
                        total += value1.MAN;
                        man += value1.MAN;
                     }
                  }
               });
            }
         })
      );
      return (
         <>
            <td style={styles.centerText}>{total}</td>
            <td style={styles.centerText}>{man}</td>
            <td style={styles.centerText}>{woman}</td>
         </>
      );
   };
   useEffect(() => {
      getCabinets();
   }, []);
   return (
      <div className="p-3">
         <div className="">
            <div style={{ textAlign: 'center' }}>
               <span style={{ fontWeight: 'bold', fontSize: 14 }}>
                  ЭМТ- 201.4.2. Амбулаторын үзлэгт хамрагдсан хүний тоо насны бүлэг, хүйсээр
               </span>
            </div>
            <Table bordered className="document" style={{ marginBottom: 0 }}>
               <tbody>
                  <tr>
                     <td rowSpan={4} style={styles.centerText}>
                        Үзлэгийн кабинетын нэр
                     </td>
                     <td rowSpan={4} style={styles.centerText}>
                        м/д
                     </td>
                     <td colSpan={33} style={styles.centerText}>
                        Үзлэгт хамрагдсан хүний тоо
                     </td>
                  </tr>
                  <tr>
                     <td rowSpan={3} style={styles.verticalText}>
                        Бүгд
                     </td>
                     <td rowSpan={3} style={styles.verticalText}>
                        Эрэгтэй
                     </td>
                     <td rowSpan={3} style={styles.verticalText}>
                        Эмэгтэй
                     </td>
                     <td colSpan={30} style={styles.centerText}>
                        Насны бүлгээр
                     </td>
                  </tr>
                  <tr>
                     {Object.entries(list)?.map(([key, _value], index) => {
                        return (
                           <td key={index} colSpan={2} style={styles.centerText}>
                              {key}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эрэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эмэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эрэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эмэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эрэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эмэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эрэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эмэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эрэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эмэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эрэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эмэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эрэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эмэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эрэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эмэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эрэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эмэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эрэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эмэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эрэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эмэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эрэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эмэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эрэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эмэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эрэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эмэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эрэгтэй</td>
                     <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эмэгтэй</td>
                  </tr>
                  <tr>
                     <td style={styles.centerText}>А</td>
                     <td style={styles.centerText}>Б</td>
                     <td style={styles.centerText}>1</td>
                     <td style={styles.centerText}>2</td>
                     <td style={styles.centerText}>3</td>
                     <td style={styles.centerText}>4</td>
                     <td style={styles.centerText}>5</td>
                     <td style={styles.centerText}>6</td>
                     <td style={styles.centerText}>7</td>
                     <td style={styles.centerText}>8</td>
                     <td style={styles.centerText}>9</td>
                     <td style={styles.centerText}>10</td>
                     <td style={styles.centerText}>11</td>
                     <td style={styles.centerText}>12</td>
                     <td style={styles.centerText}>13</td>
                     <td style={styles.centerText}>14</td>
                     <td style={styles.centerText}>15</td>
                     <td style={styles.centerText}>16</td>
                     <td style={styles.centerText}>17</td>
                     <td style={styles.centerText}>18</td>
                     <td style={styles.centerText}>19</td>
                     <td style={styles.centerText}>20</td>
                     <td style={styles.centerText}>21</td>
                     <td style={styles.centerText}>22</td>
                     <td style={styles.centerText}>23</td>
                     <td style={styles.centerText}>24</td>
                     <td style={styles.centerText}>25</td>
                     <td style={styles.centerText}>26</td>
                     <td style={styles.centerText}>27</td>
                     <td style={styles.centerText}>28</td>
                     <td style={styles.centerText}>29</td>
                     <td style={styles.centerText}>30</td>
                     <td style={styles.centerText}>31</td>
                     <td style={styles.centerText}>32</td>
                     <td style={styles.centerText}>33</td>
                  </tr>
                  {cabinets?.map((cabinet, index) => {
                     return (
                        <tr key={index}>
                           <td style={styles.leftText}>{cabinet?.name}</td>
                           <td style={styles.centerText}>{index + 1}</td>
                           {getAll(cabinet.name)}
                           {Object.entries(list)?.map(([key2, value], index1) => {
                              return (
                                 <td key={`${index} - ${index1}`} style={styles.centerText}>
                                    {value?.[`${cabinet.name}`]?.MAN}
                                 </td>
                              );
                           })}
                           {Object.entries(list)?.map(([key2, value], index1) => {
                              return (
                                 <td key={`${index} - ${index1 + 1}`} style={styles.centerText}>
                                    {value?.[`${cabinet.name}`]?.WOMAN}
                                 </td>
                              );
                           })}
                        </tr>
                     );
                  })}
               </tbody>
            </Table>
            <div style={styles.leftText}>
               <b>Баганы дагуу:</b> 1=(2+3); 2=(4+6+8+10+12+14+16+18+20+22+24+26+28+30+32);
               3=(5+7+9+11+13+15+17+19+21+23+25+27+29+31+33)
            </div>
            <div style={styles.leftText}>
               <b>Мөрийн дагуу:</b> 23=(1+...+22)
            </div>
         </div>
      </div>
   );
}

export default EMT201_4_2;
