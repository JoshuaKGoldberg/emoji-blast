"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_roboconf"],{

/***/ "(app-client)/./node_modules/refractor/lang/roboconf.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/roboconf.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = roboconf\nroboconf.displayName = 'roboconf'\nroboconf.aliases = []\nfunction roboconf(Prism) {\n  Prism.languages.roboconf = {\n    comment: /#.*/,\n    keyword: {\n      pattern: /(^|\\s)(?:(?:facet|instance of)(?=[ \\t]+[\\w-]+[ \\t]*\\{)|(?:external|import)\\b)/,\n      lookbehind: true\n    },\n    component: {\n      pattern: /[\\w-]+(?=[ \\t]*\\{)/,\n      alias: 'variable'\n    },\n    property: /[\\w.-]+(?=[ \\t]*:)/,\n    value: {\n      pattern: /(=[ \\t]*)[^,;]+/,\n      lookbehind: true,\n      alias: 'attr-value'\n    },\n    optional: {\n      pattern: /\\(optional\\)/,\n      alias: 'builtin'\n    },\n    wildcard: {\n      pattern: /(\\.)\\*/,\n      lookbehind: true,\n      alias: 'operator'\n    },\n    punctuation: /[{},.;:=]/\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3JvYm9jb25mLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wscUJBQXFCLEdBQUc7QUFDeEI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvcm9ib2NvbmYuanM/ODRiNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByb2JvY29uZlxucm9ib2NvbmYuZGlzcGxheU5hbWUgPSAncm9ib2NvbmYnXG5yb2JvY29uZi5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHJvYm9jb25mKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5yb2JvY29uZiA9IHtcbiAgICBjb21tZW50OiAvIy4qLyxcbiAgICBrZXl3b3JkOiB7XG4gICAgICBwYXR0ZXJuOiAvKF58XFxzKSg/Oig/OmZhY2V0fGluc3RhbmNlIG9mKSg/PVsgXFx0XStbXFx3LV0rWyBcXHRdKlxceyl8KD86ZXh0ZXJuYWx8aW1wb3J0KVxcYikvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgY29tcG9uZW50OiB7XG4gICAgICBwYXR0ZXJuOiAvW1xcdy1dKyg/PVsgXFx0XSpcXHspLyxcbiAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgfSxcbiAgICBwcm9wZXJ0eTogL1tcXHcuLV0rKD89WyBcXHRdKjopLyxcbiAgICB2YWx1ZToge1xuICAgICAgcGF0dGVybjogLyg9WyBcXHRdKilbXiw7XSsvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiAnYXR0ci12YWx1ZSdcbiAgICB9LFxuICAgIG9wdGlvbmFsOiB7XG4gICAgICBwYXR0ZXJuOiAvXFwob3B0aW9uYWxcXCkvLFxuICAgICAgYWxpYXM6ICdidWlsdGluJ1xuICAgIH0sXG4gICAgd2lsZGNhcmQ6IHtcbiAgICAgIHBhdHRlcm46IC8oXFwuKVxcKi8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdvcGVyYXRvcidcbiAgICB9LFxuICAgIHB1bmN0dWF0aW9uOiAvW3t9LC47Oj1dL1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./node_modules/refractor/lang/roboconf.js\n"));

/***/ })

}]);