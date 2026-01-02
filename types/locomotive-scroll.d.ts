declare module "locomotive-scroll" {
  interface LocomotiveScrollOptions {
    el: HTMLElement;
    smooth?: boolean;
    lerp?: number;
    smartphone?: {
      smooth?: boolean;
    };
    tablet?: {
      smooth?: boolean;
    };
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    destroy(): void;
    update(): void;
    scrollTo(
      target: string | HTMLElement | number,
      options?: {
        offset?: number;
        duration?: number;
        easing?: [number, number, number, number];
        disableLerp?: boolean;
      }
    ): void;
  }
}
