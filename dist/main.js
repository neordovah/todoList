/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n}\\n* :focus {\\n  outline: none;\\n}\\n\\nbody {\\n  height: 100vh;\\n  width: 100%;\\n  padding: 0;\\n  margin: 0;\\n  display: grid;\\n  grid-template-columns: 1fr 3fr;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\n#left_panel {\\n  background-color: rgb(172, 172, 172);\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  padding: 10vh 5px;\\n  overflow-y: auto;\\n}\\n#left_panel form {\\n  display: flex;\\n  justify-content: center;\\n  gap: 10px;\\n  flex-wrap: wrap;\\n  margin: 30px 0;\\n}\\n#left_panel #folders {\\n  width: 100%;\\n}\\n#left_panel .folder {\\n  background-color: rgb(33, 33, 33);\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 100%;\\n  padding: 0 3px;\\n  margin: 10px 0;\\n  height: 35px;\\n}\\n#left_panel .folder #btn {\\n  display: flex;\\n  justify-content: space-between;\\n  gap: 10px;\\n}\\n#left_panel .folder #btn button {\\n  height: 30px;\\n  width: 30px;\\n  border: 1px solid black;\\n  padding: 0;\\n  margin: 0;\\n}\\n#left_panel .folder .folder_title {\\n  background-color: transparent;\\n  color: white;\\n  border: 0;\\n  height: 100%;\\n  flex: 1;\\n}\\n#left_panel .folder input {\\n  width: 100%;\\n  background-color: transparent;\\n  color: white;\\n  border: 0;\\n  height: 100%;\\n  flex: 1;\\n  cursor: pointer;\\n}\\n#left_panel #folder_completed {\\n  background-color: rgb(158, 200, 96);\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 100%;\\n  padding: 0 3px;\\n  margin: 10px 0;\\n  height: 35px;\\n}\\n#left_panel #folder_completed .folder_title {\\n  background-color: transparent;\\n  color: white;\\n  border: 0;\\n  height: 100%;\\n  flex: 1;\\n}\\n#left_panel #folder_notCompleted {\\n  background-color: rgb(149, 45, 45);\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 100%;\\n  padding: 0 3px;\\n  margin: 10px 0;\\n  height: 35px;\\n}\\n#left_panel #folder_notCompleted .folder_title {\\n  background-color: transparent;\\n  color: white;\\n  border: 0;\\n  height: 100%;\\n  flex: 1;\\n}\\n\\n#right_panel {\\n  background-color: beige;\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  overflow-y: auto;\\n  padding: 10px 10px;\\n}\\n#right_panel #tasks {\\n  width: 95%;\\n}\\n#right_panel #tasks .task {\\n  background-color: rgb(33, 33, 33);\\n  width: 100%;\\n  color: white;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: 20px;\\n  margin: 30px 0;\\n  padding: 10px;\\n  height: 50px;\\n}\\n#right_panel #tasks .task input[type=text] {\\n  flex: 1;\\n}\\n#right_panel #tasks .task input[type=checkbox] {\\n  width: 20px;\\n  height: 20px;\\n  align-items: center;\\n}\\n#right_panel #tasks .task input:read-only:not([type=checkbox]) {\\n  background-color: transparent;\\n  color: white;\\n  border: 0;\\n  height: 100%;\\n}\\n#right_panel #tasks .task #btn {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: 10px;\\n}\\n#right_panel #tasks .task #btn button {\\n  height: 30px;\\n  width: 30px;\\n  border: 1px solid black;\\n  padding: 0;\\n  margin: 0;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n\r\n\r\nlet folderList = [];\r\n\r\nclass Folder {\r\n    constructor(title) {\r\n        this.title = title.value;\r\n        this.todos = [];\r\n    }\r\n}\r\n\r\nclass Task {\r\n    constructor(task_input, task_importance, task_date) {\r\n        this.input = task_input.value;\r\n        this.importance = task_importance.value; \r\n        this.date = task_date.value;\r\n    }\r\n}\r\n\r\n(() => {\r\n\r\nconst folders_div = document.getElementById(\"folders\");\r\nconst left_panel = document.getElementById(\"left_panel\");\r\nconst right_panel = document.getElementById(\"right_panel\");\r\n\r\nif (localStorage.getItem('folders') === null) {\r\n    folderList = [];\r\n  }\r\nelse {\r\n    const foldersFromStorage = JSON.parse(localStorage.getItem('folders'));\r\n    folderList = foldersFromStorage;\r\n    for(let i = 0; i < folderList.length; i++) {\r\n        showFolder(folderList[i]);\r\n    }\r\n}\r\n\r\n\r\nfunction showFolder(folder) {\r\n    localStorage.clear();\r\n    localStorage.setItem('folders', JSON.stringify(folderList));\r\n    left_panel.appendChild(folders_div);\r\n    let folder_div = document.createElement(\"div\");\r\n    folder_div.classList.add(\"folder\");\r\n    folders_div.appendChild(folder_div);\r\n    let folder_btn = document.createElement(\"button\");\r\n    folder_btn.classList.add(\"folder_title\");\r\n    folder_div.appendChild(folder_btn);\r\n    let btn_div = document.createElement(\"div\");\r\n    btn_div.id = \"btn\";\r\n    folder_div.appendChild(btn_div);\r\n    let edit_btn = document.createElement(\"button\");\r\n    edit_btn.classList.add(\"folder_edit\");\r\n    btn_div.appendChild(edit_btn);\r\n    edit_btn.style.backgroundImage = \"url('../src/img/edit.svg')\";\r\n    let remove_btn = document.createElement(\"button\");\r\n    remove_btn.classList.add(\"folder_remove\");\r\n    btn_div.appendChild(remove_btn);\r\n    remove_btn.style.backgroundImage = \"url('../src/img/remove.svg')\";\r\n\r\n    let edit_input = document.createElement(\"input\");\r\n    folder_btn.appendChild(edit_input);\r\n    \r\n    edit_input.value = folder.title;\r\n    edit_input.readOnly = true;\r\n\r\n    remove_btn.addEventListener(\"click\", (e) => {\r\n        let index = Array.from(e.target.parentElement.parentElement.parentElement.children).indexOf(e.target.parentElement.parentElement);\r\n        folderList = [].concat(folderList.slice(0, index), folderList.slice(index+1, folderList.length));\r\n        remove_btn.parentElement.parentElement.remove();\r\n        localStorage.clear();\r\n        localStorage.setItem('folders', JSON.stringify(folderList));\r\n    })\r\n        \r\n    let toggle = 1;\r\n    let value; let checkh1 = 0;\r\n    edit_btn.addEventListener(\"click\", (e) => {\r\n        let index = Array.from(e.target.parentElement.parentElement.parentElement.children).indexOf(e.target.parentElement.parentElement);\r\n        const body = document.getElementById(\"body\")\r\n        if(toggle == 1) {\r\n            if(edit_input.value == document.getElementById(\"h1\").innerText) {\r\n                checkh1 = 1;\r\n            }\r\n            value = edit_input.value;\r\n            edit_input.readOnly = false;\r\n            edit_input.focus();\r\n            edit_btn.parentElement.firstChild.style.backgroundImage = \"url('../src/img/done.svg')\";\r\n            toggle = 0;\r\n\r\n            body.style.pointerEvents = \"none\";\r\n            edit_btn.style.pointerEvents = \"auto\";\r\n            edit_input.style.pointerEvents = \"auto\";\r\n        }\r\n        else {\r\n            edit_input.readOnly = true;\r\n            edit_btn.parentElement.firstChild.style.backgroundImage = \"url('../src/img/edit.svg')\";\r\n            toggle = 1;\r\n            folderList[index].title = edit_input.value;\r\n            localStorage.clear();\r\n            localStorage.setItem('folders', JSON.stringify(folderList));\r\n            if(checkh1 == 1) {\r\n                const right_panel_h1 = document.getElementById(\"h1\");\r\n                right_panel_h1.innerText = edit_input.value;\r\n                checkh1 = 0;\r\n            }\r\n            body.style.pointerEvents = \"auto\";\r\n        }\r\n    })\r\n\r\n    edit_input.addEventListener(\"click\", (e) => {\r\n        if(edit_input.readOnly == true) {\r\n            let index = Array.from(e.target.parentElement.parentElement.parentElement.children).indexOf(e.target.parentElement.parentElement);\r\n            const right_panel_h1 = document.getElementById(\"h1\");\r\n            right_panel_h1.innerText = edit_input.value;\r\n            const tasks_div = document.getElementById(\"tasks\");\r\n            tasks_div.innerHTML = \"\";\r\n            for(let i = 0; i < folderList[index].todos.length; i++) {\r\n                let toggle = 0;\r\n                let toggle2 = 1;\r\n                let toggle3 = 0;\r\n                showTask(index, i, toggle, toggle2, toggle3);\r\n                //(folderList[index].todos[i].task_input, folderList[index].todos[i].task_importance, folderList[index].todos[i].task_date, toggle3);\r\n            }\r\n        }\r\n    })\r\n\r\n    const folder_completed = document.getElementById(\"folder_completed\");\r\n    folder_completed.addEventListener(\"click\", () => {\r\n        const right_panel_h1 = document.getElementById(\"h1\");\r\n            right_panel_h1.innerText = \"Completed\";\r\n    })\r\n    \r\n    const folder_notCompleted = document.getElementById(\"folder_notCompleted\");\r\n    folder_notCompleted.addEventListener(\"click\", () => {\r\n        const right_panel_h1 = document.getElementById(\"h1\");\r\n            right_panel_h1.innerText = \"Past due\";\r\n    })\r\n}\r\n    \r\n\r\nconst add_folder = document.getElementById(\"folder_submit\");\r\nlet title = document.getElementById(\"folder_title\");\r\nadd_folder.addEventListener(\"click\", (e) => {\r\n    if(title.value != \"\") {\r\n        e.preventDefault();\r\n        folderList.push(new Folder(title));\r\n        title.value = \"\";\r\n        showFolder(folderList[folderList.length-1]); \r\n    }\r\n})\r\n\r\nfunction showTask(index, i, toggle, toggle2, toggle3) {\r\n   // let toggle = 0;\r\n  //  let toggle2 = 1;\r\n  console.log(index)\r\nconsole.log(i)\r\n    const tasks_div = document.getElementById(\"tasks\");\r\n    const task_div = document.createElement(\"div\");\r\n    task_div.classList.add(\"task\");\r\n    tasks_div.appendChild(task_div);\r\n    const task_checkbox = document.createElement(\"input\");\r\n    task_checkbox.type = \"checkbox\";\r\n    task_div.appendChild(task_checkbox);\r\n    task_checkbox.readOnly = true;\r\n    const task_input = document.createElement(\"input\");\r\n    task_input.type = \"text\";\r\n    task_div.appendChild(task_input);\r\n    const task_importance = document.createElement(\"select\");\r\n    task_importance.setAttribute(\"disabled\", \"true\");\r\n    task_div.appendChild(task_importance);\r\n    const importance_low = document.createElement(\"option\");\r\n    importance_low.value = \"low\";\r\n    importance_low.innerText = \"low\";\r\n    task_importance.appendChild(importance_low);\r\n    const importance_medium = document.createElement(\"option\");\r\n    importance_medium.value = \"medium\";\r\n    importance_medium.innerText = \"medium\";\r\n    task_importance.appendChild(importance_medium);\r\n    const importance_high = document.createElement(\"option\");\r\n    importance_high.value = \"high\";\r\n    importance_high.innerText = \"high\";\r\n    task_importance.appendChild(importance_high);\r\n    const task_date = document.createElement(\"input\");\r\n    task_date.type = \"date\";\r\n    task_div.appendChild(task_date);\r\n    let btn_div = document.createElement(\"div\");\r\n    btn_div.id = \"btn\";\r\n    task_div.appendChild(btn_div);\r\n    let edit_btn = document.createElement(\"button\");\r\n    edit_btn.classList.add(\"task_edit\");\r\n    btn_div.appendChild(edit_btn);\r\n    edit_btn.style.backgroundImage = \"url('../src/img/done.svg')\";\r\n    let remove_btn = document.createElement(\"button\");\r\n    remove_btn.classList.add(\"task_remove\");\r\n    btn_div.appendChild(remove_btn);\r\n    remove_btn.style.backgroundImage = \"url('../src/img/remove.svg')\";\r\n\r\n    const body = document.getElementById(\"body\");\r\n    //body.style.pointerEvents = \"none\";\r\n    //task_div.style.pointerEvents = \"auto\";\r\n\r\n    if(toggle3 == 0) {\r\n        task_input.value = folderList[index].todos[i].input;\r\n        task_importance.value = folderList[index].todos[i].importance;\r\n        task_date.value = folderList[index].todos[i].date;\r\n        console.log(folderList[index].todos[i].date)\r\n       // console.log(folderList[index].todos[i].task_importance)\r\n        //console.log(folderList[index].todos[i].task_date)\r\n        task_input.readOnly = true;\r\n        task_importance.readOnly = true;\r\n        task_date.readOnly = true;\r\n        body.style.pointerEvents = \"auto\";\r\n        edit_btn.style.backgroundImage = \"url('../src/img/edit.svg')\";\r\n        toggle = 1;\r\n    }\r\n    else {\r\n        body.style.pointerEvents = \"none\";\r\n        task_div.style.pointerEvents = \"auto\";\r\n        task_importance.removeAttribute(\"disabled\");\r\n        task_input.focus();\r\n    }\r\n    //console.log(folderList)\r\n\r\n    //let toggle2 = 1;\r\n    edit_btn.addEventListener(\"click\", (e) => {\r\n        //toggle2 = 0;\r\n        console.log(toggle)\r\n        if(toggle == 0) {\r\n            e.preventDefault();\r\n            toggle = 1;\r\n            //if(task_date.value = \"\") {\r\n              //  task_date.style.display = \"none\";\r\n            //}\r\n            task_input.readOnly = true;\r\n            task_importance.setAttribute(\"disabled\", \"true\");\r\n            task_date.readOnly = true;\r\n            body.style.pointerEvents = \"auto\";\r\n            edit_btn.style.backgroundImage = \"url('../src/img/edit.svg')\";\r\n            //if(toggle2 == 0) {\r\n                for(let i = 0; i < folderList.length; i++) {\r\n                    if(document.getElementById(\"h1\").innerHTML == folderList[i].title) {\r\n                        if(toggle2 == 0) {\r\n                            folderList[i].todos.push(new Task(task_input, task_importance, task_date));\r\n                        }\r\n                        else {\r\n                            let index = Array.from(e.target.parentElement.parentElement.parentElement.children).indexOf(e.target.parentElement.parentElement);\r\n                            folderList[i].todos[index].input = task_input.value;\r\n                            folderList[i].todos[index].importance = task_importance.value;\r\n                            folderList[i].todos[index].date = task_date.value;\r\n                        }\r\n                    }\r\n                }\r\n            //}\r\n            localStorage.clear();\r\n            localStorage.setItem('folders', JSON.stringify(folderList));\r\n        }\r\n        else {\r\n            toggle = 0;\r\n            task_input.readOnly = false;\r\n            task_importance.removeAttribute(\"disabled\");\r\n            task_date.readOnly = false;\r\n            edit_btn.style.backgroundImage = \"url('../src/img/done.svg')\";\r\n            body.style.pointerEvents = \"none\";\r\n            task_div.style.pointerEvents = \"auto\";\r\n        }\r\n       // console.log(folderList)\r\n    })\r\n\r\n    remove_btn.addEventListener(\"click\", (e) => {\r\n        let index = Array.from(e.target.parentElement.parentElement.parentElement.children).indexOf(e.target.parentElement.parentElement);\r\n        for(let i = 0; i < folderList.length; i++) {\r\n            if(document.getElementById(\"h1\").innerHTML == folderList[i].title) {\r\n                folderList[i].todos = [].concat(folderList[i].todos.slice(0, index), folderList[i].todos.slice(index+1, folderList[i].todos.length))\r\n                remove_btn.parentElement.parentElement.remove();\r\n                body.style.pointerEvents = \"auto\";\r\n                localStorage.clear();\r\n                localStorage.setItem('folders', JSON.stringify(folderList));\r\n            }\r\n        }\r\n       // console.log(folderList)\r\n    })\r\n}\r\n\r\nconst add_task_btn = document.getElementById(\"task_submit\");\r\nadd_task_btn.addEventListener(\"click\", () => {\r\n    const right_panel_h1 = document.getElementById(\"h1\");\r\n    for(let i = 0; i < folderList.length; i++) {\r\n        if(right_panel_h1.innerText == folderList[i].title) {\r\n            showTask(0, 0, 0, 0, 1);\r\n        }\r\n    }\r\n})\r\n\r\n})();\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;