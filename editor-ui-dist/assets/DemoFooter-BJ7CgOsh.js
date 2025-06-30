import LogsPanel from "./LogsPanel-yCwWjyAX.js";
import { d as defineComponent, T as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-DGOSHS5X.js";
import "./RunData-CiLkaDNK.js";
import "./FileSaver.min-Bxbh8nLE.js";
import "./useExecutionHelpers-UhfgqcYO.js";
import "./useKeybindings-B-ACEocI.js";
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
