"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_csp"],{

/***/ "(app-client)/./node_modules/refractor/lang/csp.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/csp.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = csp\ncsp.displayName = 'csp'\ncsp.aliases = []\nfunction csp(Prism) {\n  /**\n   * Original by Scott Helme.\n   *\n   * Reference: https://scotthelme.co.uk/csp-cheat-sheet/\n   *\n   * Supports the following:\n   *  - CSP Level 1\n   *  - CSP Level 2\n   *  - CSP Level 3\n   */\n  Prism.languages.csp = {\n    directive: {\n      pattern: /\\b(?:(?:base-uri|form-action|frame-ancestors|plugin-types|referrer|reflected-xss|report-to|report-uri|require-sri-for|sandbox) |(?:block-all-mixed-content|disown-opener|upgrade-insecure-requests)(?: |;)|(?:child|connect|default|font|frame|img|manifest|media|object|script|style|worker)-src )/i,\n      alias: 'keyword'\n    },\n    safe: {\n      pattern: /'(?:self|none|strict-dynamic|(?:nonce-|sha(?:256|384|512)-)[a-zA-Z\\d+=/]+)'/,\n      alias: 'selector'\n    },\n    unsafe: {\n      pattern: /(?:'unsafe-inline'|'unsafe-eval'|'unsafe-hashed-attributes'|\\*)/,\n      alias: 'function'\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2NzcC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlOQUF5TjtBQUN6TjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9jc3AuanM/N2U1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjc3BcbmNzcC5kaXNwbGF5TmFtZSA9ICdjc3AnXG5jc3AuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBjc3AoUHJpc20pIHtcbiAgLyoqXG4gICAqIE9yaWdpbmFsIGJ5IFNjb3R0IEhlbG1lLlxuICAgKlxuICAgKiBSZWZlcmVuY2U6IGh0dHBzOi8vc2NvdHRoZWxtZS5jby51ay9jc3AtY2hlYXQtc2hlZXQvXG4gICAqXG4gICAqIFN1cHBvcnRzIHRoZSBmb2xsb3dpbmc6XG4gICAqICAtIENTUCBMZXZlbCAxXG4gICAqICAtIENTUCBMZXZlbCAyXG4gICAqICAtIENTUCBMZXZlbCAzXG4gICAqL1xuICBQcmlzbS5sYW5ndWFnZXMuY3NwID0ge1xuICAgIGRpcmVjdGl2ZToge1xuICAgICAgcGF0dGVybjogL1xcYig/Oig/OmJhc2UtdXJpfGZvcm0tYWN0aW9ufGZyYW1lLWFuY2VzdG9yc3xwbHVnaW4tdHlwZXN8cmVmZXJyZXJ8cmVmbGVjdGVkLXhzc3xyZXBvcnQtdG98cmVwb3J0LXVyaXxyZXF1aXJlLXNyaS1mb3J8c2FuZGJveCkgfCg/OmJsb2NrLWFsbC1taXhlZC1jb250ZW50fGRpc293bi1vcGVuZXJ8dXBncmFkZS1pbnNlY3VyZS1yZXF1ZXN0cykoPzogfDspfCg/OmNoaWxkfGNvbm5lY3R8ZGVmYXVsdHxmb250fGZyYW1lfGltZ3xtYW5pZmVzdHxtZWRpYXxvYmplY3R8c2NyaXB0fHN0eWxlfHdvcmtlciktc3JjICkvaSxcbiAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICB9LFxuICAgIHNhZmU6IHtcbiAgICAgIHBhdHRlcm46IC8nKD86c2VsZnxub25lfHN0cmljdC1keW5hbWljfCg/Om5vbmNlLXxzaGEoPzoyNTZ8Mzg0fDUxMiktKVthLXpBLVpcXGQrPS9dKyknLyxcbiAgICAgIGFsaWFzOiAnc2VsZWN0b3InXG4gICAgfSxcbiAgICB1bnNhZmU6IHtcbiAgICAgIHBhdHRlcm46IC8oPzondW5zYWZlLWlubGluZSd8J3Vuc2FmZS1ldmFsJ3wndW5zYWZlLWhhc2hlZC1hdHRyaWJ1dGVzJ3xcXCopLyxcbiAgICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./node_modules/refractor/lang/csp.js\n"));

/***/ })

}]);