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
const searchInput = document.getElementById('city');
const forecast = document.querySelector('.forecast');
const units = document.getElementsByName('unit');
let dataObj = [];
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
function changeUnit() {
  if (units[0].checked) {
    for (let day of dataObj) {
      day.tempLow = day.tempLow * (9 / 5) + 32;
      day.tempHigh = day.tempHigh * (9 / 5) + 32;
    }
  } else if (units[1].checked) {
    for (let day of dataObj) {
      day.tempLow = (day.tempLow - 32) * (5 / 9);
      day.tempHigh = (day.tempHigh - 32) * (5 / 9);
    }
  }
  populateApp(dataObj);
}
function parseCurrentDayData(data) {
  let date = 'Today';
  let tempLow = data.main.temp_min;
  let tempHigh = data.main.temp_max;
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
      tempLow: lowTemp,
      tempHigh: highTemp,
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
    tempLow.innerHTML = `${Math.round(data[i].tempLow)}°`;
    let tempHigh = document.createElement('div');
    tempHigh.innerHTML = `${Math.round(data[i].tempHigh)}°`;
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
    dataObj = parseFiveDayData(data[0]);
    let currentDayDataObj = parseCurrentDayData(data[1]);
    dataObj.unshift(currentDayDataObj);
    if (units[1].checked) {
      changeUnit(dataObj);
    } else {
      populateApp(dataObj);
    }
    document.querySelector('.errormessage').innerHTML = '';
  } catch (err) {
    document.querySelector('.errormessage').innerHTML = `Location not found.
        Search must be in the form of "City", "City, State" or "City, Country"`;
  }
});
units.forEach(unit => {
  unit.addEventListener('change', changeUnit);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1R6RSxRQUFRLENBQUNHLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQ3VELFNBQVMsR0FBSTtBQUM3RCwrRUFBK0U7RUFDM0U7QUFDSixDQUFDLENBQUM7QUFFRnRELEtBQUssQ0FBQ3NFLE9BQU8sQ0FBQ0MsSUFBSSxJQUFJO0VBQ2xCQSxJQUFJLENBQUNWLGdCQUFnQixDQUFDLFFBQVEsRUFBRWxELFVBQVUsQ0FBQztBQUMvQyxDQUFDLENBQUM7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM09BLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKTtcbmNvbnN0IGZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0Jyk7XG5jb25zdCB1bml0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCd1bml0Jyk7XG5sZXQgZGF0YU9iaiA9IFtdO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRGaXZlRGF5RGF0YShjaXR5KSB7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5fSZ1bml0cz1pbXBlcmlhbCZhcHBpZD1iNWExNGE3Y2M5NDBkNzE3MzhjODc0MDU4NDEzYWJiNGApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG5cbiAgICByZXR1cm4gZGF0YTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudERheURhdGEoY2l0eSkge1xuICAgIGxldCBkYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1pbXBlcmlhbCZhcHBpZD1iNWExNGE3Y2M5NDBkNzE3MzhjODc0MDU4NDEzYWJiNGApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIFxuICAgICAgICB9KVxuICAgIFxuICAgIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VVbml0KCkge1xuICAgIGlmICh1bml0c1swXS5jaGVja2VkKSB7XG4gICAgICAgIGZvciAobGV0IGRheSBvZiBkYXRhT2JqKSB7XG4gICAgICAgICAgICBkYXkudGVtcExvdyA9IChkYXkudGVtcExvdyAqICg5LzUpKSArIDMyXG4gICAgICAgICAgICBkYXkudGVtcEhpZ2ggPSAoZGF5LnRlbXBIaWdoICogKDkvNSkpICsgMzJcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodW5pdHNbMV0uY2hlY2tlZCkge1xuICAgICAgICBmb3IgKGxldCBkYXkgb2YgZGF0YU9iaikge1xuICAgICAgICAgICAgZGF5LnRlbXBMb3cgPSAoZGF5LnRlbXBMb3cgLSAzMikgKiAoNS85KVxuICAgICAgICAgICAgZGF5LnRlbXBIaWdoID0gKGRheS50ZW1wSGlnaCAtMzIpICogKDUvOSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvcHVsYXRlQXBwKGRhdGFPYmopO1xufVxuXG5mdW5jdGlvbiBwYXJzZUN1cnJlbnREYXlEYXRhKGRhdGEpIHtcblxuICAgIGxldCBkYXRlID0gJ1RvZGF5JztcbiAgICBsZXQgdGVtcExvdyA9IGRhdGEubWFpbi50ZW1wX21pbjtcbiAgICBsZXQgdGVtcEhpZ2ggPSBkYXRhLm1haW4udGVtcF9tYXg7XG4gICAgbGV0IHdlYXRoZXIgPSBkYXRhLndlYXRoZXJbMF0uaWNvbjtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRhdGUsXG4gICAgICAgIHRlbXBMb3csXG4gICAgICAgIHRlbXBIaWdoLFxuICAgICAgICB3ZWF0aGVyXG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHBhcnNlRml2ZURheURhdGEoZGF0YSkge1xuICAgIGZ1bmN0aW9uIGNvbXBpbGVEYXRhKGRhdGEsIGkpIHtcbiAgICAgICAgbGV0IGRheSA9IHt9O1xuICAgICAgICBkYXkudGltZSA9IGRhdGEubGlzdFtpXS5kdF90eHQ7XG4gICAgICAgIGRheS50ZW1wSGlnaCA9IGRhdGEubGlzdFtpXS5tYWluLnRlbXBfbWF4O1xuICAgICAgICBkYXkudGVtcExvdyA9IGRhdGEubGlzdFtpXS5tYWluLnRlbXBfbWluO1xuICAgICAgICBkYXkud2VhdGhlciA9IGRhdGEubGlzdFtpXS53ZWF0aGVyWzBdLmljb247XG4gICAgICAgIGRheS53ZWF0aGVyRGVzYyA9IGRhdGEubGlzdFtpXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgICBkYXlBcnJheS5wdXNoKGRheSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc29ydERhdGEgKGRheUFycmF5KSB7XG4gICAgICAgIGxldCB0ZW1wTG93QXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IHRlbXBIaWdoQXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IHdlYXRoZXJBcnJheSA9IFtdO1xuXG4gICAgICAgIGxldCBkYXRlID0gZGF5QXJyYXlbMF0udGltZS5zcGxpdCgnICcpWzBdO1xuXG4gICAgICAgIC8vY3JlYXRlcyB3b3JrYWJsZSBhcnJheXNcbiAgICAgICAgZm9yIChsZXQgZGF5IG9mIGRheUFycmF5KSB7XG4gICAgICAgICAgICB0ZW1wTG93QXJyYXkucHVzaChkYXkudGVtcExvdyk7XG4gICAgICAgICAgICB0ZW1wSGlnaEFycmF5LnB1c2goZGF5LnRlbXBIaWdoKTtcbiAgICAgICAgICAgIHdlYXRoZXJBcnJheS5wdXNoKGRheS53ZWF0aGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZmluZHMgbG93ZXN0IHRlbXBcbiAgICAgICAgbGV0IGxvd1RlbXAgPSB0ZW1wTG93QXJyYXlbMF1cbiAgICAgICAgZm9yIChsZXQgdGVtcCBvZiB0ZW1wTG93QXJyYXkpIHtcbiAgICAgICAgICAgIGlmICh0ZW1wIDwgbG93VGVtcCkge1xuICAgICAgICAgICAgICAgIGxvd1RlbXAgPSB0ZW1wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvL2ZpbmRzIGhpZ2hlc3QgdGVtcFxuICAgICAgICBsZXQgaGlnaFRlbXAgPSB0ZW1wSGlnaEFycmF5WzBdXG4gICAgICAgIGZvciAobGV0IHRlbXAgb2YgdGVtcEhpZ2hBcnJheSkge1xuICAgICAgICAgICAgaWYgKHRlbXAgPiBoaWdoVGVtcCkge1xuICAgICAgICAgICAgICAgIGhpZ2hUZW1wID0gdGVtcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy9maW5kcyBtb3N0IGNvbW1vbiB3ZWF0aGVyIGZvciB0aGUgZGF5XG4gICAgICAgIGxldCBtZiA9IDE7XG4gICAgICAgIGxldCBtID0gMDtcbiAgICAgICAgbGV0IGNvbW1vbldlYXRoZXIgPSB3ZWF0aGVyQXJyYXlbMl07XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx3ZWF0aGVyQXJyYXkubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqPWk7IGo8d2VhdGhlckFycmF5Lmxlbmd0aDsgaisrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3ZWF0aGVyQXJyYXlbaV0gPT0gd2VhdGhlckFycmF5W2pdKVxuICAgICAgICAgICAgICAgICAgICAgICAgbSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1mPG0pXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZj1tOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vbldlYXRoZXIgPSB3ZWF0aGVyQXJyYXlbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG09MDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRlOiBkYXRlLCBcbiAgICAgICAgICAgIHRlbXBMb3c6IGxvd1RlbXAsIFxuICAgICAgICAgICAgdGVtcEhpZ2g6IGhpZ2hUZW1wLCBcbiAgICAgICAgICAgIHdlYXRoZXI6Y29tbW9uV2VhdGhlclxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBsZXQgZGF0YU9iaiA9IFtdO1xuICAgIGxldCBkYXlBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gODsgaSA9IGkrMikge1xuICAgICAgICBjb21waWxlRGF0YShkYXRhLCBpKTtcbiAgICAgICAgaWYgKGkgPT0gOCkge1xuICAgICAgICAgICAgbGV0IHdvcmthYmxlRGF0YSA9IHNvcnREYXRhKGRheUFycmF5KVxuICAgICAgICAgICAgZGF0YU9iai5wdXNoKHdvcmthYmxlRGF0YSk7XG4gICAgICAgICAgICBkYXlBcnJheSA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgICAgICBcbiAgICBmb3IgKGxldCBpID0gMTA7IGkgPD0gMTY7IGkgPSBpKzIpIHtcbiAgICAgICAgY29tcGlsZURhdGEoZGF0YSwgaSk7XG4gICAgICAgIGlmIChpID09IDE2KSB7XG4gICAgICAgICAgICBsZXQgd29ya2FibGVEYXRhID0gc29ydERhdGEoZGF5QXJyYXkpXG4gICAgICAgICAgICBkYXRhT2JqLnB1c2god29ya2FibGVEYXRhKTtcbiAgICAgICAgICAgIGRheUFycmF5ID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMTg7IGkgPD0gMjQ7IGkgPSBpKzIpIHtcbiAgICAgICAgY29tcGlsZURhdGEoZGF0YSwgaSk7XG4gICAgICAgIGlmIChpID09IDI0KSB7XG4gICAgICAgICAgICBsZXQgd29ya2FibGVEYXRhID0gc29ydERhdGEoZGF5QXJyYXkpXG4gICAgICAgICAgICBkYXRhT2JqLnB1c2god29ya2FibGVEYXRhKTtcbiAgICAgICAgICAgIGRheUFycmF5ID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMjY7IGkgPD0gMzI7IGkgPSBpKzIpIHtcbiAgICAgICAgY29tcGlsZURhdGEoZGF0YSwgaSk7XG4gICAgICAgIGlmIChpID09IDMyKSB7XG4gICAgICAgICAgICBsZXQgd29ya2FibGVEYXRhID0gc29ydERhdGEoZGF5QXJyYXkpXG4gICAgICAgICAgICBkYXRhT2JqLnB1c2god29ya2FibGVEYXRhKTtcbiAgICAgICAgICAgIGRheUFycmF5ID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YU9iajtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVBcHAoZGF0YSkge1xuICAgIHdoaWxlIChmb3JlY2FzdC5maXJzdENoaWxkKSB7XG4gICAgICAgIGZvcmVjYXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbmV3RGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0RheS5jbGFzc05hbWUgPSAnZGF5JztcblxuICAgICAgICBsZXQgZGF5RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXlEYXRlLmNsYXNzTmFtZSA9ICdkYXlkYXRlJztcbiAgICAgICAgZGF5RGF0ZS5pbm5lckhUTUwgPSBkYXRhW2ldLmRhdGU7XG5cbiAgICAgICAgbGV0IHdlYXRoZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgd2VhdGhlckltZy5jbGFzc05hbWUgPSAnZGF5aW1nJztcbiAgICAgICAgd2VhdGhlckltZy5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YVtpXS53ZWF0aGVyfUAyeC5wbmdgO1xuXG4gICAgICAgIGxldCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXBEaXYuY2xhc3NOYW1lID0gJ3RlbXBkaXYnO1xuXG4gICAgICAgIGxldCB0ZW1wTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXBMb3cuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChkYXRhW2ldLnRlbXBMb3cpfcKwYDtcbiAgICAgICAgbGV0IHRlbXBIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXBIaWdoLmlubmVySFRNTCA9IGAke01hdGgucm91bmQoZGF0YVtpXS50ZW1wSGlnaCl9wrBgO1xuXG4gICAgICAgIHRlbXBEaXYuYXBwZW5kQ2hpbGQodGVtcExvdyk7XG4gICAgICAgIHRlbXBEaXYuYXBwZW5kQ2hpbGQodGVtcEhpZ2gpO1xuICAgICAgICBuZXdEYXkuYXBwZW5kQ2hpbGQoZGF5RGF0ZSk7XG4gICAgICAgIG5ld0RheS5hcHBlbmRDaGlsZCh3ZWF0aGVySW1nKTtcbiAgICAgICAgbmV3RGF5LmFwcGVuZENoaWxkKHRlbXBEaXYpXG4gICAgICAgIGZvcmVjYXN0LmFwcGVuZENoaWxkKG5ld0RheSk7XG4gICAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyBmdW5jdGlvbihlKSB7IFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoW2dldEZpdmVEYXlEYXRhKHNlYXJjaElucHV0LnZhbHVlKSwgZ2V0Q3VycmVudERheURhdGEoc2VhcmNoSW5wdXQudmFsdWUpXSlcblxuICAgICAgICBkYXRhT2JqID0gcGFyc2VGaXZlRGF5RGF0YShkYXRhWzBdKTtcbiAgICAgICAgbGV0IGN1cnJlbnREYXlEYXRhT2JqID0gcGFyc2VDdXJyZW50RGF5RGF0YShkYXRhWzFdKTtcbiAgICAgICAgZGF0YU9iai51bnNoaWZ0KGN1cnJlbnREYXlEYXRhT2JqKTtcblxuICAgICAgICBpZiAodW5pdHNbMV0uY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hhbmdlVW5pdChkYXRhT2JqKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9wdWxhdGVBcHAoZGF0YU9iaik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcm1lc3NhZ2UnKS5pbm5lckhUTUwgPSAnJztcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3JtZXNzYWdlJykuaW5uZXJIVE1MID0gYExvY2F0aW9uIG5vdCBmb3VuZC5cbiAgICAgICAgU2VhcmNoIG11c3QgYmUgaW4gdGhlIGZvcm0gb2YgXCJDaXR5XCIsIFwiQ2l0eSwgU3RhdGVcIiBvciBcIkNpdHksIENvdW50cnlcImBcbiAgICB9XG59KTtcblxudW5pdHMuZm9yRWFjaCh1bml0ID0+IHtcbiAgICB1bml0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZVVuaXQpXG59KTsgXG5cblxuLy8gZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9Y2hpY2FnbyZ1bml0cz1pbXBlcmlhbCZhcHBpZD1iNWExNGE3Y2M5NDBkNzE3MzhjODc0MDU4NDEzYWJiNCcpXG4vLyAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuLy8gICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4vLyAgICAgfSlcbi8vICAgICAudGhlbihkYXRhID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgICAgfSk7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbInNlYXJjaElucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZvcmVjYXN0IiwicXVlcnlTZWxlY3RvciIsInVuaXRzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJkYXRhT2JqIiwiZ2V0Rml2ZURheURhdGEiLCJjaXR5IiwiZGF0YSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImdldEN1cnJlbnREYXlEYXRhIiwiY2hhbmdlVW5pdCIsImNoZWNrZWQiLCJkYXkiLCJ0ZW1wTG93IiwidGVtcEhpZ2giLCJwb3B1bGF0ZUFwcCIsInBhcnNlQ3VycmVudERheURhdGEiLCJkYXRlIiwibWFpbiIsInRlbXBfbWluIiwidGVtcF9tYXgiLCJ3ZWF0aGVyIiwiaWNvbiIsInBhcnNlRml2ZURheURhdGEiLCJjb21waWxlRGF0YSIsImkiLCJ0aW1lIiwibGlzdCIsImR0X3R4dCIsIndlYXRoZXJEZXNjIiwiZGVzY3JpcHRpb24iLCJkYXlBcnJheSIsInB1c2giLCJzb3J0RGF0YSIsInRlbXBMb3dBcnJheSIsInRlbXBIaWdoQXJyYXkiLCJ3ZWF0aGVyQXJyYXkiLCJzcGxpdCIsImxvd1RlbXAiLCJ0ZW1wIiwiaGlnaFRlbXAiLCJtZiIsIm0iLCJjb21tb25XZWF0aGVyIiwibGVuZ3RoIiwiaiIsIndvcmthYmxlRGF0YSIsImZpcnN0Q2hpbGQiLCJyZW1vdmUiLCJuZXdEYXkiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiZGF5RGF0ZSIsImlubmVySFRNTCIsIndlYXRoZXJJbWciLCJzcmMiLCJ0ZW1wRGl2IiwiTWF0aCIsInJvdW5kIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiUHJvbWlzZSIsImFsbCIsInZhbHVlIiwiY3VycmVudERheURhdGFPYmoiLCJ1bnNoaWZ0IiwiZXJyIiwiZm9yRWFjaCIsInVuaXQiXSwic291cmNlUm9vdCI6IiJ9