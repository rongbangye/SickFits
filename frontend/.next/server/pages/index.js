/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/DeleteProduct.js":
/*!*************************************!*\
  !*** ./components/DeleteProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DeleteProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/rongbangye/Documents/React/Advanced-React-master/sick-fits/frontend/components/DeleteProduct.js\";\n\n\nconst DELETE_PRODUCT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n  mutation DELETE_PRODUCT_MUTATION($id: ID!) {\n    deleteProduct(id: $id) {\n      id\n      name\n    }\n  }\n`;\n\nfunction update(cache, payload) {\n  // payload is what get return from the update of the mutation\n  // we are goin to take that payload which is the id that we get after the mutation and take that a way from the cache\n  console.log(payload.data.deleteProduct);\n  console.log('running the update function after delete'); // Evicting Items from the Apolle Cache\n  // evict is a API from apollo that we use to update the cache after we delete a product. because when we delete a product, the react page doesn't update it yet until we refresh the page and then the product will be removed from the page - evict is the solution for this.\n\n  cache.evict(cache.identify(payload.data.deleteProduct));\n}\n\nfunction DeleteProduct({\n  id,\n  children\n}) {\n  const [deleteProduct, {\n    loading\n  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(DELETE_PRODUCT_MUTATION, {\n    variables: {\n      id\n    },\n    update\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n    type: \"button\",\n    disabled: loading,\n    onClick: () => {\n      if (confirm('Are you sure you want to delete this item?')) {\n        // go ahead and delete it\n        console.log('Delete');\n        deleteProduct().catch(err => alert(err.message));\n      }\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0RlbGV0ZVByb2R1Y3QuanM/ZDNlMyJdLCJuYW1lcyI6WyJERUxFVEVfUFJPRFVDVF9NVVRBVElPTiIsImdxbCIsInVwZGF0ZSIsImNhY2hlIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZGVsZXRlUHJvZHVjdCIsImV2aWN0IiwiaWRlbnRpZnkiLCJEZWxldGVQcm9kdWN0IiwiaWQiLCJjaGlsZHJlbiIsImxvYWRpbmciLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsImNvbmZpcm0iLCJjYXRjaCIsImVyciIsImFsZXJ0IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLHVCQUF1QixHQUFHQyxvREFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBBOztBQVNBLFNBQVNDLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCQyxPQUF2QixFQUFnQztBQUM5QjtBQUNBO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFPLENBQUNHLElBQVIsQ0FBYUMsYUFBekI7QUFDQUgsU0FBTyxDQUFDQyxHQUFSLENBQVksMENBQVosRUFKOEIsQ0FNOUI7QUFDQTs7QUFDQUgsT0FBSyxDQUFDTSxLQUFOLENBQVlOLEtBQUssQ0FBQ08sUUFBTixDQUFlTixPQUFPLENBQUNHLElBQVIsQ0FBYUMsYUFBNUIsQ0FBWjtBQUNEOztBQUVjLFNBQVNHLGFBQVQsQ0FBdUI7QUFBRUMsSUFBRjtBQUFNQztBQUFOLENBQXZCLEVBQXlDO0FBQ3RELFFBQU0sQ0FBQ0wsYUFBRCxFQUFnQjtBQUFFTTtBQUFGLEdBQWhCLElBQStCQywyREFBVyxDQUFDZix1QkFBRCxFQUEwQjtBQUN4RWdCLGFBQVMsRUFBRTtBQUFFSjtBQUFGLEtBRDZEO0FBRXhFVjtBQUZ3RSxHQUExQixDQUFoRDtBQUtBLHNCQUNFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxZQUFRLEVBQUVZLE9BRlo7QUFHRSxXQUFPLEVBQUUsTUFBTTtBQUNiLFVBQUlHLE9BQU8sQ0FBQyw0Q0FBRCxDQUFYLEVBQTJEO0FBQ3pEO0FBQ0FaLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQUUscUJBQWEsR0FBR1UsS0FBaEIsQ0FBdUJDLEdBQUQsSUFBU0MsS0FBSyxDQUFDRCxHQUFHLENBQUNFLE9BQUwsQ0FBcEM7QUFDRDtBQUNGLEtBVEg7QUFBQSxjQVdHUjtBQVhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EZWxldGVQcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuY29uc3QgREVMRVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIERFTEVURV9QUk9EVUNUX01VVEFUSU9OKCRpZDogSUQhKSB7XG4gICAgZGVsZXRlUHJvZHVjdChpZDogJGlkKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgIH1cbiAgfVxuYDtcblxuZnVuY3Rpb24gdXBkYXRlKGNhY2hlLCBwYXlsb2FkKSB7XG4gIC8vIHBheWxvYWQgaXMgd2hhdCBnZXQgcmV0dXJuIGZyb20gdGhlIHVwZGF0ZSBvZiB0aGUgbXV0YXRpb25cbiAgLy8gd2UgYXJlIGdvaW4gdG8gdGFrZSB0aGF0IHBheWxvYWQgd2hpY2ggaXMgdGhlIGlkIHRoYXQgd2UgZ2V0IGFmdGVyIHRoZSBtdXRhdGlvbiBhbmQgdGFrZSB0aGF0IGEgd2F5IGZyb20gdGhlIGNhY2hlXG4gIGNvbnNvbGUubG9nKHBheWxvYWQuZGF0YS5kZWxldGVQcm9kdWN0KTtcbiAgY29uc29sZS5sb2coJ3J1bm5pbmcgdGhlIHVwZGF0ZSBmdW5jdGlvbiBhZnRlciBkZWxldGUnKTtcblxuICAvLyBFdmljdGluZyBJdGVtcyBmcm9tIHRoZSBBcG9sbGUgQ2FjaGVcbiAgLy8gZXZpY3QgaXMgYSBBUEkgZnJvbSBhcG9sbG8gdGhhdCB3ZSB1c2UgdG8gdXBkYXRlIHRoZSBjYWNoZSBhZnRlciB3ZSBkZWxldGUgYSBwcm9kdWN0LiBiZWNhdXNlIHdoZW4gd2UgZGVsZXRlIGEgcHJvZHVjdCwgdGhlIHJlYWN0IHBhZ2UgZG9lc24ndCB1cGRhdGUgaXQgeWV0IHVudGlsIHdlIHJlZnJlc2ggdGhlIHBhZ2UgYW5kIHRoZW4gdGhlIHByb2R1Y3Qgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIHBhZ2UgLSBldmljdCBpcyB0aGUgc29sdXRpb24gZm9yIHRoaXMuXG4gIGNhY2hlLmV2aWN0KGNhY2hlLmlkZW50aWZ5KHBheWxvYWQuZGF0YS5kZWxldGVQcm9kdWN0KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbGV0ZVByb2R1Y3QoeyBpZCwgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbZGVsZXRlUHJvZHVjdCwgeyBsb2FkaW5nIH1dID0gdXNlTXV0YXRpb24oREVMRVRFX1BST0RVQ1RfTVVUQVRJT04sIHtcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcbiAgICB1cGRhdGUsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nKSkge1xuICAgICAgICAgIC8vIGdvIGFoZWFkIGFuZCBkZWxldGUgaXRcbiAgICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlJyk7XG4gICAgICAgICAgZGVsZXRlUHJvZHVjdCgpLmNhdGNoKChlcnIpID0+IGFsZXJ0KGVyci5tZXNzYWdlKSk7XG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DeleteProduct.js\n");

/***/ }),

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Product; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ItemStyles */ \"./components/styles/ItemStyles.js\");\n/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Title */ \"./components/styles/Title.js\");\n/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PriceTag */ \"./components/styles/PriceTag.js\");\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n/* harmony import */ var _DeleteProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DeleteProduct */ \"./components/DeleteProduct.js\");\n\nvar _jsxFileName = \"/Users/rongbangye/Documents/React/Advanced-React-master/sick-fits/frontend/components/Product.js\";\n\n\n\n\n\n\nfunction Product({\n  product\n}) {\n  var _product$photo, _product$photo$image;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_2__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: product === null || product === void 0 ? void 0 : (_product$photo = product.photo) === null || _product$photo === void 0 ? void 0 : (_product$photo$image = _product$photo.image) === null || _product$photo$image === void 0 ? void 0 : _product$photo$image.publicUrlTransformed,\n      alt: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Title__WEBPACK_IMPORTED_MODULE_3__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: `/product/${product.id}`,\n        children: product.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__.default, {\n      children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__.default)(product.price)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: product.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"buttonList\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: {\n          pathname: 'update',\n          query: {\n            id: product.id\n          }\n        },\n        children: \"Edit \\uD83D\\uDD8A\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DeleteProduct__WEBPACK_IMPORTED_MODULE_6__.default, {\n        id: product.id,\n        children: \"Delete\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Byb2R1Y3QuanM/OWQwNiJdLCJuYW1lcyI6WyJQcm9kdWN0IiwicHJvZHVjdCIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsIm5hbWUiLCJpZCIsImZvcm1hdE1vbmV5IiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsInBhdGhuYW1lIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUI7QUFBRUM7QUFBRixDQUFqQixFQUE4QjtBQUFBOztBQUMzQyxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDRCQUNFO0FBQ0UsU0FBRyxFQUFFQSxPQUFGLGFBQUVBLE9BQUYseUNBQUVBLE9BQU8sQ0FBRUMsS0FBWCwyRUFBRSxlQUFnQkMsS0FBbEIseURBQUUscUJBQXVCQyxvQkFEOUI7QUFFRSxTQUFHLEVBQUVILE9BQU8sQ0FBQ0k7QUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFHLFlBQVdKLE9BQU8sQ0FBQ0ssRUFBRyxFQUFuQztBQUFBLGtCQUF1Q0wsT0FBTyxDQUFDSTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBUUUsOERBQUMscURBQUQ7QUFBQSxnQkFBV0UseURBQVcsQ0FBQ04sT0FBTyxDQUFDTyxLQUFUO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixlQVNFO0FBQUEsZ0JBQUlQLE9BQU8sQ0FBQ1E7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsZUFXRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsOEJBR0UsOERBQUMsa0RBQUQ7QUFDRSxZQUFJLEVBQUU7QUFDSkMsa0JBQVEsRUFBRSxRQUROO0FBRUpDLGVBQUssRUFBRTtBQUNMTCxjQUFFLEVBQUVMLE9BQU8sQ0FBQ0s7QUFEUDtBQUZILFNBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQWFFLDhEQUFDLG1EQUFEO0FBQWUsVUFBRSxFQUFFTCxPQUFPLENBQUNLLEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEl0ZW1TdHlsZXMgZnJvbSAnLi9zdHlsZXMvSXRlbVN0eWxlcyc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9zdHlsZXMvVGl0bGUnO1xuaW1wb3J0IFByaWNlVGFnIGZyb20gJy4vc3R5bGVzL1ByaWNlVGFnJztcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tICcuLi9saWIvZm9ybWF0TW9uZXknO1xuaW1wb3J0IERlbGV0ZVByb2R1Y3QgZnJvbSAnLi9EZWxldGVQcm9kdWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdCh7IHByb2R1Y3QgfSkge1xuICByZXR1cm4gKFxuICAgIDxJdGVtU3R5bGVzPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e3Byb2R1Y3Q/LnBob3RvPy5pbWFnZT8ucHVibGljVXJsVHJhbnNmb3JtZWR9XG4gICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxuICAgICAgLz5cbiAgICAgIDxUaXRsZT5cbiAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfT57cHJvZHVjdC5uYW1lfTwvTGluaz5cbiAgICAgIDwvVGl0bGU+XG4gICAgICA8UHJpY2VUYWc+e2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UpfTwvUHJpY2VUYWc+XG4gICAgICA8cD57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICB7LyogLy8gVE9ETzogQWRkIGJ1dHRvbnMgdG8gZWRpdCBhbmQgZGVsZXRlIGl0ZW0gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uTGlzdCc+XG4gICAgICAgIHsvKiAgcHJldmlvdXNseSB3ZSB1c2UgTGluayBsaWtlIHRoaXM6ICovfVxuICAgICAgICB7LyogPExpbmsgaHJlZj1gL3VwZGF0ZS9hZGMxMjNgPjwvTGluaz4gKi99XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgcGF0aG5hbWU6ICd1cGRhdGUnLFxuICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBFZGl0IPCflopcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8RGVsZXRlUHJvZHVjdCBpZD17cHJvZHVjdC5pZH0+RGVsZXRlPC9EZWxldGVQcm9kdWN0PlxuICAgICAgPC9kaXY+XG4gICAgPC9JdGVtU3R5bGVzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Product.js\n");

