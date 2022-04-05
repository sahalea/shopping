"use strict";
(() => {
var exports = {};
exports.id = 342;
exports.ids = [342];
exports.modules = {

/***/ 209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "post": () => (/* binding */ post)
/* harmony export */ });
let BASE_URL = "/api/";
const makeRequest = (config)=>{
    const url = `${BASE_URL}${config.url}`;
    let requestConfig = {};
    requestConfig = {
        method: config.method,
        mode: "cors",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    };
    const { params  } = config;
    if (params) {
        if (config.method === "POST" || config.method === "PUT" || config.method === "PATCH" || config.method === "DELETE") {
            requestConfig.body = JSON.stringify(params);
        }
    }
    return withTimeout(5000, fetch(url, requestConfig).then((response)=>{
        return response.json();
    }).catch((err)=>{
        console.error(err);
    }));
};
function withTimeout(msecs, promise) {
    const timeout = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject(new Error("timeout"));
        }, msecs);
    });
    return Promise.race([
        timeout,
        promise
    ]);
}
const get = (url, params)=>{
    return makeRequest({
        url,
        params,
        method: "GET"
    });
};
const post = (url, params)=>{
    return makeRequest({
        url,
        params,
        method: "POST"
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(209));
module.exports = __webpack_exports__;

})();