/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!./src/assets/css/styles.css":
/*!**************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./src/assets/css/styles.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --primary-color: linear-gradient(to right, #4b0082, #9b30ff);
    --button-color: #104e81;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 1.3em;
    line-height: 1.5em;
    overflow: hidden;
}

.bgprimary {
    background: linear-gradient(to right, #4b0082, #9b30ff);
    width: 100%;
    height: 100vh;
}

.container {
    background: #fff;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 5px 5px 50px 5px black; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: fadeInUp 0.8s ease-out both;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

h2 {
    margin-top: 0;
    text-align: center;
    color: #9b30ff;
}

input {
    padding: 5px;
    margin-bottom: 15px;
    border: 2px solid #9b30ff;
    border-radius: 10px;
    background: #f2f2f2;
    transition: 0.3 ease-in-out;
    font-size: 15px;
}

input:focus {
    outline: none;
    border-color: #9b30ff;
    box-shadow: 0 0 5px #9b30ff;
}

input:hover{
    box-shadow: 1px 1px 7px 1px var(--button-color);
}

button {
    height: 40px;
    border: none;
    background: var(--primary-color);
    font-weight: 700;
    cursor: pointer;
    border-radius: 20px;
    margin-top: 30px;
    font-size: 15px;
    text-transform: uppercase;
    width: 100%;
    margin: 0 auto;
    color: white;
    margin-top: 30px;
    transition: 0.3 ease;
}

button:hover {
    background: var(--button-color);
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(178, 102, 255, 0.5);
}

button:active {
    background: var(--button-color);
}

label {
    font-size:22px;
    margin-bottom: 10px;
    font-style: italic;
}

.senha-gerada {
    display: block;
    padding: 10px;
    background: rgb(126, 255, 126);
    border-radius: 8px;
    margin: 20px auto;
    text-align: center;
    font-weight: bold;
}


@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(-50%);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
}`, "",{"version":3,"sources":["webpack://./src/assets/css/styles.css"],"names":[],"mappings":"AAEA;IACI,4DAA4D;IAC5D,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,kCAAkC;IAClC,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,uDAAuD;IACvD,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,kCAAkC;IAClC,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,sCAAsC;AAC1C;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,mBAAmB;IACnB,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,2BAA2B;AAC/B;;AAEA;IACI,+CAA+C;AACnD;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;IACf,yBAAyB;IACzB,WAAW;IACX,cAAc;IACd,YAAY;IACZ,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,+BAA+B;IAC/B,sBAAsB;IACtB,+CAA+C;AACnD;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,cAAc;IACd,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;AACrB;;;AAGA;IACI;QACI,UAAU;QACV,2BAA2B;IAC/B;;IAEA;QACI,UAAU;QACV,gCAAgC;IACpC;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\r\n\r\n:root {\r\n    --primary-color: linear-gradient(to right, #4b0082, #9b30ff);\r\n    --button-color: #104e81;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n    overflow: hidden;\r\n}\r\n\r\n.bgprimary {\r\n    background: linear-gradient(to right, #4b0082, #9b30ff);\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n.container {\r\n    background: #fff;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n    box-shadow: 5px 5px 50px 5px black; \r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    animation: fadeInUp 0.8s ease-out both;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\nh2 {\r\n    margin-top: 0;\r\n    text-align: center;\r\n    color: #9b30ff;\r\n}\r\n\r\ninput {\r\n    padding: 5px;\r\n    margin-bottom: 15px;\r\n    border: 2px solid #9b30ff;\r\n    border-radius: 10px;\r\n    background: #f2f2f2;\r\n    transition: 0.3 ease-in-out;\r\n    font-size: 15px;\r\n}\r\n\r\ninput:focus {\r\n    outline: none;\r\n    border-color: #9b30ff;\r\n    box-shadow: 0 0 5px #9b30ff;\r\n}\r\n\r\ninput:hover{\r\n    box-shadow: 1px 1px 7px 1px var(--button-color);\r\n}\r\n\r\nbutton {\r\n    height: 40px;\r\n    border: none;\r\n    background: var(--primary-color);\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    border-radius: 20px;\r\n    margin-top: 30px;\r\n    font-size: 15px;\r\n    text-transform: uppercase;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    color: white;\r\n    margin-top: 30px;\r\n    transition: 0.3 ease;\r\n}\r\n\r\nbutton:hover {\r\n    background: var(--button-color);\r\n    transform: scale(1.05);\r\n    box-shadow: 0 4px 15px rgba(178, 102, 255, 0.5);\r\n}\r\n\r\nbutton:active {\r\n    background: var(--button-color);\r\n}\r\n\r\nlabel {\r\n    font-size:22px;\r\n    margin-bottom: 10px;\r\n    font-style: italic;\r\n}\r\n\r\n.senha-gerada {\r\n    display: block;\r\n    padding: 10px;\r\n    background: rgb(126, 255, 126);\r\n    border-radius: 8px;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n@keyframes fadeInUp {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(-50%);\r\n    }\r\n\r\n    100% {\r\n        opacity: 1;\r\n        transform: translate(-50%, -50%);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/css/styles.css":
/*!***********************************!*\
  !*** ./src/assets/css/styles.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./styles.css */ "../node_modules/css-loader/dist/cjs.js!./src/assets/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/formGeraSenha.js":
