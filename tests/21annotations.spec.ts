import { test } from '@playwright/test';

// test.describe.configure( { mode: 'default' } );

test( "Test01", { tag: [ '@Sanity', '@Regression' ] }, async () => {
    console.log( 'Test 01' );
} );

test( "Test02", { tag: [ '@Smoke', '@Stage' ] }, async () => {
    console.log( 'Test 02' );
} );

test( "Test03", { tag: [ '@Smoke', '@Regression' ] }, async () => {
    console.log( 'Test 03' );
} );

test( "Test04", { tag: [ '@Smoke', '@Sanity' ] }, async () => {
    console.log( 'Test 04' );
} );

test( "Test05", { tag: [ '@Smoke', '@Regression' ] }, async () => {
    console.log( 'Test 05' );
} );

test( "Test06", { tag: [ '@Smoke', '@Sanity' ] }, async () => {
    console.log( 'Test 06' );
} );

test( "Test07", { tag: [ '@Smoke', '@Sanity' ] }, async () => {
    console.log( 'Test 07' );
} );

