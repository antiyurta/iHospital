import React, { useContext, useState } from 'react';
import collapseIcon from '../../ListOfIssues/collapse.svg';
import expandIcon from '../../ListOfIssues/expand.svg';
import arrowNext from '../../ListOfIssues/arrowNext.svg';
import dayjs from 'dayjs';
import logo from '../../../../../assets/logo/logo.png';
import { ReturnByIdToCode, ReturnByIdToName } from '../../../611/Document/Index';
import { PDFDownloadLink, Font, Document, Page, Text, View, Image } from '@react-pdf/renderer';
import EmrContext from '../../../../../features/EmrContext';

Font.register({
   family: 'Open Sans',
   fonts: [
      { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
      { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600 }
   ]
});

const test = 'asdasdasdasdasd';

const MyDoc = () => (
   <Document>
      <Page
         style={{
            padding: '1cm',
            fontFamily: 'Open Sans'
         }}
      >
         <View
            style={{
               width: '100%',
               display: 'flex',
               flexDirection: 'column'
            }}
         >
            <View
               style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end'
               }}
            >
               <Text>Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны</Text>
               <Text>өдрийн А/611 дүгээр тушаалын арваннэгдүгээр хавсралт</Text>
               <Text
                  style={{
                     fontWeight: 'bold'
                  }}
               >
                  Эрүүл мэндийн бүртгэлийн маягт СТ-1
               </Text>
            </View>
            <View
               style={{
                  textAlign: 'center'
               }}
            >
               <Text>ӨВЧНИЙ ТҮҮХ №</Text>
            </View>
            <View
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'nowrap'
               }}
            >
               <View
                  style={{
                     flexBasis: '50%'
                  }}
               >
                  <Image
                     style={{
                        width: 100
                     }}
                     src={logo}
                  />
               </View>
               <View
                  style={{
                     flexBasis: '50%'
                  }}
               >
                  <Text>{test}</Text>
                  <Text>{dayjs().format('YYYY/MM/DD')}</Text>
               </View>
            </View>
         </View>
      </Page>
      <Page>
         <View>
            <Text>2222</Text>
         </View>
      </Page>
   </Document>
);

const DocumentR = (props) => {
   const { document, index } = props;
   const { setDocumentView } = useContext(EmrContext);
   const [expanded, setExpanded] = useState(false);
   return (
      <>
         <div className="document">
            <div onClick={() => setExpanded(!expanded)} className="header">
               <img src={!expanded ? expandIcon : collapseIcon} alt="triger" />
               <span>{`${index + 1}.`}</span>
               <span className="code">{ReturnByIdToCode(document.documentId)}</span>
               <span>{ReturnByIdToName(document.documentId)}</span>
            </div>
            {expanded ? (
               <>
                  <div className="expandable">
                     <p>{`Огноо: ${dayjs(document.createdAt).format('YYYY/MM/DD')} `}</p>
                     <p>{`Хугацаа: ${dayjs(document.createdAt).format('HH:mm:ss')}`}</p>
                  </div>
                  <div className="description">
                     <div />
                     <button
                        onClick={() => {
                           setDocumentView(true, document);
                        }}
                     >
                        Дэлгэрэнгүй <img src={arrowNext} alt="arr" />
                     </button>
                  </div>
               </>
            ) : null}
            <div
               style={{
                  width: '100%',
                  height: 1,
                  background: '#C9CDD4'
               }}
            />
         </div>
      </>
   );
};
export default DocumentR;
