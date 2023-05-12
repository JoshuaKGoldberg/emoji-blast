"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_lua"],{

/***/ "(app-client)/./node_modules/refractor/lang/lua.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/lua.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = lua\nlua.displayName = 'lua'\nlua.aliases = []\nfunction lua(Prism) {\n  Prism.languages.lua = {\n    comment: /^#!.+|--(?:\\[(=*)\\[[\\s\\S]*?\\]\\1\\]|.*)/m,\n    // \\z may be used to skip the following space\n    string: {\n      pattern: /([\"'])(?:(?!\\1)[^\\\\\\r\\n]|\\\\z(?:\\r\\n|\\s)|\\\\(?:\\r\\n|[\\s\\S]))*\\1|\\[(=*)\\[[\\s\\S]*?\\]\\2\\]/,\n      greedy: true\n    },\n    number: /\\b0x[a-f\\d]+\\.?[a-f\\d]*(?:p[+-]?\\d+)?\\b|\\b\\d+(?:\\.\\B|\\.?\\d*(?:e[+-]?\\d+)?\\b)|\\B\\.\\d+(?:e[+-]?\\d+)?\\b/i,\n    keyword: /\\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\\b/,\n    function: /(?!\\d)\\w+(?=\\s*(?:[({]))/,\n    operator: [\n      /[-+*%^&|#]|\\/\\/?|<[<=]?|>[>=]?|[=~]=?/,\n      {\n        // Match \"..\" but don't break \"...\"\n        pattern: /(^|[^.])\\.\\.(?!\\.)/,\n        lookbehind: true\n      }\n    ],\n    punctuation: /[\\[\\](){},;]|\\.+|:+/\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2x1YS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsRUFBRTtBQUM3QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9sdWEuanM/ZTdlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsdWFcbmx1YS5kaXNwbGF5TmFtZSA9ICdsdWEnXG5sdWEuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBsdWEoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmx1YSA9IHtcbiAgICBjb21tZW50OiAvXiMhLit8LS0oPzpcXFsoPSopXFxbW1xcc1xcU10qP1xcXVxcMVxcXXwuKikvbSxcbiAgICAvLyBcXHogbWF5IGJlIHVzZWQgdG8gc2tpcCB0aGUgZm9sbG93aW5nIHNwYWNlXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvKFtcIiddKSg/Oig/IVxcMSlbXlxcXFxcXHJcXG5dfFxcXFx6KD86XFxyXFxufFxccyl8XFxcXCg/OlxcclxcbnxbXFxzXFxTXSkpKlxcMXxcXFsoPSopXFxbW1xcc1xcU10qP1xcXVxcMlxcXS8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIG51bWJlcjogL1xcYjB4W2EtZlxcZF0rXFwuP1thLWZcXGRdKig/OnBbKy1dP1xcZCspP1xcYnxcXGJcXGQrKD86XFwuXFxCfFxcLj9cXGQqKD86ZVsrLV0/XFxkKyk/XFxiKXxcXEJcXC5cXGQrKD86ZVsrLV0/XFxkKyk/XFxiL2ksXG4gICAga2V5d29yZDogL1xcYig/OmFuZHxicmVha3xkb3xlbHNlfGVsc2VpZnxlbmR8ZmFsc2V8Zm9yfGZ1bmN0aW9ufGdvdG98aWZ8aW58bG9jYWx8bmlsfG5vdHxvcnxyZXBlYXR8cmV0dXJufHRoZW58dHJ1ZXx1bnRpbHx3aGlsZSlcXGIvLFxuICAgIGZ1bmN0aW9uOiAvKD8hXFxkKVxcdysoPz1cXHMqKD86Wyh7XSkpLyxcbiAgICBvcGVyYXRvcjogW1xuICAgICAgL1stKyolXiZ8I118XFwvXFwvP3w8Wzw9XT98Pls+PV0/fFs9fl09Py8sXG4gICAgICB7XG4gICAgICAgIC8vIE1hdGNoIFwiLi5cIiBidXQgZG9uJ3QgYnJlYWsgXCIuLi5cIlxuICAgICAgICBwYXR0ZXJuOiAvKF58W14uXSlcXC5cXC4oPyFcXC4pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgcHVuY3R1YXRpb246IC9bXFxbXFxdKCl7fSw7XXxcXC4rfDorL1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./node_modules/refractor/lang/lua.js\n"));

/***/ })

}]);