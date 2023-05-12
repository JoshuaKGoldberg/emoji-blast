"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_go"],{

/***/ "(app-client)/./node_modules/refractor/lang/go.js":
/*!*******************************************!*\
  !*** ./node_modules/refractor/lang/go.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = go\ngo.displayName = 'go'\ngo.aliases = []\nfunction go(Prism) {\n  Prism.languages.go = Prism.languages.extend('clike', {\n    keyword: /\\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\\b/,\n    builtin: /\\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\\b/,\n    boolean: /\\b(?:_|iota|nil|true|false)\\b/,\n    operator: /[*\\/%^!=]=?|\\+[=+]?|-[=-]?|\\|[=|]?|&(?:=|&|\\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\\.\\.\\./,\n    number: /(?:\\b0x[a-f\\d]+|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e[-+]?\\d+)?)i?/i,\n    string: {\n      pattern: /([\"'`])(\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1/,\n      greedy: true\n    }\n  })\n  delete Prism.languages.go['class-name']\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2dvLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZ28uanM/NjlmMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBnb1xuZ28uZGlzcGxheU5hbWUgPSAnZ28nXG5nby5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGdvKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5nbyA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuICAgIGtleXdvcmQ6IC9cXGIoPzpicmVha3xjYXNlfGNoYW58Y29uc3R8Y29udGludWV8ZGVmYXVsdHxkZWZlcnxlbHNlfGZhbGx0aHJvdWdofGZvcnxmdW5jfGdvKD86dG8pP3xpZnxpbXBvcnR8aW50ZXJmYWNlfG1hcHxwYWNrYWdlfHJhbmdlfHJldHVybnxzZWxlY3R8c3RydWN0fHN3aXRjaHx0eXBlfHZhcilcXGIvLFxuICAgIGJ1aWx0aW46IC9cXGIoPzpib29sfGJ5dGV8Y29tcGxleCg/OjY0fDEyOCl8ZXJyb3J8ZmxvYXQoPzozMnw2NCl8cnVuZXxzdHJpbmd8dT9pbnQoPzo4fDE2fDMyfDY0KT98dWludHB0cnxhcHBlbmR8Y2FwfGNsb3NlfGNvbXBsZXh8Y29weXxkZWxldGV8aW1hZ3xsZW58bWFrZXxuZXd8cGFuaWN8cHJpbnQoPzpsbik/fHJlYWx8cmVjb3ZlcilcXGIvLFxuICAgIGJvb2xlYW46IC9cXGIoPzpffGlvdGF8bmlsfHRydWV8ZmFsc2UpXFxiLyxcbiAgICBvcGVyYXRvcjogL1sqXFwvJV4hPV09P3xcXCtbPStdP3wtWz0tXT98XFx8Wz18XT98Jig/Oj18JnxcXF49Pyk/fD4oPzo+PT98PSk/fDwoPzo8PT98PXwtKT98Oj18XFwuXFwuXFwuLyxcbiAgICBudW1iZXI6IC8oPzpcXGIweFthLWZcXGRdK3woPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzplWy0rXT9cXGQrKT8paT8vaSxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC8oW1wiJ2BdKShcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pKlxcMS8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9XG4gIH0pXG4gIGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMuZ29bJ2NsYXNzLW5hbWUnXVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./node_modules/refractor/lang/go.js\n"));

/***/ })

}]);