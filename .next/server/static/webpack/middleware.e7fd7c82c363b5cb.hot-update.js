"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./src/middleware.js":
/*!***************************!*\
  !*** ./src/middleware.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nlet dbInitialized = false;\nasync function middleware(request) {\n    // Initialize database on first request\n    if (!dbInitialized && \"undefined\" === 'undefined' && // Skip in Edge runtime (middleware runs on Edge)\n    \"string\" === 'undefined') {}\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n// Configure which paths the middleware runs on\nconst config = {\n    matcher: '/api/:path*'\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBRTNDLElBQUlDLGdCQUFnQjtBQUViLGVBQWVDLFdBQVdDLE9BQU87SUFDdEMsdUNBQXVDO0lBQ3ZDLElBQ0UsQ0FBQ0YsaUJBQ0QsZ0JBQWtCLGVBQ2xCLGlEQUFpRDtJQUNqRCxRQUFrQkcsS0FBSyxhQUN2QixFQVVEO0lBRUQsT0FBT0oscURBQVlBLENBQUNTLElBQUk7QUFDMUI7QUFFQSwrQ0FBK0M7QUFDeEMsTUFBTUMsU0FBUztJQUNwQkMsU0FBUztBQUNYLEVBQUUiLCJzb3VyY2VzIjpbIkU6XFxNeSBwcm9qZWN0XFxUcmFpbi10aWNrZXQtYm9va2luZy1zeXN0ZW1cXHNyY1xcbWlkZGxld2FyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcblxyXG5sZXQgZGJJbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdCkge1xyXG4gIC8vIEluaXRpYWxpemUgZGF0YWJhc2Ugb24gZmlyc3QgcmVxdWVzdFxyXG4gIGlmIChcclxuICAgICFkYkluaXRpYWxpemVkICYmXHJcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgLy8gU2tpcCBpbiBFZGdlIHJ1bnRpbWUgKG1pZGRsZXdhcmUgcnVucyBvbiBFZGdlKVxyXG4gICAgdHlwZW9mIEVkZ2VSdW50aW1lID09PSAndW5kZWZpbmVkJ1xyXG4gICkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2coJyBNaWRkbGV3YXJlOiBFbnN1cmluZyBkYXRhYmFzZSBzZXR1cC4uLicpO1xyXG4gICAgICBjb25zdCB7IGVuc3VyZURhdGFiYXNlU2V0dXAgfSA9IGF3YWl0IGltcG9ydCgnLi9saWIvaW5pdC5qcycpO1xyXG4gICAgICBhd2FpdCBlbnN1cmVEYXRhYmFzZVNldHVwKCk7XHJcbiAgICAgIGRiSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZygnIE1pZGRsZXdhcmU6IERhdGFiYXNlIHJlYWR5Jyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdNaWRkbGV3YXJlOiBEYXRhYmFzZSBpbml0aWFsaXphdGlvbiBmYWlsZWQ6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcclxufVxyXG5cclxuLy8gQ29uZmlndXJlIHdoaWNoIHBhdGhzIHRoZSBtaWRkbGV3YXJlIHJ1bnMgb25cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBtYXRjaGVyOiAnL2FwaS86cGF0aConLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZGJJbml0aWFsaXplZCIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwiRWRnZVJ1bnRpbWUiLCJjb25zb2xlIiwibG9nIiwiZW5zdXJlRGF0YWJhc2VTZXR1cCIsImVycm9yIiwibmV4dCIsImNvbmZpZyIsIm1hdGNoZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.js\n");

/***/ })

});