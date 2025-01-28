const perspectiveListeners = /* @__PURE__ */ new Set();
let perspective = "checking";
function setPerspective(nextPerspective) {
  if (perspective !== nextPerspective) {
    perspective = nextPerspective;
    for (const onPerspectiveChange of perspectiveListeners)
      onPerspectiveChange();
  }
}
const environmentListeners = /* @__PURE__ */ new Set();
let environment = "checking";
function setEnvironment(nextEnvironment) {
  environment = nextEnvironment;
  for (const onEnvironmentChange of environmentListeners)
    onEnvironmentChange();
}
const comlinkListeners = /* @__PURE__ */ new Set();
let comlink = null;
function setComlink(nextComlink) {
  comlink = nextComlink;
  for (const onComlinkChange of comlinkListeners)
    onComlinkChange();
}
export {
  comlink,
  comlinkListeners,
  environment,
  environmentListeners,
  perspective,
  perspectiveListeners,
  setComlink,
  setEnvironment,
  setPerspective
};
//# sourceMappingURL=context.js.map
