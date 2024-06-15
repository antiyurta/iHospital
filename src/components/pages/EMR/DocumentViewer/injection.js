import React from 'react';

const documentViewerInjection = (html) => {
   const formatMap = {
      '<div class="page">': 'a4',
      '<div class="page-landscape">': 'a4'
   };
   const landscapeMap = {
      '<div class="page">': false,
      '<div class="page-landscape">': true
   };
   function extractAllDivsWithClassTet(html) {
      const startTagPage = '<div class="page">';
      const startTagPageLandscape = '<div class="page-landscape">';
      const endTag = '</div>';
      let results = [];
      let startTag = '';
      let startIndex = 0;
      let startIndexPage = html.indexOf(startTagPage);
      let startIndexPageLandscape = html.indexOf(startTagPageLandscape);
      if (startIndexPage === -1 && startIndexPageLandscape === -1) {
         return results; // No more divs with classes found
      } else if (
         startIndexPage === -1 ||
         (startIndexPageLandscape !== -1 && startIndexPageLandscape < startIndexPage)
      ) {
         startIndex = startIndexPageLandscape;
         startTag = startTagPageLandscape;
      } else {
         startIndex = startIndexPage;
         startTag = startTagPage;
      }
      while (startIndex !== -1) {
         startIndex += startTag.length;
         let openDivs = 1;
         let endIndex = startIndex;
         while (openDivs > 0 && endIndex < html.length) {
            if (html.substr(endIndex, endTag.length) === endTag) {
               openDivs--;
               if (openDivs === 0) {
                  endIndex += endTag.length;
                  break;
               }
            } else if (html.substr(endIndex, 4) === '<div') {
               openDivs++;
            }
            endIndex++;
         }

         results.push({
            body: startTag + html.slice(startIndex, endIndex),
            format: formatMap[startTag],
            landscape: landscapeMap[startTag]
         });
         html = html.slice(0, startIndex - startTag.length) + html.slice(endIndex);
         startIndexPage = html.indexOf(startTagPage);
         startIndexPageLandscape = html.indexOf(startTagPageLandscape);
         if (startIndexPage === -1 && startIndexPageLandscape === -1) {
            return results; // No more divs with classes found
         } else if (
            startIndexPage === -1 ||
            (startIndexPageLandscape !== -1 && startIndexPageLandscape < startIndexPage)
         ) {
            startIndex = startIndexPageLandscape;
            startTag = startTagPageLandscape;
         } else {
            startIndex = startIndexPage;
            startTag = startTagPage;
         }
      }
      return results;
   }

   return extractAllDivsWithClassTet(html);
};
export default documentViewerInjection;
