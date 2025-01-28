import { CorsOriginError } from "@sanity/client";
function isCorsOriginError(error) {
  return error instanceof CorsOriginError;
}
export {
  isCorsOriginError
};
//# sourceMappingURL=isCorsOriginError.js.map
