"use strict";
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(725);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./assets/images/reviews.png
/* harmony default export */ const reviews = ({"src":"/_next/static/media/reviews.05cf3ddc.png","height":566,"width":473,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAtUlEQVR42lWOOw7CQAxEl2+RI9HQUFBwCSQEx6DgEByCswAFAmrSJAii/L12NuywiwQSLmzpvbE0yk0nDKNZFCerLCvn8b1YRVE289zLvtbm3DQvGGPAbEHUXhwfKL/yND0QsYNaAOtDB8eHH0k1HdO0RFXVjdYamuX4k3lW7JkZ1loB8P/5fCRXVwZEBBEBi1y/smtMu6trujHLSaTxd+d4TwFQPrVYboPReB1MppvA5YcA1Bu/94tHgbNrrgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./assets/images/squared.png
/* harmony default export */ const squared = ({"src":"/_next/static/media/squared.266afadc.png","height":439,"width":454,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABAklEQVR4nGP8//8/AxAwb9uxa/vf13c0hXg5vl199IVRkJ+Xw8DeMYkRKMn44ukXsSWr5p1/f6RT0llPi2HjsYcMT1gVGGpbO8NBClhWrTmm+vbl+d0L586Ulvn/7O/nR28YmK38mFsaGkLBCopKZ6rnZXnsZGJmlP7PyPT3399//9nZWFj4+PkhCiKiO9RnTss+xMHBLsTGxgoUYmAAOe3Pn38RjDoWVazsjP+Vmmo9vXh4OLnZ2dj/MTAy/BcQ4H/NzcW9hdE3pJ3p0cP3whdPd3GCNAIxCIDot0AffmecNXMtw5pNV5jSk21YeLg5GJmZmRkYGRkZxCVE/0lLif8BAL4kW31dX0kpAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./assets/images/horizontal.png
/* harmony default export */ const horizontal = ({"src":"/_next/static/media/horizontal.bd91f7c4.png","height":292,"width":778,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAVAvQqCQAD+vjOpKR2CLipoampyiOZ8blFcRJBz9QHcFE7d/Lk7YVlU4dHo6BRIni8SzlpQEP6BrutHRVWr/9xkye39xfXzg4CBEB7WDdBax0zzMjR9G8nHk8H9Bd8jjAWWhW6aBrUDciUoJPbonlMAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/Login/LoginBanner.tsx






const LoginBanner = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-full w-full bg-primary",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "login-banner-collages relative h-4/5 pt-[80px]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-end",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: reviews
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: squared
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative bottom-[240px]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: horizontal
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "login-banner-slider m-auto max-w-[60%] text-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Carousel, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-3xl font-semibold text-white",
                                    children: "Leave reviews for all meals"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "mb-4 text-white",
                                    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veritatis itaque tempore, minima asperiores explicabo"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-3xl font-semibold text-white",
                                    children: "Leave reviews for all meals"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "mb-4 text-white",
                                    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veritatis itaque tempore, minima asperiores explicabo"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-3xl font-semibold text-white",
                                    children: "Leave reviews for all meals"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "mb-4 text-white",
                                    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veritatis itaque tempore, minima asperiores explicabo"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Login_LoginBanner = (LoginBanner);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./assets/images/logo.png
var logo = __webpack_require__(203);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(66);
// EXTERNAL MODULE: ./pages/api/clientRequest.ts
var clientRequest = __webpack_require__(546);
;// CONCATENATED MODULE: ./components/Login/LoginForm.tsx








const LoginForm = ()=>{
    const { 0: user , 1: setUser  } = (0,external_react_.useState)({});
    const router = (0,router_.useRouter)();
    const loginUser = async ()=>{
        const data = await (0,clientRequest/* post */.v)("login", user);
        if (data.status) {
            router.push("/home");
        } else external_antd_.message.error("Login Failed");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "m-auto flex h-full max-w-[90%] flex-col items-start justify-between py-6 sm:px-3 md:max-w-[400px]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "login-logo",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: logo/* default */.Z,
                    alt: "Logo"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "login-form",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "mb-6 text-5xl font-semibold",
                        children: "Login"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-sm text-gray-700",
                        children: "Sign in with your data that you entered during your registration."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-control",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "block text-sm font-medium text-gray-700",
                                children: "Name"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                type: "text",
                                className: "input",
                                placeholder: "name@example.com",
                                onChange: (e)=>setUser({
                                        ...user,
                                        username: e.target.value
                                    })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-control",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "block text-sm font-medium text-gray-700",
                                children: "Password"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input.Password, {
                                className: "flex items-center",
                                placeholder: "min. 8 characters",
                                iconRender: (visible)=>visible ? /*#__PURE__*/ jsx_runtime_.jsx(icons_.EyeTwoTone, {}) : /*#__PURE__*/ jsx_runtime_.jsx(icons_.EyeInvisibleOutlined, {})
                                ,
                                onChange: (e)=>setUser({
                                        ...user,
                                        password: e.target.value
                                    })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "form-control !my-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Checkbox, {
                            children: "Keep me logged in"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "button button-primary",
                        onClick: ()=>loginUser()
                        ,
                        children: "Login"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "my-6 w-full text-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "font-semibold text-primary",
                            children: "Forgot Password"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "login-footer flex w-full items-center justify-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Don't have an account?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "",
                        className: "ml-1 font-semibold text-primary",
                        children: "Sign up"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Login_LoginForm = (LoginForm);

;// CONCATENATED MODULE: ./pages/login/index.tsx



const Login = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex h-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full md:w-1/2",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Login_LoginForm, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden md:block md:w-1/2",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Login_LoginBanner, {})
            })
        ]
    });
};
/* harmony default export */ const login = (Login);


/***/ })

};
;