"use strict";
(() => {
var exports = {};
exports.id = 229;
exports.ids = [229,87,471];
exports.modules = {

/***/ 53:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./assets/images/home-banner-1.png
/* harmony default export */ const home_banner_1 = ({"src":"/_next/static/media/home-banner-1.bfe82633.png","height":188,"width":540,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AfXz//3p9vEC9QH+ACEMEQD59/sA+vv8AAgICAADAwH+AeLd6P+5yr4AHSopACwXHQAGAxMA8/T+AAQEAQAODgEAAevs9/3Fkn8CFPrLAB9inQARHCEA/v39AAICAwD////+k+4ppbQHy98AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./assets/images/home-banner-2.png
/* harmony default export */ const home_banner_2 = ({"src":"/_next/static/media/home-banner-2.446b5858.png","height":188,"width":540,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Afzu5v326ucC9vDwABAiJgADBAUA+Pf4AAoKCAACAwT+AenRx//GrpMAw8ymAFBoqQA9Oj0A/fHuAAIEBQAADhAAAc7Bsv2TiVcC+xP3AFhKkwBLTVwA/f39AAMDAgD////+hhsqjziJvFsAAAAASUVORK5CYII="});
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(66);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(725);
// EXTERNAL MODULE: ./assets/images/logo.png
var logo = __webpack_require__(203);
;// CONCATENATED MODULE: ./assets/images/avatar.png
/* harmony default export */ const avatar = ({"src":"/_next/static/media/avatar.09d1db51.png","height":54,"width":54,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+Af//7hW+1wRzzOsCSwAEBwUB+/kAAAAB+zsZ/rY6JvmMAdTi84me3gVtjur5CQDAuAAA6eEAAC07ABstMveqLvuSAb3Z9NPk/Qsssr7A/vdsQQEOMAAAydAA/9+V1QKKNyfUAavV9tjV+QknyaaS/yPBcQEoLUwAbJ6y/w1mkAGMZmLZAbLS6tgF/vgnm4qD//OmmwExTUYAirO6/0d6ngFvYVvZAa7I29P0384swa2w/jcvLwGVy98ARU9T/woiLQI0HhTUAeTh4oiOhohuKSY4CTUrIgChyNMAGFNiAA4EAvc6DPaTAf///xXIytF08ObtSiAYDwX1CBAA6gkS+yAOBbUpFfqN4GF6X1SlS6oAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/Navbar.tsx






const Navbar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: " border-b",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container m-auto flex h-[80px] w-full items-center justify-start px-3 md:px-0",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "app-brand flex flex-1 md:flex-initial",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: logo/* default */.Z
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "app-search relative ml-10 hidden items-center md:flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                            placeholder: "Search",
                            className: "search-box"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(icons_.SearchOutlined, {
                            className: "absolute right-[10px]"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "hidden flex-1 items-center justify-end md:flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mr-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "",
                                className: "font-semibold text-gray-800 hover:text-primary",
                                children: "Restaurants"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mr-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "",
                                className: "font-semibold text-gray-800 hover:text-primary",
                                children: "Deals"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mr-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "",
                                className: "font-semibold text-gray-800 hover:text-primary",
                                children: "My Orders"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative mr-6 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-xl border-primary-light bg-primary-light",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(icons_.ShoppingCartOutlined, {
                            className: " text-xl font-semibold text-primary",
                            style: {
                                color: "#4E60FF"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "absolute top-[-5px] right-[-8px] w-[20px] rounded-md bg-primary text-center text-sm text-white",
                            children: "4"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: avatar,
                    width: "50",
                    height: "50",
                    className: "cursor-pointer"
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Layout.tsx


const Layout = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "px flex flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container m-auto mt-5 px-3 md:px-0",
                children: props.children
            })
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./data/products.json
const products_namespaceObject = JSON.parse('[{"title":"Royal Sushi Houese","time":"30-40 min","price":"32","priceType":"$","img":null,"categories":[{"id":"1","name":"Sushi"},{"id":"1","name":"Pizza"}]},{"title":"Royal Sushi Houese","time":"30-40 min","price":"32","img":null,"priceType":"$","categories":[{"id":"1","name":"Sushi"}]},{"title":"Royal Sushi Houese","time":"30-40 min","price":"32","priceType":"$","img":null,"categories":[{"id":"1","name":"Sushi"},{"id":"1","name":"Pizza"}]},{"title":"Royal Sushi Houese","time":"30-40 min","price":"32","img":null,"priceType":"$","categories":[{"id":"1","name":"Sushi"}]},{"title":"Royal Sushi Houese","time":"30-40 min","price":"32","priceType":"$","img":null,"categories":[{"id":"1","name":"Sushi"},{"id":"1","name":"Pizza"}]},{"title":"Royal Sushi Houese","time":"30-40 min","price":"32","img":null,"priceType":"$","categories":[{"id":"1","name":"Sushi"}]}]');
// EXTERNAL MODULE: ./pages/home/components/ProductCard.tsx + 2 modules
var ProductCard = __webpack_require__(868);
// EXTERNAL MODULE: ./pages/api/clientRequest.ts
var clientRequest = __webpack_require__(546);
;// CONCATENATED MODULE: ./pages/home/index.tsx









const Home = ()=>{
    const { 0: categories , 1: setCategories  } = (0,external_react_.useState)([]);
    const basePath = "/assets/images/categories/";
    const { 0: selectedCategories , 1: setSelectedCategories  } = (0,external_react_.useState)([]);
    const { 0: products , 1: setProducts  } = (0,external_react_.useState)(products_namespaceObject);
    (0,external_react_.useEffect)(()=>{
        getCategory();
        console.log();
    }, []);
    const getCategory = async ()=>{
        const { data  } = await (0,clientRequest/* post */.v)("category", null);
        if (data.length) setCategories(data);
    };
    const handleCategoryClick = (category)=>{
        const newSelectedCategories = selectedCategories.includes(category) ? selectedCategories.filter((c)=>c !== category
        ) : [
            ...selectedCategories,
            category
        ];
        setSelectedCategories(newSelectedCategories);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Layout, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-wrap items-center justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "home-banner mb-3 h-[200px] md:h-[200px]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: home_banner_1
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "home-banner h-[200px] md:h-[200px]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: home_banner_2
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-10 flex flex-wrap items-center justify-center md:justify-between",
                children: categories.map((category)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        onClick: ()=>handleCategoryClick(category.name)
                        ,
                        className: `mr-2 mb-2 h-[70px] w-[70px] cursor-pointer rounded-xl border py-4 text-center hover:border-primary hover:bg-primary-light md:h-[80px] md:w-[150px] ${selectedCategories.includes(category.name) ? " border-2 border-primary bg-primary-light" : ""}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    src: `/categories/${category.name}.png`,
                                    width: 20,
                                    height: 20
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "mb-0",
                                children: category.name
                            })
                        ]
                    });
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "mb-4 text-xl",
                        children: "Nearyby Restuarants"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-wrap",
                        children: products.map((product)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(ProductCard["default"], {
                                ...product
                            });
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const home = (Home);


/***/ }),

/***/ 66:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,980,868], () => (__webpack_exec__(53)));
module.exports = __webpack_exports__;

})();