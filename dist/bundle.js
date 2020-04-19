/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./index.js","vendors~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/scss/style.scss":
/*!***************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/scss/style.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../img/background.png */ \"./img/background.png\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \".search_block {\\n  position: absolute;\\n  top: 140px;\\n  color: black;\\n  width: 380px;\\n  background: #ffffff;\\n  border: 1px solid rgba(0, 0, 0, 0.12);\\n  box-sizing: border-box;\\n  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);\\n  border-radius: 4px;\\n}\\n.search_block .search_container {\\n  width: 320px;\\n  margin: 0 auto;\\n  margin-top: 20px;\\n}\\n.search_block .search_container p {\\n  width: 275px;\\n  font-family: Quicksand;\\n  color: #1f2041;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 24px;\\n  line-height: 30px;\\n}\\n.search_block .search_container .date {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  margin-top: 20px;\\n  grid-gap: 0 20px;\\n}\\n.search_block .search_container label {\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 12px;\\n  line-height: 15px;\\n  /* identical to box height */\\n  color: #1f2041;\\n  text-transform: uppercase;\\n}\\n.search_block .search_container .guest {\\n  margin-top: 20px;\\n}\\n.search_block .search_container input[type=date] {\\n  height: 44px;\\n  width: 150px;\\n}\\n.search_block .search_container input[list=guest] {\\n  width: 320px;\\n  height: 44px;\\n}\\n.search_block .search_container input::-webkit-datetime-edit {\\n  padding: 15px;\\n}\\n.search_block .search_container input::-webkit-input-placeholder {\\n  color: red;\\n  background: black;\\n  padding: 10em;\\n}\\n.search_block .search_container .button {\\n  display: grid;\\n  height: 44px;\\n  align-items: center;\\n  height: 44px;\\n  border-radius: 22px;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 12px;\\n  line-height: 15px;\\n  text-align: center;\\n  text-transform: uppercase;\\n  padding: 0;\\n  margin-top: 31px;\\n  margin-bottom: 31px;\\n}\\n.search_block .search_container input {\\n  display: block;\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 14px;\\n  line-height: 18px;\\n  color: rgba(31, 32, 65, 0.75);\\n}\\n\\n.color_type {\\n  color: #1f2041;\\n  padding: 145px;\\n}\\n.color_type .container {\\n  margin: 0 auto;\\n  display: grid;\\n  grid-template-columns: 1fr 403px;\\n}\\n.color_type .container .block .color_contant {\\n  grid-gap: 40px;\\n  display: grid;\\n  grid-template-columns: min-content auto;\\n  margin-bottom: 20px;\\n}\\n.color_type .container .block .color_contant .color_block {\\n  width: 70px;\\n  height: 70px;\\n  border-radius: 6px;\\n}\\n.color_type .container .block .color_contant .text_block {\\n  display: grid;\\n  align-items: center;\\n  height: 57px;\\n}\\n.color_type .container .block .color_contant .text_block p {\\n  margin: 0;\\n}\\n.color_type .container .block .color_contant .text_block .name_color {\\n  font-weight: bold;\\n}\\n.color_type .container .block .text {\\n  display: grid;\\n  grid-gap: 30px;\\n  grid-template-columns: min-content auto;\\n  margin-bottom: 50px;\\n}\\n.color_type .container .block .text .body_color {\\n  color: #bc9cff;\\n  width: 30px;\\n  text-align: end;\\n}\\n\\n.dark_100 {\\n  background: #1f2041;\\n}\\n\\n.dark_75 {\\n  background: rgba(31, 32, 65, 0.75);\\n}\\n\\n.dark_50 {\\n  background: rgba(31, 32, 65, 0.5);\\n}\\n\\n.dark_25 {\\n  background: rgba(31, 32, 65, 0.25);\\n}\\n\\n.dark_5 {\\n  background: rgba(31, 32, 65, 0.05);\\n}\\n\\n.purple {\\n  background: #bc9cff;\\n}\\n\\n.green {\\n  background: #6fcf97;\\n}\\n\\n* {\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 14px;\\n  color: rgba(31, 32, 65, 0.75);\\n  font-family: Montserrat;\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n  text-decoration: none;\\n}\\n\\nh1 {\\n  font-family: Quicksand;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 24px;\\n  line-height: 30px;\\n}\\n\\nh2 {\\n  font-family: Quicksand;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 19px;\\n  line-height: 24px;\\n}\\n\\nh3 {\\n  font-family: Quicksand;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 12px;\\n  line-height: 15px;\\n  text-transform: uppercase;\\n}\\n\\ni {\\n  display: block;\\n  font-family: Material Icons;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 24px;\\n  line-height: 20px;\\n  align-items: center;\\n  text-align: center;\\n  color: rgba(62, 65, 148, 0.5);\\n}\\n\\np {\\n  margin-bottom: 20px;\\n}\\n\\nspan {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 14px;\\n  line-height: 24px;\\n  color: rgba(31, 32, 65, 0.75);\\n}\\n\\nstrong {\\n  display: block;\\n  margin-bottom: 21px;\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 12px;\\n  line-height: 15px;\\n  text-transform: uppercase;\\n  color: #1f2041;\\n}\\n\\n.icon {\\n  display: grid;\\n  grid-gap: 12.5px;\\n  grid-template-columns: 40px auto;\\n  align-items: center;\\n}\\n\\n.center_text {\\n  text-align: center;\\n}\\n\\nheader {\\n  display: grid;\\n  height: 70px;\\n}\\n\\nnav {\\n  display: grid;\\n  grid-template-columns: auto auto;\\n  align-items: center;\\n}\\n\\nul {\\n  display: grid;\\n  grid-template-columns: 42px min-content min-content min-content min-content;\\n  grid-gap: 20px;\\n}\\nul .icons {\\n  display: block;\\n}\\nul .icons {\\n  display: grid;\\n  grid-template-columns: min-content min-content;\\n}\\nul p {\\n  margin: 0;\\n}\\n\\n.container {\\n  width: 1160px;\\n  margin: 0 auto;\\n}\\n\\n.nav {\\n  display: grid;\\n  grid-template-columns: 351px auto;\\n  align-items: center;\\n}\\n\\n.button_nav {\\n  display: grid;\\n  grid-gap: 20px;\\n  text-align: center;\\n  align-items: center;\\n  grid-template-columns: 87px 196px;\\n}\\n\\n.button {\\n  font-size: 12px;\\n  font-weight: bold;\\n  padding-top: 10px;\\n  padding-bottom: 10px;\\n  border: 1px solid red;\\n  border-radius: 22px;\\n  border: 2px solid;\\n  border-color: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\\n}\\n\\n.bg {\\n  background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\\n  color: white;\\n}\\n\\n.main {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  margin: 0 auto;\\n  width: 100%;\\n  height: 1022px;\\n}\\n\\nfooter .footer {\\n  display: grid;\\n  grid-template-columns: repeat(5, 1fr);\\n  margin-top: 104px;\\n  margin-bottom: 100px;\\n}\\nfooter .footer .block_info_logo .icon {\\n  margin-bottom: 20px;\\n}\\nfooter .footer .block_info_logo span {\\n  display: block;\\n  width: 260px;\\n  margin-right: 40px;\\n}\\nfooter .footer input {\\n  height: 44px;\\n  width: 260px;\\n  background: #ffffff;\\n  border: 1px solid rgba(31, 32, 65, 0.25);\\n  box-sizing: border-box;\\n  border-radius: 4px;\\n  padding: 15px;\\n}\\nfooter .footer_brand {\\n  border-top: 1px solid rgba(31, 32, 65, 0.05);\\n  padding-top: 23px;\\n  padding-bottom: 23px;\\n}\\nfooter .footer_brand .container {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n}\\nfooter .footer_brand .brand_logo {\\n  display: grid;\\n  justify-content: right;\\n  grid-template-columns: repeat(3, 24px);\\n  grid-gap: 20px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/scss/style.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/css/style.css":
/*!*********************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/css/style.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../img/background.png */ \"./img/background.png\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \".search_block {\\n  position: absolute;\\n  top: 140px;\\n  color: black;\\n  width: 380px;\\n  background: #ffffff;\\n  border: 1px solid rgba(0, 0, 0, 0.12);\\n  box-sizing: border-box;\\n  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);\\n  border-radius: 4px;\\n}\\n.search_block .search_container {\\n  width: 320px;\\n  margin: 0 auto;\\n  margin-top: 20px;\\n}\\n.search_block .search_container p {\\n  width: 275px;\\n  font-family: Quicksand;\\n  color: #1f2041;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 24px;\\n  line-height: 30px;\\n}\\n.search_block .search_container .date {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  margin-top: 20px;\\n  grid-gap: 0 20px;\\n}\\n.search_block .search_container label {\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 12px;\\n  line-height: 15px;\\n  /* identical to box height */\\n  color: #1f2041;\\n  text-transform: uppercase;\\n}\\n.search_block .search_container .guest {\\n  margin-top: 20px;\\n}\\n.search_block .search_container input[type=date] {\\n  height: 44px;\\n  width: 150px;\\n}\\n.search_block .search_container input[list=guest] {\\n  width: 320px;\\n  height: 44px;\\n}\\n.search_block .search_container input::-webkit-datetime-edit {\\n  padding: 15px;\\n}\\n.search_block .search_container input::-webkit-input-placeholder {\\n  color: red;\\n  background: black;\\n  padding: 10em;\\n}\\n.search_block .search_container .button {\\n  display: grid;\\n  height: 44px;\\n  align-items: center;\\n  height: 44px;\\n  border-radius: 22px;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 12px;\\n  line-height: 15px;\\n  text-align: center;\\n  text-transform: uppercase;\\n  padding: 0;\\n  margin-top: 31px;\\n  margin-bottom: 31px;\\n}\\n.search_block .search_container input {\\n  display: block;\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 14px;\\n  line-height: 18px;\\n  color: rgba(31, 32, 65, 0.75);\\n}\\n\\n.color_type {\\n  color: #1f2041;\\n  padding: 145px;\\n}\\n.color_type .container {\\n  margin: 0 auto;\\n  display: grid;\\n  grid-template-columns: 1fr 403px;\\n}\\n.color_type .container .block .color_contant {\\n  grid-gap: 40px;\\n  display: grid;\\n  grid-template-columns: min-content auto;\\n  margin-bottom: 20px;\\n}\\n.color_type .container .block .color_contant .color_block {\\n  width: 70px;\\n  height: 70px;\\n  border-radius: 6px;\\n}\\n.color_type .container .block .color_contant .text_block {\\n  display: grid;\\n  align-items: center;\\n  height: 57px;\\n}\\n.color_type .container .block .color_contant .text_block p {\\n  margin: 0;\\n}\\n.color_type .container .block .color_contant .text_block .name_color {\\n  font-weight: bold;\\n}\\n.color_type .container .block .text {\\n  display: grid;\\n  grid-gap: 30px;\\n  grid-template-columns: min-content auto;\\n  margin-bottom: 50px;\\n}\\n.color_type .container .block .text .body_color {\\n  color: #bc9cff;\\n  width: 30px;\\n  text-align: end;\\n}\\n\\n.dark_100 {\\n  background: #1f2041;\\n}\\n\\n.dark_75 {\\n  background: rgba(31, 32, 65, 0.75);\\n}\\n\\n.dark_50 {\\n  background: rgba(31, 32, 65, 0.5);\\n}\\n\\n.dark_25 {\\n  background: rgba(31, 32, 65, 0.25);\\n}\\n\\n.dark_5 {\\n  background: rgba(31, 32, 65, 0.05);\\n}\\n\\n.purple {\\n  background: #bc9cff;\\n}\\n\\n.green {\\n  background: #6fcf97;\\n}\\n\\n* {\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 14px;\\n  color: rgba(31, 32, 65, 0.75);\\n  font-family: Montserrat;\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n  text-decoration: none;\\n}\\n\\nh1 {\\n  font-family: Quicksand;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 24px;\\n  line-height: 30px;\\n}\\n\\nh2 {\\n  font-family: Quicksand;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 19px;\\n  line-height: 24px;\\n}\\n\\nh3 {\\n  font-family: Quicksand;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 12px;\\n  line-height: 15px;\\n  text-transform: uppercase;\\n}\\n\\ni {\\n  display: block;\\n  font-family: Material Icons;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 24px;\\n  line-height: 20px;\\n  align-items: center;\\n  text-align: center;\\n  color: rgba(62, 65, 148, 0.5);\\n}\\n\\np {\\n  margin-bottom: 20px;\\n}\\n\\nspan {\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 14px;\\n  line-height: 24px;\\n  color: rgba(31, 32, 65, 0.75);\\n}\\n\\nstrong {\\n  display: block;\\n  margin-bottom: 21px;\\n  font-family: Montserrat;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 12px;\\n  line-height: 15px;\\n  text-transform: uppercase;\\n  color: #1f2041;\\n}\\n\\n.icon {\\n  display: grid;\\n  grid-gap: 12.5px;\\n  grid-template-columns: 40px auto;\\n  align-items: center;\\n}\\n\\n.center_text {\\n  text-align: center;\\n}\\n\\nheader {\\n  display: grid;\\n  height: 70px;\\n}\\n\\nnav {\\n  display: grid;\\n  grid-template-columns: auto auto;\\n  align-items: center;\\n}\\n\\nul {\\n  display: grid;\\n  grid-template-columns: 42px min-content min-content min-content min-content;\\n  grid-gap: 20px;\\n}\\nul .icons {\\n  display: block;\\n}\\nul .icons {\\n  display: grid;\\n  grid-template-columns: min-content min-content;\\n}\\nul p {\\n  margin: 0;\\n}\\n\\n.container {\\n  width: 1160px;\\n  margin: 0 auto;\\n}\\n\\n.nav {\\n  display: grid;\\n  grid-template-columns: 351px auto;\\n  align-items: center;\\n}\\n\\n.button_nav {\\n  display: grid;\\n  grid-gap: 20px;\\n  text-align: center;\\n  align-items: center;\\n  grid-template-columns: 87px 196px;\\n}\\n\\n.button {\\n  font-size: 12px;\\n  font-weight: bold;\\n  padding-top: 10px;\\n  padding-bottom: 10px;\\n  border: 1px solid red;\\n  border-radius: 22px;\\n  border: 2px solid;\\n  border-color: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\\n}\\n\\n.bg {\\n  background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\\n  color: white;\\n}\\n\\n.main {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  margin: 0 auto;\\n  width: 100%;\\n  height: 1022px;\\n}\\n\\nfooter .footer {\\n  display: grid;\\n  grid-template-columns: repeat(5, 1fr);\\n  margin-top: 104px;\\n  margin-bottom: 100px;\\n}\\nfooter .footer .block_info_logo .icon {\\n  margin-bottom: 20px;\\n}\\nfooter .footer .block_info_logo span {\\n  display: block;\\n  width: 260px;\\n  margin-right: 40px;\\n}\\nfooter .footer input {\\n  height: 44px;\\n  width: 260px;\\n  background: #ffffff;\\n  border: 1px solid rgba(31, 32, 65, 0.25);\\n  box-sizing: border-box;\\n  border-radius: 4px;\\n  padding: 15px;\\n}\\nfooter .footer_brand {\\n  border-top: 1px solid rgba(31, 32, 65, 0.05);\\n  padding-top: 23px;\\n  padding-bottom: 23px;\\n}\\nfooter .footer_brand .container {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n}\\nfooter .footer_brand .brand_logo {\\n  display: grid;\\n  justify-content: right;\\n  grid-template-columns: repeat(3, 24px);\\n  grid-gap: 20px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/css/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./img/background.png":
/*!****************************!*\
  !*** ./img/background.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"37e65ff19875fd48e04aa75ba6955003.png\");\n\n//# sourceURL=webpack:///./img/background.png?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_css_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/css/style */ \"./styles/css/style.css\");\n/* harmony import */ var _styles_css_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styles/scss/style.scss */ \"./styles/scss/style.scss\");\n/* harmony import */ var _styles_scss_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_style_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _views_color_type_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/color_type.html */ \"./views/color_type.html\");\n/* harmony import */ var _views_color_type_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_color_type_html__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n \n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./styles/css/style.css":
