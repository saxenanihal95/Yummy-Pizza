import FetchBase from "../FetchBase";
import { observable, values, computed } from "mobx";
import { openNotificationWithIcon } from "../utils/helpers";

export default class AuthStore extends FetchBase {
    @observable modalVisible = false;
    @observable isLogin = true;
    @observable loginLoading = false;
    @observable registerLoading = false;
    @observable user = {};
    @observable isAuthenticated = localStorage.getItem("accessToken");

    setModalVisible = visible => (this.modalVisible = visible);

    setIsLogin = isLogin => (this.isLogin = isLogin);

    login = async ({ email, password }) => {
        try {
            this.loginLoading = true;
            const data = await this.post("auth/login", {
                email,
                password
            });

            localStorage.setItem("accessToken", data.access_token);
            this.isAuthenticated = true;
            this.getAuthenticatedUser();
            this.loginLoading = false;
            this.modalVisible = false;
        } catch (e) {
            this.loginLoading = false;
        }
    };

    register = async ({ name, email, password, password_confirmation }) => {
        try {
            this.registerLoading = true;
            const data = await this.post("auth/signup", {
                name,
                email,
                password,
                password_confirmation
            });
            openNotificationWithIcon("success", data.message);
            this.modalVisible = false;
            this.registerLoading = false;
        } catch (e) {
            this.registerLoading = false;
        }
    };

    getAuthenticatedUser = async () => {
        try {
            const data = await this.get("auth/user");
            this.user = data;
        } catch (e) {}
    };

    logout = async () => {
        try {
            const data = await this.get("auth/logout");
            this.isAuthenticated = false;
            localStorage.removeItem("accessToken");
        } catch (e) {}
    };
}
