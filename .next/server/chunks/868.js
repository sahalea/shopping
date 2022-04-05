"use strict";
exports.id = 868;
exports.ids = [868];
exports.modules = {

/***/ 868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_ProductCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(66);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./assets/images/img mask.png
/* harmony default export */ const img_mask = ({"src":"/_next/static/media/img mask.1d931bda.png","height":160,"width":350,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR4nAGEAHv/AVpcO/oOFAoF/egOAFg3IQAJDQwA4vkMALbAywAmLwj7AXZ0VP/l5/EAKw0VABcYFgALBf4AEg8NALDG3QDe7u0AAU1LQ/8YDQ8AVisNAPgABgD1AgwA0+byAPMKGADh1dMAARwME/8yPzcAHQf8ADgaBQAhIyIA2er4AKfd+wAB6N4ACnMr4EcqlwkAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./assets/images/categories/pizza.png
/* harmony default export */ const pizza = ({"src":"/_next/static/media/pizza.5c68ae93.png","height":24,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7ElEQVR42mPYn8vAxAAE/9+3891eFZB5dorj9gMNhs+2l2qEMMDArWV+EcfaLZ7sKVb7v9pX+P96T4H/O+Ik4hhA4OJ0p8mbM2T/7y8x+P9iodefM3bSP8/aC/y/W6MeywACW3Pk55/o8Pt/Ocfq//UCvT8vp9n/uVOp/P9StVoKAwx8OdERcbPQ7f+NSvv/D/rcfhzTY/h/NkU9jQEE3qxPZQHR7w/X2r47UPHlyfyY/+eDhP8fS1ZNYICB5+vzWUH06+OVilf7gq+fLdb9f7JWM5gBGdyZkQhWlMTAIH7USvjA4TRVWwYGBgYA4XNmES2izE0AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./pages/home/components/ProductCard.tsx





const ProductCard = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative mb-3 h-[276px] w-full cursor-pointer rounded-[17px] border md:mr-3 md:w-[32%]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute top-0 right-0 z-[1001] rounded-tr-[17px] rounded-bl-[17px] bg-primary p-2 px-4 text-white",
                children: "FEATURED"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "product-banner",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    className: "w-full",
                    src: img_mask,
                    height: 160
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "px-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "mb-0 text-lg font-semibold",
                                    children: props.title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mb-5 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center text-gray-500",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(icons_.ClockCircleOutlined, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mb-0 ml-1",
                                                    children: props.time
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "mx-2 mb-0 font-bold",
                                            children: "."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "mb-0 text-gray-500",
                                            children: [
                                                props.priceType,
                                                " ",
                                                props.price,
                                                " min sum"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-wrap",
                        children: props.categories.map((category)=>{
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mr-2 mb-2 flex items-center rounded-full bg-gray-200 px-4 py-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        src: pizza,
                                        width: 20,
                                        height: 20
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "ml-2",
                                        children: category.name
                                    })
                                ]
                            });
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_ProductCard = (ProductCard);


/***/ })

};
;