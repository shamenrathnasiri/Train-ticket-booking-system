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
exports.id = "app/api/bookings/route";
exports.ids = ["app/api/bookings/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fbookings%2Froute&page=%2Fapi%2Fbookings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbookings%2Froute.js&appDir=E%3A%5CMy%20project%5CTrain-ticket-booking-system%5Ctrain-ticket-booking%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CMy%20project%5CTrain-ticket-booking-system%5Ctrain-ticket-booking&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fbookings%2Froute&page=%2Fapi%2Fbookings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbookings%2Froute.js&appDir=E%3A%5CMy%20project%5CTrain-ticket-booking-system%5Ctrain-ticket-booking%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CMy%20project%5CTrain-ticket-booking-system%5Ctrain-ticket-booking&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_My_project_Train_ticket_booking_system_train_ticket_booking_src_app_api_bookings_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/bookings/route.js */ \"(rsc)/./src/app/api/bookings/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/bookings/route\",\n        pathname: \"/api/bookings\",\n        filename: \"route\",\n        bundlePath: \"app/api/bookings/route\"\n    },\n    resolvedPagePath: \"E:\\\\My project\\\\Train-ticket-booking-system\\\\train-ticket-booking\\\\src\\\\app\\\\api\\\\bookings\\\\route.js\",\n    nextConfigOutput,\n    userland: E_My_project_Train_ticket_booking_system_train_ticket_booking_src_app_api_bookings_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZib29raW5ncyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYm9va2luZ3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZib29raW5ncyUyRnJvdXRlLmpzJmFwcERpcj1FJTNBJTVDTXklMjBwcm9qZWN0JTVDVHJhaW4tdGlja2V0LWJvb2tpbmctc3lzdGVtJTVDdHJhaW4tdGlja2V0LWJvb2tpbmclNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUNNeSUyMHByb2plY3QlNUNUcmFpbi10aWNrZXQtYm9va2luZy1zeXN0ZW0lNUN0cmFpbi10aWNrZXQtYm9va2luZyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDb0Q7QUFDakk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkU6XFxcXE15IHByb2plY3RcXFxcVHJhaW4tdGlja2V0LWJvb2tpbmctc3lzdGVtXFxcXHRyYWluLXRpY2tldC1ib29raW5nXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGJvb2tpbmdzXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9ib29raW5ncy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2Jvb2tpbmdzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9ib29raW5ncy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkU6XFxcXE15IHByb2plY3RcXFxcVHJhaW4tdGlja2V0LWJvb2tpbmctc3lzdGVtXFxcXHRyYWluLXRpY2tldC1ib29raW5nXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGJvb2tpbmdzXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fbookings%2Froute&page=%2Fapi%2Fbookings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbookings%2Froute.js&appDir=E%3A%5CMy%20project%5CTrain-ticket-booking-system%5Ctrain-ticket-booking%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CMy%20project%5CTrain-ticket-booking-system%5Ctrain-ticket-booking&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/bookings/route.js":
/*!***************************************!*\
  !*** ./src/app/api/bookings/route.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   runtime: () => (/* binding */ runtime)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.js\");\n\n\n\nconst runtime = \"nodejs\";\n// GET /api/bookings - Get user's bookings\nasync function GET(request) {\n    try {\n        const user = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.getUserFromRequest)(request);\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Not authenticated\"\n            }, {\n                status: 401\n            });\n        }\n        const pool = (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.getPool)();\n        const [bookings] = await pool.query(`SELECT \n        b.*,\n        s.from_station,\n        s.to_station,\n        s.departure_time,\n        s.arrival_time,\n        t.train_number,\n        t.train_name,\n        GROUP_CONCAT(sr.seat_id ORDER BY sr.seat_id) as seats\n       FROM bookings b\n       JOIN schedules s ON b.schedule_id = s.id\n       JOIN trains t ON b.train_id = t.id\n       LEFT JOIN seat_reservations sr ON b.id = sr.booking_id\n       WHERE b.user_id = ?\n       GROUP BY b.id\n       ORDER BY b.booking_date DESC`, [\n            user.id\n        ]);\n        // Convert seats string to array\n        const formattedBookings = bookings.map((booking)=>({\n                ...booking,\n                seats: booking.seats ? booking.seats.split(',') : []\n            }));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            bookings: formattedBookings\n        });\n    } catch (error) {\n        console.error(\"Get bookings error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch bookings\"\n        }, {\n            status: 500\n        });\n    }\n}\n// POST /api/bookings - Create new booking\nasync function POST(request) {\n    const conn = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.getPool)().getConnection();\n    try {\n        const user = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.getUserFromRequest)(request);\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Not authenticated\"\n            }, {\n                status: 401\n            });\n        }\n        const body = await request.json();\n        const { scheduleId, trainId, travelDate, seats, passengers } = body;\n        // Validate input\n        if (!scheduleId || !trainId || !travelDate || !Array.isArray(seats) || seats.length === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Missing required fields\"\n            }, {\n                status: 400\n            });\n        }\n        await conn.beginTransaction();\n        // Check if seats are available (lock rows)\n        const [existingSeats] = await conn.query(`SELECT sr.seat_id \n       FROM seat_reservations sr\n       JOIN bookings b ON sr.booking_id = b.id\n       WHERE sr.train_id = ? \n       AND sr.travel_date = ?\n       AND sr.seat_id IN (?)\n       AND b.status != 'cancelled'\n       FOR UPDATE`, [\n            trainId,\n            travelDate,\n            seats\n        ]);\n        if (existingSeats.length > 0) {\n            await conn.rollback();\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: `Seats already booked: ${existingSeats.map((s)=>s.seat_id).join(', ')}`\n            }, {\n                status: 409\n            });\n        }\n        // Get schedule details for pricing\n        const [scheduleRows] = await conn.query('SELECT base_price FROM schedules WHERE id = ?', [\n            scheduleId\n        ]);\n        if (scheduleRows.length === 0) {\n            await conn.rollback();\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Schedule not found\"\n            }, {\n                status: 404\n            });\n        }\n        const basePrice = scheduleRows[0].base_price;\n        const totalPrice = basePrice * seats.length;\n        // Create booking\n        const [bookingResult] = await conn.query(`INSERT INTO bookings \n       (user_id, schedule_id, train_id, travel_date, total_seats, total_price, status, payment_status) \n       VALUES (?, ?, ?, ?, ?, ?, 'confirmed', 'unpaid')`, [\n            user.id,\n            scheduleId,\n            trainId,\n            travelDate,\n            seats.length,\n            totalPrice\n        ]);\n        const bookingId = bookingResult.insertId;\n        // Insert seat reservations\n        const seatValues = seats.map((seatId, index)=>{\n            const passenger = passengers?.[index] || {};\n            return [\n                bookingId,\n                trainId,\n                travelDate,\n                seatId,\n                passenger.name || null,\n                passenger.age || null\n            ];\n        });\n        await conn.query(`INSERT INTO seat_reservations \n       (booking_id, train_id, travel_date, seat_id, passenger_name, passenger_age) \n       VALUES ?`, [\n            seatValues\n        ]);\n        await conn.commit();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            booking: {\n                id: bookingId,\n                scheduleId,\n                trainId,\n                travelDate,\n                seats,\n                totalSeats: seats.length,\n                totalPrice,\n                status: 'confirmed',\n                paymentStatus: 'unpaid'\n            }\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        await conn.rollback();\n        console.error(\"Create booking error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to create booking\"\n        }, {\n            status: 500\n        });\n    } finally{\n        conn.release();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QmQsUUFBUVosS0FBSyxDQUFDLHlCQUF5QkE7UUFDdkMsT0FBT1IscURBQVlBLENBQUNPLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUEyQixHQUNwQztZQUFFQyxRQUFRO1FBQUk7SUFFbEIsU0FBVTtRQUNSYSxLQUFLZ0MsT0FBTztJQUNkO0FBQ0YiLCJzb3VyY2VzIjpbIkU6XFxNeSBwcm9qZWN0XFxUcmFpbi10aWNrZXQtYm9va2luZy1zeXN0ZW1cXHRyYWluLXRpY2tldC1ib29raW5nXFxzcmNcXGFwcFxcYXBpXFxib29raW5nc1xccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7IGdldFBvb2wgfSBmcm9tIFwiQC9saWIvZGJcIjtcclxuaW1wb3J0IHsgZ2V0VXNlckZyb21SZXF1ZXN0IH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBydW50aW1lID0gXCJub2RlanNcIjtcclxuXHJcbi8vIEdFVCAvYXBpL2Jvb2tpbmdzIC0gR2V0IHVzZXIncyBib29raW5nc1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXJGcm9tUmVxdWVzdChyZXF1ZXN0KTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6IFwiTm90IGF1dGhlbnRpY2F0ZWRcIiB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvb2wgPSBnZXRQb29sKCk7XHJcbiAgICBjb25zdCBbYm9va2luZ3NdID0gYXdhaXQgcG9vbC5xdWVyeShcclxuICAgICAgYFNFTEVDVCBcclxuICAgICAgICBiLiosXHJcbiAgICAgICAgcy5mcm9tX3N0YXRpb24sXHJcbiAgICAgICAgcy50b19zdGF0aW9uLFxyXG4gICAgICAgIHMuZGVwYXJ0dXJlX3RpbWUsXHJcbiAgICAgICAgcy5hcnJpdmFsX3RpbWUsXHJcbiAgICAgICAgdC50cmFpbl9udW1iZXIsXHJcbiAgICAgICAgdC50cmFpbl9uYW1lLFxyXG4gICAgICAgIEdST1VQX0NPTkNBVChzci5zZWF0X2lkIE9SREVSIEJZIHNyLnNlYXRfaWQpIGFzIHNlYXRzXHJcbiAgICAgICBGUk9NIGJvb2tpbmdzIGJcclxuICAgICAgIEpPSU4gc2NoZWR1bGVzIHMgT04gYi5zY2hlZHVsZV9pZCA9IHMuaWRcclxuICAgICAgIEpPSU4gdHJhaW5zIHQgT04gYi50cmFpbl9pZCA9IHQuaWRcclxuICAgICAgIExFRlQgSk9JTiBzZWF0X3Jlc2VydmF0aW9ucyBzciBPTiBiLmlkID0gc3IuYm9va2luZ19pZFxyXG4gICAgICAgV0hFUkUgYi51c2VyX2lkID0gP1xyXG4gICAgICAgR1JPVVAgQlkgYi5pZFxyXG4gICAgICAgT1JERVIgQlkgYi5ib29raW5nX2RhdGUgREVTQ2AsXHJcbiAgICAgIFt1c2VyLmlkXVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBDb252ZXJ0IHNlYXRzIHN0cmluZyB0byBhcnJheVxyXG4gICAgY29uc3QgZm9ybWF0dGVkQm9va2luZ3MgPSBib29raW5ncy5tYXAoYm9va2luZyA9PiAoe1xyXG4gICAgICAuLi5ib29raW5nLFxyXG4gICAgICBzZWF0czogYm9va2luZy5zZWF0cyA/IGJvb2tpbmcuc2VhdHMuc3BsaXQoJywnKSA6IFtdXHJcbiAgICB9KSk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgYm9va2luZ3M6IGZvcm1hdHRlZEJvb2tpbmdzXHJcbiAgICB9KTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJHZXQgYm9va2luZ3MgZXJyb3I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggYm9va2luZ3NcIiB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBQT1NUIC9hcGkvYm9va2luZ3MgLSBDcmVhdGUgbmV3IGJvb2tpbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCkge1xyXG4gIGNvbnN0IGNvbm4gPSBhd2FpdCBnZXRQb29sKCkuZ2V0Q29ubmVjdGlvbigpO1xyXG4gIFxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlckZyb21SZXF1ZXN0KHJlcXVlc3QpO1xyXG5cclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogXCJOb3QgYXV0aGVudGljYXRlZFwiIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gICAgY29uc3QgeyBzY2hlZHVsZUlkLCB0cmFpbklkLCB0cmF2ZWxEYXRlLCBzZWF0cywgcGFzc2VuZ2VycyB9ID0gYm9keTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBpbnB1dFxyXG4gICAgaWYgKCFzY2hlZHVsZUlkIHx8ICF0cmFpbklkIHx8ICF0cmF2ZWxEYXRlIHx8ICFBcnJheS5pc0FycmF5KHNlYXRzKSB8fCBzZWF0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6IFwiTWlzc2luZyByZXF1aXJlZCBmaWVsZHNcIiB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGNvbm4uYmVnaW5UcmFuc2FjdGlvbigpO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHNlYXRzIGFyZSBhdmFpbGFibGUgKGxvY2sgcm93cylcclxuICAgIGNvbnN0IFtleGlzdGluZ1NlYXRzXSA9IGF3YWl0IGNvbm4ucXVlcnkoXHJcbiAgICAgIGBTRUxFQ1Qgc3Iuc2VhdF9pZCBcclxuICAgICAgIEZST00gc2VhdF9yZXNlcnZhdGlvbnMgc3JcclxuICAgICAgIEpPSU4gYm9va2luZ3MgYiBPTiBzci5ib29raW5nX2lkID0gYi5pZFxyXG4gICAgICAgV0hFUkUgc3IudHJhaW5faWQgPSA/IFxyXG4gICAgICAgQU5EIHNyLnRyYXZlbF9kYXRlID0gP1xyXG4gICAgICAgQU5EIHNyLnNlYXRfaWQgSU4gKD8pXHJcbiAgICAgICBBTkQgYi5zdGF0dXMgIT0gJ2NhbmNlbGxlZCdcclxuICAgICAgIEZPUiBVUERBVEVgLFxyXG4gICAgICBbdHJhaW5JZCwgdHJhdmVsRGF0ZSwgc2VhdHNdXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChleGlzdGluZ1NlYXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgYXdhaXQgY29ubi5yb2xsYmFjaygpO1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogYFNlYXRzIGFscmVhZHkgYm9va2VkOiAke2V4aXN0aW5nU2VhdHMubWFwKHMgPT4gcy5zZWF0X2lkKS5qb2luKCcsICcpfWAgfSxcclxuICAgICAgICB7IHN0YXR1czogNDA5IH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgc2NoZWR1bGUgZGV0YWlscyBmb3IgcHJpY2luZ1xyXG4gICAgY29uc3QgW3NjaGVkdWxlUm93c10gPSBhd2FpdCBjb25uLnF1ZXJ5KFxyXG4gICAgICAnU0VMRUNUIGJhc2VfcHJpY2UgRlJPTSBzY2hlZHVsZXMgV0hFUkUgaWQgPSA/JyxcclxuICAgICAgW3NjaGVkdWxlSWRdXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChzY2hlZHVsZVJvd3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGF3YWl0IGNvbm4ucm9sbGJhY2soKTtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6IFwiU2NoZWR1bGUgbm90IGZvdW5kXCIgfSxcclxuICAgICAgICB7IHN0YXR1czogNDA0IH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiYXNlUHJpY2UgPSBzY2hlZHVsZVJvd3NbMF0uYmFzZV9wcmljZTtcclxuICAgIGNvbnN0IHRvdGFsUHJpY2UgPSBiYXNlUHJpY2UgKiBzZWF0cy5sZW5ndGg7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGJvb2tpbmdcclxuICAgIGNvbnN0IFtib29raW5nUmVzdWx0XSA9IGF3YWl0IGNvbm4ucXVlcnkoXHJcbiAgICAgIGBJTlNFUlQgSU5UTyBib29raW5ncyBcclxuICAgICAgICh1c2VyX2lkLCBzY2hlZHVsZV9pZCwgdHJhaW5faWQsIHRyYXZlbF9kYXRlLCB0b3RhbF9zZWF0cywgdG90YWxfcHJpY2UsIHN0YXR1cywgcGF5bWVudF9zdGF0dXMpIFxyXG4gICAgICAgVkFMVUVTICg/LCA/LCA/LCA/LCA/LCA/LCAnY29uZmlybWVkJywgJ3VucGFpZCcpYCxcclxuICAgICAgW3VzZXIuaWQsIHNjaGVkdWxlSWQsIHRyYWluSWQsIHRyYXZlbERhdGUsIHNlYXRzLmxlbmd0aCwgdG90YWxQcmljZV1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYm9va2luZ0lkID0gYm9va2luZ1Jlc3VsdC5pbnNlcnRJZDtcclxuXHJcbiAgICAvLyBJbnNlcnQgc2VhdCByZXNlcnZhdGlvbnNcclxuICAgIGNvbnN0IHNlYXRWYWx1ZXMgPSBzZWF0cy5tYXAoKHNlYXRJZCwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgcGFzc2VuZ2VyID0gcGFzc2VuZ2Vycz8uW2luZGV4XSB8fCB7fTtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBib29raW5nSWQsXHJcbiAgICAgICAgdHJhaW5JZCxcclxuICAgICAgICB0cmF2ZWxEYXRlLFxyXG4gICAgICAgIHNlYXRJZCxcclxuICAgICAgICBwYXNzZW5nZXIubmFtZSB8fCBudWxsLFxyXG4gICAgICAgIHBhc3Nlbmdlci5hZ2UgfHwgbnVsbFxyXG4gICAgICBdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgY29ubi5xdWVyeShcclxuICAgICAgYElOU0VSVCBJTlRPIHNlYXRfcmVzZXJ2YXRpb25zIFxyXG4gICAgICAgKGJvb2tpbmdfaWQsIHRyYWluX2lkLCB0cmF2ZWxfZGF0ZSwgc2VhdF9pZCwgcGFzc2VuZ2VyX25hbWUsIHBhc3Nlbmdlcl9hZ2UpIFxyXG4gICAgICAgVkFMVUVTID9gLFxyXG4gICAgICBbc2VhdFZhbHVlc11cclxuICAgICk7XHJcblxyXG4gICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBib29raW5nOiB7XHJcbiAgICAgICAgaWQ6IGJvb2tpbmdJZCxcclxuICAgICAgICBzY2hlZHVsZUlkLFxyXG4gICAgICAgIHRyYWluSWQsXHJcbiAgICAgICAgdHJhdmVsRGF0ZSxcclxuICAgICAgICBzZWF0cyxcclxuICAgICAgICB0b3RhbFNlYXRzOiBzZWF0cy5sZW5ndGgsXHJcbiAgICAgICAgdG90YWxQcmljZSxcclxuICAgICAgICBzdGF0dXM6ICdjb25maXJtZWQnLFxyXG4gICAgICAgIHBheW1lbnRTdGF0dXM6ICd1bnBhaWQnXHJcbiAgICAgIH1cclxuICAgIH0sIHsgc3RhdHVzOiAyMDEgfSk7XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhd2FpdCBjb25uLnJvbGxiYWNrKCk7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiQ3JlYXRlIGJvb2tpbmcgZXJyb3I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGJvb2tpbmdcIiB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIGNvbm4ucmVsZWFzZSgpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0UG9vbCIsImdldFVzZXJGcm9tUmVxdWVzdCIsInJ1bnRpbWUiLCJHRVQiLCJyZXF1ZXN0IiwidXNlciIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInBvb2wiLCJib29raW5ncyIsInF1ZXJ5IiwiaWQiLCJmb3JtYXR0ZWRCb29raW5ncyIsIm1hcCIsImJvb2tpbmciLCJzZWF0cyIsInNwbGl0Iiwic3VjY2VzcyIsImNvbnNvbGUiLCJQT1NUIiwiY29ubiIsImdldENvbm5lY3Rpb24iLCJib2R5Iiwic2NoZWR1bGVJZCIsInRyYWluSWQiLCJ0cmF2ZWxEYXRlIiwicGFzc2VuZ2VycyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImJlZ2luVHJhbnNhY3Rpb24iLCJleGlzdGluZ1NlYXRzIiwicm9sbGJhY2siLCJzIiwic2VhdF9pZCIsImpvaW4iLCJzY2hlZHVsZVJvd3MiLCJiYXNlUHJpY2UiLCJiYXNlX3ByaWNlIiwidG90YWxQcmljZSIsImJvb2tpbmdSZXN1bHQiLCJib29raW5nSWQiLCJpbnNlcnRJZCIsInNlYXRWYWx1ZXMiLCJzZWF0SWQiLCJpbmRleCIsInBhc3NlbmdlciIsIm5hbWUiLCJhZ2UiLCJjb21taXQiLCJ0b3RhbFNlYXRzIiwicGF5bWVudFN0YXR1cyIsInJlbGVhc2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/bookings/route.js\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mysql2","vendor-chunks/semver","vendor-chunks/iconv-lite","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/aws-ssl-profiles","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/bcryptjs","vendor-chunks/lru-cache","vendor-chunks/long","vendor-chunks/safer-buffer","vendor-chunks/safe-buffer","vendor-chunks/named-placeholders","vendor-chunks/ms","vendor-chunks/lru.min","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/is-property","vendor-chunks/generate-function","vendor-chunks/denque","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fbookings%2Froute&page=%2Fapi%2Fbookings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbookings%2Froute.js&appDir=E%3A%5CMy%20project%5CTrain-ticket-booking-system%5Ctrain-ticket-booking%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CMy%20project%5CTrain-ticket-booking-system%5Ctrain-ticket-booking&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();