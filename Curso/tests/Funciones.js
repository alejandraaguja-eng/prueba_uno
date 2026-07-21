const { test, expect } = require('@playwright/test');

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

exports.FJ=class FJ{

    constructor(page){
        this.page=page;
    }

}
