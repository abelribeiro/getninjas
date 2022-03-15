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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/api */ \"./src/services/api.js\");\n/* harmony import */ var _tags_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags/select */ \"./src/tags/select.js\");\n/* harmony import */ var _tags_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags/option */ \"./src/tags/option.js\");\n/* harmony import */ var _tags_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags/label */ \"./src/tags/label.js\");\n/* harmony import */ var _tags_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tags/textarea */ \"./src/tags/textarea.js\");\n/* harmony import */ var _tags_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tags/input */ \"./src/tags/input.js\");\n/* harmony import */ var _tags_div__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tags/div */ \"./src/tags/div.js\");\n/* harmony import */ var _ultil_toHtmlFor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ultil/toHtmlFor */ \"./src/ultil/toHtmlFor.js\");\n/* eslint-disable camelcase */\n\n\n\n\n\n\n\n\n\n(async () => {\n  const data = await (0,_services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/api/fields');\n  const form = document.getElementById('steps');\n\n  // eslint-disable-next-line no-underscore-dangle\n  const { request_fields, user_fields } = data._embedded;\n\n  request_fields.forEach((field) => {\n    if (field.type === 'enumerable') {\n      const wrapElement = (0,_tags_div__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({ className: 'form-group' });\n      const selectElement = (0,_tags_select__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        name: field.name,\n        required: field.required,\n      });\n\n      const placeholderOpt = (0,_tags_option__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        value: '',\n        text: 'Selecione uma opção',\n      })\n      selectElement.appendChild(placeholderOpt);\n\n      Object.values(field.values).forEach((optionValue) => {\n        const optionElement = (0,_tags_option__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n          value: optionValue,\n          text: optionValue,\n          name: field.name,\n          required: field.required,\n        });\n        selectElement.add(optionElement);\n\n      });\n\n\n      const labelElement = (0,_tags_label__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        text: field.name,\n        htmlFor: (0,_ultil_toHtmlFor__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(field.name),\n      });\n      if(field.required) {\n        wrapElement.classList.add('required');\n      }\n      wrapElement.appendChild(labelElement);\n      wrapElement.appendChild(selectElement);\n      form.appendChild(wrapElement);\n    }\n\n    if (field.type === 'big_text') {\n      const wrapElement = (0,_tags_div__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({ className: 'form-group' });\n      const textareaElement = (0,_tags_textarea__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n        placeholder: field.name,\n        required: field.required,\n        name: field.name,\n      });\n\n      const labelElement = (0,_tags_label__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        text: field.name,\n        htmlFor: (0,_ultil_toHtmlFor__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(field.name),\n      });\n      wrapElement.appendChild(labelElement);\n      wrapElement.appendChild(textareaElement);\n      form.appendChild(wrapElement);\n    }\n  });\n\n  const supportedTypes = ['text', 'phone', 'email'];\n\n  const wrapElement = (0,_tags_div__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({ className: 'form-group', id: 'user_fields' });\n\n  const userFieldsHeader = document.createElement('h3');\n  userFieldsHeader.textContent = 'Complete com seus dados pessoais';\n  wrapElement.appendChild(userFieldsHeader);\n\n  user_fields.forEach(({\n    name, placeholder, required, type\n  }) => {\n    const inputElement = (0,_tags_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n      name,\n      placeholder,\n      required,\n      type: supportedTypes.includes(type) && type,\n    });\n\n    const labelElement = (0,_tags_label__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ text: name, htmlFor: (0,_ultil_toHtmlFor__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(name) });\n    if(required) {\n      wrapElement.classList.add('required');\n    }\n    wrapElement.appendChild(labelElement);\n    wrapElement.appendChild(inputElement);\n    form.appendChild(wrapElement);\n  });\n\n  function getPercentage(total, current) {\n    return ((current) / total) * 100;\n  }\n\n\n\n  const groups = document.getElementsByClassName('form-group');\n  const currentStep = document.getElementById('current_step');\n  groups[0].classList.add('active');\n\n  let counter = 0;\n  const total = groups.length - 1;\n\n\n  currentStep.style.width = `${getPercentage(total, counter)}%`;\n\n\n\n\n  const nextFormStep = document.getElementById('next');\n\n  nextFormStep.addEventListener('click', (e) => {\n    e.preventDefault();\n\n    const isRequiredStep = groups[counter]\n    const isRequiredChild = isRequiredStep.children\n    let hasError = false\n    Array.from(isRequiredChild).forEach((child) => {\n      if(child.value === '' && child.required){\n\n        const isRequeridMessageEl = document.createElement('span');\n        isRequeridMessageEl.classList.add('is-required-message');\n        isRequeridMessageEl.innerText = 'este campo é requerido';\n\n        child.after(isRequeridMessageEl)\n        child.classList.add('is-required');\n\n        setTimeout(() => {\n          child.classList.remove('is-required');\n          isRequiredStep.removeChild(isRequeridMessageEl);\n        }, 5000);\n\n        hasError = true;\n\n      }\n    })\n\n    if(hasError) return false\n\n\n    if (counter < total) {\n      counter += 1;\n      currentStep.style.width = `${getPercentage(total, counter)}%`;\n    } else alert('Dados envido com sucesso!');\n\n    Array.from(groups).forEach((g) => g.classList.remove('active'));\n    groups[counter].classList.add('active');\n\n\n  });\n\n\n})();\n\n\n//# sourceURL=webpack://getninjas/./src/index.js?");