/*!**************************************!*\
  !*** ./src/modules/formGeraSenha.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gerador__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gerador */ "./src/modules/gerador.js");

var resultado = document.querySelector('.resultado');
var qtdCaracteres = document.querySelector('.qtd-caracter');
var checkMaiusculas = document.querySelector('.check-maiusculas');
var checkMinusculas = document.querySelector('.check-minusculas');
var checkNumeros = document.querySelector('.check-numeros');
var checkSimbolos = document.querySelector('.check-simbolos');
var btGera = document.querySelector('.gerar-senha');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  btGera.addEventListener('click', function () {
    resultado.innerHTML = gera();
    resultado.classList.add('senha-gerada');
    if (qtdCaracteres.value <= 0) {
      resultado.innerHTML = 'Escolha o tamanho da sua senha';
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      btGera.click();
    }
  });
});
function gera() {
  var senha = (0,_gerador__WEBPACK_IMPORTED_MODULE_0__["default"])(qtdCaracteres.value, checkMaiusculas.checked, checkMinusculas.checked, checkNumeros.checked, checkSimbolos.checked);
  return senha || 'Nada selecionado';
}

/***/ }),

/***/ "./src/modules/gerador.js":
/*!********************************!*\
  !*** ./src/modules/gerador.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ geraSenha)
/* harmony export */ });
var rand = function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
var geraMaiuscula = function geraMaiuscula() {
  return String.fromCharCode(rand(65, 91));
};
var geraMinuscula = function geraMinuscula() {
  return String.fromCharCode(rand(97, 123));
};
var geraNumero = function geraNumero() {
  return String.fromCharCode(rand(48, 58));
};
var simbolos = ',.;~^""!@#$%¨&*+-=';
var geraSimbolo = function geraSimbolo() {
  return simbolos[rand(0, simbolos.length)];
};
function geraSenha(qtd, maisculas, minusculas, numeros, simbolos) {
  var senhaArray = [];
  qtd = Number(qtd);
  for (var i = 0; i < qtd; i++) {
    maisculas && senhaArray.push(geraMaiuscula());
    minusculas && senhaArray.push(geraMinuscula());
    numeros && senhaArray.push(geraNumero());
    simbolos && senhaArray.push(geraSimbolo());
  }
  ;
  return senhaArray.join('').slice(0, qtd);
}

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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_formGeraSenha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/formGeraSenha */ "./src/modules/formGeraSenha.js");
/* harmony import */ var _assets_css_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/styles.css */ "./src/assets/css/styles.css");


(0,_modules_formGeraSenha__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map