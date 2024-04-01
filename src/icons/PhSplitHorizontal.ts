/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-split-horizontal": PhSplitHorizontal;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-split-horizontal": PhSplitHorizontal;
    }
  }
}

@customElement("ph-split-horizontal")
class PhSplitHorizontal extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M108,48V208a4,4,0,0,1-8,0V132H33.66l25.17,25.17a4,4,0,0,1-5.66,5.66l-32-32a4,4,0,0,1,0-5.66l32-32a4,4,0,0,1,5.66,5.66L33.66,124H100V48a4,4,0,0,1,8,0Zm126.83,77.17-32-32a4,4,0,0,0-5.66,5.66L222.34,124H156V48a4,4,0,0,0-8,0V208a4,4,0,0,0,8,0V132h66.34l-25.17,25.17a4,4,0,0,0,5.66,5.66l32-32A4,4,0,0,0,234.83,125.17Z"/>`,
    ],
    [
      "light",
      svg`<path d="M110,48V208a6,6,0,0,1-12,0V134H38.49l21.75,21.76a6,6,0,1,1-8.48,8.48l-32-32a6,6,0,0,1,0-8.48l32-32a6,6,0,0,1,8.48,8.48L38.49,122H98V48a6,6,0,0,1,12,0Zm126.24,75.76-32-32a6,6,0,0,0-8.48,8.48L217.51,122H158V48a6,6,0,0,0-12,0V208a6,6,0,0,0,12,0V134h59.51l-21.75,21.76a6,6,0,1,0,8.48,8.48l32-32A6,6,0,0,0,236.24,123.76Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M112,48V208a8,8,0,0,1-16,0V136H43.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L43.31,120H96V48a8,8,0,0,1,16,0Zm125.66,74.34-32-32a8,8,0,0,0-11.32,11.32L212.69,120H160V48a8,8,0,0,0-16,0V208a8,8,0,0,0,16,0V136h52.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,237.66,122.34Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M116,48V208a12,12,0,0,1-24,0V140H53l11.52,11.51a12,12,0,0,1-17,17l-32-32a12,12,0,0,1,0-17l32-32a12,12,0,1,1,17,17L53,116H92V48a12,12,0,0,1,24,0Zm124.49,71.51-32-32a12,12,0,0,0-17,17L203,116H164V48a12,12,0,0,0-24,0V208a12,12,0,0,0,24,0V140h39l-11.52,11.51a12,12,0,0,0,17,17l32-32A12,12,0,0,0,240.49,119.51Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M112,48V208a8,8,0,0,1-16,0V136H64v24a8,8,0,0,1-13.66,5.66l-32-32a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,64,96v24H96V48a8,8,0,0,1,16,0Zm125.66,74.34-32-32A8,8,0,0,0,192,96v24H160V48a8,8,0,0,0-16,0V208a8,8,0,0,0,16,0V136h32v24a8,8,0,0,0,13.66,5.66l32-32A8,8,0,0,0,237.66,122.34Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M232,128l-32,32V96ZM56,160V96L24,128Z" opacity="0.2"/><path d="M104,40a8,8,0,0,0-8,8v72H64V96a8,8,0,0,0-13.66-5.66l-32,32a8,8,0,0,0,0,11.32l32,32A8,8,0,0,0,64,160V136H96v72a8,8,0,0,0,16,0V48A8,8,0,0,0,104,40ZM48,140.69,35.31,128,48,115.31Zm189.66-18.35-32-32A8,8,0,0,0,192,96v24H160V48a8,8,0,0,0-16,0V208a8,8,0,0,0,16,0V136h32v24a8,8,0,0,0,13.66,5.66l32-32A8,8,0,0,0,237.66,122.34ZM208,140.69V115.31L220.69,128Z"/>`,
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
      ${PhSplitHorizontal.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhSplitHorizontal };
