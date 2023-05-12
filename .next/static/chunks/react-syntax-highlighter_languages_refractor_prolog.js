"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_prolog"],{

/***/ "(app-client)/./node_modules/refractor/lang/prolog.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/prolog.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = prolog\nprolog.displayName = 'prolog'\nprolog.aliases = []\nfunction prolog(Prism) {\n  Prism.languages.prolog = {\n    // Syntax depends on the implementation\n    comment: [/%.+/, /\\/\\*[\\s\\S]*?\\*\\//],\n    // Depending on the implementation, strings may allow escaped newlines and quote-escape\n    string: {\n      pattern: /([\"'])(?:\\1\\1|\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true\n    },\n    builtin: /\\b(?:fx|fy|xf[xy]?|yfx?)\\b/,\n    variable: /\\b[A-Z_]\\w*/,\n    // FIXME: Should we list all null-ary predicates (not followed by a parenthesis) like halt, trace, etc.?\n    function: /\\b[a-z]\\w*(?:(?=\\()|\\/\\d+)/,\n    number: /\\b\\d+\\.?\\d*/,\n    // Custom operators are allowed\n    operator: /[:\\\\=><\\-?*@\\/;+^|!$.]+|\\b(?:is|mod|not|xor)\\b/,\n    punctuation: /[(){}\\[\\],]/\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3Byb2xvZy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qix1QkFBdUI7QUFDdkI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvcHJvbG9nLmpzPzQzNWQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcHJvbG9nXG5wcm9sb2cuZGlzcGxheU5hbWUgPSAncHJvbG9nJ1xucHJvbG9nLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gcHJvbG9nKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5wcm9sb2cgPSB7XG4gICAgLy8gU3ludGF4IGRlcGVuZHMgb24gdGhlIGltcGxlbWVudGF0aW9uXG4gICAgY29tbWVudDogWy8lLisvLCAvXFwvXFwqW1xcc1xcU10qP1xcKlxcLy9dLFxuICAgIC8vIERlcGVuZGluZyBvbiB0aGUgaW1wbGVtZW50YXRpb24sIHN0cmluZ3MgbWF5IGFsbG93IGVzY2FwZWQgbmV3bGluZXMgYW5kIHF1b3RlLWVzY2FwZVxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogLyhbXCInXSkoPzpcXDFcXDF8XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIGJ1aWx0aW46IC9cXGIoPzpmeHxmeXx4Zlt4eV0/fHlmeD8pXFxiLyxcbiAgICB2YXJpYWJsZTogL1xcYltBLVpfXVxcdyovLFxuICAgIC8vIEZJWE1FOiBTaG91bGQgd2UgbGlzdCBhbGwgbnVsbC1hcnkgcHJlZGljYXRlcyAobm90IGZvbGxvd2VkIGJ5IGEgcGFyZW50aGVzaXMpIGxpa2UgaGFsdCwgdHJhY2UsIGV0Yy4/XG4gICAgZnVuY3Rpb246IC9cXGJbYS16XVxcdyooPzooPz1cXCgpfFxcL1xcZCspLyxcbiAgICBudW1iZXI6IC9cXGJcXGQrXFwuP1xcZCovLFxuICAgIC8vIEN1c3RvbSBvcGVyYXRvcnMgYXJlIGFsbG93ZWRcbiAgICBvcGVyYXRvcjogL1s6XFxcXD0+PFxcLT8qQFxcLzsrXnwhJC5dK3xcXGIoPzppc3xtb2R8bm90fHhvcilcXGIvLFxuICAgIHB1bmN0dWF0aW9uOiAvWygpe31cXFtcXF0sXS9cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./node_modules/refractor/lang/prolog.js\n"));

/***/ })

}]);