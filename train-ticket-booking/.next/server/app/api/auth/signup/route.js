/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/signup/route";
exports.ids = ["app/api/auth/signup/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/mysql2/lib sync recursive ^cardinal.*$":
/*!****************************************************!*\
  !*** ./node_modules/mysql2/lib/ sync ^cardinal.*$ ***!
  \****************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "(rsc)/./node_modules/mysql2/lib sync recursive ^cardinal.*$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsignup%2Froute&page=%2Fapi%2Fauth%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsignup%2Froute.js&appDir=E%3A%5CMy%20project%5CTrain-ticket-booking-system%5Ctrain-ticket-booking%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CMy%20project%5CTrain-ticket-booking-system%5Ctrain-ticket-booking&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsignup%2Froute&page=%2Fapi%2Fauth%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsignup%2Froute.js&appDir=E%3A%5CMy%20project%5CTrain-ticket-booking-system%5Ctrain-ticket-booking%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CMy%20project%5CTrain-ticket-booking-system%5Ctrain-ticket-booking&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_My_project_Train_ticket_booking_system_train_ticket_booking_src_app_api_auth_signup_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/signup/route.js */ \"(rsc)/./src/app/api/auth/signup/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/signup/route\",\n        pathname: \"/api/auth/signup\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/signup/route\"\n    },\n    resolvedPagePath: \"E:\\\\My project\\\\Train-ticket-booking-system\\\\train-ticket-booking\\\\src\\\\app\\\\api\\\\auth\\\\signup\\\\route.js\",\n    nextConfigOutput,\n    userland: E_My_project_Train_ticket_booking_system_train_ticket_booking_src_app_api_auth_signup_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGc2lnbnVwJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGc2lnbnVwJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYXV0aCUyRnNpZ251cCUyRnJvdXRlLmpzJmFwcERpcj1FJTNBJTVDTXklMjBwcm9qZWN0JTVDVHJhaW4tdGlja2V0LWJvb2tpbmctc3lzdGVtJTVDdHJhaW4tdGlja2V0LWJvb2tpbmclNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUNNeSUyMHByb2plY3QlNUNUcmFpbi10aWNrZXQtYm9va2luZy1zeXN0ZW0lNUN0cmFpbi10aWNrZXQtYm9va2luZyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDd0Q7QUFDckk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkU6XFxcXE15IHByb2plY3RcXFxcVHJhaW4tdGlja2V0LWJvb2tpbmctc3lzdGVtXFxcXHRyYWluLXRpY2tldC1ib29raW5nXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcc2lnbnVwXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL3NpZ251cC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvc2lnbnVwXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL3NpZ251cC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkU6XFxcXE15IHByb2plY3RcXFxcVHJhaW4tdGlja2V0LWJvb2tpbmctc3lzdGVtXFxcXHRyYWluLXRpY2tldC1ib29raW5nXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcc2lnbnVwXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsignup%2Froute&page=%2Fapi%2Fauth%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsignup%2Froute.js&appDir=E%3A%5CMy%20project%5CTrain-ticket-booking-system%5Ctrain-ticket-booking%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CMy%20project%5CTrain-ticket-booking-system%5Ctrain-ticket-booking&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/auth/signup/route.js":
/*!******************************************!*\
  !*** ./src/app/api/auth/signup/route.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   runtime: () => (/* binding */ runtime)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.js\");\n\n\nconst runtime = \"nodejs\";\nasync function POST(request) {\n    try {\n        const body = await request.json();\n        const { email, password, fullName, phone } = body;\n        // Validate input\n        if (!email || !password || !fullName) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Email, password, and full name are required\"\n            }, {\n                status: 400\n            });\n        }\n        // Validate email format\n        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n        if (!emailRegex.test(email)) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid email format\"\n            }, {\n                status: 400\n            });\n        }\n        // Validate password length\n        if (password.length < 6) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Password must be at least 6 characters\"\n            }, {\n                status: 400\n            });\n        }\n        // Create user\n        const user = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.createUser)({\n            email,\n            password,\n            fullName,\n            phone\n        });\n        // Generate token\n        const token = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.generateToken)({\n            userId: user.id,\n            email: user.email\n        });\n        // Create response with cookie\n        const response = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            user: {\n                id: user.id,\n                email: user.email,\n                fullName: user.fullName,\n                phone: user.phone\n            },\n            token\n        }, {\n            status: 201\n        });\n        // Set HTTP-only cookie\n        response.cookies.set('token', token, {\n            httpOnly: true,\n            secure: \"development\" === 'production',\n            sameSite: 'lax',\n            maxAge: 60 * 60 * 24 * 7 // 7 days\n        });\n        return response;\n    } catch (error) {\n        console.error(\"Signup error:\", error);\n        if (error.message === 'Email already exists') {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Email already exists\"\n            }, {\n                status: 409\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to create account\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL3NpZ251cC9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ1k7QUFFaEQsTUFBTUcsVUFBVSxTQUFTO0FBRXpCLGVBQWVDLEtBQUtDLE9BQU87SUFDaEMsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUQsUUFBUUUsSUFBSTtRQUMvQixNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRSxHQUFHTDtRQUU3QyxpQkFBaUI7UUFDakIsSUFBSSxDQUFDRSxTQUFTLENBQUNDLFlBQVksQ0FBQ0MsVUFBVTtZQUNwQyxPQUFPVixxREFBWUEsQ0FBQ08sSUFBSSxDQUN0QjtnQkFBRUssT0FBTztZQUE4QyxHQUN2RDtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsd0JBQXdCO1FBQ3hCLE1BQU1DLGFBQWE7UUFDbkIsSUFBSSxDQUFDQSxXQUFXQyxJQUFJLENBQUNQLFFBQVE7WUFDM0IsT0FBT1IscURBQVlBLENBQUNPLElBQUksQ0FDdEI7Z0JBQUVLLE9BQU87WUFBdUIsR0FDaEM7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLDJCQUEyQjtRQUMzQixJQUFJSixTQUFTTyxNQUFNLEdBQUcsR0FBRztZQUN2QixPQUFPaEIscURBQVlBLENBQUNPLElBQUksQ0FDdEI7Z0JBQUVLLE9BQU87WUFBeUMsR0FDbEQ7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLGNBQWM7UUFDZCxNQUFNSSxPQUFPLE1BQU1oQixxREFBVUEsQ0FBQztZQUFFTztZQUFPQztZQUFVQztZQUFVQztRQUFNO1FBRWpFLGlCQUFpQjtRQUNqQixNQUFNTyxRQUFRaEIsd0RBQWFBLENBQUM7WUFBRWlCLFFBQVFGLEtBQUtHLEVBQUU7WUFBRVosT0FBT1MsS0FBS1QsS0FBSztRQUFDO1FBRWpFLDhCQUE4QjtRQUM5QixNQUFNYSxXQUFXckIscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUNqQ2UsU0FBUztZQUNUTCxNQUFNO2dCQUNKRyxJQUFJSCxLQUFLRyxFQUFFO2dCQUNYWixPQUFPUyxLQUFLVCxLQUFLO2dCQUNqQkUsVUFBVU8sS0FBS1AsUUFBUTtnQkFDdkJDLE9BQU9NLEtBQUtOLEtBQUs7WUFDbkI7WUFDQU87UUFDRixHQUFHO1lBQUVMLFFBQVE7UUFBSTtRQUVqQix1QkFBdUI7UUFDdkJRLFNBQVNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVNOLE9BQU87WUFDbkNPLFVBQVU7WUFDVkMsUUFBUUMsa0JBQXlCO1lBQ2pDQyxVQUFVO1lBQ1ZDLFFBQVEsS0FBSyxLQUFLLEtBQUssRUFBRSxTQUFTO1FBQ3BDO1FBRUEsT0FBT1I7SUFFVCxFQUFFLE9BQU9ULE9BQU87UUFDZGtCLFFBQVFsQixLQUFLLENBQUMsaUJBQWlCQTtRQUUvQixJQUFJQSxNQUFNbUIsT0FBTyxLQUFLLHdCQUF3QjtZQUM1QyxPQUFPL0IscURBQVlBLENBQUNPLElBQUksQ0FDdEI7Z0JBQUVLLE9BQU87WUFBdUIsR0FDaEM7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE9BQU9iLHFEQUFZQSxDQUFDTyxJQUFJLENBQ3RCO1lBQUVLLE9BQU87UUFBMkIsR0FDcEM7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIkU6XFxNeSBwcm9qZWN0XFxUcmFpbi10aWNrZXQtYm9va2luZy1zeXN0ZW1cXHRyYWluLXRpY2tldC1ib29raW5nXFxzcmNcXGFwcFxcYXBpXFxhdXRoXFxzaWdudXBcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVVc2VyLCBnZW5lcmF0ZVRva2VuIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBydW50aW1lID0gXCJub2RlanNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIGZ1bGxOYW1lLCBwaG9uZSB9ID0gYm9keTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBpbnB1dFxyXG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIWZ1bGxOYW1lKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiBcIkVtYWlsLCBwYXNzd29yZCwgYW5kIGZ1bGwgbmFtZSBhcmUgcmVxdWlyZWRcIiB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRlIGVtYWlsIGZvcm1hdFxyXG4gICAgY29uc3QgZW1haWxSZWdleCA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xyXG4gICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QoZW1haWwpKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiBcIkludmFsaWQgZW1haWwgZm9ybWF0XCIgfSxcclxuICAgICAgICB7IHN0YXR1czogNDAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBwYXNzd29yZCBsZW5ndGhcclxuICAgIGlmIChwYXNzd29yZC5sZW5ndGggPCA2KSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCIgfSxcclxuICAgICAgICB7IHN0YXR1czogNDAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhdGUgdXNlclxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGNyZWF0ZVVzZXIoeyBlbWFpbCwgcGFzc3dvcmQsIGZ1bGxOYW1lLCBwaG9uZSB9KTtcclxuXHJcbiAgICAvLyBHZW5lcmF0ZSB0b2tlblxyXG4gICAgY29uc3QgdG9rZW4gPSBnZW5lcmF0ZVRva2VuKHsgdXNlcklkOiB1c2VyLmlkLCBlbWFpbDogdXNlci5lbWFpbCB9KTtcclxuXHJcbiAgICAvLyBDcmVhdGUgcmVzcG9uc2Ugd2l0aCBjb29raWVcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgaWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgZnVsbE5hbWU6IHVzZXIuZnVsbE5hbWUsXHJcbiAgICAgICAgcGhvbmU6IHVzZXIucGhvbmVcclxuICAgICAgfSxcclxuICAgICAgdG9rZW5cclxuICAgIH0sIHsgc3RhdHVzOiAyMDEgfSk7XHJcblxyXG4gICAgLy8gU2V0IEhUVFAtb25seSBjb29raWVcclxuICAgIHJlc3BvbnNlLmNvb2tpZXMuc2V0KCd0b2tlbicsIHRva2VuLCB7XHJcbiAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXHJcbiAgICAgIHNhbWVTaXRlOiAnbGF4JyxcclxuICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiA3IC8vIDcgZGF5c1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlNpZ251cCBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgXHJcbiAgICBpZiAoZXJyb3IubWVzc2FnZSA9PT0gJ0VtYWlsIGFscmVhZHkgZXhpc3RzJykge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogXCJFbWFpbCBhbHJlYWR5IGV4aXN0c1wiIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwOSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgYWNjb3VudFwiIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNyZWF0ZVVzZXIiLCJnZW5lcmF0ZVRva2VuIiwicnVudGltZSIsIlBPU1QiLCJyZXF1ZXN0IiwiYm9keSIsImpzb24iLCJlbWFpbCIsInBhc3N3b3JkIiwiZnVsbE5hbWUiLCJwaG9uZSIsImVycm9yIiwic3RhdHVzIiwiZW1haWxSZWdleCIsInRlc3QiLCJsZW5ndGgiLCJ1c2VyIiwidG9rZW4iLCJ1c2VySWQiLCJpZCIsInJlc3BvbnNlIiwic3VjY2VzcyIsImNvb2tpZXMiLCJzZXQiLCJodHRwT25seSIsInNlY3VyZSIsInByb2Nlc3MiLCJzYW1lU2l0ZSIsIm1heEFnZSIsImNvbnNvbGUiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/signup/route.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.js":
