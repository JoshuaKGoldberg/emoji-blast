"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_typescript"],{

/***/ "(app-client)/./node_modules/refractor/lang/typescript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/typescript.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = typescript\ntypescript.displayName = 'typescript'\ntypescript.aliases = ['ts']\nfunction typescript(Prism) {\n  Prism.languages.typescript = Prism.languages.extend('javascript', {\n    // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words\n    keyword: /\\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\\b/,\n    builtin: /\\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\\b/\n  })\n  Prism.languages.ts = Prism.languages.typescript\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3R5cGVzY3JpcHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy90eXBlc2NyaXB0LmpzPzg4NTkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZXNjcmlwdFxudHlwZXNjcmlwdC5kaXNwbGF5TmFtZSA9ICd0eXBlc2NyaXB0J1xudHlwZXNjcmlwdC5hbGlhc2VzID0gWyd0cyddXG5mdW5jdGlvbiB0eXBlc2NyaXB0KFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy50eXBlc2NyaXB0ID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnamF2YXNjcmlwdCcsIHtcbiAgICAvLyBGcm9tIEphdmFTY3JpcHQgUHJpc20ga2V5d29yZCBsaXN0IGFuZCBUeXBlU2NyaXB0IGxhbmd1YWdlIHNwZWM6IGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9ibG9iL21hc3Rlci9kb2Mvc3BlYy5tZCMyMjEtcmVzZXJ2ZWQtd29yZHNcbiAgICBrZXl3b3JkOiAvXFxiKD86YWJzdHJhY3R8YXN8YXN5bmN8YXdhaXR8YnJlYWt8Y2FzZXxjYXRjaHxjbGFzc3xjb25zdHxjb25zdHJ1Y3Rvcnxjb250aW51ZXxkZWJ1Z2dlcnxkZWNsYXJlfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmaW5hbGx5fGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxpc3xrZXlvZnxsZXR8bW9kdWxlfG5hbWVzcGFjZXxuZXd8bnVsbHxvZnxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZWFkb25seXxyZXR1cm58cmVxdWlyZXxzZXR8c3RhdGljfHN1cGVyfHN3aXRjaHx0aGlzfHRocm93fHRyeXx0eXBlfHR5cGVvZnx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKVxcYi8sXG4gICAgYnVpbHRpbjogL1xcYig/OnN0cmluZ3xGdW5jdGlvbnxhbnl8bnVtYmVyfGJvb2xlYW58QXJyYXl8c3ltYm9sfGNvbnNvbGV8UHJvbWlzZXx1bmtub3dufG5ldmVyKVxcYi9cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLnRzID0gUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHRcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./node_modules/refractor/lang/typescript.js\n"));

/***/ })

}]);