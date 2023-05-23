
const api = process.env.REACT_APP_CONSUMERSERVER_ROOT

export const signUpUrl = /* "http://localhost:5002/users/signup" */ `${api}consumers/signup` ;

export const updateCartUrl = /* "http://localhost:5002/users/updatecart/" */  `${api}/users/updatecart/`;  /* + user ID */

export const updateProfileAddressUrl = /* "http://localhost:5002/users/updateprofileAddress/" */  `${api}consumers/updateprofileAddress/`; /* + user ID */

export const uploadImageUrl = /* "http://localhost:5002/users/uploadimage/" */ `${api}/users/uploadimage/`; /* + token */

export const updateUserProfile = /* "http://localhost:5002/users/updateprofile/" */ `${api}/users/updateprofile/`; 

export const fetchChatListUrl = /* "http://localhost:5002/users/getchatlist/" */ `${api}chats/getchatlist/`; /* + user ID */