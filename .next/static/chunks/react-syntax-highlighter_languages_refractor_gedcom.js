"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_gedcom"],{

/***/ "(app-client)/./node_modules/refractor/lang/gedcom.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/gedcom.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = gedcom\ngedcom.displayName = 'gedcom'\ngedcom.aliases = []\nfunction gedcom(Prism) {\n  Prism.languages.gedcom = {\n    'line-value': {\n      // Preceded by level, optional pointer, and tag\n      pattern: /(^\\s*\\d+ +(?:@\\w[\\w!\"$%&'()*+,\\-./:;<=>?[\\\\\\]^`{|}~\\x80-\\xfe #]*@ +)?\\w+ +).+/m,\n      lookbehind: true,\n      inside: {\n        pointer: {\n          pattern: /^@\\w[\\w!\"$%&'()*+,\\-./:;<=>?[\\\\\\]^`{|}~\\x80-\\xfe #]*@$/,\n          alias: 'variable'\n        }\n      }\n    },\n    tag: {\n      // Preceded by level and optional pointer\n      pattern: /(^\\s*\\d+ +(?:@\\w[\\w!\"$%&'()*+,\\-./:;<=>?[\\\\\\]^`{|}~\\x80-\\xfe #]*@ +)?)\\w+/m,\n      lookbehind: true,\n      alias: 'string'\n    },\n    level: {\n      pattern: /(^\\s*)\\d+/m,\n      lookbehind: true,\n      alias: 'number'\n    },\n    pointer: {\n      pattern: /@\\w[\\w!\"$%&'()*+,\\-./:;<=>?[\\\\\\]^`{|}~\\x80-\\xfe #]*@/,\n      alias: 'variable'\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2dlZGNvbS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxZQUFZLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFlBQVksRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9EQUFvRCxZQUFZLEVBQUU7QUFDbEU7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHVDQUF1QyxZQUFZLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2dlZGNvbS5qcz9jODBlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdlZGNvbVxuZ2VkY29tLmRpc3BsYXlOYW1lID0gJ2dlZGNvbSdcbmdlZGNvbS5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGdlZGNvbShQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuZ2VkY29tID0ge1xuICAgICdsaW5lLXZhbHVlJzoge1xuICAgICAgLy8gUHJlY2VkZWQgYnkgbGV2ZWwsIG9wdGlvbmFsIHBvaW50ZXIsIGFuZCB0YWdcbiAgICAgIHBhdHRlcm46IC8oXlxccypcXGQrICsoPzpAXFx3W1xcdyFcIiQlJicoKSorLFxcLS4vOjs8PT4/W1xcXFxcXF1eYHt8fX5cXHg4MC1cXHhmZSAjXSpAICspP1xcdysgKykuKy9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBwb2ludGVyOiB7XG4gICAgICAgICAgcGF0dGVybjogL15AXFx3W1xcdyFcIiQlJicoKSorLFxcLS4vOjs8PT4/W1xcXFxcXF1eYHt8fX5cXHg4MC1cXHhmZSAjXSpAJC8sXG4gICAgICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdGFnOiB7XG4gICAgICAvLyBQcmVjZWRlZCBieSBsZXZlbCBhbmQgb3B0aW9uYWwgcG9pbnRlclxuICAgICAgcGF0dGVybjogLyheXFxzKlxcZCsgKyg/OkBcXHdbXFx3IVwiJCUmJygpKissXFwtLi86Ozw9Pj9bXFxcXFxcXV5ge3x9flxceDgwLVxceGZlICNdKkAgKyk/KVxcdysvbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ3N0cmluZydcbiAgICB9LFxuICAgIGxldmVsOiB7XG4gICAgICBwYXR0ZXJuOiAvKF5cXHMqKVxcZCsvbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ251bWJlcidcbiAgICB9LFxuICAgIHBvaW50ZXI6IHtcbiAgICAgIHBhdHRlcm46IC9AXFx3W1xcdyFcIiQlJicoKSorLFxcLS4vOjs8PT4/W1xcXFxcXF1eYHt8fX5cXHg4MC1cXHhmZSAjXSpALyxcbiAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./node_modules/refractor/lang/gedcom.js\n"));

/***/ })

}]);