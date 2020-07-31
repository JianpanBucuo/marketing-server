/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bin/www");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bin/www":
/*!*****************!*\
  !*** ./bin/www ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_server_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/server/app */ \"./src/server/app.js\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\n * Module dependencies.\n */\n\n\n// var debug = require('debug')('demo:server');\n\n\n/**\n * Get port from environment and store in Express.\n */\n\nvar port = normalizePort(process.env.PORT || '4000');\n// app.set('port', port);\n\n/**\n * Create HTTP server.\n */\n\nvar server = http__WEBPACK_IMPORTED_MODULE_1___default.a.createServer(_src_server_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].callback());\n\n/**\n * Listen on provided port, on all network interfaces.\n */\n\nserver.listen(port);\nserver.on('error', onError);\nserver.on('listening', onListening);\n\n/**\n * Normalize a port into a number, string, or false.\n */\n\nfunction normalizePort (val) {\n    var port = parseInt(val, 10);\n\n    if (isNaN(port)) {\n        // named pipe\n        return val;\n    }\n\n    if (port >= 0) {\n        // port number\n        return port;\n    }\n\n    return false;\n}\n\n/**\n * Event listener for HTTP server \"error\" event.\n */\n\nfunction onError (error) {\n    if (error.syscall !== 'listen') {\n        throw error;\n    }\n\n    var bind = typeof port === 'string'\n        ? 'Pipe ' + port\n        : 'Port ' + port;\n\n    // handle specific listen errors with friendly messages\n    switch (error.code) {\n        case 'EACCES':\n            console.error(bind + ' requires elevated privileges');\n            process.exit(1);\n            break;\n        case 'EADDRINUSE':\n            console.error(bind + ' is already in use');\n            process.exit(1);\n            break;\n        default:\n            throw error;\n    }\n}\n\n/**\n * Event listener for HTTP server \"listening\" event.\n */\n\nfunction onListening () {\n    var addr = server.address();\n    var bind = typeof addr === 'string'\n        ? 'pipe ' + addr\n        : 'port ' + addr.port;\n    // debug('Listening on ' + bind);\n}\n\n\n//# sourceURL=webpack:///./bin/www?");

/***/ }),

/***/ "./src/render/app.js":
/*!***************************!*\
  !*** ./src/render/app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst App = props => {\n  const {\n    a\n  } = props;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onClick: () => alert(1)\n  }, \" 111\"), Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"renderRoutes\"])(props.route.routes));\n};\n\nconst mapStateToProps = state => {\n  return {\n    a: state.main.mainData\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps)(App));\n\n//# sourceURL=webpack:///./src/render/app.js?");

/***/ }),

/***/ "./src/render/page/about/index.js":
/*!****************************************!*\
  !*** ./src/render/page/about/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass About extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"About\");\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\n//# sourceURL=webpack:///./src/render/page/about/index.js?");

/***/ }),

/***/ "./src/render/page/home/index.js":
/*!***************************************!*\
  !*** ./src/render/page/home/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_main_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/main/actions */ \"./src/render/store/main/actions.js\");\n\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"home\");\n  }\n\n}\n\nHome.loadData = store => {\n  return store.dispatch(Object(_store_main_actions__WEBPACK_IMPORTED_MODULE_2__[\"getGoodsList\"])());\n};\n\nconst mapStateToProps = state => {\n  return {\n    mainData: state.main.mainData\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    getList() {\n      dispatch(Object(_store_main_actions__WEBPACK_IMPORTED_MODULE_2__[\"getGoodsList\"])());\n    }\n\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Home));\n\n//# sourceURL=webpack:///./src/render/page/home/index.js?");

/***/ }),

/***/ "./src/render/routes.js":
/*!******************************!*\
  !*** ./src/render/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/home */ \"./src/render/page/home/index.js\");\n/* harmony import */ var _page_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/about */ \"./src/render/page/about/index.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ \"./src/render/app.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  component: _app__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  routes: [{\n    path: '/view',\n    component: _page_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    exact: true,\n    key: 'home',\n    loadData: _page_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadData\n  }, {\n    path: '/view/about',\n    component: _page_about__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    exact: true,\n    key: 'about'\n  }]\n}]);\n\n//# sourceURL=webpack:///./src/render/routes.js?");

/***/ }),

/***/ "./src/render/store/index.js":
/*!***********************************!*\
  !*** ./src/render/store/index.js ***!
  \***********************************/
/*! exports provided: getServerStore, getClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerStore\", function() { return getServerStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientStore\", function() { return getClientStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/reducer */ \"./src/render/store/main/reducer.js\");\n\n\n // reducer\n\nconst reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  main: _main_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}); // 服务端渲染sotre\n\nconst getServerStore = () => {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n}; // 客户端渲染store\n\nconst composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...\n}) : redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"];\nconst enhancer = composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\nconst getClientStore = () => {\n  const defaultState = window.context.state;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, defaultState, enhancer);\n};\n\n//# sourceURL=webpack:///./src/render/store/index.js?");

/***/ }),

/***/ "./src/render/store/main/actionTypes.js":
/*!**********************************************!*\
  !*** ./src/render/store/main/actionTypes.js ***!
  \**********************************************/
/*! exports provided: getGoodsListType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGoodsListType\", function() { return getGoodsListType; });\nconst getGoodsListType = 'GET_GOODS_LIST_TYPE';\n\n//# sourceURL=webpack:///./src/render/store/main/actionTypes.js?");

/***/ }),

/***/ "./src/render/store/main/actions.js":
/*!******************************************!*\
  !*** ./src/render/store/main/actions.js ***!
  \******************************************/
/*! exports provided: getGoodsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGoodsList\", function() { return getGoodsList; });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./src/render/store/main/actionTypes.js\");\n/* harmony import */ var _server_interface_goods_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../server/interface/goods/index */ \"./src/server/interface/goods/index.js\");\n\n\n\nconst getGoodsListAction = data => {\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"getGoodsListType\"],\n    data\n  };\n};\n\nconst getGoodsList = () => {\n  return async dispatch => {\n    const result = await Object(_server_interface_goods_index__WEBPACK_IMPORTED_MODULE_1__[\"goodsListInterface\"])();\n\n    if (result.code === '0000') {\n      dispatch(getGoodsListAction(result.data));\n    }\n  };\n};\n\n//# sourceURL=webpack:///./src/render/store/main/actions.js?");

/***/ }),

/***/ "./src/render/store/main/reducer.js":
/*!******************************************!*\
  !*** ./src/render/store/main/reducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./src/render/store/main/actionTypes.js\");\n\nconst defaultState = {\n  mainData: [{\n    a: 1\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = defaultState, action) => {\n  switch (action.type) {\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"getGoodsListType\"]:\n      return Object.assign({}, state, {\n        mainData: action.data\n      });\n  }\n\n  return state;\n});\n\n//# sourceURL=webpack:///./src/render/store/main/reducer.js?");

/***/ }),

/***/ "./src/server/app.js":
/*!***************************!*\
  !*** ./src/server/app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-json */ \"koa-json\");\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_json__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_onerror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-onerror */ \"koa-onerror\");\n/* harmony import */ var koa_onerror__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_onerror__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-bodyparser */ \"koa-bodyparser\");\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-logger */ \"koa-logger\");\n/* harmony import */ var koa_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_logger__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _routes_api_goods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/api/goods */ \"./src/server/routes/api/goods.js\");\n/* harmony import */ var _routes_view_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/view/index */ \"./src/server/routes/view/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nconst app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();\nconst router = new koa_router__WEBPACK_IMPORTED_MODULE_5___default.a(); // error handler\n\nkoa_onerror__WEBPACK_IMPORTED_MODULE_2___default()(app); // middlewares\n\napp.use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_3___default()({\n  enableTypes: ['json', 'form', 'text']\n}));\napp.use(koa_json__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(koa_logger__WEBPACK_IMPORTED_MODULE_4___default()()); // app.use(require('koa-static')(resolve('public')))\n\napp.use(__webpack_require__(/*! koa-static */ \"koa-static\")(Object(path__WEBPACK_IMPORTED_MODULE_8__[\"resolve\"])('client-dist'))); // logger\n\napp.use(async (ctx, next) => {\n  console.log(ctx.path);\n  const start = new Date();\n  await next();\n  const ms = new Date() - start;\n  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);\n}); // routes\n\nrouter.use('/view', _routes_view_index__WEBPACK_IMPORTED_MODULE_7__[\"default\"].routes(), _routes_view_index__WEBPACK_IMPORTED_MODULE_7__[\"default\"].allowedMethods());\nrouter.use(_routes_api_goods__WEBPACK_IMPORTED_MODULE_6__[\"default\"].routes(), _routes_api_goods__WEBPACK_IMPORTED_MODULE_6__[\"default\"].allowedMethods());\napp.use(router.routes(), router.allowedMethods()); // error-handling\n\napp.on('error', (err, ctx) => {\n  console.error('server error', err, ctx);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/server/app.js?");

