import axios from "axios";
const base_url = process.env.BASE_URL;

const handleHttpRequest = (method, params, url, token) => {
    switch (method) {
        case "get":
            return handleGetRequest(url, params, token);
        case "post":
            return handlePostRequest(url, params);
        default:
            return;
    }
};

const handleGetRequest = async(url, params, token) => {
    let result = await axios
        .get(base_url + url, params, { cancelToken: token })
        .then(result => result.data)
        .catch(error => {
            return error.toJSON();
        });
    return result;
};

const handlePostRequest = async(url, params, token) => {
    let result = await axios
        .post(base_url + url, params, { cancelToken: token })
        .catch(error => {
            return error.toJSON();
        });
    return result;
};

export default handleHttpRequest;