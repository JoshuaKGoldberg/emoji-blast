"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_processing"],{

/***/ "(app-client)/./node_modules/refractor/lang/processing.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/processing.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = processing\nprocessing.displayName = 'processing'\nprocessing.aliases = []\nfunction processing(Prism) {\n  Prism.languages.processing = Prism.languages.extend('clike', {\n    keyword: /\\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\\b/,\n    operator: /<[<=]?|>[>=]?|&&?|\\|\\|?|[%?]|[!=+\\-*\\/]=?/\n  })\n  Prism.languages.insertBefore('processing', 'number', {\n    // Special case: XML is a type\n    constant: /\\b(?!XML\\b)[A-Z][A-Z\\d_]+\\b/,\n    type: {\n      pattern: /\\b(?:boolean|byte|char|color|double|float|int|XML|[A-Z]\\w*)\\b/,\n      alias: 'variable'\n    }\n  }) // Spaces are allowed between function name and parenthesis\n  Prism.languages.processing['function'].pattern = /\\w+(?=\\s*\\()/ // Class-names is not styled by default\n  Prism.languages.processing['class-name'].alias = 'variable'\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3Byb2Nlc3NpbmcuanMuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9wcm9jZXNzaW5nLmpzPzZjNzciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcHJvY2Vzc2luZ1xucHJvY2Vzc2luZy5kaXNwbGF5TmFtZSA9ICdwcm9jZXNzaW5nJ1xucHJvY2Vzc2luZy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHByb2Nlc3NpbmcoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLnByb2Nlc3NpbmcgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgICBrZXl3b3JkOiAvXFxiKD86YnJlYWt8Y2F0Y2h8Y2FzZXxjbGFzc3xjb250aW51ZXxkZWZhdWx0fGVsc2V8ZXh0ZW5kc3xmaW5hbHxmb3J8aWZ8aW1wbGVtZW50c3xpbXBvcnR8bmV3fG51bGx8cHJpdmF0ZXxwdWJsaWN8cmV0dXJufHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0cnl8dm9pZHx3aGlsZSlcXGIvLFxuICAgIG9wZXJhdG9yOiAvPFs8PV0/fD5bPj1dP3wmJj98XFx8XFx8P3xbJT9dfFshPStcXC0qXFwvXT0/L1xuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdwcm9jZXNzaW5nJywgJ251bWJlcicsIHtcbiAgICAvLyBTcGVjaWFsIGNhc2U6IFhNTCBpcyBhIHR5cGVcbiAgICBjb25zdGFudDogL1xcYig/IVhNTFxcYilbQS1aXVtBLVpcXGRfXStcXGIvLFxuICAgIHR5cGU6IHtcbiAgICAgIHBhdHRlcm46IC9cXGIoPzpib29sZWFufGJ5dGV8Y2hhcnxjb2xvcnxkb3VibGV8ZmxvYXR8aW50fFhNTHxbQS1aXVxcdyopXFxiLyxcbiAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgfVxuICB9KSAvLyBTcGFjZXMgYXJlIGFsbG93ZWQgYmV0d2VlbiBmdW5jdGlvbiBuYW1lIGFuZCBwYXJlbnRoZXNpc1xuICBQcmlzbS5sYW5ndWFnZXMucHJvY2Vzc2luZ1snZnVuY3Rpb24nXS5wYXR0ZXJuID0gL1xcdysoPz1cXHMqXFwoKS8gLy8gQ2xhc3MtbmFtZXMgaXMgbm90IHN0eWxlZCBieSBkZWZhdWx0XG4gIFByaXNtLmxhbmd1YWdlcy5wcm9jZXNzaW5nWydjbGFzcy1uYW1lJ10uYWxpYXMgPSAndmFyaWFibGUnXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./node_modules/refractor/lang/processing.js\n"));

/***/ })

}]);