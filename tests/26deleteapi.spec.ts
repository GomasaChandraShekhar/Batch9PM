import { test, expect } from '@playwright/test';

test("Delete Request", async ({ request }) => {

    const deleteResponse = await request.delete('https://api.restful-api.dev/objects/ff8081819d82fab6019eff8925f95f1b');

    expect.soft(deleteResponse.status()).toBe(200);
    expect.soft(deleteResponse.statusText()).toBe('OK');

    const responseJson: any = await deleteResponse.json();

    expect.soft(responseJson.message).toBe(`Object with id = ff8081819d82fab6019eff8925f95f1b has been deleted.`);
    console.log(responseJson.message);

});

