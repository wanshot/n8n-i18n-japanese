import LogsPanel from "./LogsPanel-DFG0x_5J.js";
import { d as defineComponent, a9 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-CoZTOd2n.js";
import "./AnimatedSpinner-agIqnuVw.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-CzQ0wd0h.js";
import "./core-CDUzY4bm.js";
import "./canvas-BRoSH1nY.js";
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
