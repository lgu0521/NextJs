import type { NextPage } from 'next'
import { useState } from 'react';
import useUser from '../data/useUser';

const Login: NextPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const Submit = () =>{
    }
    return (
        <div>
            <label>전화번호</label>
            <input name="phoneNumber" type="number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/><br/>
             <label>인증코드</label>
            <input name="code" type="number" value={code} onChange={(e)=>setCode(e.target.value)}/>
            <button onClick={Submit}>제출</button>
        </div>
    );
};


export default Login;