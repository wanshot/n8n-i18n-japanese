import LogsPanel from "./LogsPanel-D5nd_U64.js";
import { d as defineComponent, a4 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-CFOGSwPZ.js";
import "./RunData-Bk7NC3YZ.js";
import "./FileSaver.min-04AzZW4e.js";
import "./useKeybindings-BuBiZauw.js";
import "./useExecutionHelpers-CIZJ2IcZ.js";
import "./AnimatedSpinner-BbQFbyR2.js";
import "./ActionDropdown-BF_weLFH.js";
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
