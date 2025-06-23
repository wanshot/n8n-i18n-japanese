import LogsPanel from "./LogsPanel-Va-VRNNb.js";
import { d as defineComponent, T as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-C219uDw2.js";
import "./RunData-YLKHDs11.js";
import "./FileSaver.min-B7bYplvz.js";
import "./useExecutionHelpers-BP0_q8Ec.js";
import "./canvas-D4O6NPgd.js";
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