/***/ }),

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ALL_PRODUCTS_QUERY\": function() { return /* binding */ ALL_PRODUCTS_QUERY; },\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Product */ \"./components/Product.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./config.js\");\n\nvar _jsxFileName = \"/Users/rongbangye/Documents/React/Advanced-React-master/sick-fits/frontend/components/Products.js\";\n\n\n\n\n\nconst ALL_PRODUCTS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_3___default())`\n  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {\n    allProducts(first: $first, skip: $skip) {\n      id\n      name\n      price\n      description\n      photo {\n        id\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n`;\nconst ProductsListStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n  displayName: \"Products__ProductsListStyles\",\n  componentId: \"sc-1uv5x8m-0\"\n})([\"display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;\"]);\nfunction Products({\n  page\n}) {\n  const {\n    data,\n    error,\n    loading\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ALL_PRODUCTS_QUERY, {\n    variables: {\n      skip: page * _config__WEBPACK_IMPORTED_MODULE_5__.perPage - _config__WEBPACK_IMPORTED_MODULE_5__.perPage,\n      first: _config__WEBPACK_IMPORTED_MODULE_5__.perPage\n    }\n  });\n  console.log(data, error, loading);\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: [\"Error: \", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 21\n  }, this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductsListStyles, {\n      children: data.allProducts.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_4__.default, {\n        product: product\n      }, product.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Byb2R1Y3RzLmpzPzcxNDAiXSwibmFtZXMiOlsiQUxMX1BST0RVQ1RTX1FVRVJZIiwiZ3FsIiwiUHJvZHVjdHNMaXN0U3R5bGVzIiwic3R5bGVkIiwiUHJvZHVjdHMiLCJwYWdlIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwic2tpcCIsInBlclBhZ2UiLCJmaXJzdCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiYWxsUHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLGtCQUFrQixHQUFHQyxvREFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FmTztBQWlCUCxNQUFNQyxrQkFBa0IsR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsaUVBQXhCO0FBTWUsU0FBU0MsUUFBVCxDQUFrQjtBQUFFQztBQUFGLENBQWxCLEVBQTRCO0FBQ3pDLFFBQU07QUFBRUMsUUFBRjtBQUFRQyxTQUFSO0FBQWVDO0FBQWYsTUFBMkJDLHdEQUFRLENBQUNULGtCQUFELEVBQXFCO0FBQzVEVSxhQUFTLEVBQUU7QUFDVEMsVUFBSSxFQUFFTixJQUFJLEdBQUdPLDRDQUFQLEdBQWlCQSw0Q0FEZDtBQUVUQyxXQUFLLEVBQUVELDRDQUFPQTtBQUZMO0FBRGlELEdBQXJCLENBQXpDO0FBTUFFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVCxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsT0FBekI7QUFDQSxNQUFJQSxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlELEtBQUosRUFBVyxvQkFBTztBQUFBLDBCQUFXQSxLQUFLLENBQUNTLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ1gsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxrQkFBRDtBQUFBLGdCQUNHVixJQUFJLENBQUNXLFdBQUwsQ0FBaUJDLEdBQWpCLENBQXNCQyxPQUFELGlCQUNwQiw4REFBQyw2Q0FBRDtBQUEwQixlQUFPLEVBQUVBO0FBQW5DLFNBQWNBLE9BQU8sQ0FBQ0MsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCc7XG5pbXBvcnQgeyBwZXJQYWdlIH0gZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IEFMTF9QUk9EVUNUU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgQUxMX1BST0RVQ1RTX1FVRVJZKCRza2lwOiBJbnQgPSAwLCAkZmlyc3Q6IEludCkge1xuICAgIGFsbFByb2R1Y3RzKGZpcnN0OiAkZmlyc3QsIHNraXA6ICRza2lwKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgcHJpY2VcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBwaG90byB7XG4gICAgICAgIGlkXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBQcm9kdWN0c0xpc3RTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtZ2FwOiA2MHB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoeyBwYWdlIH0pIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoQUxMX1BST0RVQ1RTX1FVRVJZLCB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBza2lwOiBwYWdlICogcGVyUGFnZSAtIHBlclBhZ2UsXG4gICAgICBmaXJzdDogcGVyUGFnZSxcbiAgICB9LFxuICB9KTtcbiAgY29uc29sZS5sb2coZGF0YSwgZXJyb3IsIGxvYWRpbmcpO1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFByb2R1Y3RzTGlzdFN0eWxlcz5cbiAgICAgICAge2RhdGEuYWxsUHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgPFByb2R1Y3Qga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvUHJvZHVjdHNMaXN0U3R5bGVzPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Products.js\n");

