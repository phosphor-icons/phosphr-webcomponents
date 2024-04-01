/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-copyleft": PhCopyleft;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-copyleft": PhCopyleft;
    }
  }
}

@customElement("ph-copyleft")
class PhCopyleft extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm44-92a44,44,0,0,1-79.2,26.41,4,4,0,0,1,6.4-4.81,36,36,0,1,0,0-43.2,4,4,0,0,1-6.4-4.81A44,44,0,0,1,172,128Z"/>`,
    ],
    [
      "light",
      svg`<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm46-90a46,46,0,0,1-82.8,27.61,6,6,0,0,1,9.6-7.21,34,34,0,1,0,0-40.8,6,6,0,0,1-9.6-7.21A46,46,0,0,1,174,128Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a48,48,0,0,1-86.4,28.81,8,8,0,0,1,12.8-9.61,32,32,0,1,0,0-38.4,8,8,0,0,1-12.8-9.61A48,48,0,0,1,176,128Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm52-84a52,52,0,0,1-93.59,31.21,12,12,0,1,1,19.18-14.41,28,28,0,1,0,0-33.6A12,12,0,1,1,86.41,96.79,52,52,0,0,1,180,128Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128,56a72,72,0,1,0,72,72A72.08,72.08,0,0,0,128,56Zm0,120a47.66,47.66,0,0,1-38.4-19.19,8,8,0,0,1,12.8-9.61,32,32,0,1,0,0-38.4,8,8,0,0,1-12.8-9.61A48,48,0,1,1,128,176Zm0-152A104,104,0,1,0,232,128,104,104,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a48,48,0,0,1-86.4,28.81,8,8,0,0,1,12.8-9.61,32,32,0,1,0,0-38.4,8,8,0,0,1-12.8-9.61A48,48,0,0,1,176,128Z"/>`,
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
      ${PhCopyleft.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhCopyleft };
