import axios from "axios";

interface Body {
    phoneNumber: string,
    code: string
}

const GetToken = async (data: Body) => {
    try {
        const res = await axios.post('http://api.stage.groun-di.com/auth/verify', data);
        return res;
    } catch (e) {
        console.log(e);
        return e;
    }
};

export default GetToken