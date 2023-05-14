/* all endpoint consuming the Store API*/

 const root = process.env.REACT_APP_STORE_API_ROOT;

 export const fetchStoresEnpoint = `${root}/getStores`; 

 export const fetchStoreProductsEnpoint = `${root}/getStoreProducts/`; /* + storeID */