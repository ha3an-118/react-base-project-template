import { Api } from "./Api";

export const login = () => {
    return new Promise<{ data: any }>((resolve) => {

        const api = new Api({ path: "/api/v1/user/login", method: "get" });
        return api.call().then((data: any) => {

            return resolve({
                data: {}
            });
        })
    })
}