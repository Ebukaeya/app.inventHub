import { updateProfileAddressUrl } from "./consumerApi";

/* endpionts */
export const token = "8f4baf80fa1f8504cfaae94f82c28d7a3f4049a7";
export const fetchStoresAndProductsUrl =
  "https://ihub.toxsl.in/webstore/api/top-rated-store/";

export const fetchStoreDetailsUrl =
  "https://ihub.toxsl.in/webstore/api/store-product-details/?store_id=";

export const fetchProductDetailsUrl =
  "https://ihub.toxsl.in/webstore/api/product-details/?product_id=";

/* Fetch functions */

export const fetchStores = async () => {
  const endpiont = fetchStoresAndProductsUrl;

  try {
    console.log("i was hit");
    const response = await fetch(endpiont, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return {
        stores: data.data.stores,
      };
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const fetchStoresDetailsFunc = async (storeID) => {
  const endpiont = fetchStoreDetailsUrl + storeID;

  try {
    console.log("i was hit");
    const response = await fetch(endpiont, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return {
        storeDetails: data.data.store,
      };
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchProductsFunc = async (product_id) => {
  const endpiont = fetchProductDetailsUrl + product_id;
  try {
    const response = await fetch(endpiont, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return {
        productDetails: data.data,
      };
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

/* Ihub server */

export const updateProfileAddress = async (id, address) => {
  try {
    let response = await fetch(updateProfileAddressUrl + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(address),
    });
  } catch (error) {
    console.log(error);
  }
};