/***/ }),

/***/ "./components/styles/ItemStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/ItemStyles.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n  displayName: \"ItemStyles\",\n  componentId: \"sc-16pk14u-0\"\n})([\"background:white;border:1px solid var(--offWhite);box-shadow:var(--bs);position:relative;display:flex;flex-direction:column;img{width:100%;height:400px;object-fit:cover;}p{line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}.buttonList{display:grid;width:100%;border-top:1px solid var(--lightGray);grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:var(--lightGray);& > *{background:white;border:0;font-size:1rem;padding:1rem;}}\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemStyles);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9JdGVtU3R5bGVzLmpzPzU1MGUiXSwibmFtZXMiOlsiSXRlbVN0eWxlcyIsInN0eWxlZCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSxNQUFNQSxVQUFVLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHllQUFoQjtBQW1DQSwrREFBZUQsVUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3R5bGVzL0l0ZW1TdHlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgSXRlbVN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1vZmZXaGl0ZSk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJzKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiAgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZzogMCAzcmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5idXR0b25MaXN0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodEdyYXkpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuICAgIGdyaWQtZ2FwOiAxcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRHcmF5KTtcbiAgICAmID4gKiB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBJdGVtU3R5bGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/styles/ItemStyles.js\n");

/***/ }),

/***/ "./components/styles/PriceTag.js":
/*!***************************************!*\
  !*** ./components/styles/PriceTag.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PriceTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({\n  displayName: \"PriceTag\",\n  componentId: \"sc-nwbk6t-0\"\n})([\"background:var(--red);transform:rotate(3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (PriceTag);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9QcmljZVRhZy5qcz9jNmQ5Il0sIm5hbWVzIjpbIlByaWNlVGFnIiwic3R5bGVkIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUVBLE1BQU1BLFFBQVEsR0FBR0Msd0VBQUg7QUFBQTtBQUFBO0FBQUEscUxBQWQ7QUFjQSwrREFBZUQsUUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3R5bGVzL1ByaWNlVGFnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFByaWNlVGFnID0gc3R5bGVkLnNwYW5gXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTNweDtcbiAgcmlnaHQ6IC0zcHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQcmljZVRhZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/styles/PriceTag.js\n");

/***/ }),

