import axios from "axios";
import { openNotificationWithIcon } from "./utils/helpers";

export default class FetchBase {
    constructUrl = url => `api/${url}`;
    headers = () =>
        localStorage.getItem("accessToken")
            ? {
                  Authorization: `Bearer ${localStorage.getItem("accessToken")}`
              }
            : undefined;

    get = async url => {
        try {
            const res = await axios.get(this.constructUrl(url), {
                headers: this.headers()
            });
            return res.data;
        } catch (e) {
            openNotificationWithIcon("error", e.message);
        }
    };

    post = async (url, params) => {
        try {
            const res = await axios.post(this.constructUrl(url), params, {
                headers: this.headers()
            });
            return res.data;
        } catch (e) {
            openNotificationWithIcon("error", e.response.data.message);
            throw new Error(e.response.data.message);
        }
    };
}
