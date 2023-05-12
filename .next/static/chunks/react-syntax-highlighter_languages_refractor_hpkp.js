"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_hpkp"],{

/***/ "(app-client)/./node_modules/refractor/lang/hpkp.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/hpkp.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = hpkp\nhpkp.displayName = 'hpkp'\nhpkp.aliases = []\nfunction hpkp(Prism) {\n  /**\n   * Original by Scott Helme.\n   *\n   * Reference: https://scotthelme.co.uk/hpkp-cheat-sheet/\n   */\n  Prism.languages.hpkp = {\n    directive: {\n      pattern: /\\b(?:(?:includeSubDomains|preload|strict)(?: |;)|pin-sha256=\"[a-zA-Z\\d+=/]+\"|(?:max-age|report-uri)=|report-to )/,\n      alias: 'keyword'\n    },\n    safe: {\n      pattern: /\\d{7,}/,\n      alias: 'selector'\n    },\n    unsafe: {\n      pattern: /\\d{1,6}/,\n      alias: 'function'\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2hwa3AuanMuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixHQUFHO0FBQ3RCO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUJBQW1CLElBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2hwa3AuanM/ZjE2MCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBocGtwXG5ocGtwLmRpc3BsYXlOYW1lID0gJ2hwa3AnXG5ocGtwLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gaHBrcChQcmlzbSkge1xuICAvKipcbiAgICogT3JpZ2luYWwgYnkgU2NvdHQgSGVsbWUuXG4gICAqXG4gICAqIFJlZmVyZW5jZTogaHR0cHM6Ly9zY290dGhlbG1lLmNvLnVrL2hwa3AtY2hlYXQtc2hlZXQvXG4gICAqL1xuICBQcmlzbS5sYW5ndWFnZXMuaHBrcCA9IHtcbiAgICBkaXJlY3RpdmU6IHtcbiAgICAgIHBhdHRlcm46IC9cXGIoPzooPzppbmNsdWRlU3ViRG9tYWluc3xwcmVsb2FkfHN0cmljdCkoPzogfDspfHBpbi1zaGEyNTY9XCJbYS16QS1aXFxkKz0vXStcInwoPzptYXgtYWdlfHJlcG9ydC11cmkpPXxyZXBvcnQtdG8gKS8sXG4gICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgfSxcbiAgICBzYWZlOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxkezcsfS8sXG4gICAgICBhbGlhczogJ3NlbGVjdG9yJ1xuICAgIH0sXG4gICAgdW5zYWZlOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxkezEsNn0vLFxuICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./node_modules/refractor/lang/hpkp.js\n"));

/***/ })

}]);