/***/ "./components/styles/Title.js":
/*!************************************!*\
  !*** ./components/styles/Title.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({\n  displayName: \"Title\",\n  componentId: \"sc-16nq74k-0\"\n})([\"margin:0 1rem;text-align:center;transform:skew(-5deg) rotate(-1deg);margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:var(--red);display:inline;line-height:1.3;font-size:4rem;text-align:center;color:white;padding:0 1rem;}\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Title);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9UaXRsZS5qcz8yYTEwIl0sIm5hbWVzIjpbIlRpdGxlIiwic3R5bGVkIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUVBLE1BQU1BLEtBQUssR0FBR0Msc0VBQUg7QUFBQTtBQUFBO0FBQUEsdVBBQVg7QUFpQkEsK0RBQWVELEtBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0eWxlcy9UaXRsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oM2BcbiAgbWFyZ2luOiAwIDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiBza2V3KC01ZGVnKSByb3RhdGUoLTFkZWcpO1xuICBtYXJnaW4tdG9wOiAtM3JlbTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGEge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/styles/Title.js\n");

/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ formatMoney; }\n/* harmony export */ });\nfunction formatMoney(amount = 0) {\n  const options = {\n    style: 'currency',\n    currency: 'USD',\n    minimumFractionDigits: 2\n  }; // check if its a clean dollar amount\n\n  if (amount % 100 === 0) {\n    options.minimumFractionDigits = 0;\n  }\n\n  const formatter = Intl.NumberFormat('en-US', options);\n  return formatter.format(amount / 100);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9saWIvZm9ybWF0TW9uZXkuanM/ZGIyZiJdLCJuYW1lcyI6WyJmb3JtYXRNb25leSIsImFtb3VudCIsIm9wdGlvbnMiLCJzdHlsZSIsImN1cnJlbmN5IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBLFdBQVQsQ0FBcUJDLE1BQU0sR0FBRyxDQUE5QixFQUFpQztBQUM5QyxRQUFNQyxPQUFPLEdBQUc7QUFDZEMsU0FBSyxFQUFFLFVBRE87QUFFZEMsWUFBUSxFQUFFLEtBRkk7QUFHZEMseUJBQXFCLEVBQUU7QUFIVCxHQUFoQixDQUQ4QyxDQU85Qzs7QUFDQSxNQUFJSixNQUFNLEdBQUcsR0FBVCxLQUFpQixDQUFyQixFQUF3QjtBQUN0QkMsV0FBTyxDQUFDRyxxQkFBUixHQUFnQyxDQUFoQztBQUNEOztBQUNELFFBQU1DLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCTixPQUEzQixDQUFsQjtBQUVBLFNBQU9JLFNBQVMsQ0FBQ0csTUFBVixDQUFpQlIsTUFBTSxHQUFHLEdBQTFCLENBQVA7QUFDRCIsImZpbGUiOiIuL2xpYi9mb3JtYXRNb25leS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdE1vbmV5KGFtb3VudCA9IDApIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICB9O1xuXG4gIC8vIGNoZWNrIGlmIGl0cyBhIGNsZWFuIGRvbGxhciBhbW91bnRcbiAgaWYgKGFtb3VudCAlIDEwMCA9PT0gMCkge1xuICAgIG9wdGlvbnMubWluaW11bUZyYWN0aW9uRGlnaXRzID0gMDtcbiAgfVxuICBjb25zdCBmb3JtYXR0ZXIgPSBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCBvcHRpb25zKTtcblxuICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChhbW91bnQgLyAxMDApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/formatMoney.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _products__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ "./pages/products/index.js");


/***/ }),

