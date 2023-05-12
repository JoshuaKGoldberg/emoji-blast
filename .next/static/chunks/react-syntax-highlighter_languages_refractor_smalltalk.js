"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_smalltalk"],{

/***/ "(app-client)/./node_modules/refractor/lang/smalltalk.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/smalltalk.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = smalltalk\nsmalltalk.displayName = 'smalltalk'\nsmalltalk.aliases = []\nfunction smalltalk(Prism) {\n  Prism.languages.smalltalk = {\n    comment: /\"(?:\"\"|[^\"])*\"/,\n    string: /'(?:''|[^'])*'/,\n    symbol: /#[\\da-z]+|#(?:-|([+\\/\\\\*~<>=@%|&?!])\\1?)|#(?=\\()/i,\n    'block-arguments': {\n      pattern: /(\\[\\s*):[^\\[|]*\\|/,\n      lookbehind: true,\n      inside: {\n        variable: /:[\\da-z]+/i,\n        punctuation: /\\|/\n      }\n    },\n    'temporary-variables': {\n      pattern: /\\|[^|]+\\|/,\n      inside: {\n        variable: /[\\da-z]+/i,\n        punctuation: /\\|/\n      }\n    },\n    keyword: /\\b(?:nil|true|false|self|super|new)\\b/,\n    character: {\n      pattern: /\\$./,\n      alias: 'string'\n    },\n    number: [\n      /\\d+r-?[\\dA-Z]+(?:\\.[\\dA-Z]+)?(?:e-?\\d+)?/,\n      /\\b\\d+(?:\\.\\d+)?(?:e-?\\d+)?/\n    ],\n    operator: /[<=]=?|:=|~[~=]|\\/\\/?|\\\\\\\\|>[>=]?|[!^+\\-*&|,@]/,\n    punctuation: /[.;:?\\[\\](){}]/\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3NtYWxsdGFsay5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsVUFBVTtBQUMvQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9zbWFsbHRhbGsuanM/YmYwMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBzbWFsbHRhbGtcbnNtYWxsdGFsay5kaXNwbGF5TmFtZSA9ICdzbWFsbHRhbGsnXG5zbWFsbHRhbGsuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBzbWFsbHRhbGsoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLnNtYWxsdGFsayA9IHtcbiAgICBjb21tZW50OiAvXCIoPzpcIlwifFteXCJdKSpcIi8sXG4gICAgc3RyaW5nOiAvJyg/OicnfFteJ10pKicvLFxuICAgIHN5bWJvbDogLyNbXFxkYS16XSt8Iyg/Oi18KFsrXFwvXFxcXCp+PD49QCV8Jj8hXSlcXDE/KXwjKD89XFwoKS9pLFxuICAgICdibG9jay1hcmd1bWVudHMnOiB7XG4gICAgICBwYXR0ZXJuOiAvKFxcW1xccyopOlteXFxbfF0qXFx8LyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgdmFyaWFibGU6IC86W1xcZGEtel0rL2ksXG4gICAgICAgIHB1bmN0dWF0aW9uOiAvXFx8L1xuICAgICAgfVxuICAgIH0sXG4gICAgJ3RlbXBvcmFyeS12YXJpYWJsZXMnOiB7XG4gICAgICBwYXR0ZXJuOiAvXFx8W158XStcXHwvLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHZhcmlhYmxlOiAvW1xcZGEtel0rL2ksXG4gICAgICAgIHB1bmN0dWF0aW9uOiAvXFx8L1xuICAgICAgfVxuICAgIH0sXG4gICAga2V5d29yZDogL1xcYig/Om5pbHx0cnVlfGZhbHNlfHNlbGZ8c3VwZXJ8bmV3KVxcYi8sXG4gICAgY2hhcmFjdGVyOiB7XG4gICAgICBwYXR0ZXJuOiAvXFwkLi8sXG4gICAgICBhbGlhczogJ3N0cmluZydcbiAgICB9LFxuICAgIG51bWJlcjogW1xuICAgICAgL1xcZCtyLT9bXFxkQS1aXSsoPzpcXC5bXFxkQS1aXSspPyg/OmUtP1xcZCspPy8sXG4gICAgICAvXFxiXFxkKyg/OlxcLlxcZCspPyg/OmUtP1xcZCspPy9cbiAgICBdLFxuICAgIG9wZXJhdG9yOiAvWzw9XT0/fDo9fH5bfj1dfFxcL1xcLz98XFxcXFxcXFx8Pls+PV0/fFshXitcXC0qJnwsQF0vLFxuICAgIHB1bmN0dWF0aW9uOiAvWy47Oj9cXFtcXF0oKXt9XS9cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./node_modules/refractor/lang/smalltalk.js\n"));

/***/ })

}]);