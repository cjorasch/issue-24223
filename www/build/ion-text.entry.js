import { r as registerInstance, h, i as Host } from './index-68fca061.js';
import { g as getIonMode } from './ionic-global-686539a0.js';
import { c as createColorClasses } from './theme-c336c9d9.js';

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

let Text = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: createColorClasses(this.color, {
        [mode]: true,
      }) }, h("slot", null)));
  }
};
Text.style = textCss;

export { Text as ion_text };
