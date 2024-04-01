/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-fallout-shelter": PhFalloutShelter;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-fallout-shelter": PhFalloutShelter;
    }
  }
}

@customElement("ph-fallout-shelter")
class PhFalloutShelter extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm67.53-93.89A4,4,0,0,0,192,124H135.47l27.86-41.78A4,4,0,0,0,160,76H96a4,4,0,0,0-3.33,6.22L120.53,124H64a4,4,0,0,0-3.33,6.22l32,48a4,4,0,0,0,6.66,0l28.67-43,28.67,43a4,4,0,0,0,6.66,0l32-48A4,4,0,0,0,195.53,126.11ZM152.53,84,128,120.79,103.47,84ZM96,168.79,71.47,132h49.06Zm64,0L135.47,132h49.06Z"/>`,
    ],
    [
      "light",
      svg`<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm69.29-92.83A6,6,0,0,0,192,122H139.21L165,83.33A6,6,0,0,0,160,74H96a6,6,0,0,0-5,9.33L116.79,122H64a6,6,0,0,0-5,9.33l32,48a6,6,0,0,0,10,0l27-40.51,27,40.51a6,6,0,0,0,10,0l32-48A6,6,0,0,0,197.29,125.17ZM148.79,86,128,117.18,107.21,86ZM96,165.18,75.21,134h41.58Zm64,0L139.21,134h41.58Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm71.05-91.77A8,8,0,0,0,192,120H143l23.71-35.56A8,8,0,0,0,160,72H96a8,8,0,0,0-6.66,12.44L113.05,120H64a8,8,0,0,0-6.66,12.44l32,48a8,8,0,0,0,13.32,0l25.34-38,25.34,38a8,8,0,0,0,13.32,0l32-48A8,8,0,0,0,199.05,124.23ZM145.05,88,128,113.58,111,88ZM96,161.58,79,136h34.1Zm64,0L143,136h34.1Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm66-73.34-24,36a12,12,0,0,1-20,0l-22-33-22,33a12,12,0,0,1-20,0l-24-36A12,12,0,0,1,72,120h41.58L94,90.66A12,12,0,0,1,104,72h48a12,12,0,0,1,10,18.66L142.42,120H184a12,12,0,0,1,10,18.66Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M231.94,124.55c-1.77-54.49-46-98.72-100.49-100.49A104.09,104.09,0,0,0,24.06,131.45c1.77,54.49,46,98.72,100.49,100.49A104.09,104.09,0,0,0,231.94,124.55Zm-33.56,16.92L174.93,174.3a8.52,8.52,0,0,1-13.86,0L128,128,94.93,174.3a8.52,8.52,0,0,1-13.86,0L57.62,141.47A8.52,8.52,0,0,1,64.55,128H128L97.62,85.47A8.52,8.52,0,0,1,104.55,72h46.9a8.52,8.52,0,0,1,6.93,13.47L128,128h63.45A8.52,8.52,0,0,1,198.38,141.47Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm32,144-32-48L96,176,64,128h64L96,80h64l-32,48h64Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm71.05-91.77A8,8,0,0,0,192,120H143l23.71-35.56A8,8,0,0,0,160,72H96a8,8,0,0,0-6.66,12.44L113.05,120H64a8,8,0,0,0-6.66,12.44l32,48a8,8,0,0,0,13.32,0l25.34-38,25.34,38a8,8,0,0,0,13.32,0l32-48A8,8,0,0,0,199.05,124.23ZM145.05,88,128,113.58,111,88ZM96,161.58,79,136h34.1Zm64,0L143,136h34.1Z"/>`,
    ],
  ]);

  @property({ type: String })
  size?: string | number = "1em";

  @property({ type: String })
  weight?: IconWeight = "regular";

  @property({ type: String })
  color?: string = "currentColor";

  @property({ type: Boolean })
  mirrored?: boolean = false;

  render() {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored ? "scale(-1, 1)" : null}
    >
      <slot></slot>
      ${PhFalloutShelter.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhFalloutShelter };
