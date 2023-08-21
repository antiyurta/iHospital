import React from 'react';

export default function GeneticQuestion(props) {
   return (
      <div>
         {props.data?.hasOwnProperty('painDesc') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Удамд ижил өвчтэй хүн байсан уу:</p>
               <p className="">{props.data['painDesc']}</p>
            </div>
         ) : null}
         {props.data?.hasOwnProperty('geneticPainDesc') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Гэр бүл, хамаатан саданд удамшлын өвчтэй хүн байгаа эсэх:</p>
               <p className="">{props.data['geneticPainDesc']}</p>
            </div>
         ) : null}
      </div>
   );
}
