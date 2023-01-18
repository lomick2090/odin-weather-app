/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n    background-color: black;\n    height: 100vh;\n    width: 100vw;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,YAAY;AAChB","sourcesContent":["body {\n    margin: 0px;\n    background-color: black;\n    height: 100vh;\n    width: 100vw;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


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
  } // For old IE

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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const submitButton = document.querySelector('button');
const searchInput = document.getElementById('city');
const forecast = document.querySelector('.forecast');
async function getFiveDayData(city) {
  let data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=b5a14a7cc940d71738c874058413abb4`).then(response => {
    return response.json();
  });
  return data;
}
async function getCurrentDayData(city) {
  let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=b5a14a7cc940d71738c874058413abb4`).then(response => {
    return response.json();
  });
  return data;
}
function parseCurrentDayData(data) {
  let date = 'Today';
  let tempLow = `${Math.round(data.main.temp_min)}°`;
  let tempHigh = `${Math.round(data.main.temp_max)}°`;
  let weather = data.weather[0].icon;
  return {
    date,
    tempLow,
    tempHigh,
    weather
  };
}
function parseFiveDayData(data) {
  function compileData(data, i) {
    let day = {};
    day.time = data.list[i].dt_txt;
    day.tempHigh = data.list[i].main.temp_max;
    day.tempLow = data.list[i].main.temp_min;
    day.weather = data.list[i].weather[0].icon;
    day.weatherDesc = data.list[i].weather[0].description;
    dayArray.push(day);
  }
  function sortData(dayArray) {
    let tempLowArray = [];
    let tempHighArray = [];
    let weatherArray = [];
    let date = dayArray[0].time.split(' ')[0];

    //creates workable arrays
    for (let day of dayArray) {
      tempLowArray.push(day.tempLow);
      tempHighArray.push(day.tempHigh);
      weatherArray.push(day.weather);
    }

    //finds lowest temp
    let lowTemp = tempLowArray[0];
    for (let temp of tempLowArray) {
      if (temp < lowTemp) {
        lowTemp = temp;
      }
    }

    //finds highest temp
    let highTemp = tempHighArray[0];
    for (let temp of tempHighArray) {
      if (temp > highTemp) {
        highTemp = temp;
      }
    }

    //finds most common weather for the day
    let mf = 1;
    let m = 0;
    let commonWeather = weatherArray[2];
    for (let i = 0; i < weatherArray.length; i++) {
      for (let j = i; j < weatherArray.length; j++) {
        if (weatherArray[i] == weatherArray[j]) m++;
        if (mf < m) {
          mf = m;
          commonWeather = weatherArray[i];
        }
      }
      m = 0;
    }
    return {
      date: date,
      tempLow: `${Math.round(lowTemp)}°`,
      tempHigh: `${Math.round(highTemp)}°`,
      weather: commonWeather
    };
  }
  let dataObj = [];
  let dayArray = [];
  for (let i = 2; i <= 8; i = i + 2) {
    compileData(data, i);
    if (i == 8) {
      let workableData = sortData(dayArray);
      dataObj.push(workableData);
      dayArray = [];
    }
  }
  for (let i = 10; i <= 16; i = i + 2) {
    compileData(data, i);
    if (i == 16) {
      let workableData = sortData(dayArray);
      dataObj.push(workableData);
      dayArray = [];
    }
  }
  for (let i = 18; i <= 24; i = i + 2) {
    compileData(data, i);
    if (i == 24) {
      let workableData = sortData(dayArray);
      dataObj.push(workableData);
      dayArray = [];
    }
  }
  for (let i = 26; i <= 32; i = i + 2) {
    compileData(data, i);
    if (i == 32) {
      let workableData = sortData(dayArray);
      dataObj.push(workableData);
      dayArray = [];
    }
  }
  return dataObj;
}
function populateApp(data) {
  while (forecast.firstChild) {
    forecast.firstChild.remove();
  }
  for (let i = 0; i < data.length; i++) {
    let newDay = document.createElement('div');
    newDay.className = 'day';
    let dayDate = document.createElement('div');
    dayDate.className = 'daydate';
    dayDate.innerHTML = data[i].date;
    let weatherImg = document.createElement('img');
    weatherImg.className = 'dayimg';
    weatherImg.src = `https://openweathermap.org/img/wn/${data[i].weather}@2x.png`;
    let tempDiv = document.createElement('div');
    tempDiv.className = 'tempdiv';
    let tempLow = document.createElement('div');
    tempLow.innerHTML = data[i].tempLow;
    let tempHigh = document.createElement('div');
    tempHigh.innerHTML = data[i].tempHigh;
    tempDiv.appendChild(tempLow);
    tempDiv.appendChild(tempHigh);
    newDay.appendChild(dayDate);
    newDay.appendChild(weatherImg);
    newDay.appendChild(tempDiv);
    forecast.appendChild(newDay);
  }
}
document.addEventListener('submit', async function (e) {
  e.preventDefault();
  try {
    let data = await Promise.all([getFiveDayData(searchInput.value), getCurrentDayData(searchInput.value)]);
    let dataObj = parseFiveDayData(data[0]);
    let currentDayDataObj = parseCurrentDayData(data[1]);
    dataObj.unshift(currentDayDataObj);
    console.log(dataObj);
    populateApp(dataObj);
    document.querySelector('.errormessage').innerHTML = '';
  } catch (err) {
    document.querySelector('.errormessage').innerHTML = `Location not found.
        Search must be in the form of "City", "City, State" or "City, Country"`;
  }
});

