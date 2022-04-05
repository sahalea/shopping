"use strict";
exports.id = 980;
exports.ids = [980];
exports.modules = {

/***/ 203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.88d7ee44.png","height":48,"width":87,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAfklEQVR42mNQVzOsU1ORzldTEU1VU2bK1NSwrWFABiY2U9VMbGc6GFp0R5nYTItXU3czT67+zxKS8Z8drMA75luCd8z3Hu/Yn9Xesb9KgHSWZ9SHGiDO8Yr+5M1g5rxd1NRpi6yp43opQ5sFImZOGyVNnTaL2XqfkLb3vSAJAPgHKItvzNcOAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ post)
/* harmony export */ });
/* unused harmony export get */
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