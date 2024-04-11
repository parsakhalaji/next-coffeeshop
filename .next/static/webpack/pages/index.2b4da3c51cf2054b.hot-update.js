"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/templates/Index/Offer.js":
/*!*********************************************!*\
  !*** ./components/templates/Index/Offer.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Offer() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const addEmail = async (event)=>{\n        event.preventDefault();\n        const response = await fetch(\"http://localhost:4000/newsLetters\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                email\n            })\n        });\n        if (response.status === 201) {\n            setEmail(\"\");\n            alert(\"Join Successfully :))\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"container py-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    class: \"display-3 text-primary mt-3\",\n                    children: \"50% OFF\"\n                }, void 0, false, {\n                    fileName: \"/Users/parsa/Desktop/front-end/coffeshop-next/components/templates/Index/Offer.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    class: \"text-white mb-3\",\n                    children: \"Sunday Special Offer\"\n                }, void 0, false, {\n                    fileName: \"/Users/parsa/Desktop/front-end/coffeshop-next/components/templates/Index/Offer.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    class: \"text-white font-weight-normal mb-4 pb-3\",\n                    children: \"Only for Sunday from 1st Jan to 30th Jan 2045\"\n                }, void 0, false, {\n                    fileName: \"/Users/parsa/Desktop/front-end/coffeshop-next/components/templates/Index/Offer.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    class: \"form-inline justify-content-center mb-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"input-group\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                class: \"form-control p-4\",\n                                placeholder: \"Your Email\",\n                                style: {\n                                    height: \"60px\"\n                                },\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/parsa/Desktop/front-end/coffeshop-next/components/templates/Index/Offer.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"input-group-append\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: addEmail,\n                                    class: \"btn btn-primary font-weight-bold px-4\",\n                                    type: \"submit\",\n                                    children: \"JOIN\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/parsa/Desktop/front-end/coffeshop-next/components/templates/Index/Offer.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/parsa/Desktop/front-end/coffeshop-next/components/templates/Index/Offer.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/parsa/Desktop/front-end/coffeshop-next/components/templates/Index/Offer.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/parsa/Desktop/front-end/coffeshop-next/components/templates/Index/Offer.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/parsa/Desktop/front-end/coffeshop-next/components/templates/Index/Offer.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/parsa/Desktop/front-end/coffeshop-next/components/templates/Index/Offer.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Offer, \"Pe1zWWKcsJK82m3WyFiCTurRPxo=\");\n_c = Offer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Offer);\nvar _c;\n$RefreshReg$(_c, \"Offer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RlbXBsYXRlcy9JbmRleC9PZmZlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBRXhDLFNBQVNFOztJQUNQLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNSSxXQUFXLE9BQU9DO1FBQ3RCQSxNQUFNQyxjQUFjO1FBRXBCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxxQ0FBcUM7WUFDaEVDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFWDtZQUFNO1FBQy9CO1FBR0EsSUFBSUssU0FBU08sTUFBTSxLQUFLLEtBQUs7WUFDM0JYLFNBQVM7WUFDVFksTUFBTTtRQUNSO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsT0FBTTtrQkFDVCw0RUFBQ0Q7WUFBSUMsT0FBTTs7OEJBQ1QsOERBQUNDO29CQUFHRCxPQUFNOzhCQUE4Qjs7Ozs7OzhCQUN4Qyw4REFBQ0M7b0JBQUdELE9BQU07OEJBQWtCOzs7Ozs7OEJBQzVCLDhEQUFDRTtvQkFBR0YsT0FBTTs4QkFBMEM7Ozs7Ozs4QkFHcEQsOERBQUNHO29CQUFLSCxPQUFNOzhCQUNWLDRFQUFDRDt3QkFBSUMsT0FBTTs7MENBQ1QsOERBQUNJO2dDQUNDQyxNQUFLO2dDQUNMTCxPQUFNO2dDQUNOTSxhQUFZO2dDQUNaQyxPQUFPO29DQUFFQyxRQUFRO2dDQUFPO2dDQUN4QkMsT0FBT3hCO2dDQUNQeUIsVUFBVSxDQUFDQyxJQUFNekIsU0FBU3lCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OzBDQUUxQyw4REFBQ1Y7Z0NBQUlDLE9BQU07MENBQ1QsNEVBQUNhO29DQUNDQyxTQUFTM0I7b0NBQ1RhLE9BQU07b0NBQ05LLE1BQUs7OENBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0dBckRTckI7S0FBQUE7QUF1RFQsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvSW5kZXgvT2ZmZXIuanM/ZGZhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gT2ZmZXIoKSB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgYWRkRW1haWwgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9uZXdzTGV0dGVyc1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsIH0pLFxuICAgIH0pO1xuICAgIFxuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICBzZXRFbWFpbChcIlwiKTtcbiAgICAgIGFsZXJ0KFwiSm9pbiBTdWNjZXNzZnVsbHkgOikpXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJvZmZlciBjb250YWluZXItZmx1aWQgbXktNSBweS01IHRleHQtY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlIG92ZXJsYXktdG9wIG92ZXJsYXktYm90dG9tXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHB5LTVcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwiZGlzcGxheS0zIHRleHQtcHJpbWFyeSBtdC0zXCI+NTAlIE9GRjwvaDE+XG4gICAgICAgIDxoMSBjbGFzcz1cInRleHQtd2hpdGUgbWItM1wiPlN1bmRheSBTcGVjaWFsIE9mZmVyPC9oMT5cbiAgICAgICAgPGg0IGNsYXNzPVwidGV4dC13aGl0ZSBmb250LXdlaWdodC1ub3JtYWwgbWItNCBwYi0zXCI+XG4gICAgICAgICAgT25seSBmb3IgU3VuZGF5IGZyb20gMXN0IEphbiB0byAzMHRoIEphbiAyMDQ1XG4gICAgICAgIDwvaDQ+XG4gICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1pbmxpbmUganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBwLTRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWxcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNjBweFwiIH19XG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17YWRkRW1haWx9XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZm9udC13ZWlnaHQtYm9sZCBweC00XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEpPSU5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9mZmVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJPZmZlciIsImVtYWlsIiwic2V0RW1haWwiLCJhZGRFbWFpbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiYWxlcnQiLCJkaXYiLCJjbGFzcyIsImgxIiwiaDQiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsImhlaWdodCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/templates/Index/Offer.js\n"));

/***/ })

});