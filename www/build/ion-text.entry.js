import { r as registerInstance, i as h, j as Host } from './index-22aea243.js';
import { g as getIonMode } from './ionic-global-2f4a12b1.js';
import { c as createColorClasses } from './theme-12606872.js';

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
