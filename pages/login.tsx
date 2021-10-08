// import type { NextPage } from 'next'
// import { useState } from 'react';
// import clientAPI from '../api/AxiosConfig';

// clientAPI.defaults.baseURL = "http://api.stage.groun-di.com";
// clientAPI.defaults.withCredentials = true;

// const Login: NextPage = () => {
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [code, setCode] = useState('');
//     const Submit = async () => {
//         const data = {
//             phoneNumber:"01042051236",
//             code: "010317"
//         }
//         try {
//             const res = await clientAPI.post('/auth/verify', data);
//             console.log(res);
//             if (clientAPI.defaults.headers) {
//                 clientAPI.defaults.headers.authorization = `Bearer ${res.data['accessToken']}`;
//             };
//         } catch (e) {
//             console.log(e);
//             return e;
//         }
//     }
//     return (
//         <div>
//             <label>전화번호</label>
//             <input name="phoneNumber" type="number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/><br/>
//              <label>인증코드</label>
//             <input name="code" type="number" value={code} onChange={(e)=>setCode(e.target.value)}/>
//             <button onClick={Submit}>제출</button>
//         </div>
//     );
// };

// interface Token {
//     accessToken: string,
//     refreshToken: string
// }


// export default Login;

import React from 'react';

const login = () => {
    return (
        <div>
            
        </div>
    );
};

export default login;