/***/ }),

/***/ "./src/server/controller/_mock.js":
/*!****************************************!*\
  !*** ./src/server/controller/_mock.js ***!
  \****************************************/
/*! exports provided: goodsList, goodsDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"goodsList\", function() { return goodsList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"goodsDetail\", function() { return goodsDetail; });\nconst goodsList = [{\n  \"sortNo\": 1001,\n  \"goodsId\": \"101280853903474298880\",\n  \"markImageUrl\": \"\",\n  \"commdty\": {\n    \"commdtyId\": \"1280853903474298880\",\n    \"detailImageUrl\": \"https://h5.cdn.unicompayment.com/pointsStoreH5Resources/images/d765fcfb-e131-4cae-9651-2310045be4fe.png\",\n    \"skuList\": [{\n      \"skuPromotionList\": [{\n        \"promotionIntroduction\": \"1\",\n        \"promotionType\": \"1\",\n        \"promotionPrice\": 116700,\n        \"promotionCode\": \"st-dbgj-gx-129\",\n        \"promotionScore\": 116700,\n        \"skuId\": \"7401226512henan\",\n        \"promotionLimitTotal\": 1000\n      }],\n      \"score\": 0,\n      \"price\": 199900,\n      \"name\": \"AirPods Pro\",\n      \"skuDistriBizList\": [{\n        \"distriBizCode\": \"st-dbgj\",\n        \"id\": \"202007092359121386985574595157\",\n        \"skuId\": \"7401226512henan\",\n        \"status\": \"1\"\n      }],\n      \"skuType\": \"5\",\n      \"skuId\": \"7401226512henan\"\n    }],\n    \"price\": 199900,\n    \"name\": \"AirPods Pro\",\n    \"skuIdList\": [\"7401226512henan\"],\n    \"listImageUrl\": \"https://h5.cdn.unicompayment.com/pointsStoreH5Resources/images/bc4719fe-5741-456d-8bec-a222324e65f2.png\"\n  },\n  \"tags\": \"\"\n}, {\n  \"sortNo\": 100000,\n  \"goodsId\": \"101262295087627505664\",\n  \"markImageUrl\": \"\",\n  \"commdty\": {\n    \"commdtyId\": \"1262295087627505664\",\n    \"detailImageUrl\": \"https://h5.cdn.unicompayment.com/pointsStoreH5Resources/images/371c585f-3c93-4846-9ec7-6d922ee8c581.png\",\n    \"skuList\": [{\n      \"skuPromotionList\": [{\n        \"promotionIntroduction\": \"测试\",\n        \"promotionType\": \"1\",\n        \"promotionPrice\": 10,\n        \"promotionCode\": \"st-dbgj-gx-129\",\n        \"promotionScore\": 1000,\n        \"skuId\": \"wsccs002\",\n        \"promotionLimitTotal\": 1000\n      }],\n      \"score\": 0,\n      \"price\": 20,\n      \"name\": \"微商城测试商品 不发货 返佣0.1元\",\n      \"skuDistriBizList\": [{}],\n      \"skuType\": \"5\",\n      \"skuId\": \"wsccs002\"\n    }],\n    \"price\": 20,\n    \"name\": \"微商城测试商品 不发货 返佣0.1元\",\n    \"skuIdList\": [\"wsccs002\"],\n    \"listImageUrl\": \"https://h5.cdn.unicompayment.com/pointsStoreH5Resources/images/bf1c0517-93df-434d-8ba0-08e42f899a8a.png\"\n  },\n  \"tags\": \"\"\n}];\nconst goodsDetail = {\n  \"goodsId\": \"101280853903474298880\",\n  \"sortNo\": 1001,\n  \"markImageUrl\": \"\",\n  \"tags\": \"\",\n  \"commdty\": {\n    \"id\": null,\n    \"commdtyId\": \"1280853903474298880\",\n    \"name\": \"AirPods Pro\",\n    \"price\": 199900,\n    \"supplierPrice\": null,\n    \"listImageUrl\": \"https://h5.cdn.unicompayment.com/pointsStoreH5Resources/images/bc4719fe-5741-456d-8bec-a222324e65f2.png\",\n    \"detailImageUrl\": \"https://h5.cdn.unicompayment.com/pointsStoreH5Resources/images/d765fcfb-e131-4cae-9651-2310045be4fe.png\",\n    \"skuList\": [{\n      \"pid\": null,\n      \"skuId\": \"7401226512henan\",\n      \"name\": \"AirPods Pro\",\n      \"sortNo\": \"1001\",\n      \"commdityId\": null,\n      \"param\": \"苹果耳机\",\n      \"param1\": null,\n      \"param2\": null,\n      \"param3\": null,\n      \"param4\": null,\n      \"brandName\": null,\n      \"wareQd\": null,\n      \"introduction\": null,\n      \"listImageUrl\": null,\n      \"gift\": null,\n      \"categoryId\": null,\n      \"goodsPoolIdList\": null,\n      \"supplierName\": \"联通支付（测试商户）\",\n      \"detailImageUrl\": \"https://h5.cdn.unicompayment.com/pointsStoreH5Resources/images/d32f5a1f-a356-480c-bc1b-5d69bf0e6457.png,https://h5.cdn.unicompayment.com/pointsStoreH5Resources/images/d38cb99c-dfff-47d8-a250-36629af1b051.png\",\n      \"comment\": null,\n      \"paramDetail\": null,\n      \"supplierCode\": \"wopaytest\",\n      \"supplierSkuId\": \"7401226512henan\",\n      \"supplierPromotionCode\": null,\n      \"price\": 199900,\n      \"isReal\": \"false\",\n      \"supplierPrice\": null,\n      \"state\": \"1\",\n      \"stock\": null,\n      \"freight\": null,\n      \"skuPromotionList\": [{\n        \"skuId\": \"7401226512henan\",\n        \"promotionFreight\": null,\n        \"promotionPrice\": 116700,\n        \"promotionCode\": \"st-dbgj-gx-129\",\n        \"promotionStatus\": \"1\",\n        \"promotionScore\": 116700,\n        \"promotionLimitTotal\": 1000,\n        \"promotionLimitLeft\": 1000,\n        \"promotionLimitPerAcont\": 10,\n        \"promotionIntroduction\": \"1\",\n        \"promotionType\": \"1\",\n        \"littleRichPromotionPrice\": null,\n        \"littleRichPromotionPoint\": null,\n        \"littleRichPromotionLimit\": null,\n        \"bigRichPromotionPrice\": null,\n        \"bigRichPromotionPoint\": null,\n        \"bigRichPromotionLimit\": null,\n        \"hundredRichPromotionPrice\": null,\n        \"hundredRichPromotionPoint\": null,\n        \"hundredRichPromotionLimit\": null,\n        \"hugeRichPromotionPrice\": null,\n        \"hugeRichPromotionPoint\": null,\n        \"hugeRichPromotionLimit\": null\n      }],\n      \"score\": 199900,\n      \"skuType\": null,\n      \"commission\": \"10\",\n      \"offType\": null,\n      \"skuDistriBizList\": [{\n        \"skuId\": \"7401226512henan\",\n        \"distriBizCode\": \"st-dbgj\",\n        \"status\": \"1\",\n        \"comnt\": null,\n        \"id\": \"202007092359121386985574595157\"\n      }]\n    }],\n    \"skuIdList\": [\"7401226512henan\"]\n  },\n  \"goodsType\": null,\n  \"loanProduct\": {\n    \"id\": \"2020010415554220185262139\",\n    \"code\": \"762019b51j\",\n    \"name\": \"花呗分期2年832元（手厅-河南）\",\n    \"introduction\": \"花呗分期\\n\",\n    \"type\": \"0\",\n    \"loanAmount\": 83200,\n    \"loanAmountReal\": 83200,\n    \"loanPeriod\": \"24\",\n    \"loanInstalment\": 24,\n    \"instalmentAmount\": null,\n    \"repayAmountTotal\": 93600,\n    \"serviceFeeTotal\": 0,\n    \"supplierFeeRate\": null,\n    \"supplierBaseFeeRate\": null,\n    \"supplierFeeTotal\": null,\n    \"instalmentSupplierFee\": null,\n    \"telecomCoupon\": {\n      \"id\": null,\n      \"refundAmount\": 9000,\n      \"refundAmountTotal\": 93600,\n      \"refundMonths\": \"24\",\n      \"refundCode\": \"762019B51J\",\n      \"refundName\": \"129元24月花呗电子券（手厅-河南）\",\n      \"activityId\": \"762019B51J\",\n      \"promotionCode\": \"st-dbgj-gx-129\"\n    },\n    \"deposit\": {\n      \"name\": null,\n      \"depositAmount\": null,\n      \"depositMonths\": 0\n    },\n    \"loanPhaseProductList\": [{\n      \"loanPhaseNo\": \"1\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3923\n    }, {\n      \"loanPhaseNo\": \"2\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"3\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"4\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"5\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"6\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"7\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"8\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"9\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"10\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"11\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"12\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"13\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"14\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"15\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"16\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"17\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"18\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"19\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"20\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"21\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"22\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"23\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"24\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }]\n  },\n  \"loanProductList\": [{\n    \"id\": \"2020010415554220185262139\",\n    \"code\": \"762019b51j\",\n    \"name\": \"花呗分期2年832元（手厅-河南）\",\n    \"introduction\": \"花呗分期\\n\",\n    \"type\": \"0\",\n    \"loanAmount\": 83200,\n    \"loanAmountReal\": 83200,\n    \"loanPeriod\": \"24\",\n    \"loanInstalment\": 24,\n    \"instalmentAmount\": null,\n    \"repayAmountTotal\": 93600,\n    \"serviceFeeTotal\": 0,\n    \"supplierFeeRate\": null,\n    \"supplierBaseFeeRate\": null,\n    \"supplierFeeTotal\": null,\n    \"instalmentSupplierFee\": null,\n    \"telecomCoupon\": {\n      \"id\": null,\n      \"refundAmount\": 9000,\n      \"refundAmountTotal\": 93600,\n      \"refundMonths\": \"24\",\n      \"refundCode\": \"762019B51J\",\n      \"refundName\": \"129元24月花呗电子券（手厅-河南）\",\n      \"activityId\": \"762019B51J\",\n      \"promotionCode\": \"st-dbgj-gx-129\"\n    },\n    \"deposit\": {\n      \"name\": null,\n      \"depositAmount\": null,\n      \"depositMonths\": 0\n    },\n    \"loanPhaseProductList\": [{\n      \"loanPhaseNo\": \"1\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3923\n    }, {\n      \"loanPhaseNo\": \"2\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"3\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"4\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"5\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"6\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"7\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"8\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"9\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"10\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"11\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"12\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"13\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"14\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"15\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"16\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"17\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"18\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"19\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"20\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"21\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"22\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"23\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }, {\n      \"loanPhaseNo\": \"24\",\n      \"loanProductCode\": null,\n      \"loanPhaseAmount\": 3899\n    }]\n  }],\n  \"telecomPackage\": {\n    \"id\": \"20200105104857284700\",\n    \"code\": \"761912170869\",\n    \"name\": \"联通5G套餐129元档\",\n    \"packageCode\": \"761912170869\",\n    \"packageName\": \"联通5G套餐129元档-河南\",\n    \"packageFee\": \"0\",\n    \"packagePeriod\": null,\n    \"packageIntroduction\": \"无\",\n    \"contractName\": null,\n    \"contractMsg\": null,\n    \"packageBaseCode\": \"90657326\",\n    \"packageBaseName\": \"联通5G套餐129元档\",\n    \"packageSort\": \"90\",\n    \"refundAmount\": 9000,\n    \"refundCode\": \"762019B51J\",\n    \"refundName\": \"129元24月花呗电子券（手厅-河南）\",\n    \"goodsIdList\": null,\n    \"telecomCouponList\": [{\n      \"id\": null,\n      \"refundAmount\": 9000,\n      \"refundAmountTotal\": 93600,\n      \"refundMonths\": \"24\",\n      \"refundCode\": \"762019B51J\",\n      \"refundName\": \"129元24月花呗电子券（手厅-河南）\",\n      \"activityId\": \"762019B51J\",\n      \"promotionCode\": \"st-dbgj-gx-129\"\n    }]\n  },\n  \"telecomPackageList\": [{\n    \"id\": \"20200105104857284700\",\n    \"code\": \"761912170869\",\n    \"name\": \"联通5G套餐129元档\",\n    \"packageCode\": \"761912170869\",\n    \"packageName\": \"联通5G套餐129元档-河南\",\n    \"packageFee\": \"0\",\n    \"packagePeriod\": null,\n    \"packageIntroduction\": \"无\",\n    \"contractName\": null,\n    \"contractMsg\": null,\n    \"packageBaseCode\": \"90657326\",\n    \"packageBaseName\": \"联通5G套餐129元档\",\n    \"packageSort\": \"90\",\n    \"refundAmount\": 9000,\n    \"refundCode\": \"762019B51J\",\n    \"refundName\": \"129元24月花呗电子券（手厅-河南）\",\n    \"goodsIdList\": null,\n    \"telecomCouponList\": [{\n      \"id\": null,\n      \"refundAmount\": 9000,\n      \"refundAmountTotal\": 93600,\n      \"refundMonths\": \"24\",\n      \"refundCode\": \"762019B51J\",\n      \"refundName\": \"129元24月花呗电子券（手厅-河南）\",\n      \"activityId\": \"762019B51J\",\n      \"promotionCode\": \"st-dbgj-gx-129\"\n    }]\n  }]\n};\n\n//# sourceURL=webpack:///./src/server/controller/_mock.js?");

/***/ }),

