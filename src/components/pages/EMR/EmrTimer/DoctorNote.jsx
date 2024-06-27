import React from 'react';
import { Box, FlexCol, FlexRow, GridColThree, Paragraph } from '../../611/Components';
import { getAgeYear } from '@Comman/common';
import dayjs from 'dayjs';
const DoctorNote = ({ patient, hospitalName, structure, note }) => {
   const date = dayjs().format('YYYY-MM-DD');
   return (
      <div className="page">
         <div className="subpage w-full">
            <Paragraph
               align="end"
               style={{
                  fontSize: '10pt'
               }}
            >
               Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны
            </Paragraph>
            <Paragraph
               align="end"
               style={{
                  fontSize: '10pt'
               }}
            >
               өдрийн А/611 дүгээр тушаалын арваннэгдүгээр хавсралт
            </Paragraph>
            <Paragraph
               isBold
               align="end"
               style={{
                  fontSize: '10pt'
               }}
            >
               Эрүүл мэндийн бүртгэлийн маягт АМ-20
            </Paragraph>
            <FlexCol gap={8}>
               <Paragraph
                  isBold
                  align="center"
                  style={{
                     fontSize: '12pt'
                  }}
               >
                  АМБУЛАТОРИОР ЭМЧЛҮҮЛЭГСДИЙН КАРТ
               </Paragraph>
               <GridColThree gap={6}>
                  <FlexRow gap={1}>
                     <Paragraph isBold>Эцэг /эх/-ийн нэр:</Paragraph>
                     <Paragraph>{patient.lastName}</Paragraph>
                  </FlexRow>
                  <FlexRow gap={1}>
                     <Paragraph isBold>Нэр:</Paragraph>
                     <Paragraph>{patient.firstName}</Paragraph>
                  </FlexRow>
                  <FlexRow gap={1}>
                     <Paragraph isBold>РД:</Paragraph>
                     <Paragraph>{patient.registerNumber}</Paragraph>
                  </FlexRow>
                  <FlexRow gap={1}>
                     <Paragraph isBold>Нас:</Paragraph>
                     <Paragraph>{getAgeYear(patient.registerNumber)}</Paragraph>
                  </FlexRow>
                  <FlexRow gap={1}>
                     <Paragraph isBold>Хүйс:</Paragraph>
                     <Paragraph>{patient.gender === 1 ? 'Эрэгтэй' : 'Эмэгтэй'}</Paragraph>
                  </FlexRow>
                  <FlexRow gap={1}>
                     <Paragraph isBold>Иргэншил:</Paragraph>
                     <Paragraph>{patient.nationality}</Paragraph>
                  </FlexRow>
                  <FlexRow gap={1}>
                     <Paragraph isBold>Утас:</Paragraph>
                     <Paragraph>{patient.phoneNo}</Paragraph>
                  </FlexRow>
                  <FlexRow gap={1}>
                     <Paragraph isBold>Гэрийн хаяг:</Paragraph>
                     <Paragraph>{patient.bagKhorooName}</Paragraph>
                  </FlexRow>
               </GridColThree>
               <FlexRow gap={1}>
                  <Paragraph isBold>Өвчний онош:</Paragraph>
                  <Paragraph>DD</Paragraph>
               </FlexRow>
               <div>
                  <FlexRow>
                     <Box top left minWidth={200} maxWidth={200}>
                        <Paragraph align="center">Сар, өдөр</Paragraph>
                     </Box>
                     <Box top left right width={'100%'}>
                        <Paragraph align="center">Эмчийн үзлэг</Paragraph>
                     </Box>
                  </FlexRow>
                  <FlexRow>
                     <Box top left bottom minWidth={200} maxWidth={200}>
                        <FlexCol gap={4}>
                           <Paragraph>Эмнэлэг: {hospitalName}</Paragraph>
                           <Paragraph>Тасаг: {structure.name}</Paragraph>
                           <Paragraph>Эмч: </Paragraph>
                           <Paragraph>Огноо:{date} </Paragraph>
                        </FlexCol>
                     </Box>
                     <Box top left right bottom width={'100%'}>
                        <Paragraph isBold>Зовиур:</Paragraph>
                        <Paragraph>{note.pain?.['Зовиур']}</Paragraph>
                        <Paragraph isBold>Асуумж:</Paragraph>
                        <Paragraph>{note.question?.['Асуумж']}</Paragraph>
                        <Paragraph isBold>Бодит үзлэг:</Paragraph>
                        <Paragraph>{note.inspection?.['Бодит үзлэг']}</Paragraph>
                        <Paragraph isBold>Төлөвлөгөө:</Paragraph>
                        <Paragraph>{note.plan?.['Төлөвлөгөө']}</Paragraph>
                     </Box>
                  </FlexRow>
               </div>
            </FlexCol>
         </div>
      </div>
   );
};
export default DoctorNote;
