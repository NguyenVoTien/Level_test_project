import axios from 'axios';
import CsrfToken from 'common/helpers/csrfToken';

const RandomIdDevice = () => {
    return Math.floor(Math.random() * Date.now()).toString(16);
};

const setDeviceIdInLocalStorage = () => {
    let deviceId = localStorage.getItem('device-id');
    if (!deviceId) {
        deviceId = RandomIdDevice();
        localStorage.setItem('device-id', deviceId);
    }

    return deviceId;
};

const API = axios.create({
    baseURL: 'http://103.82.195.138:8000/v1',
    headers: {
        "X-Device-Id": setDeviceIdInLocalStorage(),
        Accept: "application/json, text/plain, /",
        'CSRF-Token': CsrfToken,
    }
});

export default API;