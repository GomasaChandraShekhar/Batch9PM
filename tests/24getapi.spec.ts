import { test, expect } from '@playwright/test';

test.skip("Get Request All Objects", async ({ request }) => {

    const getResponse = await request.get('https://api.restful-api.dev/objects');

    expect.soft(getResponse.status()).toBe(200);
    expect.soft(getResponse.statusText()).toBe('OK');

    const responseJson: any = await getResponse.json();


    console.log(responseJson[0].id);
    console.log(responseJson[0].name);
    console.log(responseJson[0].data.color);
    console.log(responseJson[0].data.capacity);

});

test("Get One Object", async ({ request }) => {

    const getResponse = await request.get('https://api.restful-api.dev/objects/12');

    expect.soft(getResponse.status()).toBe(200);
    expect.soft(getResponse.statusText()).toBe('OK');

    const responseJson: any = await getResponse.json();

    console.log(responseJson.id);
    console.log(responseJson.name);
    console.log(responseJson.data.Generation);
    console.log(responseJson.data.Price);
    console.log(responseJson.data.Capacity);

});

