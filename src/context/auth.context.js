import { createContext } from "react";
function noop() {}

export default createContext({
  token: null,
  expires: null,
  roles: [],
  full_name: "",
  email: "",
  user_id: "",
  login: noop,
  logout: noop,
  isAuthenticated: false,
  master_info: {}, //only for master
});

// {
//     "token": "",
//     "token_type": "Bearer",
//     "expires": "2021-09-18 13:32:51",
//     "roles": [
//         "customer",
//         "master"
//     ],
//     "full_name": "Meta M.",
//     "email": "metamaster@gmail.com",
//     "user_id": 938,
//     "master_info": {
//         "master_reviews_count": 0,
//         "master_rating": 0,
//         "reg_step": 1
//     }
// }

// {
//     "token": "",
//     "token_type": "Bearer",
//     "expires": "2021-09-18 15:17:03",
//     "roles": [
//         "customer"
//     ],
//     "full_name": "Meta C.",
//     "email": "metacustomer@gmail.com",
//     "user_id": 935
// }
