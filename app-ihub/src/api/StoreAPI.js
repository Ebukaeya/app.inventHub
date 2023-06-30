/* all endpoint consuming the Store API*/

 const root = process.env.REACT_APP_STORE_API_ROOT;

 export const fetchStoresEnpoint = `${root}/getStores`; 
 export const updateOnlineVisitorsUrl = `${root}/updateOnlineVisitors/`; /* + storeID */

 export const fetchStoreProductsEnpoint = `${root}/getStoreProducts/`; /* + storeID */

 export const makePurchaseFromCheckOutUrl = `${root}/makePurchaseFromCheckOutUrl/`; /* + storeID */

 export const raiseDisputeUrl = `${root}/raiseDispute/`;
 export const resolveDisputeUrl = `${root}/resolveDispute/`;