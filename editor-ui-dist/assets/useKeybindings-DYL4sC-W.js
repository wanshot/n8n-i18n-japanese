const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RunDataTable-BeLUxsRg.js","assets/index-CsFes8Lj.js","assets/index-BWpYwmXd.css","assets/useExecutionHelpers-DF1gV-9K.js","assets/RunDataTable-n918b-Qv.css","assets/RunDataJson-CF_FYD-Z.js","assets/FileSaver.min-t4uwMhrw.js","assets/RunDataJson-BH9HLoGC.css","assets/RunDataParsedAiContent-Ca3Wad0m.js","assets/VueMarkdown-BAKYkFJV.js","assets/RunDataParsedAiContent-wfIiKsq7.css","assets/RunDataSearch-Cg0hn9x1.js","assets/RunDataSearch-2eEalFoi.css"])))=>i.map(i=>d[i]);
import { d as defineComponent, e as createBlock, g as openBlock, dK as Transition, w as withCtx, aT as withDirectives, aU as vShow, j as createBaseVNode, n as normalizeClass, _ as _export_sfc, f4 as hasKey, f5 as requireVue, bK as getDefaultExportFromCjs, f6 as sanitizeHtml, f7 as sanitizeHtmlExports, h as createElementBlock, r as ref, a5 as useWorkflowsStore, x as computed, o as onMounted, eQ as jsonParse, f8 as base64DecodeUTF8, k as createTextVNode, t as toDisplayString, l as unref, c as useI18n, bC as useNodeHelpers, f as createCommentVNode, i as createVNode, q as N8nButton, bP as withModifiers, b as useRouter, c2 as useClipboard, a as useToast, f9 as useAIAssistantHelpers, bH as useNodeTypesStore, aN as useNDVStore, ad as useRootStore, fa as useAssistantStore, T as useUIStore, fb as MAX_DISPLAY_DATA_SIZE, dd as isCommunityPackageName, c4 as resolveDirective, fc as InlineAskAssistantButton, $ as N8nTooltip, a0 as _sfc_main$b, N as N8nIcon, F as Fragment, y as renderList, V as VIEWS, fd as NEW_ASSISTANT_SESSION_MODAL, ea as sanitizeHtml$1, p as N8nText, a2 as N8nLink, ab as watch, H as N8nRadioButtons, bg as createSlots, O as resolveComponent, cW as N8nSelect, cX as _sfc_main$c, af as useSourceControlStore, fe as useSchemaPreviewStore, c_ as usePostHog, a6 as useRoute, bT as toRef, bA as usePinnedData, ff as useNodeType, fg as storeToRefs, fh as TRIMMED_TASK_DATA_CONNECTIONS_KEY, bp as NodeConnectionTypes, fi as executionDataToJson, fj as NODE_TYPES_EXCLUDED_FROM_OUTPUT_NAME_APPEND, fk as CORE_NODES_CATEGORY, d5 as NDV_UI_OVERHAUL_EXPERIMENT, fl as computedAsync, fm as parseAiContent, cm as ndvEventBus, az as useTelemetry, I as onBeforeUnmount, b5 as useStorage, fn as LOCAL_STORAGE_PIN_DATA_DISCOVERY_NDV_FLAG, fo as dataPinningEventBus, fp as LOCAL_STORAGE_PIN_DATA_DISCOVERY_CANVAS_FLAG, fq as searchInObject, fr as getConnectionTypes, fs as RUN_DATA_DEFAULT_PAGE_SIZE, ft as isObject, fu as MAX_DISPLAY_DATA_SIZE_SCHEMA_VIEW, fv as HTML_NODE_TYPE, J as renderSlot, dw as N8nCallout, fw as DATA_PINNING_DOCS_URL, e4 as Suspense, eW as defineAsyncComponent, bW as normalizeProps, D as mergeProps, dh as N8nTabs, bX as guardReactiveProps, fx as _sfc_main$d, ez as __unplugin_components_9, er as InfoTip, fy as DATA_EDITING_DOCS_URL, a1 as I18nT, aJ as __vitePreload, d3 as getNodeOutputs, fz as getGenericHints, fA as clearJsonKey, fB as TEST_PIN_DATA, be as useExternalHooks, cy as isPresent, fC as isEmpty, d$ as isEqual, Q as createEventBus, a3 as defineStore, v as useSettingsStore, cd as shallowRef, co as useVueFlow, dM as calculateNodeSize, bU as inject, c3 as PiPWindowSymbol, cl as useActiveElement, e0 as useDeviceSupport, dc as toValue, fD as useEventListener } from "./index-CsFes8Lj.js";
import { F as FileSaver_minExports } from "./FileSaver.min-t4uwMhrw.js";
import { u as useExecutionHelpers } from "./useExecutionHelpers-DF1gV-9K.js";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "BlockUi",
  props: {
    show: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "fade",
        mode: "out-in"
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            class: normalizeClass(["n8n-block-ui", _ctx.$style.uiBlocker]),
            role: "dialog",
            "aria-hidden": true
          }, null, 2), [
            [vShow, _ctx.show]
          ])
        ]),
        _: 1
      });
    };
  }
});
const uiBlocker$1 = "_uiBlocker_j0zl4_123";
const style0$5 = {
  uiBlocker: uiBlocker$1
};
const cssModules$5 = {
  "$style": style0$5
};
const N8nBlockUi = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__cssModules", cssModules$5], ["__scopeId", "data-v-76a59b58"]]);
function responseHasSubworkflowData(response) {
  return ["executionId", "workflowId"].every((x) => hasKey(response, x) && typeof response[x] === "string");
}
function parseErrorResponseWorkflowMetadata(response) {
  if (!responseHasSubworkflowData(response))
    return void 0;
  return {
    subExecution: {
      executionId: response.executionId,
      workflowId: response.workflowId
    },
    subExecutionsCount: 1
  };
}
function parseErrorMetadata(error) {
  if (hasKey(error, "errorResponse")) {
    return parseErrorResponseWorkflowMetadata(error.errorResponse);
  }
  return parseErrorResponseWorkflowMetadata(error);
}
const ViewableMimeTypes = [
  "application/json",
  "audio/mpeg",
  "audio/ogg",
  "audio/wav",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/tiff",
  "image/webp",
  "text/css",
  "text/csv",
  "text/markdown",
  "text/plain",
  "video/mp4",
  "video/ogg",
  "video/webm"
];
var vueJsonPretty$1 = { exports: {} };
var vueJsonPretty = vueJsonPretty$1.exports;
var hasRequiredVueJsonPretty;
function requireVueJsonPretty() {
  if (hasRequiredVueJsonPretty) return vueJsonPretty$1.exports;
  hasRequiredVueJsonPretty = 1;
  (function(module, exports) {
    !function(e, t) {
      module.exports = t(requireVue());
    }(vueJsonPretty, function(e) {
      return function() {
        var t = { 789: function(t2) {
          t2.exports = e;
        } }, n = {};
        function o(e2) {
          var r2 = n[e2];
          if (void 0 !== r2) return r2.exports;
          var l = n[e2] = { exports: {} };
          return t[e2](l, l.exports, o), l.exports;
        }
        o.d = function(e2, t2) {
          for (var n2 in t2) o.o(t2, n2) && !o.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
        }, o.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, o.r = function(e2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        };
        var r = {};
        return function() {
          function e2(e3, t3) {
            (null == t3 || t3 > e3.length) && (t3 = e3.length);
            for (var n3 = 0, o2 = new Array(t3); n3 < t3; n3++) o2[n3] = e3[n3];
            return o2;
          }
          function t2(t3, n3) {
            if (t3) {
              if ("string" == typeof t3) return e2(t3, n3);
              var o2 = Object.prototype.toString.call(t3).slice(8, -1);
              return "Object" === o2 && t3.constructor && (o2 = t3.constructor.name), "Map" === o2 || "Set" === o2 ? Array.from(t3) : "Arguments" === o2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o2) ? e2(t3, n3) : void 0;
            }
          }
          function n2(n3) {
            return function(t3) {
              if (Array.isArray(t3)) return e2(t3);
            }(n3) || function(e3) {
              if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
            }(n3) || t2(n3) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function l(e3, t3, n3) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e3[t3] = n3, e3;
          }
          o.r(r), o.d(r, { default: function() {
            return k;
          } });
          var a = o(789), c = (0, a.defineComponent)({ props: { data: { required: true, type: String }, onClick: Function }, render: function() {
            var e3 = this.data, t3 = this.onClick;
            return (0, a.createVNode)("span", { class: "vjs-tree-brackets", onClick: t3 }, [e3]);
          } }), i = (0, a.defineComponent)({ emits: ["change", "update:modelValue"], props: { checked: { type: Boolean, default: false }, isMultiple: Boolean, onChange: Function }, setup: function(e3, t3) {
            var n3 = t3.emit;
            return { uiType: (0, a.computed)(function() {
              return e3.isMultiple ? "checkbox" : "radio";
            }), model: (0, a.computed)({ get: function() {
              return e3.checked;
            }, set: function(e4) {
              return n3("update:modelValue", e4);
            } }) };
          }, render: function() {
            var e3 = this.uiType, t3 = this.model, n3 = this.$emit;
            return (0, a.createVNode)("label", { class: ["vjs-check-controller", t3 ? "is-checked" : ""], onClick: function(e4) {
              return e4.stopPropagation();
            } }, [(0, a.createVNode)("span", { class: "vjs-check-controller-inner is-".concat(e3) }, null), (0, a.createVNode)("input", { checked: t3, class: "vjs-check-controller-original is-".concat(e3), type: e3, onChange: function() {
              return n3("change", t3);
            } }, null)]);
          } }), u = (0, a.defineComponent)({ props: { nodeType: { required: true, type: String }, onClick: Function }, render: function() {
            var e3 = this.nodeType, t3 = this.onClick, n3 = "objectStart" === e3 || "arrayStart" === e3;
            return n3 || "objectCollapsed" === e3 || "arrayCollapsed" === e3 ? (0, a.createVNode)("span", { class: "vjs-carets vjs-carets-".concat(n3 ? "open" : "close"), onClick: t3 }, [(0, a.createVNode)("svg", { viewBox: "0 0 1024 1024", focusable: "false", "data-icon": "caret-down", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" }, [(0, a.createVNode)("path", { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" }, null)])]) : null;
          } });
          function d(e3) {
            return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
              return typeof e4;
            } : function(e4) {
              return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
            }, d(e3);
          }
          function s(e3) {
            return Object.prototype.toString.call(e3).slice(8, -1).toLowerCase();
          }
          function p(e3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "root", n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o2 = arguments.length > 3 ? arguments[3] : void 0, r2 = o2 || {}, l2 = r2.key, a2 = r2.index, c2 = r2.type, i2 = void 0 === c2 ? "content" : c2, u2 = r2.showComma, d2 = void 0 !== u2 && u2, f2 = r2.length, y2 = void 0 === f2 ? 1 : f2, v2 = s(e3);
            if ("array" === v2) {
              var b2 = h(e3.map(function(e4, o3, r3) {
                return p(e4, "".concat(t3, "[").concat(o3, "]"), n3 + 1, { index: o3, showComma: o3 !== r3.length - 1, length: y2, type: i2 });
              }));
              return [p("[", t3, n3, { showComma: false, key: l2, length: e3.length, type: "arrayStart" })[0]].concat(b2, p("]", t3, n3, { showComma: d2, length: e3.length, type: "arrayEnd" })[0]);
            }
            if ("object" === v2) {
              var g2 = Object.keys(e3), m2 = h(g2.map(function(o3, r3, l3) {
                return p(e3[o3], /^[a-zA-Z_]\w*$/.test(o3) ? "".concat(t3, ".").concat(o3) : "".concat(t3, '["').concat(o3, '"]'), n3 + 1, { key: o3, showComma: r3 !== l3.length - 1, length: y2, type: i2 });
              }));
              return [p("{", t3, n3, { showComma: false, key: l2, index: a2, length: g2.length, type: "objectStart" })[0]].concat(m2, p("}", t3, n3, { showComma: d2, length: g2.length, type: "objectEnd" })[0]);
            }
            return [{ content: e3, level: n3, key: l2, index: a2, path: t3, showComma: d2, length: y2, type: i2 }];
          }
          function h(e3) {
            if ("function" == typeof Array.prototype.flat) return e3.flat();
            for (var t3 = n2(e3), o2 = []; t3.length; ) {
              var r2 = t3.shift();
              Array.isArray(r2) ? t3.unshift.apply(t3, n2(r2)) : o2.push(r2);
            }
            return o2;
          }
          function f(e3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /* @__PURE__ */ new WeakMap();
            if (null == e3) return e3;
            if (e3 instanceof Date) return new Date(e3);
            if (e3 instanceof RegExp) return new RegExp(e3);
            if ("object" !== d(e3)) return e3;
            if (t3.get(e3)) return t3.get(e3);
            if (Array.isArray(e3)) {
              var n3 = e3.map(function(e4) {
                return f(e4, t3);
              });
              return t3.set(e3, n3), n3;
            }
            var o2 = {};
            for (var r2 in e3) o2[r2] = f(e3[r2], t3);
            return t3.set(e3, o2), o2;
          }
          function y(e3, t3) {
            var n3 = Object.keys(e3);
            if (Object.getOwnPropertySymbols) {
              var o2 = Object.getOwnPropertySymbols(e3);
              t3 && (o2 = o2.filter(function(t4) {
                return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
              })), n3.push.apply(n3, o2);
            }
            return n3;
          }
          function v(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var n3 = null != arguments[t3] ? arguments[t3] : {};
              t3 % 2 ? y(Object(n3), true).forEach(function(t4) {
                l(e3, t4, n3[t4]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : y(Object(n3)).forEach(function(t4) {
                Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
              });
            }
            return e3;
          }
          var b = { showLength: { type: Boolean, default: false }, showDoubleQuotes: { type: Boolean, default: true }, renderNodeKey: Function, renderNodeValue: Function, selectableType: String, showSelectController: { type: Boolean, default: false }, showLine: { type: Boolean, default: true }, showLineNumber: { type: Boolean, default: false }, selectOnClickNode: { type: Boolean, default: true }, nodeSelectable: { type: Function, default: function() {
            return true;
          } }, highlightSelectedNode: { type: Boolean, default: true }, showIcon: { type: Boolean, default: false }, showKeyValueSpace: { type: Boolean, default: true }, editable: { type: Boolean, default: false }, editableTrigger: { type: String, default: "click" }, onNodeClick: { type: Function }, onBracketsClick: { type: Function }, onIconClick: { type: Function }, onValueChange: { type: Function } }, g = (0, a.defineComponent)({ name: "TreeNode", props: v(v({}, b), {}, { node: { type: Object, required: true }, collapsed: Boolean, checked: Boolean, style: Object, onSelectedChange: { type: Function } }), emits: ["nodeClick", "bracketsClick", "iconClick", "selectedChange", "valueChange"], setup: function(e3, t3) {
            var n3 = t3.emit, o2 = (0, a.computed)(function() {
              return s(e3.node.content);
            }), r2 = (0, a.computed)(function() {
              return "vjs-value vjs-value-".concat(o2.value);
            }), l2 = (0, a.computed)(function() {
              return e3.showDoubleQuotes ? '"'.concat(e3.node.key, '"') : e3.node.key;
            }), d2 = (0, a.computed)(function() {
              return "multiple" === e3.selectableType;
            }), p2 = (0, a.computed)(function() {
              return "single" === e3.selectableType;
            }), h2 = (0, a.computed)(function() {
              return e3.nodeSelectable(e3.node) && (d2.value || p2.value);
            }), f2 = (0, a.reactive)({ editing: false }), y2 = function(t4) {
              var o3, r3, l3 = "null" === (r3 = null === (o3 = t4.target) || void 0 === o3 ? void 0 : o3.value) ? null : "undefined" === r3 ? void 0 : "true" === r3 || "false" !== r3 && (r3[0] + r3[r3.length - 1] === '""' || r3[0] + r3[r3.length - 1] === "''" ? r3.slice(1, -1) : "number" == typeof Number(r3) && !isNaN(Number(r3)) || "NaN" === r3 ? Number(r3) : r3);
              n3("valueChange", l3, e3.node.path);
            }, v2 = (0, a.computed)(function() {
              var t4, n4 = null === (t4 = e3.node) || void 0 === t4 ? void 0 : t4.content;
              return null === n4 ? n4 = "null" : void 0 === n4 && (n4 = "undefined"), "string" === o2.value ? '"'.concat(n4, '"') : n4 + "";
            }), b2 = function() {
              var t4 = e3.renderNodeValue;
              return t4 ? t4({ node: e3.node, defaultValue: v2.value }) : v2.value;
            }, g2 = function() {
              n3("bracketsClick", !e3.collapsed, e3.node.path);
            }, m2 = function() {
              n3("iconClick", !e3.collapsed, e3.node.path);
            }, C2 = function() {
              n3("selectedChange", e3.node);
            }, k2 = function() {
              n3("nodeClick", e3.node), h2.value && e3.selectOnClickNode && n3("selectedChange", e3.node);
            }, w = function(t4) {
              if (e3.editable && !f2.editing) {
                f2.editing = true;
                var n4 = function e4(n5) {
                  var o3;
                  n5.target !== t4.target && (null === (o3 = n5.target) || void 0 === o3 ? void 0 : o3.parentElement) !== t4.target && (f2.editing = false, document.removeEventListener("click", e4));
                };
                document.removeEventListener("click", n4), document.addEventListener("click", n4);
              }
            };
            return function() {
              var t4, n4 = e3.node;
              return (0, a.createVNode)("div", { class: { "vjs-tree-node": true, "has-selector": e3.showSelectController, "has-carets": e3.showIcon, "is-highlight": e3.highlightSelectedNode && e3.checked }, onClick: k2, style: e3.style }, [e3.showLineNumber && (0, a.createVNode)("span", { class: "vjs-node-index" }, [n4.id + 1]), e3.showSelectController && h2.value && "objectEnd" !== n4.type && "arrayEnd" !== n4.type && (0, a.createVNode)(i, { isMultiple: d2.value, checked: e3.checked, onChange: C2 }, null), (0, a.createVNode)("div", { class: "vjs-indent" }, [Array.from(Array(n4.level)).map(function(t5, n5) {
                return (0, a.createVNode)("div", { key: n5, class: { "vjs-indent-unit": true, "has-line": e3.showLine } }, null);
              }), e3.showIcon && (0, a.createVNode)(u, { nodeType: n4.type, onClick: m2 }, null)]), n4.key && (0, a.createVNode)("span", { class: "vjs-key" }, [(t4 = e3.renderNodeKey, t4 ? t4({ node: e3.node, defaultKey: l2.value || "" }) : l2.value), (0, a.createVNode)("span", { class: "vjs-colon" }, [":".concat(e3.showKeyValueSpace ? " " : "")])]), (0, a.createVNode)("span", null, ["content" !== n4.type && n4.content ? (0, a.createVNode)(c, { data: n4.content.toString(), onClick: g2 }, null) : (0, a.createVNode)("span", { class: r2.value, onClick: !e3.editable || e3.editableTrigger && "click" !== e3.editableTrigger ? void 0 : w, onDblclick: e3.editable && "dblclick" === e3.editableTrigger ? w : void 0 }, [e3.editable && f2.editing ? (0, a.createVNode)("input", { value: v2.value, onChange: y2, style: { padding: "3px 8px", border: "1px solid #eee", boxShadow: "none", boxSizing: "border-box", borderRadius: 5, fontFamily: "inherit" } }, null) : b2()]), n4.showComma && (0, a.createVNode)("span", null, [","]), e3.showLength && e3.collapsed && (0, a.createVNode)("span", { class: "vjs-comment" }, [(0, a.createTextVNode)(" // "), n4.length, (0, a.createTextVNode)(" items ")])])]);
            };
          } });
          function m(e3, t3) {
            var n3 = Object.keys(e3);
            if (Object.getOwnPropertySymbols) {
              var o2 = Object.getOwnPropertySymbols(e3);
              t3 && (o2 = o2.filter(function(t4) {
                return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
              })), n3.push.apply(n3, o2);
            }
            return n3;
          }
          function C(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var n3 = null != arguments[t3] ? arguments[t3] : {};
              t3 % 2 ? m(Object(n3), true).forEach(function(t4) {
                l(e3, t4, n3[t4]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : m(Object(n3)).forEach(function(t4) {
                Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
              });
            }
            return e3;
          }
          var k = (0, a.defineComponent)({ name: "Tree", props: C(C({}, b), {}, { data: { type: [String, Number, Boolean, Array, Object], default: null }, deep: { type: Number, default: 1 / 0 }, pathCollapsible: { type: Function, default: function() {
            return false;
          } }, rootPath: { type: String, default: "root" }, virtual: { type: Boolean, default: false }, height: { type: Number, default: 400 }, itemHeight: { type: Number, default: 20 }, selectedValue: { type: [String, Array], default: function() {
            return "";
          } }, collapsedOnClickBrackets: { type: Boolean, default: true }, style: Object, onSelectedChange: { type: Function } }), slots: ["renderNodeKey", "renderNodeValue"], emits: ["nodeClick", "bracketsClick", "iconClick", "selectedChange", "update:selectedValue", "update:data"], setup: function(e3, o2) {
            var r2 = o2.emit, c2 = o2.slots, i2 = (0, a.ref)(), u2 = (0, a.computed)(function() {
              return p(e3.data, e3.rootPath);
            }), d2 = function(t3) {
              return u2.value.reduce(function(n3, o3) {
                var r3, a2 = o3.level >= t3, c3 = null === (r3 = e3.pathCollapsible) || void 0 === r3 ? void 0 : r3.call(e3, o3);
                return "objectStart" !== o3.type && "arrayStart" !== o3.type || !a2 && !c3 ? n3 : C(C({}, n3), {}, l({}, o3.path, 1));
              }, {});
            }, s2 = (0, a.reactive)({ translateY: 0, visibleData: null, hiddenPaths: d2(e3.deep) }), h2 = (0, a.computed)(function() {
              for (var e4 = null, t3 = [], n3 = u2.value.length, o3 = 0; o3 < n3; o3++) {
                var r3 = C(C({}, u2.value[o3]), {}, { id: o3 }), l2 = s2.hiddenPaths[r3.path];
                if (e4 && e4.path === r3.path) {
                  var a2 = "objectStart" === e4.type, c3 = C(C(C({}, r3), e4), {}, { showComma: r3.showComma, content: a2 ? "{...}" : "[...]", type: a2 ? "objectCollapsed" : "arrayCollapsed" });
                  e4 = null, t3.push(c3);
                } else {
                  if (l2 && !e4) {
                    e4 = r3;
                    continue;
                  }
                  if (e4) continue;
                  t3.push(r3);
                }
              }
              return t3;
            }), y2 = (0, a.computed)(function() {
              var t3 = e3.selectedValue;
              return t3 && "multiple" === e3.selectableType && Array.isArray(t3) ? t3 : [t3];
            }), v2 = (0, a.computed)(function() {
              return !e3.selectableType || e3.selectOnClickNode || e3.showSelectController ? "" : "When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail.";
            }), b2 = function() {
              var t3 = h2.value;
              if (e3.virtual) {
                var n3, o3 = e3.height / e3.itemHeight, r3 = (null === (n3 = i2.value) || void 0 === n3 ? void 0 : n3.scrollTop) || 0, l2 = Math.floor(r3 / e3.itemHeight), a2 = l2 < 0 ? 0 : l2 + o3 > t3.length ? t3.length - o3 : l2;
                a2 < 0 && (a2 = 0);
                var c3 = a2 + o3;
                s2.translateY = a2 * e3.itemHeight, s2.visibleData = t3.filter(function(e4, t4) {
                  return t4 >= a2 && t4 < c3;
                });
              } else s2.visibleData = t3;
            }, m2 = function() {
              b2();
            }, k2 = function(o3) {
              var l2, a2, c3 = o3.path, i3 = e3.selectableType;
              if ("multiple" === i3) {
                var u3 = y2.value.findIndex(function(e4) {
                  return e4 === c3;
                }), d3 = n2(y2.value);
                -1 !== u3 ? d3.splice(u3, 1) : d3.push(c3), r2("update:selectedValue", d3), r2("selectedChange", d3, n2(y2.value));
              } else if ("single" === i3 && y2.value[0] !== c3) {
                var s3 = (l2 = y2.value, a2 = 1, function(e4) {
                  if (Array.isArray(e4)) return e4;
                }(l2) || function(e4, t3) {
                  var n3 = null == e4 ? null : "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
                  if (null != n3) {
                    var o4, r3, l3 = [], a3 = true, c4 = false;
                    try {
                      for (n3 = n3.call(e4); !(a3 = (o4 = n3.next()).done) && (l3.push(o4.value), !t3 || l3.length !== t3); a3 = true) ;
                    } catch (e5) {
                      c4 = true, r3 = e5;
                    } finally {
                      try {
                        a3 || null == n3.return || n3.return();
                      } finally {
                        if (c4) throw r3;
                      }
                    }
                    return l3;
                  }
                }(l2, a2) || t2(l2, a2) || function() {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }())[0], p2 = c3;
                r2("update:selectedValue", p2), r2("selectedChange", p2, s3);
              }
            }, w = function(e4) {
              r2("nodeClick", e4);
            }, N = function(e4, t3) {
              if (e4) s2.hiddenPaths = C(C({}, s2.hiddenPaths), {}, l({}, t3, 1));
              else {
                var n3 = C({}, s2.hiddenPaths);
                delete n3[t3], s2.hiddenPaths = n3;
              }
            }, j = function(t3, n3) {
              e3.collapsedOnClickBrackets && N(t3, n3), r2("bracketsClick", t3);
            }, S = function(e4, t3) {
              N(e4, t3), r2("iconClick", e4);
            }, O = function(t3, n3) {
              var o3 = f(e3.data), l2 = e3.rootPath;
              new Function("data", "val", "data".concat(n3.slice(l2.length), "=val"))(o3, t3), r2("update:data", o3);
            };
            return (0, a.watchEffect)(function() {
              v2.value && function(e4) {
                throw new Error("[VueJSONPretty] ".concat(e4));
              }(v2.value);
            }), (0, a.watchEffect)(function() {
              h2.value && b2();
            }), (0, a.watch)(function() {
              return e3.deep;
            }, function(e4) {
              e4 && (s2.hiddenPaths = d2(e4));
            }), function() {
              var t3, n3, o3 = null !== (t3 = e3.renderNodeKey) && void 0 !== t3 ? t3 : c2.renderNodeKey, r3 = null !== (n3 = e3.renderNodeValue) && void 0 !== n3 ? n3 : c2.renderNodeValue, l2 = s2.visibleData && s2.visibleData.map(function(t4) {
                return (0, a.createVNode)(g, { key: t4.id, node: t4, collapsed: !!s2.hiddenPaths[t4.path], showDoubleQuotes: e3.showDoubleQuotes, showLength: e3.showLength, checked: y2.value.includes(t4.path), selectableType: e3.selectableType, showLine: e3.showLine, showLineNumber: e3.showLineNumber, showSelectController: e3.showSelectController, selectOnClickNode: e3.selectOnClickNode, nodeSelectable: e3.nodeSelectable, highlightSelectedNode: e3.highlightSelectedNode, editable: e3.editable, editableTrigger: e3.editableTrigger, showIcon: e3.showIcon, showKeyValueSpace: e3.showKeyValueSpace, renderNodeKey: o3, renderNodeValue: r3, onNodeClick: w, onBracketsClick: j, onIconClick: S, onSelectedChange: k2, onValueChange: O, style: e3.itemHeight && 20 !== e3.itemHeight ? { lineHeight: "".concat(e3.itemHeight, "px") } : {} }, null);
              });
              return (0, a.createVNode)("div", { ref: i2, class: { "vjs-tree": true, "is-virtual": e3.virtual }, onScroll: e3.virtual ? m2 : void 0, style: e3.showLineNumber ? C({ paddingLeft: "".concat(12 * Number(u2.value.length.toString().length), "px") }, e3.style) : e3.style }, [e3.virtual ? (0, a.createVNode)("div", { class: "vjs-tree-list", style: { height: "".concat(e3.height, "px") } }, [(0, a.createVNode)("div", { class: "vjs-tree-list-holder", style: { height: "".concat(h2.value.length * e3.itemHeight, "px") } }, [(0, a.createVNode)("div", { class: "vjs-tree-list-holder-inner", style: { transform: "translateY(".concat(s2.translateY, "px)") } }, [l2])])]) : l2]);
            };
          } });
        }(), r;
      }();
    });
  })(vueJsonPretty$1);
  return vueJsonPretty$1.exports;
}
var vueJsonPrettyExports = requireVueJsonPretty();
const VueJsonPretty = /* @__PURE__ */ getDefaultExportFromCjs(vueJsonPrettyExports);
const sanitizeOptions = {
  allowVulnerableTags: false,
  enforceHtmlBoundary: false,
  disallowedTagsMode: "discard",
  allowedTags: [...sanitizeHtmlExports.defaults.allowedTags, "style", "img", "title"],
  allowedAttributes: {
    ...sanitizeHtmlExports.defaults.allowedAttributes,
    "*": ["class", "style"]
  },
  transformTags: {
    head: ""
  }
};
const _sfc_main$9 = {
  name: "RunDataHtml",
  props: {
    inputHtml: {
      type: String,
      required: true
    }
  },
  computed: {
    sanitizedHtml() {
      return sanitizeHtml(this.inputHtml, sanitizeOptions);
    }
  }
};
const _hoisted_1$8 = ["srcdoc"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("iframe", {
    class: "__html-display",
    srcdoc: $options.sanitizedHtml
  }, null, 8, _hoisted_1$8);
}
const RunDataHtml = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render]]);
const RunDataHtml$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RunDataHtml
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$7 = { key: 0 };
const _hoisted_2$4 = { key: 1 };
const _hoisted_3$3 = { key: 2 };
const _hoisted_4$3 = {
  key: 0,
  controls: "",
  autoplay: ""
};
const _hoisted_5$3 = ["src", "type"];
const _hoisted_6$2 = {
  key: 1,
  controls: "",
  autoplay: ""
};
const _hoisted_7$2 = ["src", "type"];
const _hoisted_8$2 = ["src"];
const _hoisted_9$2 = ["src"];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "BinaryDataDisplayEmbed",
  props: {
    binaryData: {}
  },
  setup(__props) {
    const props = __props;
    const isLoading = ref(true);
    const embedSource = ref("");
    const error = ref(false);
    const data = ref("");
    const workflowsStore = useWorkflowsStore();
    const i18n = useI18n();
    const embedClass = computed(() => {
      return [props.binaryData.fileType ?? "other"];
    });
    onMounted(async () => {
      const { id, data: binaryData, fileName, fileType, mimeType } = props.binaryData;
      const isJSONData = fileType === "json";
      const isHTMLData = fileType === "html";
      if (!id) {
        if (isJSONData || isHTMLData) {
          data.value = isJSONData ? jsonParse(base64DecodeUTF8(binaryData)) : base64DecodeUTF8(binaryData);
        } else {
          embedSource.value = `data:${mimeType};charset=utf-8;base64,${binaryData}`;
        }
      } else {
        try {
          const binaryUrl = workflowsStore.getBinaryUrl(id, "view", fileName ?? "", mimeType);
          if (isJSONData || isHTMLData) {
            const fetchedData = await fetch(binaryUrl, { credentials: "include" });
            data.value = await (isJSONData ? fetchedData.json() : fetchedData.text());
          } else {
            embedSource.value = binaryUrl;
          }
        } catch (e) {
          error.value = true;
        }
      }
      isLoading.value = false;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, [
        isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1$7, "Loading binary data...")) : error.value ? (openBlock(), createElementBlock("div", _hoisted_2$4, "Error loading binary data")) : (openBlock(), createElementBlock("span", _hoisted_3$3, [
          _ctx.binaryData.fileType === "video" ? (openBlock(), createElementBlock("video", _hoisted_4$3, [
            createBaseVNode("source", {
              src: embedSource.value,
              type: _ctx.binaryData.mimeType
            }, null, 8, _hoisted_5$3),
            createTextVNode(" " + toDisplayString(unref(i18n).baseText("binaryDataDisplay.yourBrowserDoesNotSupport")), 1)
          ])) : _ctx.binaryData.fileType === "audio" ? (openBlock(), createElementBlock("audio", _hoisted_6$2, [
            createBaseVNode("source", {
              src: embedSource.value,
              type: _ctx.binaryData.mimeType
            }, null, 8, _hoisted_7$2),
            createTextVNode(" " + toDisplayString(unref(i18n).baseText("binaryDataDisplay.yourBrowserDoesNotSupport")), 1)
          ])) : _ctx.binaryData.fileType === "image" ? (openBlock(), createElementBlock("img", {
            key: 2,
            src: embedSource.value
          }, null, 8, _hoisted_8$2)) : _ctx.binaryData.fileType === "json" ? (openBlock(), createBlock(unref(VueJsonPretty), {
            key: 3,
            data: data.value,
            deep: 3,
            "show-length": true
          }, null, 8, ["data"])) : _ctx.binaryData.fileType === "html" ? (openBlock(), createBlock(RunDataHtml, {
            key: 4,
            "input-html": data.value
          }, null, 8, ["input-html"])) : (openBlock(), createElementBlock("embed", {
            key: 5,
            src: embedSource.value,
            class: normalizeClass(["binary-data", embedClass.value])
          }, null, 10, _hoisted_9$2))
        ]))
      ]);
    };
  }
});
const _hoisted_1$6 = { class: "binary-data-window-wrapper" };
const _hoisted_2$3 = { key: 0 };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "BinaryDataDisplay",
  props: {
    displayData: {},
    windowVisible: { type: Boolean }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const nodeHelpers = useNodeHelpers();
    const workflowsStore = useWorkflowsStore();
    const i18n = useI18n();
    const workflowRunData = computed(() => {
      const workflowExecution = workflowsStore.getWorkflowExecution;
      if (workflowExecution === null) {
        return null;
      }
      const executionData = workflowExecution.data;
      return executionData ? executionData.resultData.runData : null;
    });
    const binaryData = computed(() => {
      if (typeof props.displayData.node !== "string" || typeof props.displayData.key !== "string" || typeof props.displayData.runIndex !== "number" || typeof props.displayData.index !== "number" || typeof props.displayData.outputIndex !== "number") {
        return null;
      }
      const binaryDataLocal = nodeHelpers.getBinaryData(
        workflowRunData.value,
        props.displayData.node,
        props.displayData.runIndex,
        props.displayData.outputIndex
      );
      if (binaryDataLocal.length === 0) {
        return null;
      }
      if (props.displayData.index >= binaryDataLocal.length || binaryDataLocal[props.displayData.index][props.displayData.key] === void 0) {
        return null;
      }
      const binaryDataItem = binaryDataLocal[props.displayData.index][props.displayData.key];
      return binaryDataItem;
    });
    function closeWindow() {
      emit("close");
      return false;
    }
    return (_ctx, _cache) => {
      const _component_n8n_button = N8nButton;
      return _ctx.windowVisible ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["binary-data-window", binaryData.value?.fileType])
      }, [
        createVNode(_component_n8n_button, {
          size: "small",
          class: "binary-data-window-back",
          title: unref(i18n).baseText("binaryDataDisplay.backToOverviewPage"),
          icon: "arrow-left",
          label: unref(i18n).baseText("binaryDataDisplay.backToList"),
          onClick: withModifiers(closeWindow, ["stop"])
        }, null, 8, ["title", "label"]),
        createBaseVNode("div", _hoisted_1$6, [
          !binaryData.value ? (openBlock(), createElementBlock("div", _hoisted_2$3, toDisplayString(unref(i18n).baseText("binaryDataDisplay.noDataFoundToDisplay")), 1)) : (openBlock(), createBlock(_sfc_main$8, {
            key: 1,
            "binary-data": binaryData.value
          }, null, 8, ["binary-data"]))
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$5 = { class: "node-error-view__header" };
const _hoisted_2$2 = {
  class: "node-error-view__header-message",
  "data-test-id": "node-error-message"
};
const _hoisted_3$2 = {
  key: 0,
  "data-test-id": "node-error-description",
  class: "node-error-view__header-description"
};
const _hoisted_4$2 = { key: 1 };
const _hoisted_5$2 = {
  key: 2,
  class: "node-error-view__button",
  "data-test-id": "node-error-view-ask-assistant-button"
};
const _hoisted_6$1 = {
  key: 0,
  class: "node-error-view__info"
};
const _hoisted_7$1 = { class: "node-error-view__info-header" };
const _hoisted_8$1 = { class: "node-error-view__info-title" };
const _hoisted_9$1 = { class: "copy-button" };
const _hoisted_10 = { class: "node-error-view__info-content" };
const _hoisted_11 = {
  key: 0,
  class: "node-error-view__details"
};
const _hoisted_12 = { class: "node-error-view__details-summary" };
const _hoisted_13 = { class: "node-error-view__details-content" };
const _hoisted_14 = {
  key: 0,
  class: "node-error-view__details-row"
};
const _hoisted_15 = { class: "node-error-view__details-label" };
const _hoisted_16 = { class: "node-error-view__details-value" };
const _hoisted_17 = {
  key: 1,
  class: "node-error-view__details-row"
};
const _hoisted_18 = { class: "node-error-view__details-label" };
const _hoisted_19 = { class: "node-error-view__details-value" };
const _hoisted_20 = {
  key: 2,
  class: "node-error-view__details-row"
};
const _hoisted_21 = { class: "node-error-view__details-label" };
const _hoisted_22 = { class: "node-error-view__details-value" };
const _hoisted_23 = {
  key: 3,
  class: "node-error-view__details-row"
};
const _hoisted_24 = { class: "node-error-view__details-label" };
const _hoisted_25 = { class: "node-error-view__details-value" };
const _hoisted_26 = {
  key: 4,
  class: "node-error-view__details-row"
};
const _hoisted_27 = { class: "node-error-view__details-label" };
const _hoisted_28 = { class: "node-error-view__details-value" };
const _hoisted_29 = { class: "node-error-view__details" };
const _hoisted_30 = { class: "node-error-view__details-summary" };
const _hoisted_31 = { class: "node-error-view__details-content" };
const _hoisted_32 = {
  key: 0,
  class: "node-error-view__details-row"
};
const _hoisted_33 = { class: "node-error-view__details-label" };
const _hoisted_34 = { class: "node-error-view__details-value" };
const _hoisted_35 = {
  key: 1,
  class: "node-error-view__details-row"
};
const _hoisted_36 = { class: "node-error-view__details-label" };
const _hoisted_37 = { class: "node-error-view__details-value" };
const _hoisted_38 = {
  key: 2,
  class: "node-error-view__details-row"
};
const _hoisted_39 = { class: "node-error-view__details-label" };
const _hoisted_40 = { class: "node-error-view__details-value" };
const _hoisted_41 = {
  key: 3,
  class: "node-error-view__details-row"
};
const _hoisted_42 = { class: "node-error-view__details-label" };
const _hoisted_43 = { class: "node-error-view__details-value" };
const _hoisted_44 = {
  key: 4,
  class: "node-error-view__details-row"
};
const _hoisted_45 = { class: "node-error-view__details-label" };
const _hoisted_46 = { class: "node-error-view__details-value" };
const _hoisted_47 = { class: "node-error-view__details-row" };
const _hoisted_48 = { class: "node-error-view__details-label" };
const _hoisted_49 = { class: "node-error-view__details-value" };
const _hoisted_50 = {
  key: 5,
  class: "node-error-view__details-row"
};
const _hoisted_51 = { class: "node-error-view__details-label" };
const _hoisted_52 = { class: "node-error-view__details-value" };
const _hoisted_53 = {
  key: 6,
  class: "node-error-view__details-row"
};
const _hoisted_54 = { class: "node-error-view__details-label" };
const _hoisted_55 = { class: "node-error-view__details-value" };
const _hoisted_56 = {
  key: 7,
  class: "node-error-view__details-row"
};
const _hoisted_57 = { class: "node-error-view__details-label" };
const _hoisted_58 = { class: "node-error-view__details-value" };
const _hoisted_59 = {
  key: 8,
  class: "node-error-view__details-row"
};
const _hoisted_60 = { class: "node-error-view__details-label" };
const _hoisted_61 = { class: "node-error-view__details-value" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "NodeErrorView",
  props: {
    error: {},
    showDetails: { type: Boolean },
    compact: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const clipboard = useClipboard();
    const toast = useToast();
    const i18n = useI18n();
    const assistantHelpers = useAIAssistantHelpers();
    const nodeTypesStore = useNodeTypesStore();
    const ndvStore = useNDVStore();
    const workflowsStore = useWorkflowsStore();
    const rootStore = useRootStore();
    const assistantStore = useAssistantStore();
    const uiStore = useUIStore();
    const workflowId = computed(() => workflowsStore.workflowId);
    const executionId = computed(() => workflowsStore.getWorkflowExecution?.id);
    const displayCause = computed(() => {
      return JSON.stringify(props.error.cause ?? "").length < MAX_DISPLAY_DATA_SIZE;
    });
    const node = computed(() => {
      return props.error.node || ndvStore.activeNode;
    });
    const parameters = computed(() => {
      if (!node.value) {
        return [];
      }
      const nodeType = nodeTypesStore.getNodeType(node.value.type, node.value.typeVersion);
      if (nodeType === null) {
        return [];
      }
      return nodeType.properties;
    });
    const n8nVersion = computed(() => {
      const baseUrl = rootStore.urlBaseEditor;
      let instanceType = "Self Hosted";
      if (baseUrl.includes("n8n.cloud")) {
        instanceType = "Cloud";
      }
      return rootStore.versionCli + ` (${instanceType})`;
    });
    const hasManyInputItems = computed(() => {
      return ndvStore.ndvInputData.length > 1;
    });
    const nodeDefaultName = computed(() => {
      if (!node.value) {
        return "Node";
      }
      const nodeType = nodeTypesStore.getNodeType(node.value.type, node.value.typeVersion);
      return nodeType?.defaults?.name || node.value.name;
    });
    const prepareRawMessages = computed(() => {
      const returnData = [];
      if (!props.error.messages?.length) {
        return [];
      }
      const errorMessage = getErrorMessage();
      Array.from(new Set(props.error.messages)).forEach((message) => {
        const isParsable = /^\d{3} - \{/.test(message);
        const parts = isParsable ? message.split(" - ").map((part) => part.trim()) : [];
        for (const part of parts) {
          try {
            const parsed = JSON.parse(part);
            if (typeof parsed === "object") {
              returnData.push(parsed);
              return;
            }
          } catch (error) {
          }
        }
        if (message === errorMessage) return;
        returnData.push(message);
      });
      return returnData;
    });
    const isAskAssistantAvailable = computed(() => {
      if (!node.value || isSubNodeError.value) {
        return false;
      }
      const isCustomNode = node.value.type === void 0 || isCommunityPackageName(node.value.type);
      return assistantStore.canShowAssistantButtonsOnCanvas && !isCustomNode && !nodeIsHidden();
    });
    const assistantAlreadyAsked = computed(() => {
      return assistantStore.isNodeErrorActive({
        error: assistantHelpers.simplifyErrorForAssistant(props.error),
        node: props.error.node || ndvStore.activeNode
      });
    });
    const isSubNodeError = computed(() => {
      return props.error.name === "NodeOperationError" && props.error.functionality === "configuration-node";
    });
    function nodeVersionTag(nodeType) {
      if (!nodeType || "hidden" in nodeType && nodeType.hidden) {
        return i18n.baseText("nodeSettings.deprecated");
      }
      const latestNodeVersion = Math.max(...nodeTypesStore.getNodeVersions(nodeType.type));
      if (latestNodeVersion === nodeType.typeVersion) {
        return i18n.baseText("nodeSettings.latest");
      }
      return i18n.baseText("nodeSettings.latestVersion", {
        interpolate: { version: latestNodeVersion.toString() }
      });
    }
    function prepareDescription(description) {
      return sanitizeHtml$1(description.replace(/`(.*?)`/g, "<code>$1</code>"));
    }
    function getErrorDescription() {
      if (props.error.context?.descriptionKey) {
        const interpolate = {
          nodeCause: props.error.context.nodeCause,
          runIndex: props.error.context.runIndex ?? "0",
          itemIndex: props.error.context.itemIndex ?? "0"
        };
        return prepareDescription(
          i18n.baseText(
            `nodeErrorView.description.${props.error.context.descriptionKey}`,
            { interpolate }
          )
        );
      }
      if (!props.error.context?.descriptionTemplate) {
        return prepareDescription(props.error.description ?? "");
      }
      const parameterName = parameterDisplayName(props.error.context.parameter);
      return prepareDescription(
        props.error.context.descriptionTemplate.replace(/%%PARAMETER%%/g, parameterName)
      );
    }
    function addItemIndexSuffix(message) {
      let itemIndexSuffix = "";
      if (hasManyInputItems.value && props.error?.context?.itemIndex !== void 0) {
        itemIndexSuffix = `item ${props.error.context.itemIndex}`;
      }
      if (message.includes(itemIndexSuffix)) return message;
      return `${message} [${itemIndexSuffix}]`;
    }
    function getErrorMessage() {
      let message = "";
      const isNonEmptyString = (value) => !!value && typeof value === "string";
      if (isSubNodeError.value) {
        message = i18n.baseText("nodeErrorView.errorSubNode", {
          interpolate: { node: props.error.node?.name ?? "" }
        });
      } else if (isNonEmptyString(props.error.message) && (props.error.message === props.error.description || !props.error.context?.messageTemplate)) {
        message = props.error.message;
      } else if (isNonEmptyString(props.error.context?.messageTemplate) && isNonEmptyString(props.error.context?.parameter)) {
        const parameterName = parameterDisplayName(props.error.context.parameter);
        message = props.error.context.messageTemplate.replace(/%%PARAMETER%%/g, parameterName);
      } else if (Array.isArray(props.error.messages) && props.error.messages.length > 0) {
        message = props.error.messages[0];
      }
      return addItemIndexSuffix(message);
    }
    function parameterDisplayName(path, fullPath = true) {
      try {
        const params = getParameterName(parameters.value, path.split("."));
        if (!params.length) {
          throw new Error();
        }
        if (!fullPath) {
          return params.pop().displayName;
        }
        return params.map((parameter) => parameter.displayName).join(" > ");
      } catch (error) {
        return `Could not find parameter "${path}"`;
      }
    }
    function getParameterName(params, pathParts) {
      let currentParameterName = pathParts.shift();
      if (currentParameterName === void 0) {
        return [];
      }
      const arrayMatch = currentParameterName.match(/(.*)\[([\d])\]$/);
      if (arrayMatch !== null && arrayMatch.length > 0) {
        currentParameterName = arrayMatch[1];
      }
      const currentParameter = params.find(
        (parameter) => parameter.name === currentParameterName
      );
      if (currentParameter === void 0) {
        throw new Error(`Could not find parameter "${currentParameterName}"`);
      }
      if (pathParts.length === 0) {
        return [currentParameter];
      }
      if (currentParameter.hasOwnProperty("options")) {
        return [
          currentParameter,
          ...getParameterName(currentParameter.options, pathParts)
        ];
      }
      if (currentParameter.hasOwnProperty("values")) {
        return [
          currentParameter,
          ...getParameterName(currentParameter.values, pathParts)
        ];
      }
      return [currentParameter];
    }
    function copyErrorDetails() {
      const error = props.error;
      const errorInfo = {
        errorMessage: getErrorMessage()
      };
      if (error.description) {
        errorInfo.errorDescription = error.description;
      }
      const errorDetails = {};
      if (error?.messages?.length) {
        errorDetails.rawErrorMessage = error.messages;
      }
      if ("httpCode" in error && error.httpCode) {
        errorDetails.httpCode = error.httpCode;
      }
      if (error.context && error.context.data) {
        errorDetails.errorData = error.context.data;
      }
      if (error.extra) {
        errorDetails.errorExtra = error.extra;
      }
      errorInfo.errorDetails = errorDetails;
      const n8nDetails = {};
      if (error.node) {
        n8nDetails.nodeName = error.node.name;
        n8nDetails.nodeType = error.node.type;
        n8nDetails.nodeVersion = error.node.typeVersion;
        if (error.node?.parameters?.resource) {
          n8nDetails.resource = error.node.parameters.resource;
        }
        if (error?.node?.parameters?.operation) {
          n8nDetails.operation = error.node.parameters.operation;
        }
      }
      if (error.context) {
        if (error.context.itemIndex !== void 0) {
          n8nDetails.itemIndex = error.context.itemIndex;
        }
        if (error.context.runIndex !== void 0) {
          n8nDetails.runIndex = error.context.runIndex;
        }
        if (error.context.parameter !== void 0) {
          n8nDetails.parameter = error.context.parameter;
        }
        if (error.context.causeDetailed) {
          n8nDetails.causeDetailed = error.context.causeDetailed;
        }
      }
      if (error.timestamp) {
        n8nDetails.time = new Date(error.timestamp).toLocaleString();
      }
      n8nDetails.n8nVersion = n8nVersion.value;
      n8nDetails.binaryDataMode = rootStore.binaryDataMode;
      if (error.cause) {
        n8nDetails.cause = error.cause;
      }
      n8nDetails.stackTrace = error.stack?.split("\n");
      errorInfo.n8nDetails = n8nDetails;
      void clipboard.copy(JSON.stringify(errorInfo, null, 2));
      copySuccess();
    }
    function copySuccess() {
      toast.showMessage({
        title: i18n.baseText("nodeErrorView.showMessage.title"),
        type: "info"
      });
    }
    function nodeIsHidden() {
      const nodeType = nodeTypesStore.getNodeType(node?.value.type);
      return nodeType?.hidden ?? false;
    }
    const onOpenErrorNodeDetailClick = () => {
      if (!props.error.node) {
        return;
      }
      if ("workflowId" in props.error && workflowId.value && typeof props.error.workflowId === "string" && workflowId.value !== props.error.workflowId && "executionId" in props.error && executionId.value && typeof props.error.executionId === "string" && executionId.value !== props.error.executionId) {
        const link = router.resolve({
          name: VIEWS.EXECUTION_PREVIEW,
          params: {
            name: props.error.workflowId,
            executionId: props.error.executionId,
            nodeId: props.error.node.id
          }
        });
        window.open(link.href, "_blank");
      } else {
        ndvStore.activeNodeName = props.error.node.name;
      }
    };
    async function onAskAssistantClick() {
      const { message, lineNumber, description } = props.error;
      const sessionInProgress = !assistantStore.isSessionEnded;
      const errorHelp = {
        error: {
          name: props.error.name,
          message,
          lineNumber,
          description: description ?? getErrorDescription(),
          type: "type" in props.error ? props.error.type : void 0
        },
        node: node.value
      };
      if (sessionInProgress) {
        uiStore.openModalWithData({
          name: NEW_ASSISTANT_SESSION_MODAL,
          data: { context: { errorHelp } }
        });
        return;
      }
      await assistantStore.initErrorHelper(errorHelp);
      assistantStore.trackUserOpenedAssistant({
        source: "error",
        task: "error",
        has_existing_session: false
      });
    }
    return (_ctx, _cache) => {
      const _component_n8n_button = N8nButton;
      const _component_n8n_tooltip = N8nTooltip;
      const _component_n8n_icon = N8nIcon;
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["node-error-view", props.compact ? "node-error-view_compact" : ""])
      }, [
        createBaseVNode("div", _hoisted_1$5, [
          createBaseVNode("div", _hoisted_2$2, [
            createBaseVNode("div", null, toDisplayString(getErrorMessage()), 1)
          ]),
          (_ctx.error.description || _ctx.error.context?.descriptionKey) && !isSubNodeError.value ? withDirectives((openBlock(), createElementBlock("div", _hoisted_3$2, null, 512)), [
            [_directive_n8n_html, getErrorDescription()]
          ]) : createCommentVNode("", true),
          isSubNodeError.value ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
            createVNode(_component_n8n_button, {
              icon: "arrow-right",
              type: "secondary",
              label: unref(i18n).baseText("pushConnection.executionError.openNode"),
              class: "node-error-view__button",
              "data-test-id": "node-error-view-open-node-button",
              onClick: onOpenErrorNodeDetailClick
            }, null, 8, ["label"])
          ])) : createCommentVNode("", true),
          isAskAssistantAvailable.value ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
            createVNode(InlineAskAssistantButton, {
              asked: assistantAlreadyAsked.value,
              onClick: onAskAssistantClick
            }, null, 8, ["asked"])
          ])) : createCommentVNode("", true)
        ]),
        _ctx.showDetails ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
          createBaseVNode("div", _hoisted_7$1, [
            createBaseVNode("p", _hoisted_8$1, toDisplayString(unref(i18n).baseText("nodeErrorView.details.title")), 1),
            createVNode(_component_n8n_tooltip, {
              class: "item",
              content: unref(i18n).baseText("nodeErrorView.copyToClipboard.tooltip"),
              placement: "left"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_9$1, [
                  createVNode(unref(_sfc_main$b), {
                    icon: "files",
                    type: "secondary",
                    size: "small",
                    text: true,
                    "transparent-background": "transparent",
                    onClick: copyErrorDetails
                  })
                ])
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          createBaseVNode("div", _hoisted_10, [
            "httpCode" in _ctx.error && _ctx.error.httpCode || prepareRawMessages.value.length || _ctx.error?.context?.data || _ctx.error.extra ? (openBlock(), createElementBlock("details", _hoisted_11, [
              createBaseVNode("summary", _hoisted_12, [
                createVNode(_component_n8n_icon, {
                  class: "node-error-view__details-icon",
                  icon: "chevron-right"
                }),
                createTextVNode(" " + toDisplayString(unref(i18n).baseText("nodeErrorView.details.from", {
                  interpolate: { node: `${nodeDefaultName.value}` }
                })), 1)
              ]),
              createBaseVNode("div", _hoisted_13, [
                "httpCode" in _ctx.error && _ctx.error.httpCode ? (openBlock(), createElementBlock("div", _hoisted_14, [
                  createBaseVNode("p", _hoisted_15, toDisplayString(unref(i18n).baseText("nodeErrorView.errorCode")), 1),
                  createBaseVNode("p", _hoisted_16, [
                    createBaseVNode("code", null, toDisplayString(_ctx.error.httpCode), 1)
                  ])
                ])) : createCommentVNode("", true),
                prepareRawMessages.value.length ? (openBlock(), createElementBlock("div", _hoisted_17, [
                  createBaseVNode("p", _hoisted_18, toDisplayString(unref(i18n).baseText("nodeErrorView.details.rawMessages")), 1),
                  createBaseVNode("div", _hoisted_19, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(prepareRawMessages.value, (msg, index) => {
                      return openBlock(), createElementBlock("div", { key: index }, [
                        createBaseVNode("pre", null, [
                          createBaseVNode("code", null, toDisplayString(msg), 1)
                        ])
                      ]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true),
                _ctx.error?.context?.data ? (openBlock(), createElementBlock("div", _hoisted_20, [
                  createBaseVNode("p", _hoisted_21, toDisplayString(unref(i18n).baseText("nodeErrorView.details.errorData")), 1),
                  createBaseVNode("div", _hoisted_22, [
                    createBaseVNode("pre", null, [
                      createBaseVNode("code", null, toDisplayString(_ctx.error.context.data), 1)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                _ctx.error.extra ? (openBlock(), createElementBlock("div", _hoisted_23, [
                  createBaseVNode("p", _hoisted_24, toDisplayString(unref(i18n).baseText("nodeErrorView.details.errorExtra")), 1),
                  createBaseVNode("div", _hoisted_25, [
                    createBaseVNode("pre", null, [
                      createBaseVNode("code", null, toDisplayString(_ctx.error.extra), 1)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                _ctx.error.context && _ctx.error.context.request ? (openBlock(), createElementBlock("div", _hoisted_26, [
                  createBaseVNode("p", _hoisted_27, toDisplayString(unref(i18n).baseText("nodeErrorView.details.request")), 1),
                  createBaseVNode("div", _hoisted_28, [
                    createBaseVNode("pre", null, [
                      createBaseVNode("code", null, toDisplayString(_ctx.error.context.request), 1)
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("details", _hoisted_29, [
              createBaseVNode("summary", _hoisted_30, [
                createVNode(_component_n8n_icon, {
                  class: "node-error-view__details-icon",
                  icon: "chevron-right"
                }),
                createTextVNode(" " + toDisplayString(unref(i18n).baseText("nodeErrorView.details.info")), 1)
              ]),
              createBaseVNode("div", _hoisted_31, [
                _ctx.error.context && _ctx.error.context.itemIndex !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_32, [
                  createBaseVNode("p", _hoisted_33, toDisplayString(unref(i18n).baseText("nodeErrorView.itemIndex")), 1),
                  createBaseVNode("p", _hoisted_34, [
                    createBaseVNode("code", null, toDisplayString(_ctx.error.context.itemIndex), 1)
                  ])
                ])) : createCommentVNode("", true),
                _ctx.error.context && _ctx.error.context.runIndex !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_35, [
                  createBaseVNode("p", _hoisted_36, toDisplayString(unref(i18n).baseText("nodeErrorView.runIndex")), 1),
                  createBaseVNode("p", _hoisted_37, [
                    createBaseVNode("code", null, toDisplayString(_ctx.error.context.runIndex), 1)
                  ])
                ])) : createCommentVNode("", true),
                _ctx.error.context && _ctx.error.context.parameter !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_38, [
                  createBaseVNode("p", _hoisted_39, toDisplayString(unref(i18n).baseText("nodeErrorView.inParameter")), 1),
                  createBaseVNode("p", _hoisted_40, [
                    createBaseVNode("code", null, toDisplayString(parameterDisplayName(`${_ctx.error.context.parameter}`)), 1)
                  ])
                ])) : createCommentVNode("", true),
                _ctx.error.node && _ctx.error.node.type ? (openBlock(), createElementBlock("div", _hoisted_41, [
                  createBaseVNode("p", _hoisted_42, toDisplayString(unref(i18n).baseText("nodeErrorView.details.nodeType")), 1),
                  createBaseVNode("p", _hoisted_43, [
                    createBaseVNode("code", null, toDisplayString(_ctx.error.node.type), 1)
                  ])
                ])) : createCommentVNode("", true),
                _ctx.error.node && _ctx.error.node.typeVersion ? (openBlock(), createElementBlock("div", _hoisted_44, [
                  createBaseVNode("p", _hoisted_45, toDisplayString(unref(i18n).baseText("nodeErrorView.details.nodeVersion")), 1),
                  createBaseVNode("p", _hoisted_46, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", null, toDisplayString(_ctx.error.node.typeVersion + " "), 1),
                      createBaseVNode("span", null, "(" + toDisplayString(nodeVersionTag(_ctx.error.node)) + ")", 1)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_47, [
                  createBaseVNode("p", _hoisted_48, toDisplayString(unref(i18n).baseText("nodeErrorView.details.n8nVersion")), 1),
                  createBaseVNode("p", _hoisted_49, [
                    createBaseVNode("code", null, toDisplayString(n8nVersion.value), 1)
                  ])
                ]),
                _ctx.error.timestamp ? (openBlock(), createElementBlock("div", _hoisted_50, [
                  createBaseVNode("p", _hoisted_51, toDisplayString(unref(i18n).baseText("nodeErrorView.time")), 1),
                  createBaseVNode("p", _hoisted_52, [
                    createBaseVNode("code", null, toDisplayString(new Date(_ctx.error.timestamp).toLocaleString()), 1)
                  ])
                ])) : createCommentVNode("", true),
                _ctx.error.cause && displayCause.value ? (openBlock(), createElementBlock("div", _hoisted_53, [
                  createBaseVNode("p", _hoisted_54, toDisplayString(unref(i18n).baseText("nodeErrorView.details.errorCause")), 1),
                  createBaseVNode("pre", _hoisted_55, [
                    createBaseVNode("code", null, toDisplayString(_ctx.error.cause), 1)
                  ])
                ])) : createCommentVNode("", true),
                _ctx.error.context && _ctx.error.context.causeDetailed ? (openBlock(), createElementBlock("div", _hoisted_56, [
                  createBaseVNode("p", _hoisted_57, toDisplayString(unref(i18n).baseText("nodeErrorView.details.causeDetailed")), 1),
                  createBaseVNode("pre", _hoisted_58, [
                    createBaseVNode("code", null, toDisplayString(_ctx.error.context.causeDetailed), 1)
                  ])
                ])) : createCommentVNode("", true),
                _ctx.error.stack ? (openBlock(), createElementBlock("div", _hoisted_59, [
                  createBaseVNode("p", _hoisted_60, toDisplayString(unref(i18n).baseText("nodeErrorView.details.stackTrace")), 1),
                  createBaseVNode("pre", _hoisted_61, [
                    createBaseVNode("code", null, toDisplayString(_ctx.error.stack), 1)
                  ])
                ])) : createCommentVNode("", true)
              ])
            ])
          ])
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const _hoisted_1$4 = { key: 0 };
const _hoisted_2$1 = { key: 1 };
const _hoisted_3$1 = { key: 2 };
const _hoisted_4$1 = { key: 0 };
const _hoisted_5$1 = { key: 1 };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RunDataPinButton",
  props: {
    tooltipContentsVisibility: {},
    dataPinningDocsUrl: {},
    pinnedData: {},
    disabled: { type: Boolean }
  },
  emits: ["togglePinData"],
  setup(__props, { emit: __emit }) {
    const locale = useI18n();
    const props = __props;
    const emit = __emit;
    const visible = computed(
      () => props.tooltipContentsVisibility.pinDataDiscoveryTooltipContent ? true : void 0
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(N8nTooltip), {
        placement: "bottom-end",
        visible: visible.value
      }, {
        content: withCtx(() => [
          props.tooltipContentsVisibility.binaryDataTooltipContent ? (openBlock(), createElementBlock("div", _hoisted_1$4, toDisplayString(unref(locale).baseText("ndv.pinData.pin.binary")), 1)) : props.tooltipContentsVisibility.pinDataDiscoveryTooltipContent ? (openBlock(), createElementBlock("div", _hoisted_2$1, toDisplayString(unref(locale).baseText("node.discovery.pinData.ndv")), 1)) : (openBlock(), createElementBlock("div", _hoisted_3$1, [
            _ctx.pinnedData.hasData.value ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
              createBaseVNode("strong", null, toDisplayString(unref(locale).baseText("ndv.pinData.unpin.title")), 1)
            ])) : (openBlock(), createElementBlock("div", _hoisted_5$1, [
              createBaseVNode("strong", null, toDisplayString(unref(locale).baseText("ndv.pinData.pin.title")), 1),
              createVNode(unref(N8nText), {
                size: "small",
                tag: "p"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("ndv.pinData.pin.description")) + " ", 1),
                  createVNode(unref(N8nLink), {
                    to: props.dataPinningDocsUrl,
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(locale).baseText("ndv.pinData.pin.link")), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                _: 1
              })
            ]))
          ]))
        ]),
        default: withCtx(() => [
          createVNode(unref(_sfc_main$b), {
            class: normalizeClass(_ctx.$style.pinDataButton),
            type: "tertiary",
            active: props.pinnedData.hasData.value,
            icon: "pin",
            disabled: props.disabled,
            "data-test-id": "ndv-pin-data",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("togglePinData"))
          }, null, 8, ["class", "active", "disabled"])
        ]),
        _: 1
      }, 8, ["visible"]);
    };
  }
});
const pinDataButton = "_pinDataButton_12tk2_123";
const style0$4 = {
  pinDataButton
};
const cssModules$4 = {
  "$style": style0$4
};
const RunDataPinButton = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__cssModules", cssModules$4]]);
const _hoisted_1$3 = ["href"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ViewSubExecution",
  props: {
    taskMetadata: {},
    displayMode: {},
    inline: { type: Boolean, default: false }
  },
  setup(__props) {
    const { trackOpeningRelatedExecution, resolveRelatedExecutionUrl } = useExecutionHelpers();
    const i18n = useI18n();
    const props = __props;
    const hasRelatedExecution = computed(() => {
      return Boolean(props.taskMetadata.subExecution ?? props.taskMetadata.parentExecution);
    });
    function getExecutionLinkLabel(task) {
      if (task.parentExecution) {
        return i18n.baseText("runData.openParentExecution", {
          interpolate: { id: task.parentExecution.executionId }
        });
      }
      if (task.subExecution) {
        if (props.taskMetadata.subExecutionsCount === 1) {
          return i18n.baseText("runData.openSubExecutionSingle");
        } else {
          return i18n.baseText("runData.openSubExecutionWithId", {
            interpolate: { id: task.subExecution.executionId }
          });
        }
      }
      return;
    }
    return (_ctx, _cache) => {
      const _component_N8nIcon = N8nIcon;
      return hasRelatedExecution.value ? (openBlock(), createElementBlock("a", {
        key: 0,
        class: normalizeClass({ [_ctx.$style.relatedExecutionInfo]: !_ctx.inline }),
        "data-test-id": "related-execution-link",
        href: unref(resolveRelatedExecutionUrl)(_ctx.taskMetadata),
        target: "_blank",
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => unref(trackOpeningRelatedExecution)(_ctx.taskMetadata, _ctx.displayMode), ["stop"]))
      }, [
        createVNode(_component_N8nIcon, {
          icon: "external-link",
          size: "xsmall"
        }),
        createTextVNode(" " + toDisplayString(getExecutionLinkLabel(_ctx.taskMetadata)), 1)
      ], 10, _hoisted_1$3)) : createCommentVNode("", true);
    };
  }
});
const relatedExecutionInfo = "_relatedExecutionInfo_saqms_123";
const style0$3 = {
  relatedExecutionInfo
};
const cssModules$3 = {
  "$style": style0$3
};
const ViewSubExecution = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__cssModules", cssModules$3]]);
const _hoisted_1$2 = { key: 0 };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "RunDataItemCount",
  props: {
    dataCount: {},
    unfilteredDataCount: {},
    subExecutionsCount: { default: 0 },
    search: {}
  },
  setup(__props) {
    const i18n = useI18n();
    return (_ctx, _cache) => {
      return _ctx.search ? (openBlock(), createBlock(unref(N8nText), {
        key: 0,
        class: normalizeClass(_ctx.$style.itemsText)
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(i18n).baseText("ndv.search.items", {
            adjustToNumber: _ctx.unfilteredDataCount,
            interpolate: { matched: _ctx.dataCount, count: _ctx.unfilteredDataCount }
          })), 1)
        ]),
        _: 1
      }, 8, ["class"])) : (openBlock(), createBlock(unref(N8nText), {
        key: 1,
        class: normalizeClass(_ctx.$style.itemsText)
      }, {
        default: withCtx(() => [
          createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("ndv.output.items", {
            adjustToNumber: _ctx.dataCount,
            interpolate: { count: _ctx.dataCount }
          })), 1),
          _ctx.subExecutionsCount > 0 ? (openBlock(), createElementBlock("span", _hoisted_1$2, toDisplayString(unref(i18n).baseText("ndv.output.andSubExecutions", {
            adjustToNumber: _ctx.subExecutionsCount,
            interpolate: { count: _ctx.subExecutionsCount }
          })), 1)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["class"]));
    };
  }
});
const itemsText = "_itemsText_1e7yn_123";
const style0$2 = {
  itemsText
};
const cssModules$2 = {
  "$style": style0$2
};
const RunDataItemCount = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$2]]);
const _hoisted_1$1 = { key: 6 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RunDataDisplayModeSelect",
  props: {
    compact: { type: Boolean },
    value: {},
    hasBinaryData: { type: Boolean },
    paneType: {},
    nodeGeneratesHtml: { type: Boolean },
    hasRenderableData: { type: Boolean }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const i18n = useI18n();
    const options = computed(() => {
      const defaults = [
        { label: i18n.baseText("runData.schema"), value: "schema" },
        { label: i18n.baseText("runData.table"), value: "table" },
        { label: i18n.baseText("runData.json"), value: "json" }
      ];
      if (__props.hasBinaryData) {
        defaults.push({ label: i18n.baseText("runData.binary"), value: "binary" });
      }
      if (__props.paneType === "output" && __props.nodeGeneratesHtml) {
        defaults.unshift({ label: "HTML", value: "html" });
      }
      if (__props.hasRenderableData) {
        defaults.unshift({ label: i18n.baseText("runData.rendered"), value: "ai" });
      }
      return defaults;
    });
    watch(
      [() => __props.value, options],
      ([val, opts]) => {
        if (opts.length > 0 && opts.every((opt) => opt.value !== val)) {
          emit("change", opts[0].value);
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(N8nRadioButtons), {
        "model-value": _ctx.value,
        options: options.value,
        "data-test-id": "ndv-run-data-display-mode",
        size: _ctx.compact ? "small-medium" : "medium",
        "square-buttons": _ctx.compact,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = (selected) => emit("change", selected))
      }, createSlots({ _: 2 }, [
        _ctx.compact ? {
          name: "option",
          fn: withCtx((option) => [
            option.value === "table" ? (openBlock(), createBlock(unref(N8nIcon), {
              key: 0,
              icon: "table",
              size: "small"
            })) : option.value === "json" ? (openBlock(), createBlock(unref(N8nIcon), {
              key: 1,
              icon: "json",
              size: "small"
            })) : option.value === "binary" ? (openBlock(), createBlock(unref(N8nIcon), {
              key: 2,
              icon: "binary",
              size: "small"
            })) : option.value === "schema" ? (openBlock(), createBlock(unref(N8nIcon), {
              key: 3,
              icon: "schema",
              size: "small"
            })) : option.value === "html" ? (openBlock(), createBlock(unref(N8nIcon), {
              key: 4,
              icon: "file-code",
              size: "small"
            })) : option.value === "ai" ? (openBlock(), createBlock(unref(N8nIcon), {
              key: 5,
              icon: "text",
              size: "small"
            })) : (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString(option.label), 1))
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["model-value", "options", "size", "square-buttons"]);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RunDataPaginationBar",
  props: {
    pageSize: {},
    total: {},
    currentPage: {}
  },
  emits: ["update:current-page", "update:page-size"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const i18n = useI18n();
    const pageSizes = [1, 10, 25, 50, 100];
    return (_ctx, _cache) => {
      const _component_el_pagination = resolveComponent("el-pagination");
      const _component_N8nOption = _sfc_main$c;
      const _component_N8nSelect = N8nSelect;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.pagination),
        "data-test-id": "ndv-data-pagination"
      }, [
        createVNode(_component_el_pagination, {
          background: "",
          "hide-on-single-page": true,
          "current-page": _ctx.currentPage,
          "pager-count": 5,
          "page-size": _ctx.pageSize,
          layout: "prev, pager, next",
          total: _ctx.total,
          "onUpdate:currentPage": _cache[0] || (_cache[0] = (value) => emit("update:current-page", value))
        }, null, 8, ["current-page", "page-size", "total"]),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.pageSizeSelector)
        }, [
          createVNode(_component_N8nSelect, {
            size: "mini",
            "model-value": _ctx.pageSize,
            teleported: "",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = (value) => emit("update:page-size", value))
          }, {
            prepend: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.pageSize")), 1)
            ]),
            default: withCtx(() => [
              (openBlock(), createElementBlock(Fragment, null, renderList(pageSizes, (size) => {
                return createVNode(_component_N8nOption, {
                  key: size,
                  label: size,
                  value: size
                }, null, 8, ["label", "value"]);
              }), 64)),
              createVNode(_component_N8nOption, {
                label: unref(i18n).baseText("ndv.output.all"),
                value: _ctx.total
              }, null, 8, ["label", "value"])
            ]),
            _: 1
          }, 8, ["model-value"])
        ], 2)
      ], 2);
    };
  }
});
const pagination = "_pagination_1hlvz_123";
const pageSizeSelector = "_pageSizeSelector_1hlvz_134";
const style0$1 = {
  pagination,
  pageSizeSelector
};
const cssModules$1 = {
  "$style": style0$1
};
const RunDataPaginationBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _hoisted_1 = {
  key: 0,
  class: "ml-4xs"
};
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = ["data-test-id"];
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { key: 2 };
const _hoisted_8 = { key: 3 };
const _hoisted_9 = { key: 4 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RunData",
  props: {
    workflow: {},
    workflowExecution: { default: void 0 },
    runIndex: {},
    tooMuchDataTitle: {},
    executingMessage: {},
    pushRef: {},
    paneType: {},
    displayMode: {},
    noDataInBranchMessage: {},
    node: { default: null },
    nodes: { default: () => [] },
    linkedRuns: { type: Boolean },
    canLinkRuns: { type: Boolean },
    isExecuting: { type: Boolean, default: false },
    overrideOutputs: { default: void 0 },
    mappingEnabled: { type: Boolean, default: false },
    distanceFromActive: { default: 0 },
    blockUI: { type: Boolean, default: false },
    isProductionExecutionPreview: { type: Boolean, default: false },
    isPaneActive: { type: Boolean, default: false },
    hidePagination: { type: Boolean, default: false },
    calloutMessage: { default: void 0 },
    disableRunIndexSelection: { type: Boolean, default: false },
    disableDisplayModeSelection: { type: Boolean, default: false },
    disableEdit: { type: Boolean, default: false },
    disablePin: { type: Boolean, default: false },
    compact: { type: Boolean, default: false },
    tableHeaderBgColor: { default: "base" },
    disableHoverHighlight: { type: Boolean, default: false },
    disableAiContent: { type: Boolean, default: false },
    collapsingTableColumnName: {}
  },
  emits: ["search", "runChange", "itemHover", "linkRun", "unlinkRun", "activatePane", "tableMounted", "displayModeChange", "collapsingTableColumnChanged"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const LazyRunDataTable = defineAsyncComponent(
      async () => await __vitePreload(() => import("./RunDataTable-BeLUxsRg.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0)
    );
    const LazyRunDataJson = defineAsyncComponent(
      async () => await __vitePreload(() => import("./RunDataJson-CF_FYD-Z.js"), true ? __vite__mapDeps([5,1,2,6,3,7]) : void 0)
    );
    const LazyRunDataSchema = defineAsyncComponent(
      async () => await __vitePreload(() => import("./index-CsFes8Lj.js").then((n) => n.jr), true ? __vite__mapDeps([1,2]) : void 0)
    );
    const LazyRunDataHtml = defineAsyncComponent(
      async () => await __vitePreload(() => Promise.resolve().then(() => RunDataHtml$1), true ? void 0 : void 0)
    );
    const LazyRunDataAi = defineAsyncComponent(
      async () => await __vitePreload(() => import("./RunDataParsedAiContent-Ca3Wad0m.js").then((n) => n.d), true ? __vite__mapDeps([8,1,2,9,10]) : void 0)
    );
    const LazyRunDataSearch = defineAsyncComponent(
      async () => await __vitePreload(() => import("./RunDataSearch-Cg0hn9x1.js"), true ? __vite__mapDeps([11,1,2,12]) : void 0)
    );
    const props = __props;
    const emit = __emit;
    const connectionType = ref(NodeConnectionTypes.Main);
    const dataSize = ref(0);
    const showData = ref(false);
    const userEnabledShowData = ref(false);
    const outputIndex = ref(0);
    const binaryDataDisplayVisible = ref(false);
    const binaryDataDisplayData = ref(null);
    const currentPage = ref(1);
    const pageSize = ref(10);
    const pinDataDiscoveryTooltipVisible = ref(false);
    const isControlledPinDataTooltip = ref(false);
    const search2 = ref("");
    const dataContainerRef = ref();
    const nodeTypesStore = useNodeTypesStore();
    const ndvStore = useNDVStore();
    const workflowsStore = useWorkflowsStore();
    const sourceControlStore = useSourceControlStore();
    const rootStore = useRootStore();
    const uiStore = useUIStore();
    const schemaPreviewStore = useSchemaPreviewStore();
    const posthogStore = usePostHog();
    const toast = useToast();
    const route = useRoute();
    const nodeHelpers = useNodeHelpers();
    const externalHooks = useExternalHooks();
    const telemetry = useTelemetry();
    const i18n = useI18n();
    const node = toRef(props, "node");
    const pinnedData = usePinnedData(node, {
      runIndex: props.runIndex,
      displayMode: props.displayMode
    });
    const { isSubNodeType } = useNodeType({
      node
    });
    const isArchivedWorkflow = computed(() => workflowsStore.workflow.isArchived);
    const isReadOnlyRoute = computed(() => route.meta.readOnlyCanvas === true);
    const isWaitNodeWaiting = computed(() => {
      return node.value?.name && workflowExecution.value?.resultData?.runData?.[node.value?.name]?.[props.runIndex]?.executionStatus === "waiting";
    });
    const { activeNode } = storeToRefs(ndvStore);
    const nodeType = computed(() => {
      if (!node.value) return null;
      return nodeTypesStore.getNodeType(node.value.type, node.value.typeVersion);
    });
    const isSchemaView = computed(() => props.displayMode === "schema");
    const isSearchInSchemaView = computed(() => isSchemaView.value && !!search2.value);
    const hasMultipleInputNodes = computed(() => props.paneType === "input" && props.nodes.length > 0);
    const displaysMultipleNodes = computed(() => isSchemaView.value && hasMultipleInputNodes.value);
    const isTriggerNode = computed(() => !!node.value && nodeTypesStore.isTriggerNode(node.value.type));
    const canPinData = computed(
      () => !!node.value && pinnedData.canPinNode(false, currentOutputIndex.value) && !isPaneTypeInput.value && pinnedData.isValidNodeType.value && !(binaryData.value && binaryData.value.length > 0)
    );
    const hasNodeRun = computed(
      () => Boolean(
        !props.isExecuting && node.value && (workflowRunData.value && workflowRunData.value.hasOwnProperty(node.value.name) || pinnedData.hasData.value)
      )
    );
    const isArtificialRecoveredEventItem = computed(
      () => rawInputData.value?.[0]?.json?.isArtificialRecoveredEventItem
    );
    const isTrimmedManualExecutionDataItem = computed(
      () => rawInputData.value?.[0]?.json?.[TRIMMED_TASK_DATA_CONNECTIONS_KEY]
    );
    const subworkflowExecutionError = computed(() => {
      if (!node.value) return null;
      return {
        node: node.value,
        messages: [workflowsStore.subWorkflowExecutionError?.message ?? ""]
      };
    });
    const hasSubworkflowExecutionError = computed(() => !!workflowsStore.subWorkflowExecutionError);
    const parentNodeError = computed(() => {
      const parentNode = props.workflow.getChildNodes(node.value?.name ?? "", "ALL_NON_MAIN")[0];
      return workflowRunData.value?.[parentNode]?.[props.runIndex]?.error;
    });
    const workflowRunErrorAsNodeError = computed(() => {
      if (!node.value) {
        return null;
      }
      if (isSubNodeType.value && props.paneType === "input") {
        return parentNodeError.value;
      }
      return workflowRunData.value?.[node.value?.name]?.[props.runIndex]?.error;
    });
    const hasRunError = computed(() => Boolean(node.value && workflowRunErrorAsNodeError.value));
    const executionHints = computed(() => {
      if (hasNodeRun.value) {
        const hints = node.value && workflowRunData.value?.[node.value.name]?.[props.runIndex]?.hints;
        if (hints) return hints;
      }
      return [];
    });
    const workflowExecution = computed(
      () => props.workflowExecution ?? workflowsStore.getWorkflowExecution?.data ?? void 0
    );
    const workflowRunData = computed(() => {
      if (workflowExecution.value === void 0) {
        return null;
      }
      const executionData = workflowExecution.value;
      if (executionData?.resultData) {
        return executionData.resultData.runData;
      }
      return null;
    });
    const dataCount = computed(
      () => getDataCount(props.runIndex, currentOutputIndex.value, connectionType.value)
    );
    const unfilteredDataCount = computed(
      () => pinnedData.data.value ? pinnedData.data.value.length : rawInputData.value.length
    );
    const dataSizeInMB = computed(() => (dataSize.value / (1024 * 1024)).toFixed(1));
    const maxOutputIndex = computed(() => {
      if (node.value === null || props.runIndex === void 0) {
        return 0;
      }
      const runData = workflowRunData.value;
      if (!runData?.hasOwnProperty(node.value.name)) {
        return 0;
      }
      if (runData[node.value.name].length < props.runIndex) {
        return 0;
      }
      if (runData[node.value.name][props.runIndex]) {
        const taskData = runData[node.value.name][props.runIndex].data;
        if (taskData?.main) {
          return taskData.main.length - 1;
        }
      }
      return 0;
    });
    const currentPageOffset = computed(() => pageSize.value * (currentPage.value - 1));
    const maxRunIndex = computed(() => {
      if (!node.value) {
        return 0;
      }
      const runData = workflowRunData.value;
      if (!runData?.hasOwnProperty(node.value.name)) {
        return 0;
      }
      if (runData[node.value.name].length) {
        return runData[node.value.name].length - 1;
      }
      return 0;
    });
    const rawInputData = computed(
      () => getRawInputData(props.runIndex, currentOutputIndex.value, connectionType.value)
    );
    const unfilteredInputData = computed(() => getPinDataOrLiveData(rawInputData.value));
    const inputData = computed(() => getFilteredData(unfilteredInputData.value));
    const inputDataPage = computed(() => {
      const offset = pageSize.value * (currentPage.value - 1);
      return inputData.value.slice(offset, offset + pageSize.value);
    });
    const jsonData = computed(() => executionDataToJson(inputData.value));
    const binaryData = computed(() => {
      if (!node.value) {
        return [];
      }
      return nodeHelpers.getBinaryData(workflowRunData.value, node.value.name, props.runIndex, currentOutputIndex.value).filter((data) => Boolean(data && Object.keys(data).length));
    });
    const inputHtml = computed(() => String(inputData.value[0]?.json?.html ?? ""));
    const currentOutputIndex = computed(() => {
      if (props.overrideOutputs?.length && !props.overrideOutputs.includes(outputIndex.value)) {
        return props.overrideOutputs[0];
      }
      return Math.min(outputIndex.value, maxOutputIndex.value);
    });
    const branches = computed(() => {
      const capitalize = (name) => name.charAt(0).toLocaleUpperCase() + name.slice(1);
      const result = [];
      for (let i = 0; i <= maxOutputIndex.value; i++) {
        if (props.overrideOutputs && !props.overrideOutputs.includes(i)) {
          continue;
        }
        const totalItemsCount = getRawInputData(props.runIndex, i).length;
        const itemsCount2 = getDataCount(props.runIndex, i);
        const items = search2.value ? i18n.baseText("ndv.search.items", {
          adjustToNumber: totalItemsCount,
          interpolate: { matched: itemsCount2, total: totalItemsCount }
        }) : i18n.baseText("ndv.output.items", {
          adjustToNumber: itemsCount2,
          interpolate: { count: itemsCount2 }
        });
        let outputName = getOutputName(i);
        if (`${outputName}` === `${i}`) {
          outputName = `${i18n.baseText("ndv.output")} ${outputName}`;
        } else {
          const appendBranchWord = NODE_TYPES_EXCLUDED_FROM_OUTPUT_NAME_APPEND.includes(
            node.value?.type ?? ""
          ) ? "" : ` ${i18n.baseText("ndv.output.branch")}`;
          outputName = capitalize(`${getOutputName(i)}${appendBranchWord}`);
        }
        result.push({
          label: search2.value && itemsCount2 || totalItemsCount ? `${outputName} (${items})` : outputName,
          value: i
        });
      }
      return result;
    });
    const editMode2 = computed(() => {
      return isPaneTypeInput.value ? { enabled: false, value: "" } : ndvStore.outputPanelEditMode;
    });
    const isPaneTypeInput = computed(() => props.paneType === "input");
    const isPaneTypeOutput = computed(() => props.paneType === "output");
    const readOnlyEnv = computed(() => sourceControlStore.preferences.branchReadOnly);
    const showIOSearch = computed(
      () => hasNodeRun.value && !hasRunError.value && (unfilteredInputData.value.length > 0 || displaysMultipleNodes.value)
    );
    const inputSelectLocation = computed(() => {
      if (isSchemaView.value) return "none";
      if (!hasNodeRun.value) return "header";
      if (maxRunIndex.value > 0) return "runs";
      if (maxOutputIndex.value > 0 && branches.value.length > 1) {
        return "outputs";
      }
      return "items";
    });
    const showIoSearchNoMatchContent = computed(
      () => hasNodeRun.value && !inputData.value.length && !!search2.value && !displaysMultipleNodes.value
    );
    const parentNodeOutputData = computed(() => {
      const parentNode = props.workflow.getParentNodesByDepth(node.value?.name ?? "")[0];
      let parentNodeData = [];
      if (parentNode?.name) {
        parentNodeData = nodeHelpers.getNodeInputData(
          props.workflow.getNode(parentNode?.name),
          props.runIndex,
          outputIndex.value,
          "input",
          connectionType.value
        );
      }
      return parentNodeData;
    });
    const parentNodePinnedData = computed(() => {
      const parentNode = props.workflow.getParentNodesByDepth(node.value?.name ?? "")[0];
      return props.workflow.pinData?.[parentNode?.name || ""] ?? [];
    });
    const showPinButton = computed(() => {
      if (props.disablePin) {
        return false;
      }
      if (!rawInputData.value.length && !pinnedData.hasData.value) {
        return false;
      }
      if (editMode2.value.enabled) {
        return false;
      }
      if (binaryData.value?.length) {
        return isPaneTypeOutput.value;
      }
      return canPinData.value;
    });
    const pinButtonDisabled = computed(
      () => !rawInputData.value.length && !pinnedData.hasData.value || !!binaryData.value?.length || isReadOnlyRoute.value || readOnlyEnv.value || isArchivedWorkflow.value
    );
    const activeTaskMetadata = computed(() => {
      if (!node.value) {
        return null;
      }
      const errorMetadata = parseErrorMetadata(workflowRunErrorAsNodeError.value);
      if (errorMetadata !== void 0) {
        return errorMetadata;
      }
      if (parentNodeError.value) {
        const subNodeMetadata = parseErrorMetadata(parentNodeError.value);
        if (subNodeMetadata !== void 0) {
          return subNodeMetadata;
        }
      }
      return workflowRunData.value?.[node.value.name]?.[props.runIndex]?.metadata ?? null;
    });
    const hasInputOverwrite = computed(() => {
      if (!node.value) {
        return false;
      }
      const taskData = nodeHelpers.getNodeTaskData(node.value.name, props.runIndex);
      return Boolean(taskData?.inputOverride);
    });
    const isSchemaPreviewEnabled = computed(
      () => props.paneType === "input" && !(nodeType.value?.codex?.categories ?? []).some((category) => category === CORE_NODES_CATEGORY)
    );
    const isNDVV2 = computed(
      () => posthogStore.isVariantEnabled(
        NDV_UI_OVERHAUL_EXPERIMENT.name,
        NDV_UI_OVERHAUL_EXPERIMENT.variant
      )
    );
    const hasPreviewSchema = computedAsync(async () => {
      if (!isSchemaPreviewEnabled.value || props.nodes.length === 0) return false;
      const nodes = props.nodes.filter((n) => n.depth === 1).map((n) => workflowsStore.getNodeByName(n.name)).filter(isPresent);
      for (const connectedNode of nodes) {
        const { type, typeVersion, parameters } = connectedNode;
        const hasPreview = await schemaPreviewStore.getSchemaPreview({
          nodeType: type,
          version: typeVersion,
          resource: parameters.resource,
          operation: parameters.operation
        });
        if (hasPreview.ok) return true;
      }
      return false;
    }, false);
    const itemsCountProps = computed(() => ({
      search: search2.value,
      dataCount: dataCount.value,
      unfilteredDataCount: unfilteredDataCount.value,
      subExecutionsCount: activeTaskMetadata.value?.subExecutionsCount
    }));
    const parsedAiContent = computed(
      () => props.disableAiContent ? [] : parseAiContent(rawInputData.value, connectionType.value)
    );
    const hasParsedAiContent = computed(
      () => parsedAiContent.value.some((prr) => prr.parsedContent?.parsed)
    );
    function setInputBranchIndex(value) {
      if (props.paneType === "input") {
        outputIndex.value = value;
      }
    }
    watch(node, (newNode, prevNode) => {
      if (newNode?.id === prevNode?.id) return;
      init();
    });
    watch(hasNodeRun, () => {
      if (props.paneType === "output") setDisplayMode();
      else {
        outputIndex.value = determineInitialOutputIndex();
      }
    });
    watch(
      inputDataPage,
      (data) => {
        if (props.paneType && data) {
          ndvStore.setNDVPanelDataIsEmpty({
            panel: props.paneType,
            isEmpty: data.every((item) => isEmpty(item.json))
          });
        }
      },
      { immediate: true, deep: true }
    );
    watch(jsonData, (data, prevData) => {
      if (isEqual(data, prevData)) return;
      refreshDataSize();
      if (dataCount.value) {
        resetCurrentPageIfTooFar();
      }
      showPinDataDiscoveryTooltip(data);
    });
    watch(binaryData, (newData, prevData) => {
      if (newData.length && !prevData.length && props.displayMode !== "binary") {
        switchToBinary();
      } else if (!newData.length && props.displayMode === "binary") {
        onDisplayModeChange("table");
      }
    });
    watch(currentOutputIndex, (branchIndex) => {
      ndvStore.setNDVBranchIndex({
        pane: props.paneType,
        branchIndex
      });
    });
    watch(search2, (newSearch) => {
      emit("search", newSearch);
    });
    watch(
      hasParsedAiContent,
      (hasAiContent) => {
        if (hasAiContent && props.displayMode !== "ai") {
          emit("displayModeChange", "ai");
        }
      },
      { immediate: true }
    );
    onMounted(() => {
      init();
      ndvEventBus.on("setInputBranchIndex", setInputBranchIndex);
      if (!isPaneTypeInput.value) {
        showPinDataDiscoveryTooltip(jsonData.value);
      }
      ndvStore.setNDVBranchIndex({
        pane: props.paneType,
        branchIndex: currentOutputIndex.value
      });
      if (props.paneType === "output") {
        setDisplayMode();
        activatePane();
      }
      if (hasRunError.value && node.value) {
        const error = workflowRunData.value?.[node.value.name]?.[props.runIndex]?.error;
        const errorsToTrack = ["unknown error"];
        if (error && errorsToTrack.some((e) => error.message?.toLowerCase().includes(e))) {
          telemetry.track("User encountered an error", {
            node: node.value.type,
            errorMessage: error.message,
            nodeVersion: node.value.typeVersion,
            n8nVersion: rootStore.versionCli
          });
        }
      }
    });
    onBeforeUnmount(() => {
      hidePinDataDiscoveryTooltip();
      ndvEventBus.off("setInputBranchIndex", setInputBranchIndex);
    });
    function getResolvedNodeOutputs() {
      if (node.value && nodeType.value) {
        const workflowNode = props.workflow.getNode(node.value.name);
        if (workflowNode) {
          const outputs2 = getNodeOutputs(props.workflow, workflowNode, nodeType.value);
          return outputs2;
        }
      }
      return [];
    }
    function shouldHintBeDisplayed(hint) {
      const { location, whenToDisplay } = hint;
      if (location) {
        if (location === "ndv" && !["input", "output"].includes(props.paneType)) {
          return false;
        }
        if (location === "inputPane" && props.paneType !== "input") {
          return false;
        }
        if (location === "outputPane" && props.paneType !== "output") {
          return false;
        }
      }
      if (whenToDisplay === "afterExecution" && !hasNodeRun.value) {
        return false;
      }
      if (whenToDisplay === "beforeExecution" && hasNodeRun.value) {
        return false;
      }
      return true;
    }
    function getNodeHints() {
      try {
        if (node.value && nodeType.value) {
          const workflowNode = props.workflow.getNode(node.value.name);
          if (workflowNode) {
            const nodeHints = nodeHelpers.getNodeHints(props.workflow, workflowNode, nodeType.value, {
              runExecutionData: workflowExecution.value ?? null,
              runIndex: props.runIndex,
              connectionInputData: parentNodeOutputData.value
            });
            const hasMultipleInputItems = parentNodeOutputData.value.length > 1 || parentNodePinnedData.value.length > 1;
            const nodeOutputData = workflowRunData.value?.[node.value.name]?.[props.runIndex]?.data?.main?.[0] ?? [];
            const genericHints = getGenericHints({
              workflowNode,
              node: node.value,
              nodeType: nodeType.value,
              nodeOutputData,
              workflow: props.workflow,
              hasNodeRun: hasNodeRun.value,
              hasMultipleInputItems
            });
            return executionHints.value.concat(nodeHints, genericHints).filter(shouldHintBeDisplayed);
          }
        }
      } catch (error) {
        console.error("Error while getting node hints", error);
      }
      return [];
    }
    function onItemHover(itemIndex) {
      if (itemIndex === null) {
        emit("itemHover", null);
        return;
      }
      emit("itemHover", {
        outputIndex: currentOutputIndex.value,
        itemIndex
      });
    }
    function onClickDataPinningDocsLink() {
      telemetry.track("User clicked ndv link", {
        workflow_id: workflowsStore.workflowId,
        push_ref: props.pushRef,
        node_type: activeNode.value?.type,
        pane: "output",
        type: "data-pinning-docs"
      });
    }
    function showPinDataDiscoveryTooltip(value) {
      if (!isTriggerNode.value) {
        return;
      }
      const pinDataDiscoveryFlag = useStorage(LOCAL_STORAGE_PIN_DATA_DISCOVERY_NDV_FLAG).value;
      if (value && value.length > 0 && !isReadOnlyRoute.value && !isArchivedWorkflow.value && !pinDataDiscoveryFlag) {
        pinDataDiscoveryComplete();
        setTimeout(() => {
          isControlledPinDataTooltip.value = true;
          pinDataDiscoveryTooltipVisible.value = true;
          dataPinningEventBus.emit("data-pinning-discovery", { isTooltipVisible: true });
        }, 500);
      }
    }
    function hidePinDataDiscoveryTooltip() {
      if (pinDataDiscoveryTooltipVisible.value) {
        isControlledPinDataTooltip.value = false;
        pinDataDiscoveryTooltipVisible.value = false;
        dataPinningEventBus.emit("data-pinning-discovery", { isTooltipVisible: false });
      }
    }
    function pinDataDiscoveryComplete() {
      useStorage(LOCAL_STORAGE_PIN_DATA_DISCOVERY_NDV_FLAG).value = "true";
      useStorage(LOCAL_STORAGE_PIN_DATA_DISCOVERY_CANVAS_FLAG).value = "true";
    }
    function enterEditMode({ origin }) {
      const inputData2 = pinnedData.data.value ? clearJsonKey(pinnedData.data.value) : executionDataToJson(rawInputData.value);
      const inputDataLength = Array.isArray(inputData2) ? inputData2.length : Object.keys(inputData2 ?? {}).length;
      const data = inputDataLength > 0 ? inputData2 : TEST_PIN_DATA;
      ndvStore.setOutputPanelEditModeEnabled(true);
      ndvStore.setOutputPanelEditModeValue(JSON.stringify(data, null, 2));
      telemetry.track("User opened ndv edit state", {
        node_type: activeNode.value?.type,
        click_type: origin === "editIconButton" ? "button" : "link",
        push_ref: props.pushRef,
        run_index: props.runIndex,
        is_output_present: hasNodeRun.value || pinnedData.hasData.value,
        view: !hasNodeRun.value && !pinnedData.hasData.value ? "undefined" : props.displayMode,
        is_data_pinned: pinnedData.hasData.value
      });
    }
    function onClickCancelEdit() {
      ndvStore.setOutputPanelEditModeEnabled(false);
      ndvStore.setOutputPanelEditModeValue("");
      onExitEditMode({ type: "cancel" });
    }
    function onClickSaveEdit() {
      if (!node.value) {
        return;
      }
      const { value } = editMode2.value;
      toast.clearAllStickyNotifications();
      try {
        const clearedValue = clearJsonKey(value);
        try {
          pinnedData.setData(clearedValue, "save-edit");
        } catch (error) {
          return;
        }
      } catch (error) {
        toast.showError(error, i18n.baseText("ndv.pinData.error.syntaxError.title"));
        return;
      }
      ndvStore.setOutputPanelEditModeEnabled(false);
      onExitEditMode({ type: "save" });
    }
    function onExitEditMode({ type }) {
      telemetry.track("User closed ndv edit state", {
        node_type: activeNode.value?.type,
        push_ref: props.pushRef,
        run_index: props.runIndex,
        view: props.displayMode,
        type
      });
    }
    async function onTogglePinData({ source }) {
      if (!node.value) {
        return;
      }
      if (source === "pin-icon-click") {
        const telemetryPayload = {
          node_type: activeNode.value?.type,
          push_ref: props.pushRef,
          run_index: props.runIndex,
          view: !hasNodeRun.value && !pinnedData.hasData.value ? "none" : props.displayMode
        };
        void externalHooks.run("runData.onTogglePinData", telemetryPayload);
        telemetry.track("User clicked pin data icon", telemetryPayload);
      }
      nodeHelpers.updateNodeParameterIssues(node.value);
      if (pinnedData.hasData.value) {
        pinnedData.unsetData(source);
        return;
      }
      try {
        pinnedData.setData(rawInputData.value, "pin-icon-click");
      } catch (error) {
        console.error(error);
        return;
      }
      if (maxRunIndex.value > 0) {
        toast.showToast({
          title: i18n.baseText("ndv.pinData.pin.multipleRuns.title", {
            interpolate: {
              index: `${props.runIndex}`
            }
          }),
          message: i18n.baseText("ndv.pinData.pin.multipleRuns.description"),
          type: "success",
          duration: 2e3
        });
      }
      hidePinDataDiscoveryTooltip();
      pinDataDiscoveryComplete();
    }
    function switchToBinary() {
      onDisplayModeChange("binary");
    }
    function onBranchChange(value) {
      outputIndex.value = value;
      telemetry.track("User changed ndv branch", {
        push_ref: props.pushRef,
        branch_index: value,
        node_type: activeNode.value?.type,
        node_type_input_selection: nodeType.value ? nodeType.value.name : "",
        pane: props.paneType
      });
    }
    function showTooMuchData() {
      showData.value = true;
      userEnabledShowData.value = true;
      telemetry.track("User clicked ndv button", {
        node_type: activeNode.value?.type,
        workflow_id: workflowsStore.workflowId,
        push_ref: props.pushRef,
        pane: props.paneType,
        type: "showTooMuchData"
      });
    }
    function toggleLinkRuns() {
      if (props.linkedRuns) {
        unlinkRun();
      } else {
        linkRun();
      }
    }
    function linkRun() {
      emit("linkRun");
    }
    function unlinkRun() {
      emit("unlinkRun");
    }
    function onCurrentPageChange(value) {
      currentPage.value = value;
      telemetry.track("User changed ndv page", {
        node_type: activeNode.value?.type,
        workflow_id: workflowsStore.workflowId,
        push_ref: props.pushRef,
        pane: props.paneType,
        page_selected: currentPage.value,
        page_size: pageSize.value,
        items_total: dataCount.value
      });
    }
    function resetCurrentPageIfTooFar() {
      const maxPage = Math.ceil(dataCount.value / pageSize.value);
      if (maxPage < currentPage.value) {
        currentPage.value = maxPage;
      }
    }
    function onPageSizeChange(newPageSize) {
      pageSize.value = newPageSize;
      resetCurrentPageIfTooFar();
      telemetry.track("User changed ndv page size", {
        node_type: activeNode.value?.type,
        workflow_id: workflowsStore.workflowId,
        push_ref: props.pushRef,
        pane: props.paneType,
        page_selected: currentPage.value,
        page_size: pageSize.value,
        items_total: dataCount.value
      });
    }
    function onDisplayModeChange(newDisplayMode) {
      const previous = props.displayMode;
      emit("displayModeChange", newDisplayMode);
      if (!userEnabledShowData.value) updateShowData();
      if (dataContainerRef.value) {
        const dataDisplay2 = dataContainerRef.value.children[0];
        if (dataDisplay2) {
          dataDisplay2.scrollTo(0, 0);
        }
      }
      closeBinaryDataDisplay();
      void externalHooks.run("runData.displayModeChanged", {
        newValue: newDisplayMode,
        oldValue: previous
      });
      if (activeNode.value) {
        telemetry.track("User changed ndv item view", {
          previous_view: previous,
          new_view: newDisplayMode,
          node_type: activeNode.value.type,
          workflow_id: workflowsStore.workflowId,
          push_ref: props.pushRef,
          pane: props.paneType
        });
      }
    }
    function getRunLabel(option) {
      if (!node.value) {
        return;
      }
      let itemsCount2 = 0;
      for (let i = 0; i <= maxOutputIndex.value; i++) {
        itemsCount2 += getPinDataOrLiveData(getRawInputData(option - 1, i)).length;
      }
      const items = i18n.baseText("ndv.output.items", {
        adjustToNumber: itemsCount2,
        interpolate: { count: itemsCount2 }
      });
      const metadata = workflowRunData.value?.[node.value.name]?.[option - 1]?.metadata ?? null;
      const subexecutions = metadata?.subExecutionsCount ? i18n.baseText("ndv.output.andSubExecutions", {
        adjustToNumber: metadata.subExecutionsCount,
        interpolate: {
          count: metadata.subExecutionsCount
        }
      }) : "";
      const itemsLabel = itemsCount2 > 0 ? ` (${items}${subexecutions})` : "";
      return option + i18n.baseText("ndv.output.of") + (maxRunIndex.value + 1) + itemsLabel;
    }
    function getRawInputData(runIndex, outputIndex2, connectionType2 = NodeConnectionTypes.Main) {
      let inputData2 = [];
      if (node.value) {
        inputData2 = nodeHelpers.getNodeInputData(
          node.value,
          runIndex,
          outputIndex2,
          props.paneType,
          connectionType2,
          workflowExecution.value
        );
      }
      if (inputData2.length === 0 || !Array.isArray(inputData2)) {
        return [];
      }
      return inputData2;
    }
    function getPinDataOrLiveData(data) {
      if (pinnedData.data.value && !props.isProductionExecutionPreview) {
        return Array.isArray(pinnedData.data.value) ? pinnedData.data.value.map((value) => ({
          json: value
        })) : [
          {
            json: pinnedData.data.value
          }
        ];
      }
      return data;
    }
    function getFilteredData(data) {
      if (!search2.value || isSchemaView.value) {
        return data;
      }
      currentPage.value = 1;
      return data.filter(({ json }) => searchInObject(json, search2.value));
    }
    function getDataCount(runIndex, outputIndex2, connectionType2 = NodeConnectionTypes.Main) {
      if (!node.value) {
        return 0;
      }
      if (workflowRunData.value?.[node.value.name]?.[runIndex]?.hasOwnProperty("error")) {
        return 1;
      }
      const rawInputData2 = getRawInputData(runIndex, outputIndex2, connectionType2);
      const pinOrLiveData = getPinDataOrLiveData(rawInputData2);
      return getFilteredData(pinOrLiveData).length;
    }
    function determineInitialOutputIndex() {
      for (let i = 0; i <= maxOutputIndex.value; i++) {
        if (getRawInputData(props.runIndex, i).length) {
          return i;
        }
      }
      return 0;
    }
    function init() {
      outputIndex.value = determineInitialOutputIndex();
      refreshDataSize();
      closeBinaryDataDisplay();
      let outputTypes = [];
      if (node.value && nodeType.value) {
        const outputs2 = getResolvedNodeOutputs();
        outputTypes = getConnectionTypes(outputs2);
      }
      connectionType.value = outputTypes.length === 0 ? NodeConnectionTypes.Main : outputTypes[0];
      if (binaryData.value.length > 0) {
        emit("displayModeChange", "binary");
      } else if (props.displayMode === "binary") {
        emit("displayModeChange", "schema");
      }
      if (isNDVV2.value) {
        pageSize.value = RUN_DATA_DEFAULT_PAGE_SIZE;
      }
    }
    function closeBinaryDataDisplay() {
      binaryDataDisplayVisible.value = false;
      binaryDataDisplayData.value = null;
    }
    function isViewable(index, key) {
      const { mimeType } = binaryData.value[index][key];
      return ViewableMimeTypes.includes(mimeType);
    }
    function isDownloadable(index, key) {
      const { mimeType, fileName } = binaryData.value[index][key];
      return !!(mimeType && fileName);
    }
    async function downloadBinaryData(index, key) {
      const { id, data, fileName, fileExtension, mimeType } = binaryData.value[index][key];
      if (id) {
        const url = workflowsStore.getBinaryUrl(id, "download", fileName ?? "", mimeType);
        FileSaver_minExports.saveAs(url, [fileName, fileExtension].join("."));
        return;
      } else {
        const bufferString = "data:" + mimeType + ";base64," + data;
        const blob = await fetch(bufferString).then(async (d) => await d.blob());
        FileSaver_minExports.saveAs(blob, fileName);
      }
    }
    async function downloadJsonData() {
      const fileName = (node.value?.name ?? "").replace(/[^\w\d]/g, "_");
      const blob = new Blob([JSON.stringify(rawInputData.value, null, 2)], {
        type: "application/json"
      });
      FileSaver_minExports.saveAs(blob, `${fileName}.json`);
    }
    function displayBinaryData(index, key) {
      const { data, mimeType } = binaryData.value[index][key];
      binaryDataDisplayVisible.value = true;
      binaryDataDisplayData.value = {
        node: node.value?.name,
        runIndex: props.runIndex,
        outputIndex: currentOutputIndex.value,
        index,
        key,
        data,
        mimeType
      };
    }
    function getOutputName(outputIndex2) {
      if (node.value === null) {
        return outputIndex2 + 1;
      }
      const outputs2 = getResolvedNodeOutputs();
      const outputConfiguration = outputs2?.[outputIndex2];
      if (outputConfiguration && isObject(outputConfiguration)) {
        return outputConfiguration?.displayName;
      }
      if (!nodeType.value?.outputNames || nodeType.value.outputNames.length <= outputIndex2) {
        return outputIndex2 + 1;
      }
      return nodeType.value.outputNames[outputIndex2];
    }
    function refreshDataSize() {
      showData.value = false;
      const jsonItems = inputDataPage.value.map((item) => item.json);
      const byteSize = new Blob([JSON.stringify(jsonItems)]).size;
      dataSize.value = byteSize;
      updateShowData();
    }
    function updateShowData() {
      showData.value = isSchemaView.value && dataSize.value < MAX_DISPLAY_DATA_SIZE_SCHEMA_VIEW || dataSize.value < MAX_DISPLAY_DATA_SIZE;
    }
    function onRunIndexChange(run) {
      emit("runChange", run);
    }
    function enableNode() {
      if (node.value) {
        const updateInformation = {
          name: node.value.name,
          properties: {
            disabled: !node.value.disabled
          }
        };
        workflowsStore.updateNodeProperties(updateInformation);
      }
    }
    function setDisplayMode() {
      if (!activeNode.value) return;
      const shouldDisplayHtml = activeNode.value.type === HTML_NODE_TYPE && activeNode.value.parameters.operation === "generateHtmlTemplate";
      if (shouldDisplayHtml) {
        emit("displayModeChange", "html");
      }
    }
    function activatePane() {
      emit("activatePane");
    }
    function onSearchClear() {
      search2.value = "";
      document.dispatchEvent(new KeyboardEvent("keyup", { key: "/" }));
    }
    __expose({ enterEditMode });
    return (_ctx, _cache) => {
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "run-data",
          _ctx.$style.container,
          { [_ctx.$style["ndv-v2"]]: isNDVV2.value, [_ctx.$style.compact]: _ctx.compact }
        ]),
        onMouseover: activatePane
      }, [
        !isPaneTypeInput.value && unref(pinnedData).hasData.value && !editMode2.value.enabled && !_ctx.isProductionExecutionPreview ? (openBlock(), createBlock(unref(N8nCallout), {
          key: 0,
          theme: "secondary",
          icon: "pin",
          class: normalizeClass(_ctx.$style.pinnedDataCallout),
          "data-test-id": "ndv-pinned-data-callout"
        }, {
          trailingContent: withCtx(() => [
            createVNode(unref(N8nLink), {
              to: unref(DATA_PINNING_DOCS_URL),
              size: "small",
              theme: "secondary",
              bold: "",
              underline: "",
              onClick: onClickDataPinningDocsLink
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("runData.pindata.learnMore")), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ]),
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("runData.pindata.thisDataIsPinned")) + " ", 1),
            !isReadOnlyRoute.value && !isArchivedWorkflow.value && !readOnlyEnv.value ? (openBlock(), createElementBlock("span", _hoisted_1, [
              createVNode(unref(N8nLink), {
                theme: "secondary",
                size: "small",
                underline: "",
                bold: "",
                "data-test-id": "ndv-unpin-data",
                onClick: _cache[0] || (_cache[0] = withModifiers(($event) => onTogglePinData({ source: "banner-link" }), ["stop"]))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("runData.pindata.unpin")), 1)
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("", true),
        binaryDataDisplayData.value ? (openBlock(), createBlock(_sfc_main$7, {
          key: 1,
          "window-visible": binaryDataDisplayVisible.value,
          "display-data": binaryDataDisplayData.value,
          onClose: closeBinaryDataDisplay
        }, null, 8, ["window-visible", "display-data"])) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.title)
          }, [
            renderSlot(_ctx.$slots, "header", {}, void 0, true)
          ], 2),
          withDirectives(createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.displayModes),
            "data-test-id": "run-data-pane-header",
            onClick: _cache[5] || (_cache[5] = withModifiers(() => {
            }, ["stop"]))
          }, [
            (openBlock(), createBlock(Suspense, null, {
              default: withCtx(() => [
                showIOSearch.value ? (openBlock(), createBlock(unref(LazyRunDataSearch), {
                  key: 0,
                  modelValue: search2.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => search2.value = $event),
                  class: normalizeClass(_ctx.$style.search),
                  "pane-type": _ctx.paneType,
                  "display-mode": _ctx.displayMode,
                  "is-area-active": _ctx.isPaneActive,
                  onFocus: activatePane
                }, null, 8, ["modelValue", "class", "pane-type", "display-mode", "is-area-active"])) : createCommentVNode("", true)
              ]),
              _: 1
            })),
            _ctx.displayMode === "table" && _ctx.collapsingTableColumnName !== null ? (openBlock(), createBlock(unref(_sfc_main$b), {
              key: 0,
              class: normalizeClass(_ctx.$style.resetCollapseButton),
              text: "",
              icon: "chevrons-up-down",
              size: "xmini",
              type: "tertiary",
              onClick: _cache[2] || (_cache[2] = ($event) => emit("collapsingTableColumnChanged", null))
            }, null, 8, ["class"])) : createCommentVNode("", true),
            !_ctx.disableDisplayModeSelection ? withDirectives((openBlock(), createBlock(_sfc_main$2, {
              key: 1,
              compact: props.compact,
              value: _ctx.displayMode,
              "has-binary-data": binaryData.value.length > 0,
              "pane-type": _ctx.paneType,
              "node-generates-html": unref(activeNode)?.type === unref(HTML_NODE_TYPE) && unref(activeNode).parameters.operation === "generateHtmlTemplate",
              "has-renderable-data": hasParsedAiContent.value,
              onChange: onDisplayModeChange
            }, null, 8, ["compact", "value", "has-binary-data", "pane-type", "node-generates-html", "has-renderable-data"])), [
              [
                vShow,
                unref(hasPreviewSchema) || hasNodeRun.value && (inputData.value.length || binaryData.value.length || search2.value || hasMultipleInputNodes.value) && !editMode2.value.enabled
              ]
            ]) : createCommentVNode("", true),
            !props.disableEdit && canPinData.value && !isReadOnlyRoute.value && !readOnlyEnv.value ? withDirectives((openBlock(), createBlock(unref(_sfc_main$b), {
              key: 2,
              title: unref(i18n).baseText("runData.editOutput"),
              circle: false,
              disabled: node.value?.disabled,
              icon: "pencil",
              type: "tertiary",
              "data-test-id": "ndv-edit-pinned-data",
              onClick: _cache[3] || (_cache[3] = ($event) => enterEditMode({ origin: "editIconButton" }))
            }, null, 8, ["title", "disabled"])), [
              [vShow, !editMode2.value.enabled]
            ]) : createCommentVNode("", true),
            showPinButton.value ? (openBlock(), createBlock(RunDataPinButton, {
              key: 3,
              disabled: pinButtonDisabled.value,
              "tooltip-contents-visibility": {
                binaryDataTooltipContent: !!binaryData.value?.length,
                pinDataDiscoveryTooltipContent: isControlledPinDataTooltip.value && pinDataDiscoveryTooltipVisible.value
              },
              "data-pinning-docs-url": unref(DATA_PINNING_DOCS_URL),
              "pinned-data": unref(pinnedData),
              onTogglePinData: _cache[4] || (_cache[4] = ($event) => onTogglePinData({ source: "pin-icon-click" }))
            }, null, 8, ["disabled", "tooltip-contents-visibility", "data-pinning-docs-url", "pinned-data"])) : createCommentVNode("", true),
            !props.disableEdit ? withDirectives((openBlock(), createElementBlock("div", {
              key: 4,
              class: normalizeClass(_ctx.$style.editModeActions)
            }, [
              createVNode(unref(N8nButton), {
                type: "tertiary",
                label: unref(i18n).baseText("runData.editor.cancel"),
                onClick: onClickCancelEdit
              }, null, 8, ["label"]),
              createVNode(unref(N8nButton), {
                class: "ml-2xs",
                type: "primary",
                label: unref(i18n).baseText("runData.editor.save"),
                onClick: onClickSaveEdit
              }, null, 8, ["label"])
            ], 2)), [
              [vShow, editMode2.value.enabled]
            ]) : createCommentVNode("", true)
          ], 2), [
            [vShow, !hasRunError.value && !isTrimmedManualExecutionDataItem.value]
          ]),
          props.compact ? (openBlock(), createBlock(RunDataItemCount, normalizeProps(mergeProps({ key: 0 }, itemsCountProps.value)), null, 16)) : createCommentVNode("", true)
        ], 2),
        inputSelectLocation.value === "header" ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(_ctx.$style.inputSelect)
        }, [
          renderSlot(_ctx.$slots, "input-select", {}, void 0, true)
        ], 2)) : createCommentVNode("", true),
        maxRunIndex.value > 0 && !displaysMultipleNodes.value && !props.disableRunIndexSelection ? withDirectives((openBlock(), createElementBlock("div", {
          key: 3,
          class: normalizeClass(_ctx.$style.runSelector)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.runSelectorInner)
          }, [
            inputSelectLocation.value === "runs" ? renderSlot(_ctx.$slots, "input-select", { key: 0 }, void 0, true) : createCommentVNode("", true),
            createVNode(unref(N8nSelect), {
              "model-value": _ctx.runIndex,
              class: normalizeClass(_ctx.$style.runSelectorSelect),
              size: "small",
              teleported: "",
              "data-test-id": "run-selector",
              "onUpdate:modelValue": onRunIndexChange,
              onClick: _cache[6] || (_cache[6] = withModifiers(() => {
              }, ["stop"]))
            }, {
              prepend: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.run")), 1)
              ]),
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(maxRunIndex.value + 1, (option) => {
                  return openBlock(), createBlock(unref(_sfc_main$c), {
                    key: option,
                    label: getRunLabel(option),
                    value: option - 1
                  }, null, 8, ["label", "value"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["model-value", "class"]),
            _ctx.canLinkRuns ? (openBlock(), createBlock(unref(N8nTooltip), {
              key: 1,
              placement: "right"
            }, {
              content: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText(_ctx.linkedRuns ? "runData.unlinking.hint" : "runData.linking.hint")), 1)
              ]),
              default: withCtx(() => [
                createVNode(unref(_sfc_main$b), {
                  icon: _ctx.linkedRuns ? "unlink" : "link",
                  class: normalizeClass(["linkRun", _ctx.linkedRuns ? "linked" : ""]),
                  text: "",
                  type: "tertiary",
                  size: "small",
                  "data-test-id": "link-run",
                  onClick: toggleLinkRuns
                }, null, 8, ["icon", "class"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "run-info", {}, void 0, true)
          ], 2),
          activeTaskMetadata.value && !(_ctx.paneType === "input" && hasInputOverwrite.value) ? (openBlock(), createBlock(ViewSubExecution, {
            key: 0,
            "task-metadata": activeTaskMetadata.value,
            "display-mode": _ctx.displayMode
          }, null, 8, ["task-metadata", "display-mode"])) : createCommentVNode("", true)
        ], 2)), [
          [vShow, !editMode2.value.enabled]
        ]) : createCommentVNode("", true),
        !displaysMultipleNodes.value ? renderSlot(_ctx.$slots, "before-data", { key: 4 }, void 0, true) : createCommentVNode("", true),
        props.calloutMessage || _ctx.$slots["callout-message"] ? (openBlock(), createElementBlock("div", {
          key: 5,
          class: normalizeClass(_ctx.$style.hintCallout)
        }, [
          createVNode(unref(N8nCallout), {
            theme: "info",
            "data-test-id": "run-data-callout"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "callout-message", {}, () => [
                withDirectives(createVNode(unref(N8nText), { size: "small" }, null, 512), [
                  [_directive_n8n_html, props.calloutMessage]
                ])
              ], true)
            ]),
            _: 3
          })
        ], 2)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(getNodeHints(), (hint) => {
          return openBlock(), createBlock(unref(N8nCallout), {
            key: hint.message,
            class: normalizeClass(_ctx.$style.hintCallout),
            theme: hint.type || "info",
            "data-test-id": "node-hint"
          }, {
            default: withCtx(() => [
              withDirectives(createVNode(unref(N8nText), { size: "small" }, null, 512), [
                [_directive_n8n_html, hint.message]
              ])
            ]),
            _: 2
          }, 1032, ["class", "theme"]);
        }), 128)),
        maxOutputIndex.value > 0 && branches.value.length > 1 && !displaysMultipleNodes.value ? (openBlock(), createElementBlock("div", {
          key: 6,
          class: normalizeClass(_ctx.$style.outputs),
          "data-test-id": "branches"
        }, [
          inputSelectLocation.value === "outputs" ? renderSlot(_ctx.$slots, "input-select", { key: 0 }, void 0, true) : createCommentVNode("", true),
          activeTaskMetadata.value && !(_ctx.paneType === "input" && hasInputOverwrite.value) ? (openBlock(), createBlock(ViewSubExecution, {
            key: 1,
            "task-metadata": activeTaskMetadata.value,
            "display-mode": _ctx.displayMode
          }, null, 8, ["task-metadata", "display-mode"])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.tabs)
          }, [
            createVNode(unref(N8nTabs), {
              size: "small",
              "model-value": currentOutputIndex.value,
              options: branches.value,
              "onUpdate:modelValue": onBranchChange
            }, null, 8, ["model-value", "options"])
          ], 2)
        ], 2)) : !props.compact && hasNodeRun.value && !isSearchInSchemaView.value && (dataCount.value > 0 && maxRunIndex.value === 0 || search2.value) && !isArtificialRecoveredEventItem.value && !displaysMultipleNodes.value ? withDirectives((openBlock(), createElementBlock("div", {
          key: 7,
          class: normalizeClass(_ctx.$style.itemsCount),
          "data-test-id": "ndv-items-count"
        }, [
          inputSelectLocation.value === "items" ? renderSlot(_ctx.$slots, "input-select", { key: 0 }, void 0, true) : createCommentVNode("", true),
          createVNode(RunDataItemCount, normalizeProps(guardReactiveProps(itemsCountProps.value)), null, 16),
          activeTaskMetadata.value && !(_ctx.paneType === "input" && hasInputOverwrite.value) ? (openBlock(), createBlock(ViewSubExecution, {
            key: 1,
            "task-metadata": activeTaskMetadata.value,
            "display-mode": _ctx.displayMode
          }, null, 8, ["task-metadata", "display-mode"])) : createCommentVNode("", true)
        ], 2)), [
          [vShow, !editMode2.value.enabled]
        ]) : createCommentVNode("", true),
        createBaseVNode("div", {
          ref_key: "dataContainerRef",
          ref: dataContainerRef,
          class: normalizeClass(_ctx.$style.dataContainer),
          "data-test-id": "ndv-data-container"
        }, [
          _ctx.isExecuting && !isWaitNodeWaiting.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([_ctx.$style.center, _ctx.$style.executingMessage]),
            "data-test-id": "ndv-executing"
          }, [
            !props.compact ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.$style.spinner)
            }, [
              createVNode(unref(_sfc_main$d), { type: "ring" })
            ], 2)) : createCommentVNode("", true),
            createVNode(unref(N8nText), null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.executingMessage), 1)
              ]),
              _: 1
            })
          ], 2)) : editMode2.value.enabled ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(_ctx.$style.editMode)
          }, [
            createBaseVNode("div", {
              class: normalizeClass([_ctx.$style.editModeBody, "ignore-key-press-canvas"])
            }, [
              createVNode(__unplugin_components_9, {
                "model-value": editMode2.value.value,
                "fill-parent": true,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(ndvStore).setOutputPanelEditModeValue($event))
              }, null, 8, ["model-value"])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.editModeFooter)
            }, [
              createVNode(unref(InfoTip), {
                bold: false,
                class: normalizeClass(_ctx.$style.editModeFooterInfotip)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("runData.editor.copyDataInfo")) + " ", 1),
                  createVNode(unref(N8nLink), {
                    to: unref(DATA_EDITING_DOCS_URL),
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("generic.learnMore")), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                _: 1
              }, 8, ["class"])
            ], 2)
          ], 2)) : _ctx.paneType === "output" && hasSubworkflowExecutionError.value && subworkflowExecutionError.value ? (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass(_ctx.$style.stretchVertically)
          }, [
            createVNode(_sfc_main$6, {
              compact: _ctx.compact,
              error: subworkflowExecutionError.value,
              class: normalizeClass(_ctx.$style.errorDisplay),
              "show-details": ""
            }, null, 8, ["compact", "error", "class"])
          ], 2)) : isWaitNodeWaiting.value ? (openBlock(), createElementBlock("div", {
            key: 3,
            class: normalizeClass(_ctx.$style.center)
          }, [
            renderSlot(_ctx.$slots, "node-waiting", {}, () => [
              _cache[11] || (_cache[11] = createTextVNode("xxx"))
            ], true)
          ], 2)) : !hasNodeRun.value && !(displaysMultipleNodes.value && (node.value?.disabled || unref(hasPreviewSchema))) ? (openBlock(), createElementBlock("div", {
            key: 4,
            class: normalizeClass(_ctx.$style.center)
          }, [
            renderSlot(_ctx.$slots, "node-not-run", {}, void 0, true)
          ], 2)) : _ctx.paneType === "input" && !displaysMultipleNodes.value && node.value?.disabled ? (openBlock(), createElementBlock("div", {
            key: 5,
            class: normalizeClass(_ctx.$style.center)
          }, [
            createVNode(unref(N8nText), null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.disabled", { interpolate: { nodeName: node.value.name } })) + " ", 1),
                createVNode(unref(N8nLink), { onClick: enableNode }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.disabled.cta")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ], 2)) : isTrimmedManualExecutionDataItem.value && unref(uiStore).isProcessingExecutionResults ? (openBlock(), createElementBlock("div", {
            key: 6,
            class: normalizeClass(_ctx.$style.center)
          }, [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.spinner)
            }, [
              createVNode(unref(_sfc_main$d), { type: "ring" })
            ], 2),
            createVNode(unref(N8nText), {
              color: "text-dark",
              size: "large"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("runData.trimmedData.loading")), 1)
              ]),
              _: 1
            })
          ], 2)) : isTrimmedManualExecutionDataItem.value ? (openBlock(), createElementBlock("div", {
            key: 7,
            class: normalizeClass(_ctx.$style.center)
          }, [
            createVNode(unref(N8nText), {
              bold: "",
              color: "text-dark",
              size: "large"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("runData.trimmedData.title")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nText), null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("runData.trimmedData.message")), 1)
              ]),
              _: 1
            })
          ], 2)) : hasNodeRun.value && isArtificialRecoveredEventItem.value ? (openBlock(), createElementBlock("div", {
            key: 8,
            class: normalizeClass(_ctx.$style.center)
          }, [
            renderSlot(_ctx.$slots, "recovered-artificial-output-data", {}, void 0, true)
          ], 2)) : hasNodeRun.value && hasRunError.value ? (openBlock(), createElementBlock("div", {
            key: 9,
            class: normalizeClass(_ctx.$style.stretchVertically)
          }, [
            isPaneTypeInput.value ? (openBlock(), createBlock(unref(N8nText), {
              key: 0,
              class: normalizeClass(_ctx.$style.center),
              size: "large",
              tag: "p",
              bold: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("nodeErrorView.inputPanel.previousNodeError.title", {
                  interpolate: { nodeName: node.value?.name ?? "" }
                })), 1)
              ]),
              _: 1
            }, 8, ["class"])) : _ctx.$slots["content"] ? (openBlock(), createElementBlock("div", _hoisted_2, [
              workflowRunErrorAsNodeError.value ? (openBlock(), createBlock(_sfc_main$6, {
                key: 0,
                error: workflowRunErrorAsNodeError.value,
                class: normalizeClass(_ctx.$style.inlineError),
                compact: _ctx.compact
              }, null, 8, ["error", "class", "compact"])) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "content", {}, void 0, true)
            ])) : workflowRunErrorAsNodeError.value ? (openBlock(), createBlock(_sfc_main$6, {
              key: 2,
              error: workflowRunErrorAsNodeError.value,
              class: normalizeClass(_ctx.$style.dataDisplay),
              compact: _ctx.compact,
              "show-details": ""
            }, null, 8, ["error", "class", "compact"])) : createCommentVNode("", true)
          ], 2)) : hasNodeRun.value && (!unfilteredDataCount.value || search2.value && !dataCount.value) && !displaysMultipleNodes.value && branches.value.length > 1 ? (openBlock(), createElementBlock("div", {
            key: 10,
            class: normalizeClass(_ctx.$style.center)
          }, [
            search2.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
              createVNode(unref(N8nText), {
                tag: "h3",
                size: "large"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("ndv.search.noMatch.title")), 1)
                ]),
                _: 1
              }),
              createVNode(unref(N8nText), null, {
                default: withCtx(() => [
                  createVNode(unref(I18nT), {
                    keypath: "ndv.search.noMatch.description",
                    tag: "span",
                    scope: "global"
                  }, {
                    link: withCtx(() => [
                      createBaseVNode("a", {
                        href: "#",
                        onClick: onSearchClear
                      }, toDisplayString(unref(i18n).baseText("ndv.search.noMatch.description.link")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])) : (openBlock(), createBlock(unref(N8nText), { key: 1 }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.noDataInBranchMessage), 1)
              ]),
              _: 1
            }))
          ], 2)) : hasNodeRun.value && !inputData.value.length && !displaysMultipleNodes.value && !search2.value ? (openBlock(), createElementBlock("div", {
            key: 11,
            class: normalizeClass(_ctx.$style.center)
          }, [
            renderSlot(_ctx.$slots, "no-output-data", {}, void 0, true)
          ], 2)) : hasNodeRun.value && !showData.value ? (openBlock(), createElementBlock("div", {
            key: 12,
            "data-test-id": "ndv-data-size-warning",
            class: normalizeClass(_ctx.$style.center)
          }, [
            createVNode(unref(N8nText), {
              bold: true,
              color: "text-dark",
              size: "large"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.tooMuchDataTitle), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nText), {
              align: "center",
              tag: "div"
            }, {
              default: withCtx(() => [
                withDirectives(createBaseVNode("span", null, null, 512), [
                  [
                    _directive_n8n_html,
                    unref(i18n).baseText("ndv.output.tooMuchData.message", {
                      interpolate: { size: dataSizeInMB.value }
                    })
                  ]
                ])
              ]),
              _: 1
            }),
            createVNode(unref(N8nButton), {
              outline: "",
              label: unref(i18n).baseText("ndv.output.tooMuchData.showDataAnyway"),
              onClick: showTooMuchData
            }, null, 8, ["label"]),
            createVNode(unref(N8nButton), {
              size: "small",
              label: unref(i18n).baseText("runData.downloadBinaryData"),
              onClick: _cache[8] || (_cache[8] = ($event) => downloadJsonData())
            }, null, 8, ["label"])
          ], 2)) : hasNodeRun.value && _ctx.$slots["content"] ? renderSlot(_ctx.$slots, "content", { key: 13 }, void 0, true) : hasNodeRun.value && _ctx.displayMode === "table" && binaryData.value.length > 0 && inputData.value.length === 1 && Object.keys(jsonData.value[0] || {}).length === 0 ? (openBlock(), createElementBlock("div", {
            key: 14,
            class: normalizeClass(_ctx.$style.center)
          }, [
            createVNode(unref(N8nText), null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("runData.switchToBinary.info")) + " ", 1),
                createBaseVNode("a", { onClick: switchToBinary }, toDisplayString(unref(i18n).baseText("runData.switchToBinary.binary")), 1)
              ]),
              _: 1
            })
          ], 2)) : showIoSearchNoMatchContent.value ? (openBlock(), createElementBlock("div", {
            key: 15,
            class: normalizeClass(_ctx.$style.center)
          }, [
            createVNode(unref(N8nText), {
              tag: "h3",
              size: "large"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("ndv.search.noMatch.title")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nText), null, {
              default: withCtx(() => [
                createVNode(unref(I18nT), {
                  keypath: "ndv.search.noMatch.description",
                  tag: "span",
                  scope: "global"
                }, {
                  link: withCtx(() => [
                    createBaseVNode("a", {
                      href: "#",
                      onClick: onSearchClear
                    }, toDisplayString(unref(i18n).baseText("ndv.search.noMatch.description.link")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ], 2)) : hasNodeRun.value && _ctx.displayMode === "table" && node.value ? (openBlock(), createBlock(Suspense, { key: 16 }, {
            default: withCtx(() => [
              createVNode(unref(LazyRunDataTable), {
                node: node.value,
                "input-data": inputDataPage.value,
                "mapping-enabled": _ctx.mappingEnabled,
                "distance-from-active": _ctx.distanceFromActive,
                "run-index": _ctx.runIndex,
                "page-offset": currentPageOffset.value,
                "total-runs": maxRunIndex.value,
                "has-default-hover-state": _ctx.paneType === "input" && !search2.value,
                search: search2.value,
                "header-bg-color": _ctx.tableHeaderBgColor,
                compact: props.compact,
                "disable-hover-highlight": props.disableHoverHighlight,
                "collapsing-column-name": _ctx.collapsingTableColumnName,
                onMounted: _cache[9] || (_cache[9] = ($event) => emit("tableMounted", $event)),
                onActiveRowChanged: onItemHover,
                onDisplayModeChange,
                onCollapsingColumnChanged: _cache[10] || (_cache[10] = ($event) => emit("collapsingTableColumnChanged", $event))
              }, null, 8, ["node", "input-data", "mapping-enabled", "distance-from-active", "run-index", "page-offset", "total-runs", "has-default-hover-state", "search", "header-bg-color", "compact", "disable-hover-highlight", "collapsing-column-name"])
            ]),
            _: 1
          })) : hasNodeRun.value && _ctx.displayMode === "json" && node.value ? (openBlock(), createBlock(Suspense, { key: 17 }, {
            default: withCtx(() => [
              createVNode(unref(LazyRunDataJson), {
                "pane-type": _ctx.paneType,
                "edit-mode": editMode2.value,
                "push-ref": _ctx.pushRef,
                node: node.value,
                "input-data": inputDataPage.value,
                "mapping-enabled": _ctx.mappingEnabled,
                "distance-from-active": _ctx.distanceFromActive,
                "run-index": _ctx.runIndex,
                "output-index": currentOutputIndex.value,
                "total-runs": maxRunIndex.value,
                search: search2.value,
                compact: props.compact
              }, null, 8, ["pane-type", "edit-mode", "push-ref", "node", "input-data", "mapping-enabled", "distance-from-active", "run-index", "output-index", "total-runs", "search", "compact"])
            ]),
            _: 1
          })) : hasNodeRun.value && isPaneTypeOutput.value && _ctx.displayMode === "html" ? (openBlock(), createBlock(Suspense, { key: 18 }, {
            default: withCtx(() => [
              createVNode(unref(LazyRunDataHtml), { "input-html": inputHtml.value }, null, 8, ["input-html"])
            ]),
            _: 1
          })) : hasNodeRun.value && _ctx.displayMode === "ai" ? (openBlock(), createBlock(Suspense, { key: 19 }, {
            default: withCtx(() => [
              createVNode(unref(LazyRunDataAi), {
                "render-type": "rendered",
                compact: _ctx.compact,
                content: parsedAiContent.value,
                search: search2.value
              }, null, 8, ["compact", "content", "search"])
            ]),
            _: 1
          })) : (hasNodeRun.value || unref(hasPreviewSchema)) && isSchemaView.value ? (openBlock(), createBlock(Suspense, { key: 20 }, {
            default: withCtx(() => [
              createVNode(unref(LazyRunDataSchema), {
                nodes: _ctx.nodes,
                "mapping-enabled": _ctx.mappingEnabled,
                node: node.value,
                data: jsonData.value,
                "pane-type": _ctx.paneType,
                "connection-type": connectionType.value,
                "output-index": currentOutputIndex.value,
                search: search2.value,
                class: normalizeClass(_ctx.$style.schema),
                compact: props.compact,
                "onClear:search": onSearchClear
              }, null, 8, ["nodes", "mapping-enabled", "node", "data", "pane-type", "connection-type", "output-index", "search", "class", "compact"])
            ]),
            _: 1
          })) : _ctx.displayMode === "binary" && binaryData.value.length === 0 ? (openBlock(), createElementBlock("div", {
            key: 21,
            class: normalizeClass(_ctx.$style.center)
          }, [
            createVNode(unref(N8nText), {
              align: "center",
              tag: "div"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("runData.noBinaryDataFound")), 1)
              ]),
              _: 1
            })
          ], 2)) : _ctx.displayMode === "binary" ? (openBlock(), createElementBlock("div", {
            key: 22,
            class: normalizeClass(_ctx.$style.dataDisplay)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(binaryData.value, (binaryDataEntry, index) => {
              return openBlock(), createElementBlock("div", { key: index }, [
                binaryData.value.length > 1 ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.binaryIndex)
                }, [
                  createBaseVNode("div", null, toDisplayString(index + 1), 1)
                ], 2)) : createCommentVNode("", true),
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.binaryRow)
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(binaryDataEntry, (binaryData2, key) => {
                    return openBlock(), createElementBlock("div", {
                      key: index + "_" + key,
                      class: normalizeClass(_ctx.$style.binaryCell)
                    }, [
                      createBaseVNode("div", {
                        "data-test-id": "ndv-binary-data_" + index
                      }, [
                        createBaseVNode("div", {
                          class: normalizeClass(_ctx.$style.binaryHeader)
                        }, toDisplayString(key), 3),
                        binaryData2.fileName ? (openBlock(), createElementBlock("div", _hoisted_5, [
                          createBaseVNode("div", null, [
                            createVNode(unref(N8nText), {
                              size: "small",
                              bold: true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(i18n).baseText("runData.fileName")) + ": ", 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", {
                            class: normalizeClass(_ctx.$style.binaryValue)
                          }, toDisplayString(binaryData2.fileName), 3)
                        ])) : createCommentVNode("", true),
                        binaryData2.directory ? (openBlock(), createElementBlock("div", _hoisted_6, [
                          createBaseVNode("div", null, [
                            createVNode(unref(N8nText), {
                              size: "small",
                              bold: true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(i18n).baseText("runData.directory")) + ": ", 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", {
                            class: normalizeClass(_ctx.$style.binaryValue)
                          }, toDisplayString(binaryData2.directory), 3)
                        ])) : createCommentVNode("", true),
                        binaryData2.fileExtension ? (openBlock(), createElementBlock("div", _hoisted_7, [
                          createBaseVNode("div", null, [
                            createVNode(unref(N8nText), {
                              size: "small",
                              bold: true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(i18n).baseText("runData.fileExtension")) + ":", 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", {
                            class: normalizeClass(_ctx.$style.binaryValue)
                          }, toDisplayString(binaryData2.fileExtension), 3)
                        ])) : createCommentVNode("", true),
                        binaryData2.mimeType ? (openBlock(), createElementBlock("div", _hoisted_8, [
                          createBaseVNode("div", null, [
                            createVNode(unref(N8nText), {
                              size: "small",
                              bold: true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(i18n).baseText("runData.mimeType")) + ": ", 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", {
                            class: normalizeClass(_ctx.$style.binaryValue)
                          }, toDisplayString(binaryData2.mimeType), 3)
                        ])) : createCommentVNode("", true),
                        binaryData2.fileSize ? (openBlock(), createElementBlock("div", _hoisted_9, [
                          createBaseVNode("div", null, [
                            createVNode(unref(N8nText), {
                              size: "small",
                              bold: true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(i18n).baseText("runData.fileSize")) + ": ", 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", {
                            class: normalizeClass(_ctx.$style.binaryValue)
                          }, toDisplayString(binaryData2.fileSize), 3)
                        ])) : createCommentVNode("", true),
                        createBaseVNode("div", {
                          class: normalizeClass(_ctx.$style.binaryButtonContainer)
                        }, [
                          isViewable(index, key) ? (openBlock(), createBlock(unref(N8nButton), {
                            key: 0,
                            size: "small",
                            label: unref(i18n).baseText("runData.showBinaryData"),
                            "data-test-id": "ndv-view-binary-data",
                            onClick: ($event) => displayBinaryData(index, key)
                          }, null, 8, ["label", "onClick"])) : createCommentVNode("", true),
                          isDownloadable(index, key) ? (openBlock(), createBlock(unref(N8nButton), {
                            key: 1,
                            size: "small",
                            type: "secondary",
                            label: unref(i18n).baseText("runData.downloadBinaryData"),
                            "data-test-id": "ndv-download-binary-data",
                            onClick: ($event) => downloadBinaryData(index, key)
                          }, null, 8, ["label", "onClick"])) : createCommentVNode("", true)
                        ], 2)
                      ], 8, _hoisted_4)
                    ], 2);
                  }), 128))
                ], 2)
              ]);
            }), 128))
          ], 2)) : !hasNodeRun.value ? (openBlock(), createElementBlock("div", {
            key: 23,
            class: normalizeClass(_ctx.$style.center)
          }, [
            renderSlot(_ctx.$slots, "node-not-run", {}, void 0, true)
          ], 2)) : createCommentVNode("", true)
        ], 2),
        _ctx.hidePagination === false && hasNodeRun.value && !hasRunError.value && _ctx.displayMode !== "binary" && dataCount.value > pageSize.value && !isSchemaView.value && !isArtificialRecoveredEventItem.value ? withDirectives((openBlock(), createBlock(RunDataPaginationBar, {
          key: 8,
          "current-page": currentPage.value,
          "page-size": pageSize.value,
          total: dataCount.value,
          "onUpdate:currentPage": onCurrentPageChange,
          "onUpdate:pageSize": onPageSizeChange
        }, null, 8, ["current-page", "page-size", "total"])), [
          [vShow, !editMode2.value.enabled]
        ]) : createCommentVNode("", true),
        createVNode(unref(N8nBlockUi), {
          show: _ctx.blockUI,
          class: normalizeClass(_ctx.$style.uiBlocker)
        }, null, 8, ["show", "class"])
      ], 34);
    };
  }
});
const infoIcon = "_infoIcon_1btpo_123";
const center = "_center_1btpo_127";
const container = "_container_1btpo_141";
const pinnedDataCallout = "_pinnedDataCallout_1btpo_150";
const header = "_header_1btpo_158";
const compact = "_compact_1btpo_170";
const dataContainer = "_dataContainer_1btpo_183";
const dataDisplay = "_dataDisplay_1btpo_189";
const inlineError = "_inlineError_1btpo_204";
const outputs = "_outputs_1btpo_211";
const tabs = "_tabs_1btpo_226";
const itemsCount = "_itemsCount_1btpo_234";
const inputSelect = "_inputSelect_1btpo_248";
const runSelector = "_runSelector_1btpo_254";
const runSelectorInner = "_runSelectorInner_1btpo_267";
const runSelectorSelect = "_runSelectorSelect_1btpo_273";
const search = "_search_1btpo_277";
const binaryIndex = "_binaryIndex_1btpo_281";
const binaryRow = "_binaryRow_1btpo_298";
const binaryCell = "_binaryCell_1btpo_303";
const binaryHeader = "_binaryHeader_1btpo_315";
const binaryButtonContainer = "_binaryButtonContainer_1btpo_324";
const binaryValue = "_binaryValue_1btpo_335";
const displayModes = "_displayModes_1btpo_340";
const tooltipContain = "_tooltipContain_1btpo_359";
const spinner = "_spinner_1btpo_363";
const editMode = "_editMode_1btpo_374";
const editModeBody = "_editModeBody_1btpo_383";
const editModeFooter = "_editModeFooter_1btpo_390";
const editModeFooterInfotip = "_editModeFooterInfotip_1btpo_400";
const editModeActions = "_editModeActions_1btpo_406";
const stretchVertically = "_stretchVertically_1btpo_413";
const uiBlocker = "_uiBlocker_1btpo_417";
const hintCallout = "_hintCallout_1btpo_422";
const schema = "_schema_1btpo_431";
const executingMessage = "_executingMessage_1btpo_435";
const resetCollapseButton = "_resetCollapseButton_1btpo_439";
const title = "_title_1btpo_445";
const style0 = {
  infoIcon,
  center,
  container,
  pinnedDataCallout,
  header,
  compact,
  dataContainer,
  dataDisplay,
  inlineError,
  outputs,
  tabs,
  itemsCount,
  "ndv-v2": "_ndv-v2_1btpo_244",
  inputSelect,
  runSelector,
  runSelectorInner,
  runSelectorSelect,
  search,
  binaryIndex,
  binaryRow,
  binaryCell,
  binaryHeader,
  binaryButtonContainer,
  binaryValue,
  displayModes,
  tooltipContain,
  spinner,
  editMode,
  editModeBody,
  editModeFooter,
  editModeFooterInfotip,
  editModeActions,
  stretchVertically,
  uiBlocker,
  hintCallout,
  schema,
  executingMessage,
  resetCollapseButton,
  title
};
const cssModules = {
  "$style": style0
};
const RunData = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules], ["__scopeId", "data-v-d4a2273f"]]);
const canvasEventBus = createEventBus();
const useExperimentalNdvStore = defineStore("experimentalNdv", () => {
  const workflowStore = useWorkflowsStore();
  const settingsStore = useSettingsStore();
  const isEnabled = computed(
    () => !Number.isNaN(settingsStore.experimental__minZoomNodeSettingsInCanvas) && settingsStore.experimental__minZoomNodeSettingsInCanvas > 0
  );
  const maxCanvasZoom = computed(
    () => isEnabled.value ? settingsStore.experimental__minZoomNodeSettingsInCanvas : 4
  );
  const collapsedNodes = shallowRef({});
  function setNodeExpanded(nodeId, isExpanded) {
    collapsedNodes.value = {
      ...collapsedNodes.value,
      [nodeId]: isExpanded === void 0 ? !collapsedNodes.value[nodeId] : !isExpanded
    };
  }
  function collapseAllNodes() {
    collapsedNodes.value = workflowStore.allNodes.reduce(
      (acc, node) => {
        acc[node.id] = true;
        return acc;
      },
      {}
    );
  }
  function expandAllNodes() {
    collapsedNodes.value = {};
  }
  function isActive(canvasZoom) {
    return isEnabled.value && canvasZoom === maxCanvasZoom.value;
  }
  function focusNode(nodeId) {
    const nodeToFocus = workflowStore.getNodeById(nodeId);
    if (!nodeToFocus) {
      return;
    }
    const vueFlow = useVueFlow(workflowStore.workflow.id);
    collapsedNodes.value = workflowStore.allNodes.reduce(
      (acc, node) => {
        acc[node.id] = node.id !== nodeId;
        return acc;
      },
      {}
    );
    const workflow = workflowStore.getCurrentWorkflow();
    const nodeSize = calculateNodeSize(
      workflow.getChildNodes(nodeToFocus.name, "ALL_NON_MAIN").length > 0,
      workflow.getParentNodes(nodeToFocus.name, "ALL_NON_MAIN").length > 0,
      workflow.getParentNodes(nodeToFocus.name, "main").length,
      workflow.getChildNodes(nodeToFocus.name, "main").length,
      workflow.getParentNodes(nodeToFocus.name, "ALL_NON_MAIN").length
    );
    void vueFlow.setCenter(
      nodeToFocus.position[0] + nodeSize.width * 1.5 / 2,
      nodeToFocus.position[1] + 80,
      { duration: 200, zoom: maxCanvasZoom.value }
    );
  }
  return {
    isEnabled,
    maxCanvasZoom,
    collapsedNodes: computed(() => collapsedNodes.value),
    isActive,
    setNodeExpanded,
    expandAllNodes,
    collapseAllNodes,
    focusNode
  };
});
const useKeybindings = (keymap, options) => {
  const pipWindow = inject(PiPWindowSymbol, ref());
  const activeElement = useActiveElement({ window: pipWindow?.value });
  const { isCtrlKeyPressed } = useDeviceSupport();
  const isDisabled = computed(() => toValue(options?.disabled));
  const ignoreKeyPresses = computed(() => {
    if (!activeElement.value) return false;
    const active = activeElement.value;
    const isInput = ["INPUT", "TEXTAREA"].includes(active.tagName);
    const isContentEditable = active.closest("[contenteditable]") !== null;
    const isIgnoreClass = active.closest(".ignore-key-press-canvas") !== null;
    return isInput || isContentEditable || isIgnoreClass;
  });
  const normalizedKeymap = computed(
    () => Object.fromEntries(
      Object.entries(toValue(keymap)).flatMap(([shortcut, handler]) => {
        const shortcuts = shortcut.split("|");
        return shortcuts.map((s) => [normalizeShortcutString(s), handler]);
      })
    )
  );
  function shortcutPartsToString(parts) {
    return parts.map((key) => key.toLowerCase()).sort((a, b) => a.localeCompare(b)).join("+");
  }
  function normalizeShortcutString(shortcut) {
    if (shortcut.length === 1) {
      return shortcut.toLowerCase();
    }
    const splitChars = ["+", "_", "-"];
    const splitCharsRegEx = splitChars.reduce((acc, char) => {
      if (shortcut.startsWith(char) || shortcut.endsWith(char)) {
        return acc;
      }
      return char + acc;
    }, "");
    return shortcutPartsToString(shortcut.split(new RegExp(`[${splitCharsRegEx}]`)));
  }
  function keyboardEventCodeToKey(code) {
    if (code.startsWith("Digit")) {
      return code.replace("Digit", "").toLowerCase();
    } else if (code.startsWith("Key")) {
      return code.replace("Key", "").toLowerCase();
    }
    return code.toLowerCase();
  }
  function toShortcutString(event) {
    const { shiftKey, altKey } = event;
    const ctrlKey = isCtrlKeyPressed(event);
    const keys = "key" in event ? [event.key] : [];
    const codes = "code" in event ? [keyboardEventCodeToKey(event.code)] : [];
    const modifiers = [];
    if (shiftKey) {
      modifiers.push("shift");
    }
    if (ctrlKey) {
      modifiers.push("ctrl");
    }
    if (altKey) {
      modifiers.push("alt");
    }
    return {
      byKey: shortcutPartsToString([...modifiers, ...keys]),
      byCode: shortcutPartsToString([...modifiers, ...codes])
    };
  }
  function onKeyDown(event) {
    if (ignoreKeyPresses.value || isDisabled.value) return;
    const { byKey, byCode } = toShortcutString(event);
    const handler = normalizedKeymap.value[byKey] ?? normalizedKeymap.value[byCode];
    const run = typeof handler === "function" ? handler : handler?.disabled() ? void 0 : handler?.run;
    if (run) {
      event.preventDefault();
      event.stopPropagation();
      run(event);
    }
  }
  useEventListener(pipWindow?.value?.document ?? document, "keydown", onKeyDown);
};
export {
  N8nBlockUi as N,
  RunData as R,
  VueJsonPretty as V,
  _sfc_main$6 as _,
  useKeybindings as a,
  ViewSubExecution as b,
  canvasEventBus as c,
  parseErrorMetadata as p,
  useExperimentalNdvStore as u
};
