"use strict";
var client = require("@sanity/client");
function isCorsOriginError(error) {
  return error instanceof client.CorsOriginError;
}
exports.isCorsOriginError = isCorsOriginError;
//# sourceMappingURL=isCorsOriginError.cjs.map
