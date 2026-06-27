import { test, expect, APIRequestContext } from '@playwright/test';
import ApiUtils from '../utils/ApiUtils';

let request: APIRequestContext;
let apiUtils: ApiUtils;
let jsonResponse: any;
let id: string;
const url: string = 'https://api.restful-api.dev/objects';

const postPayload = {
    "name": "Apple MacBook Post 26",
    "data": {
        "year": 2026,
        "price": 1999.99,
        "CPU model": "Intel Core i26",
        "Hard disk size": "2 TB"
    }
};

const putPayload = {
    "name": "Apple MacBook Put 26",
    "data": {
        "year": 2025,
        "price": 1899.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
    }
};

const patchPayload = {
    "name": "Apple MacBook Patch 26",
    "data": {
        "Hard disk size": "3 TB"
    }
};

const cpuModel = 'CPU model';
const hardDiskSize = 'Hard disk size';

test.beforeEach("", async ({ playwright }) => {
    request = await playwright.request.newContext();
    apiUtils = new ApiUtils(request);
});

test("Post Request", async () => {
    const response = await apiUtils.postRequest(url, postPayload);

    expect.soft(response.status()).toBe(200);
    expect.soft(response.statusText()).toBe('OK');

    jsonResponse = await response.json();
    id = jsonResponse.id;
    console.log(jsonResponse.id);
    console.log(jsonResponse.createdAt);

    expect.soft(jsonResponse.name).toBe(postPayload.name);
    console.log(jsonResponse.name);

    expect.soft(jsonResponse.data.year).toBe(postPayload.data.year);
    console.log(jsonResponse.data.year);

    expect.soft(jsonResponse.data.price).toBe(postPayload.data.price);
    console.log(jsonResponse.data.price);

    expect.soft(jsonResponse.data[cpuModel]).toBe(postPayload.data[cpuModel]);
    console.log(jsonResponse.data[cpuModel]);

    expect.soft(jsonResponse.data[hardDiskSize]).toBe(postPayload.data[hardDiskSize]);
    console.log(jsonResponse.data[hardDiskSize]);

});

test.skip("Get all objects", async () => {

    const response = await apiUtils.getAllResources(url);

    expect.soft(response.status()).toBe(200);
    expect.soft(response.statusText()).toBe('OK');

    jsonResponse = await response.json();

    for (const obj of jsonResponse) {
        console.log(obj.id);
        console.log(obj.name);
        console.log(obj.data);
    }

});

test("Get One Object", async () => {
    const response = await apiUtils.getOneResource(url, id);

    expect.soft(response.status()).toBe(200);
    expect.soft(response.statusText()).toBe('OK');

    jsonResponse = await response.json();

    expect.soft(jsonResponse.name).toBe(postPayload.name);
    console.log(jsonResponse.name);

    expect.soft(jsonResponse.data.year).toBe(postPayload.data.year);
    console.log(jsonResponse.data.year);

    expect.soft(jsonResponse.data.price).toBe(postPayload.data.price);
    console.log(jsonResponse.data.price);

    expect.soft(jsonResponse.data[cpuModel]).toBe(postPayload.data[cpuModel]);
    console.log(jsonResponse.data[cpuModel]);

    expect.soft(jsonResponse.data[hardDiskSize]).toBe(postPayload.data[hardDiskSize]);
    console.log(jsonResponse.data[hardDiskSize]);

});

test("Update object data", async () => {

    const response = await apiUtils.updateResource(url, id, putPayload);

    expect.soft(response.status()).toBe(200);
    expect.soft(response.statusText()).toBe('OK');

    jsonResponse = await response.json();

    expect.soft(jsonResponse.name).toBe(putPayload.name);
    console.log(jsonResponse.name);

    expect.soft(jsonResponse.data.year).toBe(putPayload.data.year);
    console.log(jsonResponse.data.year);

    expect.soft(jsonResponse.data.price).toBe(putPayload.data.price);
    console.log(jsonResponse.data.price);

    expect.soft(jsonResponse.data[cpuModel]).toBe(putPayload.data[cpuModel]);
    console.log(jsonResponse.data[cpuModel]);

    expect.soft(jsonResponse.data[hardDiskSize]).toBe(putPayload.data[hardDiskSize]);
    console.log(jsonResponse.data[hardDiskSize]);

    expect.soft(jsonResponse.name).not.toBe(postPayload.name);

    expect.soft(jsonResponse.data.year).not.toBe(postPayload.data.year);

    expect.soft(jsonResponse.data.price).not.toBe(postPayload.data.price);

    expect.soft(jsonResponse.data[cpuModel]).not.toBe(postPayload.data[cpuModel]);

    expect.soft(jsonResponse.data[hardDiskSize]).not.toBe(postPayload.data[hardDiskSize]);

});

test("Partial Update object data", async () => {
    const response = await apiUtils.partialUpdateResource(url, id, patchPayload);

    expect.soft(response.status()).toBe(200);
    expect.soft(response.statusText()).toBe('OK');

    jsonResponse = await response.json();

    expect.soft(jsonResponse.name).toBe(patchPayload.name);
    console.log(jsonResponse.name);

    expect.soft(jsonResponse.data[hardDiskSize]).toBe(patchPayload.data[hardDiskSize]);
    console.log(jsonResponse.data[hardDiskSize]);

});

test("Delete object", async () => {

    const response = await apiUtils.deleteOneResource(url, id);

    expect.soft(response.status()).toBe(200);
    expect.soft(response.statusText()).toBe('OK');

    jsonResponse = await response.json();

    expect.soft(jsonResponse.message).toBe(`Object with id = ${id} has been deleted.`);
    console.log(jsonResponse.message);

});



