"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-effect-event";
exports.ids = ["vendor-chunks/use-effect-event"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-effect-event/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/use-effect-event/dist/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useEffectEvent: () => (/* binding */ useEffectEvent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n\nfunction useEffectEvent(fn) {\n  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useInsertionEffect)(() => {\n    ref.current = fn;\n  }, [fn]), (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args) => {\n    const latestFn = ref.current;\n    return latestFn(...args);\n  }, []);\n}\n\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWVmZmVjdC1ldmVudC9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdFO0FBQ2hFO0FBQ0EsY0FBYyw2Q0FBTTtBQUNwQixTQUFTLHlEQUFrQjtBQUMzQjtBQUNBLEdBQUcsU0FBUyxrREFBVztBQUN2QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBR0U7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL1VzZXIvRGV2ZWxvcGVyL3BvcnRmb2xpby13ZWJzaXRlL25vZGVfbW9kdWxlcy91c2UtZWZmZWN0LWV2ZW50L2Rpc3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VJbnNlcnRpb25FZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5mdW5jdGlvbiB1c2VFZmZlY3RFdmVudChmbikge1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIHJldHVybiB1c2VJbnNlcnRpb25FZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50ID0gZm47XG4gIH0sIFtmbl0pLCB1c2VDYWxsYmFjaygoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IGxhdGVzdEZuID0gcmVmLmN1cnJlbnQ7XG4gICAgcmV0dXJuIGxhdGVzdEZuKC4uLmFyZ3MpO1xuICB9LCBbXSk7XG59XG5leHBvcnQge1xuICB1c2VFZmZlY3RFdmVudFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-effect-event/dist/index.js\n");

/***/ })

};
;