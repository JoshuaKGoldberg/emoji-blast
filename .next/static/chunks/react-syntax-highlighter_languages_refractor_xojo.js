"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_xojo"],{

/***/ "(app-client)/./node_modules/refractor/lang/xojo.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/xojo.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = xojo\nxojo.displayName = 'xojo'\nxojo.aliases = []\nfunction xojo(Prism) {\n  Prism.languages.xojo = {\n    comment: {\n      pattern: /(?:'|\\/\\/|Rem\\b).+/i,\n      inside: {\n        keyword: /^Rem/i\n      }\n    },\n    string: {\n      pattern: /\"(?:\"\"|[^\"])*\"/,\n      greedy: true\n    },\n    number: [/(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:E[+-]?\\d+)?/i, /&[bchou][a-z\\d]+/i],\n    symbol: /#(?:If|Else|ElseIf|Endif|Pragma)\\b/i,\n    keyword: /\\b(?:AddHandler|App|Array|As(?:signs)?|By(?:Ref|Val)|Break|Call|Case|Catch|Const|Continue|CurrentMethodName|Declare|Dim|Do(?:wnTo)?|Each|Else(?:If)?|End|Exit|Extends|False|Finally|For|Global|If|In|Lib|Loop|Me|Next|Nil|Optional|ParamArray|Raise(?:Event)?|ReDim|Rem|RemoveHandler|Return|Select|Self|Soft|Static|Step|Super|Then|To|True|Try|Ubound|Until|Using|Wend|While)\\b/i,\n    operator: /<[=>]?|>=?|[+\\-*\\/\\\\^=]|\\b(?:AddressOf|And|Ctype|IsA?|Mod|New|Not|Or|Xor|WeakAddressOf)\\b/i,\n    punctuation: /[.,;:()]/\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3hvam8uanMuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3hvam8uanM/Nzg3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB4b2pvXG54b2pvLmRpc3BsYXlOYW1lID0gJ3hvam8nXG54b2pvLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24geG9qbyhQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMueG9qbyA9IHtcbiAgICBjb21tZW50OiB7XG4gICAgICBwYXR0ZXJuOiAvKD86J3xcXC9cXC98UmVtXFxiKS4rL2ksXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAga2V5d29yZDogL15SZW0vaVxuICAgICAgfVxuICAgIH0sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvXCIoPzpcIlwifFteXCJdKSpcIi8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIG51bWJlcjogWy8oPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzpFWystXT9cXGQrKT8vaSwgLyZbYmNob3VdW2EtelxcZF0rL2ldLFxuICAgIHN5bWJvbDogLyMoPzpJZnxFbHNlfEVsc2VJZnxFbmRpZnxQcmFnbWEpXFxiL2ksXG4gICAga2V5d29yZDogL1xcYig/OkFkZEhhbmRsZXJ8QXBwfEFycmF5fEFzKD86c2lnbnMpP3xCeSg/OlJlZnxWYWwpfEJyZWFrfENhbGx8Q2FzZXxDYXRjaHxDb25zdHxDb250aW51ZXxDdXJyZW50TWV0aG9kTmFtZXxEZWNsYXJlfERpbXxEbyg/OnduVG8pP3xFYWNofEVsc2UoPzpJZik/fEVuZHxFeGl0fEV4dGVuZHN8RmFsc2V8RmluYWxseXxGb3J8R2xvYmFsfElmfElufExpYnxMb29wfE1lfE5leHR8TmlsfE9wdGlvbmFsfFBhcmFtQXJyYXl8UmFpc2UoPzpFdmVudCk/fFJlRGltfFJlbXxSZW1vdmVIYW5kbGVyfFJldHVybnxTZWxlY3R8U2VsZnxTb2Z0fFN0YXRpY3xTdGVwfFN1cGVyfFRoZW58VG98VHJ1ZXxUcnl8VWJvdW5kfFVudGlsfFVzaW5nfFdlbmR8V2hpbGUpXFxiL2ksXG4gICAgb3BlcmF0b3I6IC88Wz0+XT98Pj0/fFsrXFwtKlxcL1xcXFxePV18XFxiKD86QWRkcmVzc09mfEFuZHxDdHlwZXxJc0E/fE1vZHxOZXd8Tm90fE9yfFhvcnxXZWFrQWRkcmVzc09mKVxcYi9pLFxuICAgIHB1bmN0dWF0aW9uOiAvWy4sOzooKV0vXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./node_modules/refractor/lang/xojo.js\n"));

/***/ })

}]);