/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-arrow-u-left-up": PhArrowULeftUp;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-arrow-u-left-up": PhArrowULeftUp;
    }
  }
}

@customElement("ph-arrow-u-left-up")
class PhArrowULeftUp extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M204,80v88a60,60,0,0,1-120,0V41.66L42.83,82.83a4,4,0,0,1-5.66-5.66l48-48a4,4,0,0,1,5.66,0l48,48a4,4,0,0,1-5.66,5.66L92,41.66V168a52,52,0,0,0,104,0V80a4,4,0,0,1,8,0Z"/>`,
    ],
    [
      "light",
      svg`<path d="M206,80v88a62,62,0,0,1-124,0V46.49L44.24,84.24a6,6,0,0,1-8.48-8.48l48-48a6,6,0,0,1,8.48,0l48,48a6,6,0,1,1-8.48,8.48L94,46.49V168a50,50,0,0,0,100,0V80a6,6,0,0,1,12,0Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M208,80v88a64,64,0,0,1-128,0V51.31L45.66,85.66A8,8,0,0,1,34.34,74.34l48-48a8,8,0,0,1,11.32,0l48,48a8,8,0,0,1-11.32,11.32L96,51.31V168a48,48,0,0,0,96,0V80a8,8,0,0,1,16,0Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M212,80v88a68,68,0,0,1-136,0V61L48.49,88.49a12,12,0,0,1-17-17l48-48a12,12,0,0,1,17,0l48,48a12,12,0,0,1-17,17L100,61V168a44,44,0,0,0,88,0V80a12,12,0,0,1,24,0Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,80v88a64,64,0,0,1-128,0V88H40a8,8,0,0,1-5.66-13.66l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,136,88H96v80a48,48,0,0,0,96,0V80a8,8,0,0,1,16,0Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M136,80H40L88,32Z" opacity="0.2"/><path d="M200,72a8,8,0,0,0-8,8v88a48,48,0,0,1-96,0V88h40a8,8,0,0,0,5.66-13.66l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,40,88H80v80a64,64,0,0,0,128,0V80A8,8,0,0,0,200,72ZM88,43.31,116.69,72H59.31Z"/>`,
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
      ${PhArrowULeftUp.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhArrowULeftUp };
