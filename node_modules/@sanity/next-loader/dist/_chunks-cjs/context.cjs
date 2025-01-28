"use strict";
const perspectiveListeners = /* @__PURE__ */ new Set();
exports.perspective = "checking";
function setPerspective(nextPerspective) {
  if (exports.perspective !== nextPerspective) {
    exports.perspective = nextPerspective;
    for (const onPerspectiveChange of perspectiveListeners)
      onPerspectiveChange();
  }
}
const environmentListeners = /* @__PURE__ */ new Set();
exports.environment = "checking";
function setEnvironment(nextEnvironment) {
  exports.environment = nextEnvironment;
  for (const onEnvironmentChange of environmentListeners)
    onEnvironmentChange();
}
const comlinkListeners = /* @__PURE__ */ new Set();
exports.comlink = null;
function setComlink(nextComlink) {
  exports.comlink = nextComlink;
  for (const onComlinkChange of comlinkListeners)
    onComlinkChange();
}
exports.comlinkListeners = comlinkListeners;
exports.environmentListeners = environmentListeners;
exports.perspectiveListeners = perspectiveListeners;
exports.setComlink = setComlink;
exports.setEnvironment = setEnvironment;
exports.setPerspective = setPerspective;
//# sourceMappingURL=context.cjs.map
