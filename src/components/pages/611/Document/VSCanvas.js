import React, { useEffect, useRef } from 'react';
function VSCanvas(props) {
   const { data } = props;
   console.log(data);
   const canvas = useRef();
   let ctx = null;
   const oneBoxLength = 645/
   useEffect(() => {
      // dynamically assign the width and height to canvas
      const canvasEle = canvas.current;
      canvasEle.width = 400;
      canvasEle.height = 645;

      // get context of the canvas
      ctx = canvasEle.getContext('2d');
   }, []);

   useEffect(() => {
      drawLine({ x: 0, y: 645, x1: 200, y1: 100 }, { color: 'red' });
   }, []);

   // draw a line
   const drawLine = (info, style = {}) => {
      const { x, y, x1, y1 } = info;
      const { color = 'black', width = 1 } = style;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x1, y1);
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.stroke();
   };
   return <canvas className="absolute border-2 p-0 mt-[90px] ml-[210px]" ref={canvas}></canvas>;
}
export default VSCanvas;
