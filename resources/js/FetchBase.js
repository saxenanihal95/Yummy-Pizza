import axios from "axios";

export default class FetchBase {
    constructUrl = url => `api/${url}`;
    get = url => axios.get(this.constructUrl(url));
}
