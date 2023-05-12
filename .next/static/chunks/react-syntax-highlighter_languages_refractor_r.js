"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_r"],{

/***/ "(app-client)/./node_modules/refractor/lang/r.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/r.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = r\nr.displayName = 'r'\nr.aliases = []\nfunction r(Prism) {\n  Prism.languages.r = {\n    comment: /#.*/,\n    string: {\n      pattern: /(['\"])(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true\n    },\n    'percent-operator': {\n      // Includes user-defined operators\n      // and %%, %*%, %/%, %in%, %o%, %x%\n      pattern: /%[^%\\s]*%/,\n      alias: 'operator'\n    },\n    boolean: /\\b(?:TRUE|FALSE)\\b/,\n    ellipsis: /\\.\\.(?:\\.|\\d+)/,\n    number: [\n      /\\b(?:NaN|Inf)\\b/,\n      /(?:\\b0x[\\dA-Fa-f]+(?:\\.\\d*)?|\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:[EePp][+-]?\\d+)?[iL]?/\n    ],\n    keyword: /\\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\\b/,\n    operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\\|\\|?|[+*\\/^$@~]/,\n    punctuation: /[(){}\\[\\],;]/\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3IuanMuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixNQUFNO0FBQzdCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3IuanM/N2ZlZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByXG5yLmRpc3BsYXlOYW1lID0gJ3InXG5yLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gcihQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuciA9IHtcbiAgICBjb21tZW50OiAvIy4qLyxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC8oWydcIl0pKD86XFxcXC58KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgICdwZXJjZW50LW9wZXJhdG9yJzoge1xuICAgICAgLy8gSW5jbHVkZXMgdXNlci1kZWZpbmVkIG9wZXJhdG9yc1xuICAgICAgLy8gYW5kICUlLCAlKiUsICUvJSwgJWluJSwgJW8lLCAleCVcbiAgICAgIHBhdHRlcm46IC8lW14lXFxzXSolLyxcbiAgICAgIGFsaWFzOiAnb3BlcmF0b3InXG4gICAgfSxcbiAgICBib29sZWFuOiAvXFxiKD86VFJVRXxGQUxTRSlcXGIvLFxuICAgIGVsbGlwc2lzOiAvXFwuXFwuKD86XFwufFxcZCspLyxcbiAgICBudW1iZXI6IFtcbiAgICAgIC9cXGIoPzpOYU58SW5mKVxcYi8sXG4gICAgICAvKD86XFxiMHhbXFxkQS1GYS1mXSsoPzpcXC5cXGQqKT98XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86W0VlUHBdWystXT9cXGQrKT9baUxdPy9cbiAgICBdLFxuICAgIGtleXdvcmQ6IC9cXGIoPzppZnxlbHNlfHJlcGVhdHx3aGlsZXxmdW5jdGlvbnxmb3J8aW58bmV4dHxicmVha3xOVUxMfE5BfE5BX2ludGVnZXJffE5BX3JlYWxffE5BX2NvbXBsZXhffE5BX2NoYXJhY3Rlcl8pXFxiLyxcbiAgICBvcGVyYXRvcjogLy0+Pz4/fDwoPzo9fDw/LSk/fFs+PSFdPT98Ojo/fCYmP3xcXHxcXHw/fFsrKlxcL14kQH5dLyxcbiAgICBwdW5jdHVhdGlvbjogL1soKXt9XFxbXFxdLDtdL1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./node_modules/refractor/lang/r.js\n"));

/***/ })

}]);