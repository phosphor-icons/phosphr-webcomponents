/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-shopping-bag": PhShoppingBag;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-shopping-bag": PhShoppingBag;
    }
  }
}

@customElement("ph-shopping-bag")
class PhShoppingBag extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm4,156a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM172,88a44,44,0,0,1-88,0,4,4,0,0,1,8,0,36,36,0,0,0,72,0,4,4,0,0,1,8,0Z"/>`,
    ],
    [
      "light",
      svg`<path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,158a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM174,88a46,46,0,0,1-92,0,6,6,0,0,1,12,0,34,34,0,0,0,68,0,6,6,0,0,1,12,0Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,160H44V60H212ZM76,88a12,12,0,0,1,24,0,28,28,0,0,0,56,0,12,12,0,0,1,24,0A52,52,0,0,1,76,88Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-88,96A48.05,48.05,0,0,1,80,88a8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0A48.05,48.05,0,0,1,128,136Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"/><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"/>`,
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
      ${PhShoppingBag.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhShoppingBag };
