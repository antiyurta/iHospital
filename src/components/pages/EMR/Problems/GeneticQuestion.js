import React from 'react';

export default function GeneticQuestion(props) {
   return (
      <div>
         {props.data?.hasOwnProperty('isPain') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Удамд ижил өвчтэй хүн байсан уу:</p>
               <p className="">{props.data['isPain']}</p>
            </div>
         ) : null}
         {props.data?.hasOwnProperty('geneticPainDesc') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Удамшлын өвчинүүд:</p>
               <p className="">{props.data['geneticPainDesc']}</p>
            </div>
         ) : null}
      </div>
   );
}
