import FetchBase from "../FetchBase";
import { observable, values } from "mobx";

export default class AuthStore extends FetchBase {
    @observable modalVisible = false;
    @observable isLogin = true;
    @observable loginLoading = false;
    @observable registerLoading = false;

    setModalVisible = visible => (this.modalVisible = visible);

    setIsLogin = isLogin => (this.isLogin = isLogin);

    login = async ({ email, password }) => {
        try {
            this.loginLoading = true;
            const { data } = await this.post("auth/login", {
                email,
                password
            });
            localStorage.setItem("accessToken", data.access_token);
            this.loginLoading = false;
        } catch (e) {
            console.log(e);
            this.loginLoading = false;
        }
    };

    register = async ({ name, email, password, password_confirmation }) => {
        try {
            this.registerLoading = true;
            const { data } = await this.post("auth/signup", {
                name,
                email,
                password,
                password_confirmation
            });
            localStorage.setItem("accessToken", data.access_token);
            this.registerLoading = false;
        } catch (e) {
            console.log(e);
            this.registerLoading = false;
        }
    };
}