/*!*************************!*\
  !*** ./src/lib/auth.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authenticateUser: () => (/* binding */ authenticateUser),\n/* harmony export */   createUser: () => (/* binding */ createUser),\n/* harmony export */   findUserByEmail: () => (/* binding */ findUserByEmail),\n/* harmony export */   findUserById: () => (/* binding */ findUserById),\n/* harmony export */   generateToken: () => (/* binding */ generateToken),\n/* harmony export */   getUserFromRequest: () => (/* binding */ getUserFromRequest),\n/* harmony export */   hashPassword: () => (/* binding */ hashPassword),\n/* harmony export */   verifyPassword: () => (/* binding */ verifyPassword),\n/* harmony export */   verifyToken: () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ \"(rsc)/./src/lib/db.js\");\n\n\n\nconst JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this-in-production-min-32-chars';\nconst JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';\n// Hash password\nasync function hashPassword(password) {\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hash(password, 10);\n}\n// Verify password\nasync function verifyPassword(password, hashedPassword) {\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compare(password, hashedPassword);\n}\n// Generate JWT token\nfunction generateToken(payload) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.sign(payload, JWT_SECRET, {\n        expiresIn: JWT_EXPIRES_IN\n    });\n}\n// Verify JWT token\nfunction verifyToken(token) {\n    try {\n        return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify(token, JWT_SECRET);\n    } catch (error) {\n        return null;\n    }\n}\n// Create user\nasync function createUser({ email, password, fullName, phone }) {\n    const pool = (0,_db__WEBPACK_IMPORTED_MODULE_2__.getPool)();\n    const hashedPassword = await hashPassword(password);\n    try {\n        const [result] = await pool.execute('INSERT INTO users (email, password, full_name, phone) VALUES (?, ?, ?, ?)', [\n            email,\n            hashedPassword,\n            fullName,\n            phone || null\n        ]);\n        return {\n            id: result.insertId,\n            email,\n            fullName,\n            phone\n        };\n    } catch (error) {\n        if (error.code === 'ER_DUP_ENTRY') {\n            throw new Error('Email already exists');\n        }\n        throw error;\n    }\n}\n// Find user by email\nasync function findUserByEmail(email) {\n    const pool = (0,_db__WEBPACK_IMPORTED_MODULE_2__.getPool)();\n    const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [\n        email\n    ]);\n    return rows[0] || null;\n}\n// Find user by ID\nasync function findUserById(id) {\n    const pool = (0,_db__WEBPACK_IMPORTED_MODULE_2__.getPool)();\n    const [rows] = await pool.execute('SELECT id, email, full_name, phone, created_at FROM users WHERE id = ?', [\n        id\n    ]);\n    return rows[0] || null;\n}\n// Authenticate user\nasync function authenticateUser(email, password) {\n    const user = await findUserByEmail(email);\n    if (!user) {\n        return null;\n    }\n    const isValid = await verifyPassword(password, user.password);\n    if (!isValid) {\n        return null;\n    }\n    // Return user without password\n    const { password: _, ...userWithoutPassword } = user;\n    return userWithoutPassword;\n}\n// Get user from request (verify token from cookies or headers)\nasync function getUserFromRequest(request) {\n    // Try to get token from cookie\n    const cookieHeader = request.headers.get('cookie');\n    let token = null;\n    if (cookieHeader) {\n        const cookies = cookieHeader.split(';').reduce((acc, cookie)=>{\n            const [key, value] = cookie.trim().split('=');\n            acc[key] = value;\n            return acc;\n        }, {});\n        token = cookies.token;\n    }\n    // If no cookie, try Authorization header\n    if (!token) {\n        const authHeader = request.headers.get('authorization');\n        if (authHeader && authHeader.startsWith('Bearer ')) {\n            token = authHeader.substring(7);\n        }\n    }\n    if (!token) {\n        return null;\n    }\n    const payload = verifyToken(token);\n    if (!payload) {\n        return null;\n    }\n    const user = await findUserById(payload.userId);\n    return user;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLENBQUM7WUFDekNFLEdBQUcsQ0FBQ0UsSUFBSSxHQUFHQztZQUNYLE9BQU9IO1FBQ1QsR0FBRyxDQUFDO1FBQ0o5QixRQUFRMkIsUUFBUTNCLEtBQUs7SUFDdkI7SUFFQSx5Q0FBeUM7SUFDekMsSUFBSSxDQUFDQSxPQUFPO1FBQ1YsTUFBTW1DLGFBQWFaLFFBQVFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO1FBQ3ZDLElBQUlTLGNBQWNBLFdBQVdDLFVBQVUsQ0FBQyxZQUFZO1lBQ2xEcEMsUUFBUW1DLFdBQVdFLFNBQVMsQ0FBQztRQUMvQjtJQUNGO0lBRUEsSUFBSSxDQUFDckMsT0FBTztRQUNWLE9BQU87SUFDVDtJQUVBLE1BQU1KLFVBQVVHLFlBQVlDO0lBRTVCLElBQUksQ0FBQ0osU0FBUztRQUNaLE9BQU87SUFDVDtJQUVBLE1BQU1zQixPQUFPLE1BQU1GLGFBQWFwQixRQUFRMEMsTUFBTTtJQUM5QyxPQUFPcEI7QUFDVCIsInNvdXJjZXMiOlsiRTpcXE15IHByb2plY3RcXFRyYWluLXRpY2tldC1ib29raW5nLXN5c3RlbVxcdHJhaW4tdGlja2V0LWJvb2tpbmdcXHNyY1xcbGliXFxhdXRoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XHJcbmltcG9ydCB7IGdldFBvb2wgfSBmcm9tICcuL2RiJztcclxuXHJcbmNvbnN0IEpXVF9TRUNSRVQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUIHx8ICd5b3VyLXNlY3JldC1rZXktY2hhbmdlLXRoaXMtaW4tcHJvZHVjdGlvbi1taW4tMzItY2hhcnMnO1xyXG5jb25zdCBKV1RfRVhQSVJFU19JTiA9IHByb2Nlc3MuZW52LkpXVF9FWFBJUkVTX0lOIHx8ICc3ZCc7XHJcblxyXG4vLyBIYXNoIHBhc3N3b3JkXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQpIHtcclxuICByZXR1cm4gYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcclxufVxyXG5cclxuLy8gVmVyaWZ5IHBhc3N3b3JkXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlQYXNzd29yZChwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpIHtcclxuICByZXR1cm4gYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKTtcclxufVxyXG5cclxuLy8gR2VuZXJhdGUgSldUIHRva2VuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRva2VuKHBheWxvYWQpIHtcclxuICByZXR1cm4gand0LnNpZ24ocGF5bG9hZCwgSldUX1NFQ1JFVCwgeyBleHBpcmVzSW46IEpXVF9FWFBJUkVTX0lOIH0pO1xyXG59XHJcblxyXG4vLyBWZXJpZnkgSldUIHRva2VuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUb2tlbih0b2tlbikge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gand0LnZlcmlmeSh0b2tlbiwgSldUX1NFQ1JFVCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ3JlYXRlIHVzZXJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoeyBlbWFpbCwgcGFzc3dvcmQsIGZ1bGxOYW1lLCBwaG9uZSB9KSB7XHJcbiAgY29uc3QgcG9vbCA9IGdldFBvb2woKTtcclxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGhhc2hQYXNzd29yZChwYXNzd29yZCk7XHJcbiAgXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IFtyZXN1bHRdID0gYXdhaXQgcG9vbC5leGVjdXRlKFxyXG4gICAgICAnSU5TRVJUIElOVE8gdXNlcnMgKGVtYWlsLCBwYXNzd29yZCwgZnVsbF9uYW1lLCBwaG9uZSkgVkFMVUVTICg/LCA/LCA/LCA/KScsXHJcbiAgICAgIFtlbWFpbCwgaGFzaGVkUGFzc3dvcmQsIGZ1bGxOYW1lLCBwaG9uZSB8fCBudWxsXVxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHJlc3VsdC5pbnNlcnRJZCxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIGZ1bGxOYW1lLFxyXG4gICAgICBwaG9uZVxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICdFUl9EVVBfRU5UUlknKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRW1haWwgYWxyZWFkeSBleGlzdHMnKTtcclxuICAgIH1cclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRmluZCB1c2VyIGJ5IGVtYWlsXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5kVXNlckJ5RW1haWwoZW1haWwpIHtcclxuICBjb25zdCBwb29sID0gZ2V0UG9vbCgpO1xyXG4gIGNvbnN0IFtyb3dzXSA9IGF3YWl0IHBvb2wuZXhlY3V0ZShcclxuICAgICdTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIGVtYWlsID0gPycsXHJcbiAgICBbZW1haWxdXHJcbiAgKTtcclxuICByZXR1cm4gcm93c1swXSB8fCBudWxsO1xyXG59XHJcblxyXG4vLyBGaW5kIHVzZXIgYnkgSURcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRVc2VyQnlJZChpZCkge1xyXG4gIGNvbnN0IHBvb2wgPSBnZXRQb29sKCk7XHJcbiAgY29uc3QgW3Jvd3NdID0gYXdhaXQgcG9vbC5leGVjdXRlKFxyXG4gICAgJ1NFTEVDVCBpZCwgZW1haWwsIGZ1bGxfbmFtZSwgcGhvbmUsIGNyZWF0ZWRfYXQgRlJPTSB1c2VycyBXSEVSRSBpZCA9ID8nLFxyXG4gICAgW2lkXVxyXG4gICk7XHJcbiAgcmV0dXJuIHJvd3NbMF0gfHwgbnVsbDtcclxufVxyXG5cclxuLy8gQXV0aGVudGljYXRlIHVzZXJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZVVzZXIoZW1haWwsIHBhc3N3b3JkKSB7XHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IGZpbmRVc2VyQnlFbWFpbChlbWFpbCk7XHJcbiAgXHJcbiAgaWYgKCF1c2VyKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IHZlcmlmeVBhc3N3b3JkKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuICBcclxuICBpZiAoIWlzVmFsaWQpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBcclxuICAvLyBSZXR1cm4gdXNlciB3aXRob3V0IHBhc3N3b3JkXHJcbiAgY29uc3QgeyBwYXNzd29yZDogXywgLi4udXNlcldpdGhvdXRQYXNzd29yZCB9ID0gdXNlcjtcclxuICByZXR1cm4gdXNlcldpdGhvdXRQYXNzd29yZDtcclxufVxyXG5cclxuLy8gR2V0IHVzZXIgZnJvbSByZXF1ZXN0ICh2ZXJpZnkgdG9rZW4gZnJvbSBjb29raWVzIG9yIGhlYWRlcnMpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyRnJvbVJlcXVlc3QocmVxdWVzdCkge1xyXG4gIC8vIFRyeSB0byBnZXQgdG9rZW4gZnJvbSBjb29raWVcclxuICBjb25zdCBjb29raWVIZWFkZXIgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdjb29raWUnKTtcclxuICBsZXQgdG9rZW4gPSBudWxsO1xyXG4gIFxyXG4gIGlmIChjb29raWVIZWFkZXIpIHtcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBjb29raWVIZWFkZXIuc3BsaXQoJzsnKS5yZWR1Y2UoKGFjYywgY29va2llKSA9PiB7XHJcbiAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGNvb2tpZS50cmltKCkuc3BsaXQoJz0nKTtcclxuICAgICAgYWNjW2tleV0gPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIHt9KTtcclxuICAgIHRva2VuID0gY29va2llcy50b2tlbjtcclxuICB9XHJcbiAgXHJcbiAgLy8gSWYgbm8gY29va2llLCB0cnkgQXV0aG9yaXphdGlvbiBoZWFkZXJcclxuICBpZiAoIXRva2VuKSB7XHJcbiAgICBjb25zdCBhdXRoSGVhZGVyID0gcmVxdWVzdC5oZWFkZXJzLmdldCgnYXV0aG9yaXphdGlvbicpO1xyXG4gICAgaWYgKGF1dGhIZWFkZXIgJiYgYXV0aEhlYWRlci5zdGFydHNXaXRoKCdCZWFyZXIgJykpIHtcclxuICAgICAgdG9rZW4gPSBhdXRoSGVhZGVyLnN1YnN0cmluZyg3KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaWYgKCF0b2tlbikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHBheWxvYWQgPSB2ZXJpZnlUb2tlbih0b2tlbik7XHJcbiAgXHJcbiAgaWYgKCFwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IGZpbmRVc2VyQnlJZChwYXlsb2FkLnVzZXJJZCk7XHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuIl0sIm5hbWVzIjpbImp3dCIsImJjcnlwdCIsImdldFBvb2wiLCJKV1RfU0VDUkVUIiwicHJvY2VzcyIsImVudiIsIkpXVF9FWFBJUkVTX0lOIiwiaGFzaFBhc3N3b3JkIiwicGFzc3dvcmQiLCJoYXNoIiwidmVyaWZ5UGFzc3dvcmQiLCJoYXNoZWRQYXNzd29yZCIsImNvbXBhcmUiLCJnZW5lcmF0ZVRva2VuIiwicGF5bG9hZCIsInNpZ24iLCJleHBpcmVzSW4iLCJ2ZXJpZnlUb2tlbiIsInRva2VuIiwidmVyaWZ5IiwiZXJyb3IiLCJjcmVhdGVVc2VyIiwiZW1haWwiLCJmdWxsTmFtZSIsInBob25lIiwicG9vbCIsInJlc3VsdCIsImV4ZWN1dGUiLCJpZCIsImluc2VydElkIiwiY29kZSIsIkVycm9yIiwiZmluZFVzZXJCeUVtYWlsIiwicm93cyIsImZpbmRVc2VyQnlJZCIsImF1dGhlbnRpY2F0ZVVzZXIiLCJ1c2VyIiwiaXNWYWxpZCIsIl8iLCJ1c2VyV2l0aG91dFBhc3N3b3JkIiwiZ2V0VXNlckZyb21SZXF1ZXN0IiwicmVxdWVzdCIsImNvb2tpZUhlYWRlciIsImhlYWRlcnMiLCJnZXQiLCJjb29raWVzIiwic3BsaXQiLCJyZWR1Y2UiLCJhY2MiLCJjb29raWUiLCJrZXkiLCJ2YWx1ZSIsInRyaW0iLCJhdXRoSGVhZGVyIiwic3RhcnRzV2l0aCIsInN1YnN0cmluZyIsInVzZXJJZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.js":
