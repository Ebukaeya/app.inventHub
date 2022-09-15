
const api = process.env.REACT_APP_api_root

export const signUpUrl = /* "http://localhost:5002/users/signup" */ `${api}/users/signup` ;

export const updateCartUrl = /* "http://localhost:5002/users/updatecart/" */  `${api}/users/updatecart/`;  /* + user ID */

export const updateProfileAddressUrl = /* "http://localhost:5002/users/updateprofileAddress/" */  `${api}/users/updateprofileAddress/`; /* + user ID */

export const uploadImageUrl = /* "http://localhost:5002/users/uploadimage/" */ `${api}/users/uploadimage/`; /* + token */

export const updateUserProfile = /* "http://localhost:5002/users/updateprofile/" */ `${api}/users/updateprofile/`; 