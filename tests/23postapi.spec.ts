import { test, expect } from '@playwright/test';

test("Post Request", async ({ request }) => {

    const postResponse = await request.post('https://api.restful-api.dev/objects',
        {
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                "name": "Apple MacBook Post 26",
                "data": {
                    "year": 2026,
                    "price": 1999.99,
                    "CPU model": "Intel Core i26",
                    "Hard disk size": "2 TB"
                }
            }
        }
    );

    expect.soft(postResponse.status()).toBe(200);
    expect.soft(postResponse.statusText()).toBe('OK');


    const responseJson: any = await postResponse.json();

    console.log(responseJson.id);
    console.log(responseJson.name);
    console.log(responseJson.createdAt);
    console.log(responseJson.data.year);
    console.log(responseJson.data.price);

    const cpuModel = 'CPU model';
    const hardDiskSize = 'Hard disk size';

    console.log(responseJson.data[cpuModel]);
    console.log(responseJson.data[hardDiskSize]);





});



