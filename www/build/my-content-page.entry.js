import { r as registerInstance, i as h } from './index-22aea243.js';

let MyContentPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return [
      h("ion-header", null, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", null)), h("ion-title", null, this.header || "Content"))),
      h("ion-content", null, this.content()),
    ];
  }
};

export { MyContentPage as my_content_page };
