import instance from "../utils/request"
import base from "./path";

const api = {
    getWeb(){
        return instance.get(base.baseUrl+base.jtr);
    }
}

export default api;