/***/ "./src/server/controller/_model.js":
/*!*****************************************!*\
  !*** ./src/server/controller/_model.js ***!
  \*****************************************/
/*! exports provided: SuccessModel, ErrorModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SuccessModel\", function() { return SuccessModel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorModel\", function() { return ErrorModel; });\nclass BaseModel {\n  constructor({\n    code,\n    data = {},\n    msg\n  }) {\n    this.code = code;\n    this.data = data;\n    this.msg = msg;\n  }\n\n}\n\nclass SuccessModel extends BaseModel {\n  constructor({\n    data = {}\n  }) {\n    super({\n      code: '0000',\n      msg: '成功',\n      data\n    });\n  }\n\n}\nclass ErrorModel extends BaseModel {\n  constructor({\n    code,\n    msg,\n    data\n  }) {\n    super({\n      code,\n      msg,\n      data\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/server/controller/_model.js?");

/***/ }),

/***/ "./src/server/controller/goods.js":
/*!****************************************!*\
  !*** ./src/server/controller/goods.js ***!
  \****************************************/
/*! exports provided: getGoodsList, getGoodsDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGoodsList\", function() { return getGoodsList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGoodsDetail\", function() { return getGoodsDetail; });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_model */ \"./src/server/controller/_model.js\");\n/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_mock */ \"./src/server/controller/_mock.js\");\n/* harmony import */ var _interface_goods_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interface/goods/index */ \"./src/server/interface/goods/index.js\");\n\n\n\nconst getGoodsList = async () => {\n  const result = await Object(_interface_goods_index__WEBPACK_IMPORTED_MODULE_2__[\"goodsListInterface\"])();\n  return new _model__WEBPACK_IMPORTED_MODULE_0__[\"SuccessModel\"]({\n    data: result.data\n  });\n};\nconst getGoodsDetail = ({\n  goodsId = ''\n}) => {\n  return new _model__WEBPACK_IMPORTED_MODULE_0__[\"SuccessModel\"]({\n    data: _mock__WEBPACK_IMPORTED_MODULE_1__[\"goodsDetail\"]\n  });\n};\n\n//# sourceURL=webpack:///./src/server/controller/goods.js?");

