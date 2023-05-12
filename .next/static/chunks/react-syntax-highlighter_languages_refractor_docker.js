"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_docker"],{

/***/ "(app-client)/./node_modules/refractor/lang/docker.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/docker.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = docker\ndocker.displayName = 'docker'\ndocker.aliases = ['dockerfile']\nfunction docker(Prism) {\n  Prism.languages.docker = {\n    keyword: {\n      pattern: /(^\\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\\s)/im,\n      lookbehind: true\n    },\n    string: /(\"|')(?:(?!\\1)[^\\\\\\r\\n]|\\\\(?:\\r\\n|[\\s\\S]))*\\1/,\n    comment: /#.*/,\n    punctuation: /---|\\.\\.\\.|[:[\\]{}\\-,|>?]/\n  }\n  Prism.languages.dockerfile = Prism.languages.docker\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2RvY2tlci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9kb2NrZXIuanM/ZGRhNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBkb2NrZXJcbmRvY2tlci5kaXNwbGF5TmFtZSA9ICdkb2NrZXInXG5kb2NrZXIuYWxpYXNlcyA9IFsnZG9ja2VyZmlsZSddXG5mdW5jdGlvbiBkb2NrZXIoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmRvY2tlciA9IHtcbiAgICBrZXl3b3JkOiB7XG4gICAgICBwYXR0ZXJuOiAvKF5cXHMqKSg/OkFERHxBUkd8Q01EfENPUFl8RU5UUllQT0lOVHxFTlZ8RVhQT1NFfEZST018SEVBTFRIQ0hFQ0t8TEFCRUx8TUFJTlRBSU5FUnxPTkJVSUxEfFJVTnxTSEVMTHxTVE9QU0lHTkFMfFVTRVJ8Vk9MVU1FfFdPUktESVIpKD89XFxzKS9pbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIHN0cmluZzogLyhcInwnKSg/Oig/IVxcMSlbXlxcXFxcXHJcXG5dfFxcXFwoPzpcXHJcXG58W1xcc1xcU10pKSpcXDEvLFxuICAgIGNvbW1lbnQ6IC8jLiovLFxuICAgIHB1bmN0dWF0aW9uOiAvLS0tfFxcLlxcLlxcLnxbOltcXF17fVxcLSx8Pj9dL1xuICB9XG4gIFByaXNtLmxhbmd1YWdlcy5kb2NrZXJmaWxlID0gUHJpc20ubGFuZ3VhZ2VzLmRvY2tlclxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./node_modules/refractor/lang/docker.js\n"));

/***/ })

}]);