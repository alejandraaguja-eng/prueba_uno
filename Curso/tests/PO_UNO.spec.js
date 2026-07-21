// @ts-check
const { test, expect } = require('@playwright/test');
const { FJ } = require('./Funciones_curso')

test('Demo POM', async ({ page }) =>{
    const f=new FJ(page);
    await f.open()
    await f.tiempo(4000)
});
