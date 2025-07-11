import { d as defineComponent, e as createBlock, g as openBlock, dW as Transition, w as withCtx, aT as withDirectives, aU as vShow, k as createBaseVNode, n as normalizeClass, _ as _export_sfc, P as createEventBus, b_ as inject, c9 as PiPWindowSymbol, cq as useActiveElement, d_ as useDeviceSupport, x as computed, m as unref, eO as useEventListener } from "./index-DhBRWJnw.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BlockUi",
  props: {
    show: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "fade",
        mode: "out-in"
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            class: normalizeClass(["n8n-block-ui", _ctx.$style.uiBlocker]),
            role: "dialog",
            "aria-hidden": true
          }, null, 2), [
            [vShow, _ctx.show]
          ])
        ]),
        _: 1
      });
    };
  }
});
const uiBlocker = "_uiBlocker_j0zl4_123";
const style0 = {
  uiBlocker
};
const cssModules = {
  "$style": style0
};
const N8nBlockUi = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules], ["__scopeId", "data-v-76a59b58"]]);
const canvasEventBus = createEventBus();
const useKeybindings = (keymap, options) => {
  const pipWindow = inject(PiPWindowSymbol);
  const activeElement = useActiveElement({ window: pipWindow?.value });
  const { isCtrlKeyPressed } = useDeviceSupport();
  const isDisabled = computed(() => unref(options?.disabled));
  const ignoreKeyPresses = computed(() => {
    if (!activeElement.value) return false;
    const active = activeElement.value;
    const isInput = ["INPUT", "TEXTAREA"].includes(active.tagName);
    const isContentEditable = active.closest("[contenteditable]") !== null;
    const isIgnoreClass = active.closest(".ignore-key-press-canvas") !== null;
    return isInput || isContentEditable || isIgnoreClass;
  });
  const normalizedKeymap = computed(
    () => Object.fromEntries(
      Object.entries(keymap.value).flatMap(([shortcut, handler]) => {
        const shortcuts = shortcut.split("|");
        return shortcuts.map((s) => [normalizeShortcutString(s), handler]);
      })
    )
  );
  function shortcutPartsToString(parts) {
    return parts.map((key) => key.toLowerCase()).sort((a, b) => a.localeCompare(b)).join("+");
  }
  function normalizeShortcutString(shortcut) {
    if (shortcut.length === 1) {
      return shortcut.toLowerCase();
    }
    const splitChars = ["+", "_", "-"];
    const splitCharsRegEx = splitChars.reduce((acc, char) => {
      if (shortcut.startsWith(char) || shortcut.endsWith(char)) {
        return acc;
      }
      return char + acc;
    }, "");
    return shortcutPartsToString(shortcut.split(new RegExp(`[${splitCharsRegEx}]`)));
  }
  function keyboardEventCodeToKey(code) {
    if (code.startsWith("Digit")) {
      return code.replace("Digit", "").toLowerCase();
    } else if (code.startsWith("Key")) {
      return code.replace("Key", "").toLowerCase();
    }
    return code.toLowerCase();
  }
  function toShortcutString(event) {
    const { shiftKey, altKey } = event;
    const ctrlKey = isCtrlKeyPressed(event);
    const keys = "key" in event ? [event.key] : [];
    const codes = "code" in event ? [keyboardEventCodeToKey(event.code)] : [];
    const modifiers = [];
    if (shiftKey) {
      modifiers.push("shift");
    }
    if (ctrlKey) {
      modifiers.push("ctrl");
    }
    if (altKey) {
      modifiers.push("alt");
    }
    return {
      byKey: shortcutPartsToString([...modifiers, ...keys]),
      byCode: shortcutPartsToString([...modifiers, ...codes])
    };
  }
  function onKeyDown(event) {
    if (ignoreKeyPresses.value || isDisabled.value) return;
    const { byKey, byCode } = toShortcutString(event);
    const handler = normalizedKeymap.value[byKey] ?? normalizedKeymap.value[byCode];
    const run = typeof handler === "function" ? handler : handler?.disabled() ? void 0 : handler?.run;
    if (run) {
      event.preventDefault();
      event.stopPropagation();
      run(event);
    }
  }
  useEventListener(pipWindow?.value?.document ?? document, "keydown", onKeyDown);
};
export {
  N8nBlockUi as N,
  canvasEventBus as c,
  useKeybindings as u
};
