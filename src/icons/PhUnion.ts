/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-union": PhUnion;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-union": PhUnion;
    }
  }
}

@customElement("ph-union")
class PhUnion extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M204,64v80a76,76,0,0,1-152,0V64a4,4,0,0,1,8,0v80a68,68,0,0,0,136,0V64a4,4,0,0,1,8,0Z"/>`,
    ],
    [
      "light",
      svg`<path d="M206,64v80a78,78,0,0,1-156,0V64a6,6,0,0,1,12,0v80a66,66,0,0,0,132,0V64a6,6,0,0,1,12,0Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M208,64v80a80,80,0,0,1-160,0V64a8,8,0,0,1,16,0v80a64,64,0,0,0,128,0V64a8,8,0,0,1,16,0Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M212,64v80a84,84,0,0,1-168,0V64a12,12,0,0,1,24,0v80a60,60,0,0,0,120,0V64a12,12,0,0,1,24,0Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136a56,56,0,0,1-112,0V80a8,8,0,0,1,16,0v56a40,40,0,0,0,80,0V80a8,8,0,0,1,16,0Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M200,64v80a72,72,0,0,1-144,0V64Z" opacity="0.2"/><path d="M208,64v80a80,80,0,0,1-160,0V64a8,8,0,0,1,16,0v80a64,64,0,0,0,128,0V64a8,8,0,0,1,16,0Z"/>`,
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
      ${PhUnion.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhUnion };
