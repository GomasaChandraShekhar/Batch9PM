import { test, expect } from '@playwright/test';

test( "Handling mouse Actions", async ( { page } ) => {

    await page.goto( 'https://testautomationpractice.blogspot.com/' );
    await page.waitForLoadState( 'domcontentloaded' );
    await page.pause()
    
    const blogLink = page.getByText( 'Blog' );
    const homeLink = page.getByText( 'Home' );
    const uploadFileBtn = page.getByRole( 'button', { name: 'Upload Single File' } );
    const dblclickEle = page.getByText('Dynamic Button');

    // hover on element
    // await homeLink.first().hover();
    // await blogLink.first().hover();
    // await uploadFileBtn.hover();


    // Right Click
    // await blogLink.first().hover();
    // await blogLink.first().click( { button: 'right' } ); // To perform right click
    
    // window.addEventListener( 'keydown', ( event: KeyboardEvent ) => {
    //     event.key === 'ArrowDown';
    //     event.key === 'Enter';

    //     // if ( event.key === 'Enter' ) {
    //     //     console.log( 'Enter key was pressed' );
    //     // }
    // } );

    // Double Click
    // await dblclickEle.dblclick({position: {x: 20, y:0}});

    // Drag and Drop 
    const source = page.locator( 'div#draggable' ); 
    const target = page.locator( 'div#droppable' ); 

    await source.dragTo(target);


    await page.close();

} );