import jwtInterceopter from '../../components/jwtInterceopter';
class Country {
   async post(civilID, { citizenFingerprint, citizenRegnum }, { operatorFingerprint, operatorRegnum }) {
      return await jwtInterceopter.post('xyp', {
         civilID,
         citizen: {
            fingerprint: citizenFingerprint,
            regnum: citizenRegnum
         },
         operator: {
            fingerprint: operatorFingerprint,
            regnum: operatorRegnum
         }
      });
   }
}
export default new Country();
