import { test, expect } from '@playwright/test';

test.skip("Put Request", async ({ request }) => {

    const putResponse = await request.put('https://api.restful-api.dev/objects/ff8081819d82fab6019eff74a4855efd',
        {
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                "name": "Apple MacBook Pro 26",
                "data": {
                    "year": 2026,
                    "price": 1999.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "2 TB"
                }
            }
        });

    expect.soft(putResponse.status()).toBe(200);
    expect.soft(putResponse.statusText()).toBe('OK');

    const responseJson: any = await putResponse.json();


    console.log(responseJson.id);
    console.log(responseJson.name);
    console.log(responseJson.updatedAt);
    console.log(responseJson.data.year);
    console.log(responseJson.data.price);

    const cpuModel = 'CPU model';
    const hardDiskSize = 'Hard disk size';

    console.log(responseJson.data[cpuModel]);
    console.log(responseJson.data[hardDiskSize]);


});


test("Patch Request", async ({ request }) => {

    const patchResponse = await request.patch('https://api.restful-api.dev/objects/ff8081819d82fab6019eff74a4855efd',
        {
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                "name": "Apple MacBook Pro 26 Update"
            }
        });

    expect.soft(patchResponse.status()).toBe(200);
    expect.soft(patchResponse.statusText()).toBe('OK');

    const responseJson: any = await patchResponse.json();

    console.log(responseJson.id);
    console.log(responseJson.name);
    console.log(responseJson.updatedAt);

});


