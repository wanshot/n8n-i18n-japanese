import { gS as require_arrayMap, gT as require_baseIteratee, gU as require_basePickBy, gV as require_getAllKeysIn, bJ as getDefaultExportFromCjs } from "./index-CFOGSwPZ.js";
var pickBy_1;
var hasRequiredPickBy;
function requirePickBy() {
  if (hasRequiredPickBy) return pickBy_1;
  hasRequiredPickBy = 1;
  var arrayMap = require_arrayMap(), baseIteratee = require_baseIteratee(), basePickBy = require_basePickBy(), getAllKeysIn = require_getAllKeysIn();
  function pickBy2(object, predicate) {
    if (object == null) {
      return {};
    }
    var props = arrayMap(getAllKeysIn(object), function(prop) {
      return [prop];
    });
    predicate = baseIteratee(predicate);
    return basePickBy(object, props, function(value, path) {
      return predicate(value, path[0]);
    });
  }
  pickBy_1 = pickBy2;
  return pickBy_1;
}
var pickByExports = requirePickBy();
const pickBy = /* @__PURE__ */ getDefaultExportFromCjs(pickByExports);
export {
  pickBy as p
};