/*!******************************!*\
  !*** ./styles/css/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./styles/css/style.css?");

/***/ }),

/***/ "./styles/scss/style.scss":
/*!********************************!*\
  !*** ./styles/scss/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/scss/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./styles/scss/style.scss?");

/***/ }),

/***/ "./views/color_type.html":
/*!*******************************!*\
  !*** ./views/color_type.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\nvar ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ../styles/css/style.css */ \"./styles/css/style.css\");\n// Module\nvar ___HTML_LOADER_REPLACER_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n    <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACER_0___ + \"\\\"> \\r\\n    <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"https://fonts.googleapis.com/css?family=Quicksand\\\" />\\r\\n    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>\\r\\n    <link href=\\\"https://fonts.googleapis.com/icon?family=Material+Icons\\\" rel=\\\"stylesheet\\\">\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <title>Document</title>\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n    <section class=\\\"color_type\\\">\\r\\n        <div class=\\\"container\\\">\\r\\n            <div class=\\\"block\\\" id=\\\"color\\\">\\r\\n                <div class=\\\"color_contant\\\">\\r\\n                    <div class=\\\"color_block dark_100\\\"></div>\\r\\n                    <div class=\\\"text_block\\\">\\r\\n                        <p class=\\\"name_color\\\">Dark Shade 100%</p>\\r\\n                        <p>#1F2041</p>\\r\\n                    </div>\\r\\n\\r\\n                </div>\\r\\n                <div class=\\\"color_contant\\\">\\r\\n                    <div class=\\\"color_block dark_75\\\"></div>\\r\\n                    <div class=\\\"text_block\\\">\\r\\n                        <p class=\\\"name_color\\\">Dark Shade 75%</p>\\r\\n                        <p>#1F2041</p>\\r\\n                    </div>\\r\\n\\r\\n                </div>\\r\\n                <div class=\\\"color_contant\\\">\\r\\n                    <div class=\\\"color_block dark_50\\\"></div>\\r\\n                    <div class=\\\"text_block\\\">\\r\\n                        <p class=\\\"name_color\\\">Dark Shade 50%</p>\\r\\n                        <p>#1F2041</p>\\r\\n                    </div>\\r\\n\\r\\n                </div>\\r\\n                <div class=\\\"color_contant\\\">\\r\\n                    <div class=\\\"color_block dark_25\\\"></div>\\r\\n                    <div class=\\\"text_block\\\">\\r\\n                        <p class=\\\"name_color\\\">Dark Shade 25%</p>\\r\\n                        <p>#1F2041</p>\\r\\n                    </div>\\r\\n                </div>\\r\\n\\r\\n                <div class=\\\"color_contant\\\">\\r\\n                    <div class=\\\"color_block dark_5\\\"></div>\\r\\n                    <div class=\\\"text_block\\\">\\r\\n                        <p class=\\\"name_color\\\">Dark Shade 5%</p>\\r\\n                        <p>#1F2041</p>\\r\\n                    </div>\\r\\n\\r\\n                </div>\\r\\n                <div class=\\\"color_contant\\\">\\r\\n                    <div class=\\\"color_block purple\\\"></div>\\r\\n                    <div class=\\\"text_block\\\">\\r\\n                        <p class=\\\"name_color\\\">Purple</p>\\r\\n                        <p>#BC9CFF</p>\\r\\n                    </div>\\r\\n\\r\\n                </div>\\r\\n                <div class=\\\"color_contant\\\">\\r\\n                    <div class=\\\"color_block green\\\"></div>\\r\\n                    <div class=\\\"text_block\\\">\\r\\n                        <p class=\\\"name_color\\\">Green</p>\\r\\n                        <p>#6FCF97</p>\\r\\n                    </div>\\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\\"block\\\" id=\\\"text_block\\\">\\r\\n                <div class=\\\"text\\\">\\r\\n                    <h1 class=\\\"body_color\\\">H1</h1>\\r\\n                    <h1>This one is the sub-section or\\r\\n                        widget title</h1>\\r\\n                </div>\\r\\n                <div class=\\\"text\\\">\\r\\n                    <h2  class=\\\"body_color\\\">H2</h2>\\r\\n                    <h2>Next one is the item title inside\\r\\n                        widgets</h2>\\r\\n                </div>\\r\\n                <div class=\\\"text\\\">\\r\\n                    <h3  class=\\\"body_color\\\">H3</h3>\\r\\n                    <h3>This is a label or CTA text</h3>\\r\\n                </div>\\r\\n                <div class=\\\"text\\\">\\r\\n                    <p  class=\\\"body_color\\\">Body</p>\\r\\n                    <p>This is the body text which is used for most\\r\\n                        of the design, like paragraphs, lists, etc.</p>\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n    </section>\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./views/color_type.html?");

/***/ })

/******/ });