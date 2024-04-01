/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-sailboat": PhSailboat;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-sailboat": PhSailboat;
    }
  }
}

@customElement("ph-sailboat")
class PhSailboat extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M243.61,174.27A4,4,0,0,0,240,172H140V140h76a4,4,0,0,0,3-6.69L140,46.45V8a4,4,0,0,0-7.1-2.52l-104,128A4,4,0,0,0,32,140H132v32H16a4,4,0,0,0-3.12,6.5l29.59,37a12,12,0,0,0,9.37,4.5H204.16a12,12,0,0,0,9.37-4.5l29.59-37A4,4,0,0,0,243.61,174.27ZM207,132H140V58.35ZM40.4,132,132,19.27V132Zm166.88,78.5a4,4,0,0,1-3.12,1.5H51.84a4,4,0,0,1-3.12-1.5L24.32,180H231.68Z"/>`,
    ],
    [
      "light",
      svg`<path d="M245.41,173.4A6,6,0,0,0,240,170H142V142h74a6,6,0,0,0,4.44-10L142,45.68V8a6,6,0,0,0-10.66-3.78l-104,128A6,6,0,0,0,32,142h98v28H16a6,6,0,0,0-4.69,9.75l29.6,37A14,14,0,0,0,51.84,222H204.16a14,14,0,0,0,10.93-5.25l29.6-37A6,6,0,0,0,245.41,173.4Zm-43-43.4H142V63.52ZM44.61,130,130,24.9V130Zm161.11,79.25a2,2,0,0,1-1.56.75H51.84a2,2,0,0,1-1.56-.75L28.48,182h199Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M247.21,172.53A8,8,0,0,0,240,168H144V144h72a8,8,0,0,0,5.92-13.38L144,44.91V8a8,8,0,0,0-14.21-5l-104,128A8,8,0,0,0,32,144h96v24H16a8,8,0,0,0-6.25,13l29.6,37a15.93,15.93,0,0,0,12.49,6H204.16a15.93,15.93,0,0,0,12.49-6l29.6-37A8,8,0,0,0,247.21,172.53ZM197.92,128H144V68.69ZM48.81,128,128,30.53V128Zm155.35,80H51.84l-19.2-24H223.36Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M250.82,170.8A12,12,0,0,0,240,164H148V148h68a12,12,0,0,0,8.88-20.07L148,43.36V12a12,12,0,0,0-21.19-7.71l-104,124A12,12,0,0,0,32,148h92v16H16a12,12,0,0,0-9.37,19.5l29.6,37A19.9,19.9,0,0,0,51.84,228H204.16a19.9,19.9,0,0,0,15.61-7.51l29.6-37A12,12,0,0,0,250.82,170.8ZM188.87,124H148V79ZM57.73,124,124,45v79Zm144.5,80H53.77L41,188H215Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M160,140V72.85a4,4,0,0,1,7-2.69l55,60.46a8,8,0,0,1,.43,10.26,8.24,8.24,0,0,1-6.58,3.12H164A4,4,0,0,1,160,140Zm87.21,32.53A8,8,0,0,0,240,168H144V8a8,8,0,0,0-14.21-5l-104,128A8,8,0,0,0,32,144h96v24H16a8,8,0,0,0-6.25,13l29.6,37a15.93,15.93,0,0,0,12.49,6H204.16a15.93,15.93,0,0,0,12.49-6l29.6-37A8,8,0,0,0,247.21,172.53Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M240,176l-29.6,37a8,8,0,0,1-6.24,3H51.84a8,8,0,0,1-6.24-3L16,176ZM136,8,32,136H136Z" opacity="0.2"/><path d="M247.21,172.53A8,8,0,0,0,240,168H144V144h72a8,8,0,0,0,5.92-13.38L144,44.91V8a8,8,0,0,0-14.21-5l-104,128A8,8,0,0,0,32,144h96v24H16a8,8,0,0,0-6.25,13l29.6,37a15.93,15.93,0,0,0,12.49,6H204.16a15.93,15.93,0,0,0,12.49-6l29.6-37A8,8,0,0,0,247.21,172.53ZM197.92,128H144V68.69ZM48.81,128,128,30.53V128Zm155.35,80H51.84l-19.2-24H223.36Z"/>`,
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
      ${PhSailboat.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhSailboat };
