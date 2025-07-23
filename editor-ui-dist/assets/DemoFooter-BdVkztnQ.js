import LogsPanel from "./LogsPanel-CIEEnklj.js";
import { d as defineComponent, a4 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-CLBZ19eQ.js";
import "./RunData-DXNDkyMJ.js";
import "./FileSaver.min-DZW57LB6.js";
import "./useKeybindings-DFLWKmny.js";
import "./useExecutionHelpers-DzvFXe6w.js";
import "./AnimatedSpinner-CZQsqOR4.js";
import "./ActionDropdown-Dj883IJv.js";
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
