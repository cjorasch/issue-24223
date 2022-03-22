import { Component, h, Prop } from "@stencil/core";

// Issues
//    if a page is displayed using nav.push(tag, props) then there
//      is an error from the router and back() fails to update the url

@Component({
  tag: "my-content-page",
})
export class MyContentPage {
  @Prop() public header: string;
  @Prop() public content: () => any;

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
          <ion-title>{this.header || "Content"}</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>{this.content()}</ion-content>,
    ];
  }
}