/***/ }),

/***/ "./src/server/interface/axios/index.js":
/*!*********************************************!*\
  !*** ./src/server/interface/axios/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ \"./src/server/interface/axios/request.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _request__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\n\n//# sourceURL=webpack:///./src/server/interface/axios/index.js?");

/***/ }),

/***/ "./src/server/interface/axios/request.js":
/*!***********************************************!*\
  !*** ./src/server/interface/axios/request.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ \"qs\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass HttpRequest {\n  constructor() {\n    this.baseURL = '';\n  }\n\n  mergeConfig(options) {\n    return Object.assign({\n      withCredentials: 'include',\n      baseURL: this.baseURL,\n      method: 'POST',\n      data: {},\n      headers: {\n        'Content-Type': 'application/x-www-form-urlencoded',\n        Accept: 'application/json'\n      }\n    }, options);\n  }\n\n  async request(options) {\n    options = this.mergeConfig(options);\n\n    if (options.headers['Content-Type'] !== 'multipart/form-data') {\n      options.data = qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(options.data);\n    }\n\n    const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();\n    const response = await instance(options);\n    return response.data;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HttpRequest);\n\n//# sourceURL=webpack:///./src/server/interface/axios/request.js?");

/***/ }),

/***/ "./src/server/interface/goods/index.js":
/*!*********************************************!*\
  !*** ./src/server/interface/goods/index.js ***!
  \*********************************************/
