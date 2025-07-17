import LogsPanel from "./LogsPanel-B54ti8cC.js";
import { d as defineComponent, a4 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-BcKWlmai.js";
import "./RunData-CJ7DKBN5.js";
import "./FileSaver.min-VjFf59Lx.js";
import "./useKeybindings-D9DVF3e3.js";
import "./useExecutionHelpers-DEm8Lq7n.js";
import "./AnimatedSpinner-BiNmePy3.js";
import "./ActionDropdown-BXIEpACh.js";
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
