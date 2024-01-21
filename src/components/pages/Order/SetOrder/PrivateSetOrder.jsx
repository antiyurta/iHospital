import React, { useContext, useEffect } from 'react';
import EmrContext from '../../../../features/EmrContext';

const PrivateSetOrder = (props) => {
   const { orders } = props;
   const { setPrivateSetOrderCount } = useContext(EmrContext);
   useEffect(() => {
      setPrivateSetOrderCount(orders?.length || 0);
   }, [orders]);
   return <div>1</div>;
};
export default PrivateSetOrder;