/***/ "./pages/products/index.js":
/*!*********************************!*\
  !*** ./pages/products/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Products */ \"./components/Products.js\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Pagination */ \"./components/Pagination.js\");\n\nvar _jsxFileName = \"/Users/rongbangye/Documents/React/Advanced-React-master/sick-fits/frontend/pages/products/index.js\";\n\n\n\nfunction ProductsPage() {\n  const {\n    query\n  } = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(); // console.log(typeof query.page, typeof 3);\n\n  const page = parseInt(query.page); // console.log(typeof page);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__.default, {\n      page: page || 1\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Products__WEBPACK_IMPORTED_MODULE_2__.default, {\n      page: page || 1\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__.default, {\n      page: page || 1\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9wcm9kdWN0cy9pbmRleC5qcz85YjJlIl0sIm5hbWVzIjpbIlByb2R1Y3RzUGFnZSIsInF1ZXJ5IiwidXNlUm91dGVyIiwicGFnZSIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFlBQVQsR0FBd0I7QUFDckMsUUFBTTtBQUFFQztBQUFGLE1BQVlDLGtFQUFTLEVBQTNCLENBRHFDLENBRXJDOztBQUNBLFFBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDSCxLQUFLLENBQUNFLElBQVAsQ0FBckIsQ0FIcUMsQ0FJckM7O0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQywyREFBRDtBQUFZLFVBQUksRUFBRUEsSUFBSSxJQUFJO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLDhEQUFDLHlEQUFEO0FBQVUsVUFBSSxFQUFFQSxJQUFJLElBQUk7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBTUUsOERBQUMsMkRBQUQ7QUFBWSxVQUFJLEVBQUVBLElBQUksSUFBSTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRCIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3RzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdHMnO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHNQYWdlKCkge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgLy8gY29uc29sZS5sb2codHlwZW9mIHF1ZXJ5LnBhZ2UsIHR5cGVvZiAzKTtcbiAgY29uc3QgcGFnZSA9IHBhcnNlSW50KHF1ZXJ5LnBhZ2UpO1xuICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgcGFnZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxQYWdpbmF0aW9uIHBhZ2U9e3BhZ2UgfHwgMX0gLz5cblxuICAgICAgey8qIDMuIEZpbHRlciB0aGUgcHJvZHVjdHMgZm9yIHRoZSBjdXJyZW50IHBhZ2UgKi99XG4gICAgICA8UHJvZHVjdHMgcGFnZT17cGFnZSB8fCAxfSAvPlxuXG4gICAgICA8UGFnaW5hdGlvbiBwYWdlPXtwYWdlIHx8IDF9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/index.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_ErrorMessage_js","components_Pagination_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();