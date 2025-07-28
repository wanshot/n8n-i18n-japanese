import LogsPanel from "./LogsPanel-BqNahLZD.js";
import { d as defineComponent, a5 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-CsFes8Lj.js";
import "./useKeybindings-DYL4sC-W.js";
import "./FileSaver.min-t4uwMhrw.js";
import "./useExecutionHelpers-DF1gV-9K.js";
import "./AnimatedSpinner-Bj_oirfH.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-bv51y3R9.js";
import "./VueMarkdown-BAKYkFJV.js";
import "./ActionDropdown-Dhr9I582.js";
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