/***/ }),

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ api)\n/* harmony export */ });\nasync function api(entrypoint) {\n  const data = await fetch(entrypoint);\n  return data.json();\n}\n\n\n//# sourceURL=webpack://getninjas/./src/services/api.js?");

/***/ }),

/***/ "./src/tags/div.js":
/*!*************************!*\
  !*** ./src/tags/div.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ div)\n/* harmony export */ });\nfunction div({\n  className, id,\n}) {\n  const el = document.createElement('div');\n  el.className = className;\n  if (id) el.id = id;\n  return el;\n}\n\n\n//# sourceURL=webpack://getninjas/./src/tags/div.js?");

/***/ }),

/***/ "./src/tags/input.js":
/*!***************************!*\
  !*** ./src/tags/input.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ input)\n/* harmony export */ });\n/* harmony import */ var _ultil_toHtmlFor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ultil/toHtmlFor */ \"./src/ultil/toHtmlFor.js\");\n\n\nfunction input({\n  placeholder, type, required, name,\n}) {\n  const el = document.createElement('input');\n  el.placeholder = placeholder;\n  el.type = type || 'text';\n  el.required = required;\n  el.id = (0,_ultil_toHtmlFor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name);\n  return el;\n}\n\n\n//# sourceURL=webpack://getninjas/./src/tags/input.js?");

/***/ }),

/***/ "./src/tags/label.js":
/*!***************************!*\
  !*** ./src/tags/label.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ label)\n/* harmony export */ });\nfunction label({ htmlFor, text }) {\n  const el = document.createElement('label');\n  el.htmlFor = htmlFor;\n  el.innerText = text;\n  return el;\n}\n\n\n//# sourceURL=webpack://getninjas/./src/tags/label.js?");

/***/ }),

/***/ "./src/tags/option.js":
/*!****************************!*\
  !*** ./src/tags/option.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ option)\n/* harmony export */ });\nfunction option({\n  value, text, required,\n}) {\n  const el = document.createElement('option');\n  el.value = value;\n  el.innerText = text;\n  el.required = required;\n  return el;\n}\n\n\n//# sourceURL=webpack://getninjas/./src/tags/option.js?");

/***/ }),

/***/ "./src/tags/select.js":
/*!****************************!*\
  !*** ./src/tags/select.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ select)\n/* harmony export */ });\n/* harmony import */ var _ultil_toHtmlFor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ultil/toHtmlFor */ \"./src/ultil/toHtmlFor.js\");\n\n\nfunction select({ required, name }) {\n  const el = document.createElement('select');\n  el.required = required;\n  el.id = (0,_ultil_toHtmlFor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name);\n  return el;\n}\n\n\n//# sourceURL=webpack://getninjas/./src/tags/select.js?");

/***/ }),

/***/ "./src/tags/textarea.js":
/*!******************************!*\
  !*** ./src/tags/textarea.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ textarea)\n/* harmony export */ });\n/* harmony import */ var _ultil_toHtmlFor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ultil/toHtmlFor */ \"./src/ultil/toHtmlFor.js\");\n\n\nfunction textarea({ placeholder, required, name }) {\n  const el = document.createElement('textarea');\n  el.placeholder = placeholder;\n  el.required = required;\n  el.id = (0,_ultil_toHtmlFor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name);\n  return el;\n}\n\n\n//# sourceURL=webpack://getninjas/./src/tags/textarea.js?");

/***/ }),

/***/ "./src/ultil/toHtmlFor.js":
/*!********************************!*\
  !*** ./src/ultil/toHtmlFor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toHtmlFor)\n/* harmony export */ });\nfunction toHtmlFor(text) {\n  return text.replaceAll(' ', '_').toLowerCase();\n}\n\n\n//# sourceURL=webpack://getninjas/./src/ultil/toHtmlFor.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;