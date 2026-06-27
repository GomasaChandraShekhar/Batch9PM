import { test, expect } from '@playwright/test';


test( "Download File", async ( { page } ) => {

    await page.goto( 'https://the-internet.herokuapp.com/download' );
    await page.pause();

    const textFile = page.getByText( 'sample.txt' );
    const pdfFile = page.getByText( 'Test Report for Test Run - TestNG cURL - sample-test #1.pdf' );
    const excelFile = page.getByText( 'Excel.xlsx' );

    const [download] = await Promise.all(
        [
            page.waitForEvent( 'download' ),
            textFile.first().click()
        ]
    )
        const fileName = download.suggestedFilename();
    await download.saveAs( 'downloads/' + fileName );

} );