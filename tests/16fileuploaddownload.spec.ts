import { test, expect } from '@playwright/test';

test.skip( "Upload file", async ( { page } ) => {

    await page.goto( 'https://testautomationpractice.blogspot.com/' );
    await page.pause();

    const singleFile = page.locator( 'input#singleFileInput' );
    const uploadSingleFileBtn = page.getByText( 'Upload Single File' );
    const singleFileStatus = page.locator( 'p#singleFileStatus' );

    const multipleFiles = page.locator( 'input#multipleFilesInput' );
    const uploadMultipleFilesBtn = page.getByText( 'Upload Multiple Files' );
    const multipleFileStatus = page.locator( 'p#multipleFilesStatus' );

    await singleFile.setInputFiles( './RunningNotes.txt' );
    await uploadSingleFileBtn.click();
    await expect.soft( singleFileStatus ).toContainText( 'RunningNotes.txt' );

    await multipleFiles.setInputFiles( [ './RunningNotes.txt', './TS/04Loops.ts' ] );
    await uploadMultipleFilesBtn.click();
    await expect.soft( multipleFileStatus ).toContainText( 'RunningNotes.txt' );
    await expect.soft( multipleFileStatus ).toContainText( '04Loops.ts' );

    await page.close();

} );


test( "Download File", async ( { page } ) => {

    await page.goto( 'https://testautomationpractice.blogspot.com/p/download-files_25.html' );
    await page.pause();

    const fileText = page.locator( 'textarea#inputText' );
    const generateTxt = page.locator( 'button#generateTxt' );
    const txtDownloadLink = page.locator( 'a#txtDownloadLink' );
    const generatePdf = page.locator( 'button#generatePdf' );
    const pdfDownloadLink = page.locator( 'a#pdfDownloadLink' );


    await fileText.fill( 'Download sample file.' );
    await generateTxt.click();

    const download = await Promise.all( [
        page.waitForEvent( 'download' ),
        txtDownloadLink.click()
    ] )
    
    const fileName = download[ 0 ].suggestedFilename();
    await download[ 0 ].saveAs(fileName);






} );