import LogsPanel from "./LogsPanel-DZPcO8PD.js";
import { d as defineComponent, P as useWorkflowsStore, q as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-Dho2T6xk.js";
import "./RunData-B9lJGx4v.js";
import "./FileSaver.min-Dh3-VrSv.js";
import "./useExecutionHelpers-DYXF3q6N.js";
import "./canvas-c_5Nsjqq.js";
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
