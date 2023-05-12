"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_actionscript"],{

/***/ "(app-client)/./node_modules/refractor/lang/actionscript.js":
/*!*****************************************************!*\
  !*** ./node_modules/refractor/lang/actionscript.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = actionscript\nactionscript.displayName = 'actionscript'\nactionscript.aliases = []\nfunction actionscript(Prism) {\n  Prism.languages.actionscript = Prism.languages.extend('javascript', {\n    keyword: /\\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\\b/,\n    operator: /\\+\\+|--|(?:[+\\-*\\/%^]|&&?|\\|\\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/\n  })\n  Prism.languages.actionscript['class-name'].alias = 'function'\n  if (Prism.languages.markup) {\n    Prism.languages.insertBefore('actionscript', 'string', {\n      xml: {\n        pattern: /(^|[^.])<\\/?\\w+(?:\\s+[^\\s>\\/=]+=(\"|')(?:\\\\[\\s\\S]|(?!\\2)[^\\\\])*\\2)*\\s*\\/?>/,\n        lookbehind: true,\n        inside: {\n          rest: Prism.languages.markup\n        }\n      }\n    })\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2FjdGlvbnNjcmlwdC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9hY3Rpb25zY3JpcHQuanM/MTU3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhY3Rpb25zY3JpcHRcbmFjdGlvbnNjcmlwdC5kaXNwbGF5TmFtZSA9ICdhY3Rpb25zY3JpcHQnXG5hY3Rpb25zY3JpcHQuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBhY3Rpb25zY3JpcHQoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmFjdGlvbnNjcmlwdCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2phdmFzY3JpcHQnLCB7XG4gICAga2V5d29yZDogL1xcYig/OmFzfGJyZWFrfGNhc2V8Y2F0Y2h8Y2xhc3N8Y29uc3R8ZGVmYXVsdHxkZWxldGV8ZG98ZWxzZXxleHRlbmRzfGZpbmFsbHl8Zm9yfGZ1bmN0aW9ufGlmfGltcGxlbWVudHN8aW1wb3J0fGlufGluc3RhbmNlb2Z8aW50ZXJmYWNlfGludGVybmFsfGlzfG5hdGl2ZXxuZXd8bnVsbHxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXR1cm58c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ5fHR5cGVvZnx1c2V8dmFyfHZvaWR8d2hpbGV8d2l0aHxkeW5hbWljfGVhY2h8ZmluYWx8Z2V0fGluY2x1ZGV8bmFtZXNwYWNlfG5hdGl2ZXxvdmVycmlkZXxzZXR8c3RhdGljKVxcYi8sXG4gICAgb3BlcmF0b3I6IC9cXCtcXCt8LS18KD86WytcXC0qXFwvJV5dfCYmP3xcXHxcXHw/fDw8P3w+Pj8+P3xbIT1dPT8pPT98W34/QF0vXG4gIH0pXG4gIFByaXNtLmxhbmd1YWdlcy5hY3Rpb25zY3JpcHRbJ2NsYXNzLW5hbWUnXS5hbGlhcyA9ICdmdW5jdGlvbidcbiAgaWYgKFByaXNtLmxhbmd1YWdlcy5tYXJrdXApIHtcbiAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdhY3Rpb25zY3JpcHQnLCAnc3RyaW5nJywge1xuICAgICAgeG1sOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXi5dKTxcXC8/XFx3Kyg/OlxccytbXlxccz5cXC89XSs9KFwifCcpKD86XFxcXFtcXHNcXFNdfCg/IVxcMilbXlxcXFxdKSpcXDIpKlxccypcXC8/Pi8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5tYXJrdXBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./node_modules/refractor/lang/actionscript.js\n"));

/***/ })

}]);