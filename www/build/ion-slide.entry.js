import { r as registerInstance, i as h, j as Host } from './index-22aea243.js';
import { g as getIonMode } from './ionic-global-2f4a12b1.js';

const slideCss = "ion-slide{display:block;width:100%;height:100%}.slide-zoom{display:block;width:100%;text-align:center}.swiper-slide{display:flex;position:relative;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;font-size:18px;text-align:center;box-sizing:border-box}.swiper-slide img{width:auto;max-width:100%;height:auto;max-height:100%}";

let Slide = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: {
        [mode]: true,
        'swiper-slide': true,
        'swiper-zoom-container': true
      } }));
  }
};
Slide.style = slideCss;

export { Slide as ion_slide };
