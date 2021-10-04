import axios from 'axios';

// const clientAPI = axios.create({
//     baseURL: "",
//     withCredentials: true,
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     }
//   });

const clientAPI = axios.create({
  baseURL: "",
  withCredentials: true
});

export default clientAPI;