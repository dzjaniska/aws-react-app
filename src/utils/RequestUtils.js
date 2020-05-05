import axios from 'axios'
import Auth from '../auth'
import SnackBar from "../components/snackbar/SnackBar";

const BASE_URL = "/api";
export const CANCELED_REQUEST = "CANCELED_REQUEST";

export default class Cancel {

    static cancelToken = axios.CancelToken;
    static sources = [];

    static cancel = () => {
        Cancel.sources.forEach(source => source.cancel(CANCELED_REQUEST));
        Cancel.sources = [];
    };

    static addSource = (source) => {
        Cancel.sources.push(source)
    }
}

const getConfig = async () => {

    const config = {
        headers: {},
        params: {},
        cancelToken: undefined
    };

    const token = await Auth.getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};

export const postRequest = async ({path, data, successMessage, errorMessage}) => {
    const config = await getConfig();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useCancel(config);
    return submitRequest(axios.post(buildUrl(path), data, config), successMessage, errorMessage);
};

export const putRequest = async ({path, data, successMessage, errorMessage}) => {
    const config = await getConfig();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useCancel(config);
    return submitRequest(axios.put(buildUrl(path), data, config), successMessage, errorMessage);
};

export const patchRequest = async ({path, data, successMessage, errorMessage}) => {
    const config = await getConfig();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useCancel(config);
    return submitRequest(axios.patch(buildUrl(path), data, config), successMessage, errorMessage);
};

export const getRequest = async ({path, data, successMessage, errorMessage}) => {
    const config = await getConfig();
    config.params = {...data};
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useCancel(config);
    return submitRequest(axios.get(buildUrl(path), config), successMessage, errorMessage);
};

export const deleteRequest = async ({path, data, successMessage, errorMessage}) => {
    const config = await getConfig();
    config.params = {...data};
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useCancel(config);
    return submitRequest(axios.delete(buildUrl(path), config), successMessage, errorMessage);
};

const buildUrl = (path) => {
    if (path.indexOf('http') > -1) {
        return path;
    } else {
        return BASE_URL + path;
    }
};

const useCancel = (config) => {
    const source = Cancel.cancelToken.source();
    Cancel.addSource(source);
    config.cancelToken = source.token;
};

const submitRequest = (request, successMessage, errorMessage) => {
    return request.then(response => {
        if (successMessage) {
            SnackBar.success(({message: successMessage}));
        }
        return response;
    }).catch((error) => {
        if (error.message !== CANCELED_REQUEST && errorMessage !== null) {
            SnackBar.error(({message: errorMessage}));
        }
        return Promise.reject(error.response);
    })
};

export const defaultCatch = (e) => {
    console.debug(e?.message)
};
