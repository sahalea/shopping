"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994,565];
exports.modules = {

/***/ 950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "connectToDatabase": () => (/* binding */ connectToDatabase)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/databaseManager.js

let uri = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DB;
let cachedClient = null;
let cachedDb = null;
if (!uri) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}
if (!dbName) {
    throw new Error("Please define the MONGODB_DB environment variable inside .env.local");
}
async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return {
            client: cachedClient,
            db: cachedDb
        };
    }
    const client = await external_mongodb_namespaceObject.MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const db = await client.db(dbName);
    cachedClient = client;
    cachedDb = db;
    return {
        client,
        db
    };
}


/***/ }),

/***/ 87:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _databaseManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(950);

async function handler(req, res) {
    const { db  } = await (0,_databaseManager__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();
    const { username  } = req.body;
    console.log(db);
    const users = await db.collection("user").find({
        username
    }).toArray();
    console.log(users);
    if (users) res.status(200).json({
        status: true,
        data: users[0]
    });
    else res.status(200).json({
        status: false,
        data: {}
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(87));
module.exports = __webpack_exports__;

})();