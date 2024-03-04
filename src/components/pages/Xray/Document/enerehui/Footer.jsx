import React from 'react';
const Footer = () => {
   return (
      <div className="exo-footer">
         <p
            className="text-[10px] text-black"
            style={{
               borderTop: '1px solid black',
               borderBottom: '1px solid black'
            }}
         >
            САНАМЖ: Хэт авиан оношилгооны дүгнэлт нь тухайн багажийн шинжлэх хүрээнд гарч буй бүтцийн өөрчлөлтүүд юм.
            Үүнийг эмчлэгч эмч эмнэлзүйн илрэл, явц, лабораторийн ба үйл ажиллагааны бусад шинжилгээнүүдтэй харьцуулан
            эмнэлзүйн онош, цаашид авах арга хэмжээндээ хэрхэн тусгахаа шийдвэрлэнэ.
         </p>
         <div className="flex flex-row self-end">
            <div className="text-xs text-black">Эмч: _________________ /Н.Билгүүн/</div>
         </div>
      </div>
   );
};
export default Footer;