/*!***********************!*\
  !*** ./src/lib/db.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getPool: () => (/* binding */ getPool),\n/* harmony export */   testConnection: () => (/* binding */ testConnection)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"(rsc)/./node_modules/mysql2/promise.js\");\n\nlet pool;\nfunction getPool() {\n    if (!pool) {\n        pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createPool({\n            host: process.env.DB_HOST || 'localhost',\n            user: process.env.DB_USER || 'root',\n            password: process.env.DB_PASSWORD || '',\n            database: process.env.DB_NAME || 'train_ticket_booking',\n            waitForConnections: true,\n            connectionLimit: 10,\n            queueLimit: 0\n        });\n    }\n    return pool;\n}\n// Test database connection\nasync function testConnection() {\n    try {\n        const pool = getPool();\n        const [rows] = await pool.query('SELECT 1 as test');\n        return {\n            success: true,\n            message: 'Database connected'\n        };\n    } catch (error) {\n        console.error('Database connection error:', error);\n        return {\n            success: false,\n            message: error.message\n        };\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPool());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUM7QUFFbkMsSUFBSUM7QUFFRyxTQUFTQztJQUNkLElBQUksQ0FBQ0QsTUFBTTtRQUNUQSxPQUFPRCxzREFBZ0IsQ0FBQztZQUN0QkksTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxPQUFPLElBQUk7WUFDN0JDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csT0FBTyxJQUFJO1lBQzdCQyxVQUFVTCxRQUFRQyxHQUFHLENBQUNLLFdBQVcsSUFBSTtZQUNyQ0MsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxPQUFPLElBQUk7WUFDakNDLG9CQUFvQjtZQUNwQkMsaUJBQWlCO1lBQ2pCQyxZQUFZO1FBQ2Q7SUFDRjtJQUNBLE9BQU9mO0FBQ1Q7QUFFQSwyQkFBMkI7QUFDcEIsZUFBZWdCO0lBQ3BCLElBQUk7UUFDRixNQUFNaEIsT0FBT0M7UUFDYixNQUFNLENBQUNnQixLQUFLLEdBQUcsTUFBTWpCLEtBQUtrQixLQUFLLENBQUM7UUFDaEMsT0FBTztZQUFFQyxTQUFTO1lBQU1DLFNBQVM7UUFBcUI7SUFDeEQsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw4QkFBOEJBO1FBQzVDLE9BQU87WUFBRUYsU0FBUztZQUFPQyxTQUFTQyxNQUFNRCxPQUFPO1FBQUM7SUFDbEQ7QUFDRjtBQUVBLGlFQUFlbkIsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsiRTpcXE15IHByb2plY3RcXFRyYWluLXRpY2tldC1ib29raW5nLXN5c3RlbVxcdHJhaW4tdGlja2V0LWJvb2tpbmdcXHNyY1xcbGliXFxkYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSBcIm15c3FsMi9wcm9taXNlXCI7XHJcblxyXG5sZXQgcG9vbDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQb29sKCkge1xyXG4gIGlmICghcG9vbCkge1xyXG4gICAgcG9vbCA9IG15c3FsLmNyZWF0ZVBvb2woe1xyXG4gICAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NUIHx8ICdsb2NhbGhvc3QnLFxyXG4gICAgICB1c2VyOiBwcm9jZXNzLmVudi5EQl9VU0VSIHx8ICdyb290JyxcclxuICAgICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1NXT1JEIHx8ICcnLFxyXG4gICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSB8fCAndHJhaW5fdGlja2V0X2Jvb2tpbmcnLFxyXG4gICAgICB3YWl0Rm9yQ29ubmVjdGlvbnM6IHRydWUsXHJcbiAgICAgIGNvbm5lY3Rpb25MaW1pdDogMTAsXHJcbiAgICAgIHF1ZXVlTGltaXQ6IDAsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHBvb2w7XHJcbn1cclxuXHJcbi8vIFRlc3QgZGF0YWJhc2UgY29ubmVjdGlvblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdGVzdENvbm5lY3Rpb24oKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBvb2wgPSBnZXRQb29sKCk7XHJcbiAgICBjb25zdCBbcm93c10gPSBhd2FpdCBwb29sLnF1ZXJ5KCdTRUxFQ1QgMSBhcyB0ZXN0Jyk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnRGF0YWJhc2UgY29ubmVjdGVkJyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdEYXRhYmFzZSBjb25uZWN0aW9uIGVycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRQb29sKCk7XHJcbiJdLCJuYW1lcyI6WyJteXNxbCIsInBvb2wiLCJnZXRQb29sIiwiY3JlYXRlUG9vbCIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiREJfSE9TVCIsInVzZXIiLCJEQl9VU0VSIiwicGFzc3dvcmQiLCJEQl9QQVNTV09SRCIsImRhdGFiYXNlIiwiREJfTkFNRSIsIndhaXRGb3JDb25uZWN0aW9ucyIsImNvbm5lY3Rpb25MaW1pdCIsInF1ZXVlTGltaXQiLCJ0ZXN0Q29ubmVjdGlvbiIsInJvd3MiLCJxdWVyeSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ "timers":
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mysql2","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/semver","vendor-chunks/long","vendor-chunks/bcryptjs","vendor-chunks/lru-cache","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/denque","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/sqlstring","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/seq-queue","vendor-chunks/named-placeholders","vendor-chunks/lodash.isplainobject","vendor-chunks/generate-function","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/safer-buffer","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsignup%2Froute&page=%2Fapi%2Fauth%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsignup%2Froute.js&appDir=E%3A%5CMy%20project%5CTrain-ticket-booking-system%5Ctrain-ticket-booking%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CMy%20project%5CTrain-ticket-booking-system%5Ctrain-ticket-booking&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();