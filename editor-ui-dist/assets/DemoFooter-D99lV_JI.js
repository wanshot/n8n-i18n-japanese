import LogsPanel from "./LogsPanel-B7pbto0n.js";
import { d as defineComponent, a3 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-DhBRWJnw.js";
import "./RunData-Czs-yf48.js";
import "./FileSaver.min-zMFy1bFI.js";
import "./useKeybindings-CG4_oE7m.js";
import "./useExecutionHelpers-DB6T8JqQ.js";
import "./ActionDropdown-CcHWpaTB.js";
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
