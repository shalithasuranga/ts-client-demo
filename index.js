"use strict";
System.config({
    baseURL: './node_modules',
    map: {
        "jquery": "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"
    },
    packages: {
        ".": { defaultExtension: "js" }
    }
});
//window.define = System.amdDefine;
// window.require = window.requirejs = System.amdRequire;
System.import('@rbtest/client/api/invoices/invoiceprovider').then((r) => {
    r.InvoiceProvider.get().then((res) => {
        console.log(res);
    });
});
