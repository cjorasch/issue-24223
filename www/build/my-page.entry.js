import { r as registerInstance, h, n as forceUpdate } from './index-68fca061.js';

let MyPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    console.log("MyPage.constructor()");
  }
  componentConnected() {
    console.log("MyPage.componentConnected()");
  }
  componentDisconnected() {
    console.log("MyPage.componentDisconnected()");
  }
  render() {
    console.log("MyPage.render()");
    const router = document.querySelector("ion-router");
    const nav = document.querySelector("ion-nav");
    return [
      h("ion-header", null, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", null)), h("ion-title", null, "Issue 24223"))),
      h("ion-content", null, h("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "10px",
        } }, h("h2", null, "my-page"), h("div", null, "props: ", JSON.stringify({ s1: this.s1, s2: this.s2, s3: this.s3 })), h("div", null, h("ion-button", { size: "small", onClick: (ev) => log(ev, forceUpdate(this)) }, "forceUpdate()")), h("h2", null, "ion-router"), h("div", null, h("ion-button", { size: "small", onClick: (ev) => log(ev, router.push("a")) }, "router.push('a')")), h("div", null, h("ion-button", { size: "small", onClick: (ev) => log(ev, router.push("a/b")) }, "router.push('a/b')")), h("div", null, h("ion-button", { size: "small", onClick: (ev) => log(ev, router.push("a/b/c")) }, "router.push('a/b/c')")), h("div", null, h("ion-button", { size: "small", onClick: (ev) => log(ev, router.back()) }, "router.back()")), h("div", null, h("ion-button", { size: "small", onClick: (ev) => log(ev, router.printDebug()) }, "router.printDebug()")), h("h2", null, "ion-nav"), h("div", null, h("ion-button", { size: "small", onClick: (ev) => log(ev, nav.pop()) }, "nav.pop()")), h("div", null, h("ion-button", { size: "small", onClick: (ev) => log(ev, nav.popToRoot()) }, "nav.popToRoot()")), h("div", null, h("ion-button", { size: "small", onClick: (ev) => log(ev, nav.getRouteId()) }, "nav.getRouteId()")), h("div", null, h("ion-button", { size: "small", onClick: (ev) => log(ev, nav.getActive()) }, "nav.getActive()")), h("div", null, h("ion-button", { size: "small", onClick: (ev) => log(ev, nav.getPrevious()) }, "nav.getPrevious()")))),
    ];
  }
};
// Log a function call initiated by a button
function log(ev, value) {
  const label = ev.target.innerText;
  if (isPromise(value)) {
    console.log(label + " called");
    value.then((result) => console.log(label + " =>", result), (error) => console.error(label + " =>", error));
  }
  else {
    console.log(label + " =>", value);
  }
}
// Checks if the value is a Promise
function isPromise(value) {
  const promise = value;
  return !!(promise && promise.then && promise.catch);
}

export { MyPage as my_page };
