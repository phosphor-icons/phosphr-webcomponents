/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-bowling-ball": PhBowlingBall;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-bowling-ball": PhBowlingBall;
    }
  }
}

@customElement("ph-bowling-ball")
class PhBowlingBall extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm12-104a8,8,0,1,1-8-8A8,8,0,0,1,140,116Zm24-16a8,8,0,1,1,8-8A8,8,0,0,1,164,100Zm16,32a8,8,0,1,1-8-8A8,8,0,0,1,180,132Z"/>`,
    ],
    [
      "light",
      svg`<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm14-102a10,10,0,1,1-10-10A10,10,0,0,1,142,116Zm22-14a10,10,0,1,1,10-10A10,10,0,0,1,164,102Zm18,30a10,10,0,1,1-10-10A10,10,0,0,1,182,132Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-100a12,12,0,1,1-12-12A12,12,0,0,1,144,116Zm20-12a12,12,0,1,1,12-12A12,12,0,0,1,164,104Zm20,28a12,12,0,1,1-12-12A12,12,0,0,1,184,132Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm16-84a16,16,0,1,1-16-16A16,16,0,0,1,144,128Zm16-16a16,16,0,1,1,16-16A16,16,0,0,1,160,112Zm32,24a16,16,0,1,1-16-16A16,16,0,0,1,192,136Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm4,104a12,12,0,1,1,12-12A12,12,0,0,1,132,128Zm20-36a12,12,0,1,1,12,12A12,12,0,0,1,152,92Zm20,52a12,12,0,1,1,12-12A12,12,0,0,1,172,144Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-100a12,12,0,1,1-12-12A12,12,0,0,1,144,116Zm20-12a12,12,0,1,1,12-12A12,12,0,0,1,164,104Zm20,28a12,12,0,1,1-12-12A12,12,0,0,1,184,132Z"/>`,
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
      ${PhBowlingBall.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhBowlingBall };
