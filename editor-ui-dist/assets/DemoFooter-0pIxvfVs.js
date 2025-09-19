import LogsPanel from "./LogsPanel-DTjliciQ.js";
import { d as defineComponent, a1 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-B67HoBjs.js";
import "./AnimatedSpinner-Dsfy0FqW.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-Dcr54YZF.js";
import "./core-BVhXPr1C.js";
import "./canvas-CtrR7LrJ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoFooter",
  setup(__props) {
    const workflowsStore = useWorkflowsStore();
    const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
    return (_ctx, _cache) => {
      return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel, {
        key: 0,
        "is-read-only": true
      })) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
