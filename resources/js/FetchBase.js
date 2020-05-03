import axios from "axios";

export default class FetchBase {
    constructUrl = url => `api/${url}`;
    headers = () =>
        localStorage.getItem("accessToken")
            ? {
                  Authorization: `Bearer ${localStorage.getItem("accessToken")}`
              }
            : undefined;

    get = url => axios.get(this.constructUrl(url), { headers: this.headers() });

    post = (url, params) =>
        axios.post(this.constructUrl(url), params, { headers: this.headers() });
}
