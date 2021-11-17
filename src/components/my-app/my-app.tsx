import { Component, h } from "@stencil/core";
import "@ionic/core";
import { logEvent } from "../../util/log-event";

@Component({
  tag: "my-app",
  styleUrl: "my-app.css",
})
export class MyApp {
  render() {
    return (
      <ion-app>
        <ion-router
          useHash
          onIonRouteWillChange={logEvent}
          onIonRouteDidChange={logEvent}
        >
          <ion-route url="/" component="my-page" />
          <ion-route url="/:s1" component="my-page" />
          <ion-route url="/:s1/:s2" component="my-page" />
          <ion-route url="/:s1/:s2/:s3" component="my-page" />
        </ion-router>
        <ion-nav onIonNavWillChange={logEvent} onIonNavDidChange={logEvent} />
      </ion-app>
    );
  }
}
