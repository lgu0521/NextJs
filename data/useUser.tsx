import useSWR from 'swr';
import GetToken from '../api/UserApi';
import clientAPI from '../api/AxiosConfig';

const onLogin = () => {
    const { data, mutate, error } = useSWR("login", GetToken);

    const loading = !data && !error;
    const loggedOut = error && error.status === 403;

    return onLoginSuccess;
}

const onLoginSuccess = ({ accessToken, refreshToken }: Token) => {
    clientAPI.defaults.headers.authorization = `Bearer ${accessToken}`;
}

interface Token {
    accessToken: string,
    refreshToken: string
}
export default { onLogin, onLoginSuccess }