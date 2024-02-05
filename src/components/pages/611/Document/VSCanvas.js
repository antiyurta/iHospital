import React, { useEffect, useRef } from 'react';
function VSCanvas(props) {
   const { data } = props;
   const canvas = useRef();
   let ctx = null;
   const startX = 275;
   const lineCount = 58;
   const canvasWidth = 752;
   const canvasHeight = 697;
   const oneBoxLength = canvasHeight / lineCount;
   useEffect(() => {
      const canvasEle = canvas.current;
      canvasEle.width = canvasWidth;
      canvasEle.height = canvasHeight;
      ctx = canvasEle.getContext('2d');
   }, []);

   const calcPulse = (pulse, state, x) => {
      const newPulse = pulse - 40;
      return {
         x: state ? startX : x + 50,
         y: canvasHeight - ((newPulse * 58) / 116) * oneBoxLength
      };
   };
   const calcBreath = (breath, state, x) => {
      return {
         x: state ? startX : x + 50,
         y: canvasHeight - breath * oneBoxLength
      };
   };
   const calcTemp = (temp, state, x) => {
      const newTemp = temp - 35;
      return {
         x: state ? startX : x + 50,
         y: canvasHeight - ((newTemp * 58) / 5.8) * oneBoxLength
      };
   };

   useEffect(() => {
      var pulseStartX = 0;
      var pulseStartY = 695;
      var breathStartX = 85;
      var breathStartY = 695;
      var tempStartX = 170;
      var tempStartY = 695;
      const allData = data?.flatMap((first) => first ?? []);
      allData?.map((item, index) => {
         const pulse = calcPulse(item.data?.pulse, index === 0 ? true : false, pulseStartX);
         drawLine({ x: pulseStartX, y: pulseStartY, x1: pulse.x, y1: pulse.y }, { color: 'red', width: 4 });
         const breath = calcBreath(item.data?.respiratoryRate, index === 0 ? true : false, breathStartX);
         drawLine({ x: breathStartX, y: breathStartY, x1: breath.x, y1: breath.y }, { color: 'blue', width: 3 });
         const temp = calcTemp(item.data?.temp, index === 0 ? true : false, tempStartX);
         drawLine({ x: tempStartX, y: tempStartY, x1: temp.x, y1: temp.y }, { color: 'black', width: 2 });
         pulseStartX = pulse.x;
         pulseStartY = pulse.y;
         breathStartX = breath.x;
         breathStartY = breath.y;
         tempStartX = temp.x;
         tempStartY = temp.y;
      });
   }, []);

   // draw a line
   const drawLine = (info, style = {}) => {
      const { x, y, x1, y1 } = info;
      const { color = 'black', width = 2 } = style;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x1, y1);
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.stroke();
   };
   return <canvas className="absolute p-0 mt-[220px] ml-[20px]" ref={canvas}></canvas>;
}
export default VSCanvas;