// fetch('https://api.openweathermap.org/data/2.5/weather?q=chicago&units=imperial&appid=b5a14a7cc940d71738c874058413abb4')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
//     });
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLElBQUk2RCxpQkFBaUIsR0FBR3ZELG1CQUFtQixDQUFDTixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcER5QyxPQUFPLENBQUNxQixPQUFPLENBQUNELGlCQUFpQixDQUFDO0lBQ2xDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ3ZCLE9BQU8sQ0FBQztJQUNwQkUsV0FBVyxDQUFDRixPQUFPLENBQUM7SUFDcEJoRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQ3dELFNBQVMsR0FBRyxFQUFFO0VBQzFELENBQUMsQ0FBQyxPQUFNZSxHQUFHLEVBQUU7SUFDVHhFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDd0QsU0FBUyxHQUFJO0FBQzdELCtFQUErRTtFQUMzRTtBQUNKLENBQUMsQ0FBQzs7QUFJRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5Jyk7XG5jb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdCcpO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRGaXZlRGF5RGF0YShjaXR5KSB7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5fSZ1bml0cz1pbXBlcmlhbCZhcHBpZD1iNWExNGE3Y2M5NDBkNzE3MzhjODc0MDU4NDEzYWJiNGApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG5cbiAgICByZXR1cm4gZGF0YTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudERheURhdGEoY2l0eSkge1xuICAgIGxldCBkYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1pbXBlcmlhbCZhcHBpZD1iNWExNGE3Y2M5NDBkNzE3MzhjODc0MDU4NDEzYWJiNGApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIFxuICAgICAgICB9KVxuICAgIFxuICAgIHJldHVybiBkYXRhO1xufVxuXG5cbmZ1bmN0aW9uIHBhcnNlQ3VycmVudERheURhdGEoZGF0YSkge1xuXG4gICAgbGV0IGRhdGUgPSAnVG9kYXknO1xuICAgIGxldCB0ZW1wTG93ID0gYCR7TWF0aC5yb3VuZChkYXRhLm1haW4udGVtcF9taW4pfcKwYDtcbiAgICBsZXQgdGVtcEhpZ2ggPSBgJHtNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21heCl9wrBgO1xuICAgIGxldCB3ZWF0aGVyID0gZGF0YS53ZWF0aGVyWzBdLmljb247XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkYXRlLFxuICAgICAgICB0ZW1wTG93LFxuICAgICAgICB0ZW1wSGlnaCxcbiAgICAgICAgd2VhdGhlclxuICAgIH1cblxufVxuXG5mdW5jdGlvbiBwYXJzZUZpdmVEYXlEYXRhKGRhdGEpIHtcbiAgICBmdW5jdGlvbiBjb21waWxlRGF0YShkYXRhLCBpKSB7XG4gICAgICAgIGxldCBkYXkgPSB7fTtcbiAgICAgICAgZGF5LnRpbWUgPSBkYXRhLmxpc3RbaV0uZHRfdHh0O1xuICAgICAgICBkYXkudGVtcEhpZ2ggPSBkYXRhLmxpc3RbaV0ubWFpbi50ZW1wX21heDtcbiAgICAgICAgZGF5LnRlbXBMb3cgPSBkYXRhLmxpc3RbaV0ubWFpbi50ZW1wX21pbjtcbiAgICAgICAgZGF5LndlYXRoZXIgPSBkYXRhLmxpc3RbaV0ud2VhdGhlclswXS5pY29uO1xuICAgICAgICBkYXkud2VhdGhlckRlc2MgPSBkYXRhLmxpc3RbaV0ud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgZGF5QXJyYXkucHVzaChkYXkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNvcnREYXRhIChkYXlBcnJheSkge1xuICAgICAgICBsZXQgdGVtcExvd0FycmF5ID0gW107XG4gICAgICAgIGxldCB0ZW1wSGlnaEFycmF5ID0gW107XG4gICAgICAgIGxldCB3ZWF0aGVyQXJyYXkgPSBbXTtcblxuICAgICAgICBsZXQgZGF0ZSA9IGRheUFycmF5WzBdLnRpbWUuc3BsaXQoJyAnKVswXTtcblxuICAgICAgICAvL2NyZWF0ZXMgd29ya2FibGUgYXJyYXlzXG4gICAgICAgIGZvciAobGV0IGRheSBvZiBkYXlBcnJheSkge1xuICAgICAgICAgICAgdGVtcExvd0FycmF5LnB1c2goZGF5LnRlbXBMb3cpO1xuICAgICAgICAgICAgdGVtcEhpZ2hBcnJheS5wdXNoKGRheS50ZW1wSGlnaCk7XG4gICAgICAgICAgICB3ZWF0aGVyQXJyYXkucHVzaChkYXkud2VhdGhlcik7XG4gICAgICAgIH1cblxuICAgICAgICAvL2ZpbmRzIGxvd2VzdCB0ZW1wXG4gICAgICAgIGxldCBsb3dUZW1wID0gdGVtcExvd0FycmF5WzBdXG4gICAgICAgIGZvciAobGV0IHRlbXAgb2YgdGVtcExvd0FycmF5KSB7XG4gICAgICAgICAgICBpZiAodGVtcCA8IGxvd1RlbXApIHtcbiAgICAgICAgICAgICAgICBsb3dUZW1wID0gdGVtcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy9maW5kcyBoaWdoZXN0IHRlbXBcbiAgICAgICAgbGV0IGhpZ2hUZW1wID0gdGVtcEhpZ2hBcnJheVswXVxuICAgICAgICBmb3IgKGxldCB0ZW1wIG9mIHRlbXBIaWdoQXJyYXkpIHtcbiAgICAgICAgICAgIGlmICh0ZW1wID4gaGlnaFRlbXApIHtcbiAgICAgICAgICAgICAgICBoaWdoVGVtcCA9IHRlbXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vZmluZHMgbW9zdCBjb21tb24gd2VhdGhlciBmb3IgdGhlIGRheVxuICAgICAgICBsZXQgbWYgPSAxO1xuICAgICAgICBsZXQgbSA9IDA7XG4gICAgICAgIGxldCBjb21tb25XZWF0aGVyID0gd2VhdGhlckFycmF5WzJdO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8d2VhdGhlckFycmF5Lmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaj1pOyBqPHdlYXRoZXJBcnJheS5sZW5ndGg7IGorKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2VhdGhlckFycmF5W2ldID09IHdlYXRoZXJBcnJheVtqXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIG0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZjxtKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWY9bTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tb25XZWF0aGVyID0gd2VhdGhlckFycmF5W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtPTA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2RhdGU6IGRhdGUsIFxuICAgICAgICAgICAgdGVtcExvdzogYCR7TWF0aC5yb3VuZChsb3dUZW1wKX3CsGAsIFxuICAgICAgICAgICAgdGVtcEhpZ2g6IGAke01hdGgucm91bmQoaGlnaFRlbXApfcKwYCwgXG4gICAgICAgICAgICB3ZWF0aGVyOmNvbW1vbldlYXRoZXJ9XG5cbiAgICB9XG5cbiAgICBsZXQgZGF0YU9iaiA9IFtdO1xuICAgIGxldCBkYXlBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gODsgaSA9IGkrMikge1xuICAgICAgICBjb21waWxlRGF0YShkYXRhLCBpKTtcbiAgICAgICAgaWYgKGkgPT0gOCkge1xuICAgICAgICAgICAgbGV0IHdvcmthYmxlRGF0YSA9IHNvcnREYXRhKGRheUFycmF5KVxuICAgICAgICAgICAgZGF0YU9iai5wdXNoKHdvcmthYmxlRGF0YSk7XG4gICAgICAgICAgICBkYXlBcnJheSA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgICAgICBcbiAgICBmb3IgKGxldCBpID0gMTA7IGkgPD0gMTY7IGkgPSBpKzIpIHtcbiAgICAgICAgY29tcGlsZURhdGEoZGF0YSwgaSk7XG4gICAgICAgIGlmIChpID09IDE2KSB7XG4gICAgICAgICAgICBsZXQgd29ya2FibGVEYXRhID0gc29ydERhdGEoZGF5QXJyYXkpXG4gICAgICAgICAgICBkYXRhT2JqLnB1c2god29ya2FibGVEYXRhKTtcbiAgICAgICAgICAgIGRheUFycmF5ID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMTg7IGkgPD0gMjQ7IGkgPSBpKzIpIHtcbiAgICAgICAgY29tcGlsZURhdGEoZGF0YSwgaSk7XG4gICAgICAgIGlmIChpID09IDI0KSB7XG4gICAgICAgICAgICBsZXQgd29ya2FibGVEYXRhID0gc29ydERhdGEoZGF5QXJyYXkpXG4gICAgICAgICAgICBkYXRhT2JqLnB1c2god29ya2FibGVEYXRhKTtcbiAgICAgICAgICAgIGRheUFycmF5ID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMjY7IGkgPD0gMzI7IGkgPSBpKzIpIHtcbiAgICAgICAgY29tcGlsZURhdGEoZGF0YSwgaSk7XG4gICAgICAgIGlmIChpID09IDMyKSB7XG4gICAgICAgICAgICBsZXQgd29ya2FibGVEYXRhID0gc29ydERhdGEoZGF5QXJyYXkpXG4gICAgICAgICAgICBkYXRhT2JqLnB1c2god29ya2FibGVEYXRhKTtcbiAgICAgICAgICAgIGRheUFycmF5ID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YU9iajtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVBcHAoZGF0YSkge1xuICAgIHdoaWxlIChmb3JlY2FzdC5maXJzdENoaWxkKSB7XG4gICAgICAgIGZvcmVjYXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbmV3RGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0RheS5jbGFzc05hbWUgPSAnZGF5JztcblxuICAgICAgICBsZXQgZGF5RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXlEYXRlLmNsYXNzTmFtZSA9ICdkYXlkYXRlJztcbiAgICAgICAgZGF5RGF0ZS5pbm5lckhUTUwgPSBkYXRhW2ldLmRhdGU7XG5cbiAgICAgICAgbGV0IHdlYXRoZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgd2VhdGhlckltZy5jbGFzc05hbWUgPSAnZGF5aW1nJztcbiAgICAgICAgd2VhdGhlckltZy5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YVtpXS53ZWF0aGVyfUAyeC5wbmdgO1xuXG4gICAgICAgIGxldCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXBEaXYuY2xhc3NOYW1lID0gJ3RlbXBkaXYnO1xuXG4gICAgICAgIGxldCB0ZW1wTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXBMb3cuaW5uZXJIVE1MID0gZGF0YVtpXS50ZW1wTG93O1xuICAgICAgICBsZXQgdGVtcEhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGVtcEhpZ2guaW5uZXJIVE1MID0gZGF0YVtpXS50ZW1wSGlnaDtcblxuICAgICAgICB0ZW1wRGl2LmFwcGVuZENoaWxkKHRlbXBMb3cpO1xuICAgICAgICB0ZW1wRGl2LmFwcGVuZENoaWxkKHRlbXBIaWdoKTtcbiAgICAgICAgbmV3RGF5LmFwcGVuZENoaWxkKGRheURhdGUpO1xuICAgICAgICBuZXdEYXkuYXBwZW5kQ2hpbGQod2VhdGhlckltZyk7XG4gICAgICAgIG5ld0RheS5hcHBlbmRDaGlsZCh0ZW1wRGl2KVxuICAgICAgICBmb3JlY2FzdC5hcHBlbmRDaGlsZChuZXdEYXkpO1xuICAgIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgZnVuY3Rpb24oZSkgeyBcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0cnkge1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKFtnZXRGaXZlRGF5RGF0YShzZWFyY2hJbnB1dC52YWx1ZSksIGdldEN1cnJlbnREYXlEYXRhKHNlYXJjaElucHV0LnZhbHVlKV0pXG5cbiAgICAgICAgbGV0IGRhdGFPYmogPSBwYXJzZUZpdmVEYXlEYXRhKGRhdGFbMF0pO1xuICAgICAgICBsZXQgY3VycmVudERheURhdGFPYmogPSBwYXJzZUN1cnJlbnREYXlEYXRhKGRhdGFbMV0pO1xuICAgICAgICBkYXRhT2JqLnVuc2hpZnQoY3VycmVudERheURhdGFPYmopO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhT2JqKTtcbiAgICAgICAgcG9wdWxhdGVBcHAoZGF0YU9iaik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcm1lc3NhZ2UnKS5pbm5lckhUTUwgPSAnJztcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3JtZXNzYWdlJykuaW5uZXJIVE1MID0gYExvY2F0aW9uIG5vdCBmb3VuZC5cbiAgICAgICAgU2VhcmNoIG11c3QgYmUgaW4gdGhlIGZvcm0gb2YgXCJDaXR5XCIsIFwiQ2l0eSwgU3RhdGVcIiBvciBcIkNpdHksIENvdW50cnlcImBcbiAgICB9XG59KTtcblxuXG5cbi8vIGZldGNoKCdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPWNoaWNhZ28mdW5pdHM9aW1wZXJpYWwmYXBwaWQ9YjVhMTRhN2NjOTQwZDcxNzM4Yzg3NDA1ODQxM2FiYjQnKVxuLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbi8vICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuLy8gICAgIH0pXG4vLyAgICAgLnRoZW4oZGF0YSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICAgIH0pOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJzdWJtaXRCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWFyY2hJbnB1dCIsImdldEVsZW1lbnRCeUlkIiwiZm9yZWNhc3QiLCJnZXRGaXZlRGF5RGF0YSIsImNpdHkiLCJkYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZ2V0Q3VycmVudERheURhdGEiLCJwYXJzZUN1cnJlbnREYXlEYXRhIiwiZGF0ZSIsInRlbXBMb3ciLCJNYXRoIiwicm91bmQiLCJtYWluIiwidGVtcF9taW4iLCJ0ZW1wSGlnaCIsInRlbXBfbWF4Iiwid2VhdGhlciIsImljb24iLCJwYXJzZUZpdmVEYXlEYXRhIiwiY29tcGlsZURhdGEiLCJpIiwiZGF5IiwidGltZSIsImxpc3QiLCJkdF90eHQiLCJ3ZWF0aGVyRGVzYyIsImRlc2NyaXB0aW9uIiwiZGF5QXJyYXkiLCJwdXNoIiwic29ydERhdGEiLCJ0ZW1wTG93QXJyYXkiLCJ0ZW1wSGlnaEFycmF5Iiwid2VhdGhlckFycmF5Iiwic3BsaXQiLCJsb3dUZW1wIiwidGVtcCIsImhpZ2hUZW1wIiwibWYiLCJtIiwiY29tbW9uV2VhdGhlciIsImxlbmd0aCIsImoiLCJkYXRhT2JqIiwid29ya2FibGVEYXRhIiwicG9wdWxhdGVBcHAiLCJmaXJzdENoaWxkIiwicmVtb3ZlIiwibmV3RGF5IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImRheURhdGUiLCJpbm5lckhUTUwiLCJ3ZWF0aGVySW1nIiwic3JjIiwidGVtcERpdiIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIlByb21pc2UiLCJhbGwiLCJ2YWx1ZSIsImN1cnJlbnREYXlEYXRhT2JqIiwidW5zaGlmdCIsImNvbnNvbGUiLCJsb2ciLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9