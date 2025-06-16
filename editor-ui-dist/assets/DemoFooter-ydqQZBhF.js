import LogsPanel from "./LogsPanel-DgjWsBrH.js";
import { d as defineComponent, P as useWorkflowsStore, q as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-C5YB2aAj.js";
import "./RunData-DmbPN93Z.js";
import "./FileSaver.min-ChqVoYuE.js";
import "./useExecutionHelpers-BTpbJHk6.js";
import "./canvas-CPys8KI3.js";
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
