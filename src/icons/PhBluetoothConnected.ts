/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-bluetooth-connected": PhBluetoothConnected;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-bluetooth-connected": PhBluetoothConnected;
    }
  }
}

@customElement("ph-bluetooth-connected")
class PhBluetoothConnected extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M194.4,172.8,134.67,128,194.4,83.2a4,4,0,0,0,0-6.4l-64-48A4,4,0,0,0,124,32v88L66.4,76.8a4,4,0,0,0-4.8,6.4L121.33,128,61.6,172.8a4,4,0,0,0,4.8,6.4L124,136v88a4,4,0,0,0,6.4,3.2l64-48a4,4,0,0,0,0-6.4ZM132,40l53.33,40L132,120Zm0,176V136l53.33,40ZM60,136a8,8,0,1,1,8-8A8,8,0,0,1,60,136Zm152-8a8,8,0,1,1-8-8A8,8,0,0,1,212,128Z"/>`,
    ],
    [
      "light",
      svg`<path d="M195.6,171.2,138,128l57.6-43.2a6,6,0,0,0,0-9.6l-64-48A6,6,0,0,0,122,32v84L67.6,75.2a6,6,0,0,0-7.2,9.6L118,128,60.4,171.2a6,6,0,0,0,7.2,9.6L122,140v84a6,6,0,0,0,9.6,4.8l64-48a6,6,0,0,0,0-9.6ZM134,44l48,36-48,36Zm0,168V140l48,36ZM60,138a10,10,0,1,1,10-10A10,10,0,0,1,60,138Zm154-10a10,10,0,1,1-10-10A10,10,0,0,1,214,128Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M196.8,169.6,141.33,128,196.8,86.4a8,8,0,0,0,0-12.8l-64-48A8,8,0,0,0,120,32v80L68.8,73.6a8,8,0,0,0-9.6,12.8L114.67,128,59.2,169.6a8,8,0,1,0,9.6,12.8L120,144v80a8,8,0,0,0,12.8,6.4l64-48a8,8,0,0,0,0-12.8ZM136,48l42.67,32L136,112Zm0,160V144l42.67,32ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm156-12a12,12,0,1,1-12-12A12,12,0,0,1,216,128Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M199.2,166.4,148,128l51.2-38.4a12,12,0,0,0,0-19.2l-64-48A12,12,0,0,0,116,32v72L71.2,70.4A12,12,0,0,0,56.8,89.6L108,128,56.8,166.4a12,12,0,1,0,14.4,19.2L116,152v72a12,12,0,0,0,19.2,9.6l64-48a12,12,0,0,0,0-19.2ZM140,56l32,24-32,24Zm0,144V152l32,24ZM56,144a16,16,0,1,1,16-16A16,16,0,0,1,56,144Zm168-16a16,16,0,1,1-16-16A16,16,0,0,1,224,128Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M200,176a8,8,0,0,1-3.2,6.4l-64,48A8,8,0,0,1,128,232a8,8,0,0,1-8-8V144L68.8,182.4a8,8,0,0,1-9.6-12.8L114.67,128,59.2,86.4a8,8,0,0,1,9.6-12.8L120,112V32a8,8,0,0,1,12.8-6.4l64,48a8,8,0,0,1,0,12.8L141.33,128l55.47,41.6A8,8,0,0,1,200,176ZM72,128a12,12,0,1,0-12,12A12,12,0,0,0,72,128Zm132-12a12,12,0,1,0,12,12A12,12,0,0,0,204,116Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M192,80l-64,48V32ZM128,224l64-48-64-48Z" opacity="0.2"/><path d="M196.8,169.6,141.33,128,196.8,86.4a8,8,0,0,0,0-12.8l-64-48A8,8,0,0,0,120,32v80L68.8,73.6a8,8,0,0,0-9.6,12.8L114.67,128,59.2,169.6a8,8,0,1,0,9.6,12.8L120,144v80a8,8,0,0,0,12.8,6.4l64-48a8,8,0,0,0,0-12.8ZM136,48l42.67,32L136,112Zm0,160V144l42.67,32ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm156-12a12,12,0,1,1-12-12A12,12,0,0,1,216,128Z"/>`,
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
      ${PhBluetoothConnected.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhBluetoothConnected };
