import { Component, forceUpdate, h, Prop } from "@stencil/core";

@Component({
  tag: "my-page",
})
export class MyPage {
  @Prop() public s1: string;
  @Prop() public s2: string;
  @Prop() public s3: string;

  constructor() {
    console.log("MyPage.constructor()");
  }

  componentConnected(): void {
    console.log("MyPage.componentConnected()");
  }

  componentDisconnected(): void {
    console.log("MyPage.componentDisconnected()");
  }

  render() {
    console.log("MyPage.render()");

    const router = document.querySelector("ion-router");
    const nav = document.querySelector("ion-nav");

    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
          <ion-title>Issue 24223</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px",
          }}
        >
          <h2>my-page</h2>
          <div>
            props: {JSON.stringify({ s1: this.s1, s2: this.s2, s3: this.s3 })}
          </div>
          <div>
            <ion-button
              size="small"
              onClick={(ev) => log(ev, forceUpdate(this))}
            >
              forceUpdate()
            </ion-button>
          </div>

          <h2>ion-router</h2>
          <div>
            <ion-button
              size="small"
              onClick={(ev) => log(ev, router.push("a"))}
            >
              router.push('a')
            </ion-button>
          </div>
          <div>
            <ion-button
              size="small"
              onClick={(ev) => log(ev, router.push("a/b"))}
            >
              router.push('a/b')
            </ion-button>
          </div>
          <div>
            <ion-button
              size="small"
              onClick={(ev) => log(ev, router.push("a/b/c"))}
            >
              router.push('a/b/c')
            </ion-button>
          </div>
          <div>
            <ion-button size="small" onClick={(ev) => log(ev, router.back())}>
              router.back()
            </ion-button>
          </div>
          <div>
            <ion-button
              size="small"
              onClick={(ev) => log(ev, router.printDebug())}
            >
              router.printDebug()
            </ion-button>
          </div>

          <h2>ion-nav</h2>
          <div>
            <ion-button size="small" onClick={(ev) => log(ev, nav.pop())}>
              nav.pop()
            </ion-button>
          </div>
          <div>
            <ion-button size="small" onClick={(ev) => log(ev, nav.popToRoot())}>
              nav.popToRoot()
            </ion-button>
          </div>
          <div>
            <ion-button
              size="small"
              onClick={(ev) => log(ev, nav.getRouteId())}
            >
              nav.getRouteId()
            </ion-button>
          </div>
          <div>
            <ion-button size="small" onClick={(ev) => log(ev, nav.getActive())}>
              nav.getActive()
            </ion-button>
          </div>
          <div>
            <ion-button
              size="small"
              onClick={(ev) => log(ev, nav.getPrevious())}
            >
              nav.getPrevious()
            </ion-button>
          </div>
        </div>
      </ion-content>,
    ];
  }
}

// Log a function call initiated by a button
function log(ev: Event, value: unknown): void {
  const label = (ev.target as HTMLElement).innerText;
  if (isPromise(value)) {
    console.log(label + " called");
    value.then(
      (result) => console.log(label + " =>", result),
      (error) => console.error(label + " =>", error)
    );
  } else {
    console.log(label + " =>", value);
  }
}

// Checks if the value is a Promise
function isPromise(value: unknown): value is Promise<unknown> {
  const promise = value as Promise<unknown>;
  return !!(promise && promise.then && promise.catch);
}