/*! exports provided: goodsListInterface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"goodsListInterface\", function() { return goodsListInterface; });\n/* harmony import */ var _axios_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../axios/index */ \"./src/server/interface/axios/index.js\");\n\nconst goodsListInterface = () => {\n  return _axios_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].request({\n    url: 'http://localhost:9000/goods-provider/v1/goods/pagelist',\n    method: 'POST'\n  });\n};\n\n//# sourceURL=webpack:///./src/server/interface/goods/index.js?");

/***/ }),

/***/ "./src/server/routes/api/goods.js":
/*!****************************************!*\
  !*** ./src/server/routes/api/goods.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_goods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controller/goods */ \"./src/server/controller/goods.js\");\n\nconst router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a();\n\nrouter.post('/v1/goods/pagelist', async (ctx, next) => {\n  const result = await Object(_controller_goods__WEBPACK_IMPORTED_MODULE_1__[\"getGoodsList\"])();\n  ctx.body = result;\n});\nrouter.post('/v1/goods/pagedetail', (ctx, next) => {\n  const {\n    goodsId\n  } = ctx.request.body;\n  ctx.body = Object(_controller_goods__WEBPACK_IMPORTED_MODULE_1__[\"getGoodsDetail\"])({\n    goodsId\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/api/goods.js?");

/***/ }),

/***/ "./src/server/routes/view/index.js":
/*!*****************************************!*\
  !*** ./src/server/routes/view/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../server.render */ \"./src/server/server.render.js\");\n\n\nconst router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a({});\nrouter.get('/*', async (ctx, next) => {\n  ctx.body = await Object(_server_render__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(ctx);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/view/index.js?");

/***/ }),

/***/ "./src/server/server.render.js":
/*!*************************************!*\
  !*** ./src/server/server.render.js ***!
  \*************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _render_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../render/routes */ \"./src/render/routes.js\");\n/* harmony import */ var _render_store_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../render/store/index */ \"./src/render/store/index.js\");\n\n\n\n\n\n\n\nconst render = async ctx => {\n  const context = {};\n  const store = Object(_render_store_index__WEBPACK_IMPORTED_MODULE_6__[\"getServerStore\"])();\n  const matchedRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__[\"matchRoutes\"])(_render_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"], ctx.path);\n  const promise = [];\n  matchedRoutes.forEach(v => {\n    // 多级路由服务端渲染\n    if (v.route.loadData) {\n      promise.push(v.route.loadData(store));\n    }\n\n    v.route.routes && v.route.routes.map(vIn => {\n      if (vIn.loadData) {\n        promise.push(vIn.loadData(store));\n      }\n    });\n  });\n  const result = await Promise.all(promise); // const matchedRoutes = matchRoutes(Routes, path)\n\n  const content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: ctx.path,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__[\"renderRoutes\"])(_render_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"])))));\n  return `<html>\n                <title>React ssr</title>\n                <body>\n                    <div id='root'>${content}</div>\n                    <script>\n                        window.context = {\n                            state:${JSON.stringify(store.getState())}}\n                    </script>\n                    <script src='http://localhost:4000/index.js'></script>\n                </body>\n            </html>`;\n};\n\n//# sourceURL=webpack:///./src/server/server.render.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");\n\n//# sourceURL=webpack:///external_%22koa%22?");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-bodyparser\");\n\n//# sourceURL=webpack:///external_%22koa-bodyparser%22?");

/***/ }),

/***/ "koa-json":
/*!***************************!*\
  !*** external "koa-json" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-json\");\n\n//# sourceURL=webpack:///external_%22koa-json%22?");

/***/ }),

/***/ "koa-logger":
/*!*****************************!*\
  !*** external "koa-logger" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-logger\");\n\n//# sourceURL=webpack:///external_%22koa-logger%22?");

/***/ }),

/***/ "koa-onerror":
/*!******************************!*\
  !*** external "koa-onerror" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-onerror\");\n\n//# sourceURL=webpack:///external_%22koa-onerror%22?");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");\n\n//# sourceURL=webpack:///external_%22koa-router%22?");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");\n\n//# sourceURL=webpack:///external_%22koa-static%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"qs\");\n\n//# sourceURL=webpack:///external_%22qs%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });