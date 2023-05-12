"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_n4js"],{

/***/ "(app-client)/./node_modules/refractor/lang/n4js.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/n4js.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = n4js\nn4js.displayName = 'n4js'\nn4js.aliases = []\nfunction n4js(Prism) {\n  Prism.languages.n4js = Prism.languages.extend('javascript', {\n    // Keywords from N4JS language spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html\n    keyword: /\\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\\b/\n  })\n  Prism.languages.insertBefore('n4js', 'constant', {\n    // Annotations in N4JS spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html#_annotations\n    annotation: {\n      pattern: /@+\\w+/,\n      alias: 'operator'\n    }\n  })\n  Prism.languages.n4jsd = Prism.languages.n4js\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL240anMuanMuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL240anMuanM/NDJhNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBuNGpzXG5uNGpzLmRpc3BsYXlOYW1lID0gJ240anMnXG5uNGpzLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gbjRqcyhQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMubjRqcyA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2phdmFzY3JpcHQnLCB7XG4gICAgLy8gS2V5d29yZHMgZnJvbSBONEpTIGxhbmd1YWdlIHNwZWM6IGh0dHBzOi8vbnVtYmVyZm91ci5naXRodWIuaW8vbjRqcy9zcGVjL040SlNTcGVjLmh0bWxcbiAgICBrZXl3b3JkOiAvXFxiKD86YW55fEFycmF5fGJvb2xlYW58YnJlYWt8Y2FzZXxjYXRjaHxjbGFzc3xjb25zdHxjb25zdHJ1Y3Rvcnxjb250aW51ZXxkZWJ1Z2dlcnxkZWNsYXJlfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmYWxzZXxmaW5hbGx5fGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bW9kdWxlfG5ld3xudWxsfG51bWJlcnxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXR1cm58c2V0fHN0YXRpY3xzdHJpbmd8c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ1ZXx0cnl8dHlwZW9mfHZhcnx2b2lkfHdoaWxlfHdpdGh8eWllbGQpXFxiL1xuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCduNGpzJywgJ2NvbnN0YW50Jywge1xuICAgIC8vIEFubm90YXRpb25zIGluIE40SlMgc3BlYzogaHR0cHM6Ly9udW1iZXJmb3VyLmdpdGh1Yi5pby9uNGpzL3NwZWMvTjRKU1NwZWMuaHRtbCNfYW5ub3RhdGlvbnNcbiAgICBhbm5vdGF0aW9uOiB7XG4gICAgICBwYXR0ZXJuOiAvQCtcXHcrLyxcbiAgICAgIGFsaWFzOiAnb3BlcmF0b3InXG4gICAgfVxuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMubjRqc2QgPSBQcmlzbS5sYW5ndWFnZXMubjRqc1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./node_modules/refractor/lang/n4js.js\n"));

/***/ })

}]);