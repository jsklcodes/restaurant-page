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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  font-size: 62.5%;\r\n}\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,\r\n    helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial,\r\n    sans-serif;\r\n  font-size: 1.6rem;\r\n  line-height: 1.5;\r\n  background-color: #ebdb8d;\r\n  color: #110706;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nimg {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.container {\r\n  width: min(90%, 64rem);\r\n  margin-inline: auto;\r\n}\r\n\r\n/* header */\r\n.header {\r\n  display: grid;\r\n  justify-content: center;\r\n  background-color: #110706;\r\n  padding: 2rem;\r\n}\r\n\r\n.navbar ul {\r\n  display: flex;\r\n  gap: 3.2rem;\r\n}\r\n\r\n.navbar a {\r\n  color: #ebdb8d;\r\n  text-decoration: none;\r\n  border: 0.1rem solid #ebdb8d;\r\n  padding: 0.5rem 1.2rem;\r\n  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;\r\n}\r\n\r\n.navbar a:hover,\r\n.navbar a.active {\r\n  background-color: #ebdb8d;\r\n  color: #110706;\r\n}\r\n\r\n/* content */\r\n.content {\r\n  display: grid;\r\n  gap: 2rem;\r\n  padding-block: 3.2rem;\r\n}\r\n\r\n/* menu */\r\n.menu-list {\r\n  display: grid;\r\n  gap: 2rem;\r\n}\r\n\r\n.menu-item {\r\n  padding-bottom: 2rem;\r\n  border-bottom: 0.1rem dashed #110706;\r\n}\r\n\r\n.item,\r\n.price {\r\n  font-weight: 600;\r\n}\r\n\r\n.description {\r\n  display: block;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/ContactPage.js":
/*!****************************!*\
  !*** ./src/ContactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContactPage: () => (/* binding */ ContactPage)\n/* harmony export */ });\nconst ContactPage = () => {\r\n  return `\r\n  <h1>🌟 Contact Brew Haven 🌟</h1>\r\n  <p>We'd love to hear from you! Whether you have a question, suggestion, or just want to share your Brew Haven\r\n    experience, we're here for you. Feel free to reach out through the following channels:</p>\r\n\r\n  <h2>📍 Visit Us 📍</h2>\r\n  <ul>\r\n    <li>Brew Haven Coffee Shop</li>\r\n    <li>1234 Java Street</li>\r\n    <li>Coffee City, CO 12345</li>\r\n  </ul>\r\n\r\n  <h2>📞 Call Us 📞</h2>\r\n  <p>Customer Service Hotline: (555) 123-4567</p>\r\n\r\n  <h2>📧 Email Us 📧</h2>\r\n  <ul>\r\n    <li>General Inquiries: info@brewhaven.com</li>\r\n    <li>Customer Support: support@brewhaven.com</li>\r\n  </ul>\r\n\r\n  <h2>🕒 Opening Hours 🕒</h2>\r\n  <ul>\r\n    <li>Monday - Friday: 7:00 AM - 7:00 PM</li>\r\n    <li>Saturday - Sunday: 8:00 AM - 6:00 PM</li>\r\n  </ul>`;\r\n};\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/ContactPage.js?");

/***/ }),

/***/ "./src/ContentContainer.js":
/*!*********************************!*\
  !*** ./src/ContentContainer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContentContainer: () => (/* binding */ ContentContainer)\n/* harmony export */ });\n/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage */ \"./src/HomePage.js\");\n/* harmony import */ var _MenuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuPage */ \"./src/MenuPage.js\");\n/* harmony import */ var _ContactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactPage */ \"./src/ContactPage.js\");\n\r\n\r\n\r\n\r\nconst ContentContainer = currentPage => {\r\n  let content = '';\r\n\r\n  switch (currentPage) {\r\n    case 0:\r\n      content = (0,_HomePage__WEBPACK_IMPORTED_MODULE_0__.HomePage)();\r\n      break;\r\n    case 1:\r\n      content = (0,_MenuPage__WEBPACK_IMPORTED_MODULE_1__.MenuPage)();\r\n      break;\r\n    case 2:\r\n      content = (0,_ContactPage__WEBPACK_IMPORTED_MODULE_2__.ContactPage)();\r\n      break;\r\n    default:\r\n      content = (0,_HomePage__WEBPACK_IMPORTED_MODULE_0__.HomePage)();\r\n      break;\r\n  }\r\n  return `<main class=\"content container\">\r\n    ${content}\r\n  </main>`;\r\n};\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/ContentContainer.js?");

/***/ }),

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: () => (/* binding */ Header)\n/* harmony export */ });\nconst Header = () => {\r\n  return `<header class=\"header\">\r\n    <nav class=\"navbar\">\r\n      <ul>\r\n        <li>\r\n          <a href=\"#\" class=\"active\" data-page=\"0\">Home</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" data-page=\"1\">Menu</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" data-page=\"2\">Contact</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n  </header>`;\r\n};\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/Header.js?");

/***/ }),

/***/ "./src/HomePage.js":
/*!*************************!*\
  !*** ./src/HomePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HomePage: () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var _img_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img.jpg */ \"./src/img.jpg\");\n\r\n\r\nconst HomePage = () => {\r\n  return `\r\n  <h1>Welcome to Brew Haven – Your Perfect Sip Awaits!</h1>\r\n\r\n  <img src=\"${_img_jpg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"\">\r\n\r\n  <h2>🌟 About Us 🌟</h2>\r\n  <p class=\"info\">At Brew Haven, we believe that every cup of coffee tells a story. Our cozy\r\n    coffee shop is a haven for coffee enthusiasts and casual sippers alike. From the moment you step through our\r\n    doors, the rich aroma of freshly ground beans welcomes you to an unparalleled coffee experience.</p>`;\r\n};\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/HomePage.js?");

/***/ }),

/***/ "./src/MenuPage.js":
/*!*************************!*\
  !*** ./src/MenuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuPage: () => (/* binding */ MenuPage)\n/* harmony export */ });\nconst MenuPage = () => {\r\n  return `\r\n  <h1>🌟 Brew Haven Menu 🌟</h1>\r\n\r\n  <h2>☕ Espresso Delights ☕</h2>\r\n  <ul class=\"menu-list\">\r\n    <li class=\"menu-item\">\r\n      <span class=\"item\">Classic Espresso</span>\r\n      <span class=\"description\">Rich and robust, our traditional espresso is the perfect\r\n        pick-me-up.</span>\r\n      <span class=\"price\">$2.50</span>\r\n    </li>\r\n    <li class=\"menu-item\">\r\n      <span class=\"item\">Americano</span>\r\n      <span class=\"description\">A smooth blend of espresso and hot water for a milder yet\r\n        full-bodied flavor.</span>\r\n      <span class=\"price\">$3.00</span>\r\n    </li>\r\n    <li class=\"menu-item\">\r\n      <span class=\"item\">Macchiato</span>\r\n      <span class=\"description\">Espresso with a dollop of frothy milk for a delightful balance of\r\n        bold and creamy.</span>\r\n      <span class=\"price\">$3.50</span>\r\n    </li>\r\n  </ul>\r\n\r\n  <h2>🌈 Signature Blends 🌈</h2>\r\n  <ul class=\"menu-list\">\r\n    <li class=\"menu-item\">\r\n      <span class=\"item\">Brew Haven Blend</span>\r\n      <span class=\"description\">Our house specialty - a harmonious blend of beans that creates a\r\n        cup of pure bliss.</span>\r\n      <span class=\"price\">$4.00</span>\r\n    </li>\r\n    <li class=\"menu-item\">\r\n      <span class=\"item\">Single-Origin Delights</span>\r\n      <span class=\"description\">Discover the unique flavors of coffee from distinct regions\r\n        around the world.</span>\r\n      <span class=\"price\">$4.50</span>\r\n    </li>\r\n  </ul>\r\n\r\n  <h2>🍵 Teas & Infusions 🍵</h2>\r\n  <ul class=\"menu-list\">\r\n    <li class=\"menu-item\">\r\n      <span class=\"item\">Artisanal Teas</span>\r\n      <span class=\"description\">A curated selection of premium loose-leaf teas for a refreshing\r\n        alternative.</span>\r\n      <div class=\"price\">$3.50</div>\r\n    </li>\r\n    <li class=\"menu-item\">\r\n      <span class=\"item\">Chai Latte</span>\r\n      <span class=\"description\">Spiced perfection with our special chai blend and steamed\r\n        milk.</span>\r\n      <div class=\"price\">$4.00</div>\r\n    </li>\r\n  </ul>\r\n\r\n  <h2>❄️ Iced Indulgences ❄️</h2>\r\n  <ul class=\"menu-list\">\r\n    <li class=\"menu-item\">\r\n      <span class=\"item\">Iced Americano</span>\r\n      <span class=\"description\">Chilled perfection with our signature espresso over ice.</span>\r\n      <span class=\"price\">$3.50</span>\r\n    </li>\r\n    <li class=\"menu-item\">\r\n      <span class=\"item\">Iced Latte</span>\r\n      <span class=\"description\">A cool and creamy concoction of espresso and cold milk.</span>\r\n      <span class=\"price\">$4.00</span>\r\n    </li>\r\n    <li class=\"menu-item\">\r\n      <span class=\"item\">Fruit Infused Cold Brew</span>\r\n      <span class=\"description\">A refreshing twist on cold brew with hints of citrus and\r\n        berries.</span>\r\n      <span class=\"price\">$4.50</span>\r\n    </li>\r\n  </ul>\r\n\r\n  <h2>🌿 Alternative Brews 🌿</h2>\r\n  <ul class=\"menu-list\">\r\n    <li class=\"menu-item\">\r\n      <span class=\"item\">Pour-Over Perfection</span>\r\n      <span class=\"description\">Experience the meticulous pour-over method with your choice of\r\n        beans.</span>\r\n      <span class=\"price\">$5.00</span>\r\n    </li>\r\n    <li class=\"menu-item\">\r\n      <span class=\"item\">Aeropress Adventure</span>\r\n      <span class=\"description\">A unique brewing process for a bold and concentrated flavor\r\n        profile.</span>\r\n      <span class=\"price\">$5.50</span>\r\n    </li>\r\n    <li class=\"menu-item\">\r\n      <span class=\"item\">Turkish Delight</span>\r\n      <span class=\"description\">A traditional preparation with finely ground coffee and aromatic\r\n        spices.</span>\r\n      <span class=\"price\">$4.50</span>\r\n    </li>\r\n  </ul>\r\n\r\n  <h2>🥐 Delectable Pairings 🥐</h2>\r\n  <ul class=\"menu-list\">\r\n    <li class=\"menu-item\">\r\n      <span class=\"item\">Buttery Croissants</span>\r\n      <span class=\"description\">Light, flaky, and perfect with your morning coffee.</span>\r\n      <span class=\"price\">$3.00</span>\r\n    </li>\r\n    <li class=\"menu-item\">\r\n      <span class=\"item\">Avocado Toast</span>\r\n      <span class=\"description\">Served on artisanal bread with a hint of spice for a satisfying\r\n        bite.</span>\r\n      <span class=\"price\">$6.00</span>\r\n    </li>\r\n    <li class=\"menu-item\">\r\n      <span class=\"item\">Sweet Temptations</span>\r\n      <span class=\"description\">Indulge in our daily selection of pastries and desserts.</span>\r\n      <span class=\"price\">(Prices vary)</span>\r\n    </li>\r\n  </ul>\r\n\r\n  <h2>🥤 Cold Refreshments 🥤</h2>\r\n  <ul class=\"menu-list\">\r\n    <li class=\"menu-item\">\r\n      <span class=\"item\">Freshly Squeezed Juices</span>\r\n      <span class=\"description\">Quench your thirst with our selection of vibrant, natural\r\n        juices.</span>\r\n      <span class=\"price\">$4.00</span>\r\n    </li>\r\n    <li class=\"menu-item\">\r\n      <span class=\"item\">Soda Floats</span>\r\n      <span class=\"description\">A playful combination of soda and creamy vanilla ice cream.</span>\r\n      <span class=\"price\">$4.50</span>\r\n    </li>\r\n  </ul>\r\n\r\n  <h2>🍯 Sweet Endings 🍯</h2>\r\n  <ul class=\"menu-list\">\r\n    <li class=\"menu-item\">\r\n      <span class=\"item\">Affogato</span>\r\n      <span class=\"description\">A scoop of velvety vanilla ice cream drowned in a shot of hot\r\n        espresso.</span>\r\n      <span class=\"price\">$5.00</span>\r\n    </li>\r\n    <li class=\"menu-item\">\r\n      <span class=\"item\">Decadent Chocolate Brownie</span>\r\n      <span class=\"description\">Rich and gooey, the perfect finale to your Brew Haven\r\n        experience.</span>\r\n      <span class=\"price\">$3.50</span>\r\n    </li>\r\n  </ul>\r\n\r\n  <p>\r\n    Gluten-free and vegan options are available for many of our menu\r\n    items. Please ask our friendly staff for details.\r\n  </p>`;\r\n};\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/MenuPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.js */ \"./src/Header.js\");\n/* harmony import */ var _ContentContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentContainer.js */ \"./src/ContentContainer.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n\r\nconst contentDiv = document.querySelector('#content');\r\n\r\ncontentDiv.insertAdjacentHTML('afterbegin', (0,_Header_js__WEBPACK_IMPORTED_MODULE_0__.Header)());\r\n\r\nconst navButtons = document.querySelectorAll('.navbar a');\r\nconst header = document.querySelector('.header');\r\n\r\nlet currentPage = 0;\r\n\r\nnavButtons.forEach(navButton => {\r\n  navButton.addEventListener('click', event => {\r\n    const clickedButton = event.currentTarget;\r\n    currentPage = +clickedButton.dataset.page;\r\n\r\n    navButtons.forEach(navButton => navButton.classList.remove('active'));\r\n\r\n    clickedButton.classList.add('active');\r\n\r\n    header.nextElementSibling.remove();\r\n    header.insertAdjacentHTML('afterend', (0,_ContentContainer_js__WEBPACK_IMPORTED_MODULE_1__.ContentContainer)(currentPage));\r\n  });\r\n});\r\n\r\nheader.insertAdjacentHTML('afterend', (0,_ContentContainer_js__WEBPACK_IMPORTED_MODULE_1__.ContentContainer)(currentPage));\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/img.jpg":
/*!*********************!*\
  !*** ./src/img.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f0e99e60a4b12389984d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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