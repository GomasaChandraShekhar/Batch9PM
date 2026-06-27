import { APIRequestContext } from '@playwright/test';

export default class ApiUtils {

    readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async postRequest(url: string, payLoad: any) {

        const response = await this.request.post(url,
            {
                headers: {
                    "Content-Type": "application/json"
                },
                data: payLoad
            }
        );
        return response;
    }

    async getAllResources(url: string) {

        const response = await this.request.get(url);
        return response;
    }

    async getOneResource(url: string, id: string) {

        const response = await this.request.get(url + '/' + id);
        return response;
    }

    async updateResource(url: string, id: string, payLoad: any) {
        const response = await this.request.put(url + '/' + id,
            {
                headers: {
                    "Content-Type": "application/json"
                },
                data: payLoad
            }
        );
        return response;
    }

    async partialUpdateResource(url: string, id: string, payLoad: any) {
        const response = await this.request.patch(url + '/' + id,
            {
                headers: {
                    "Content-Type": "application/json"
                },
                data: payLoad
            }
        );
        return response;
    }

    async deleteOneResource(url: string, id: string) {

        const response = await this.request.delete(url + '/' + id);
        return response;
    }


}


