import React from 'react';

import Header from './header';
import Footer from './footer';

const UniversalMedIndex = ({ request }) => {
   return (
      <div>
         <div className="laboratory">
            <Header hospital={request?.examinationResult?.hospital} patientData={request.patient} />
            <table className="w-full">
               <thead>
                  <tr>
                     <td>
                        <div className="lab-header-space"></div>
                     </td>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>
                        <div className="lab-page">
                           {Object.entries(request?.examinationResult?.result)?.map(([key, value], index) => (
                              <div key={index} className="flex flex-col gap-1">
                                 <p className="text-[12pt] font-bold">{value?.[0].careTypeName}</p>
                                 <table className="lab">
                                    <thead>
                                       <tr>
                                          <th>Үзүүлэлт</th>
                                          <th>Хариу</th>
                                          <th>Нэгж</th>
                                          <th>Лавлах хэмжээ</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       {value?.map((item, indx) => (
                                          <tr key={indx}>
                                             <td>{item.parameterName}</td>
                                             <td>{item.value}</td>
                                             <td>{item.measurement}</td>
                                             <td>{`${item.low}~${item.high}`}</td>
                                          </tr>
                                       ))}
                                    </tbody>
                                 </table>
                              </div>
                           ))}
                           t is a long established fact that a reader will be distracted by the readable content of a
                           page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                           normal distribution of letters, as opposed to using 'Content here, content here', making it
                           look like readable English. Many desktop publishing packages and web page editors now use
                           Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web
                           sites still in their infancy. Various versions have evolved over the years, sometimes by
                           accident, sometimes on purpose (injected humour and the like). t is a long established fact
                           that a reader will be distracted by the readable content of a page when looking at its
                           layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                           letters, as opposed to using 'Content here, content here', making it look like readable
                           English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                           default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                           infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                           purpose (injected humour and the like). t is a long established fact that a reader will be
                           distracted by the readable content of a page when looking at its layout. The point of using
                           Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                           'Content here, content here', making it look like readable English. Many desktop publishing
                           packages and web page editors now use Lorem Ipsum as their default model text, and a search
                           for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
                           evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the
                           like). t is a long established fact that a reader will be distracted by the readable content
                           of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                           more-or-less normal distribution of letters, as opposed to using 'Content here, content
                           here', making it look like readable English. Many desktop publishing packages and web page
                           editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
                           uncover many web sites still in their infancy. Various versions have evolved over the years,
                           sometimes by accident, sometimes on purpose (injected humour and the like). t is a long
                           established fact that a reader will be distracted by the readable content of a page when
                           looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                           distribution of letters, as opposed to using 'Content here, content here', making it look
                           like readable English. Many desktop publishing packages and web page editors now use Lorem
                           Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
                           still in their infancy. Various versions have evolved over the years, sometimes by accident,
                           sometimes on purpose (injected humour and the like). t is a long established fact that a
                           reader will be distracted by the readable content of a page when looking at its layout. The
                           point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                           opposed to using 'Content here, content here', making it look like readable English. Many
                           desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                           text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                           Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                           (injected humour and the like). t is a long established fact that a reader will be distracted
                           by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                           is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
                           here, content here', making it look like readable English. Many desktop publishing packages
                           and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                           ipsum' will uncover many web sites still in their infancy. Various versions have evolved over
                           the years, sometimes by accident, sometimes on purpose (injected humour and the like). t is a
                           long established fact that a reader will be distracted by the readable content of a page when
                           looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                           distribution of letters, as opposed to using 'Content here, content here', making it look
                           like readable English. Many desktop publishing packages and web page editors now use Lorem
                           Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
                           still in their infancy. Various versions have evolved over the years, sometimes by accident,
                           sometimes on purpose (injected humour and the like). t is a long established fact that a
                           reader will be distracted by the readable content of a page when looking at its layout. The
                           point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                           opposed to using 'Content here, content here', making it look like readable English. Many
                           desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                           text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                           Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                           (injected humour and the like). t is a long established fact that a reader will be distracted
                           by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                           is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
                           here, content here', making it look like readable English. Many desktop publishing packages
                           and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                           ipsum' will uncover many web sites still in their infancy. Various versions have evolved over
                           the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </div>
                     </td>
                  </tr>
               </tbody>
               <tfoot>
                  <tr>
                     <td>
                        <div className="lab-footer-space"></div>
                     </td>
                  </tr>
               </tfoot>
            </table>
            <Footer />
         </div>
      </div>
   );
};
export default UniversalMedIndex;
