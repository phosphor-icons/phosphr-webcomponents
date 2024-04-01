/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-mouse-scroll": PhMouseScroll;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-mouse-scroll": PhMouseScroll;
    }
  }
}

@customElement("ph-mouse-scroll")
class PhMouseScroll extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M144,20H112A60.07,60.07,0,0,0,52,80v96a60.07,60.07,0,0,0,60,60h32a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,144,20Zm52,156a52.06,52.06,0,0,1-52,52H112a52.06,52.06,0,0,1-52-52V80a52.06,52.06,0,0,1,52-52h32a52.06,52.06,0,0,1,52,52ZM132,73.66V182.34l17.17-17.17a4,4,0,0,1,5.66,5.66l-24,24a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L124,182.34V73.66L106.83,90.83a4,4,0,0,1-5.66-5.66l24-24a4,4,0,0,1,5.66,0l24,24a4,4,0,0,1-5.66,5.66Z"/>`,
    ],
    [
      "light",
      svg`<path d="M144,18H112A62.07,62.07,0,0,0,50,80v96a62.07,62.07,0,0,0,62,62h32a62.07,62.07,0,0,0,62-62V80A62.07,62.07,0,0,0,144,18Zm50,158a50.06,50.06,0,0,1-50,50H112a50.06,50.06,0,0,1-50-50V80a50.06,50.06,0,0,1,50-50h32a50.06,50.06,0,0,1,50,50ZM134,78.49v99l13.76-13.75a6,6,0,0,1,8.48,8.48l-24,24a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L122,177.51v-99L108.24,92.24a6,6,0,0,1-8.48-8.48l24-24a6,6,0,0,1,8.48,0l24,24a6,6,0,1,1-8.48,8.48Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,160a48.05,48.05,0,0,1-48,48H112a48.05,48.05,0,0,1-48-48V80a48.05,48.05,0,0,1,48-48h32a48.05,48.05,0,0,1,48,48ZM136,83.31v89.38l10.34-10.35a8,8,0,0,1,11.32,11.32l-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L120,172.69V83.31L109.66,93.66A8,8,0,0,1,98.34,82.34l24-24a8,8,0,0,1,11.32,0l24,24a8,8,0,0,1-11.32,11.32Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M144,12H112A68.07,68.07,0,0,0,44,80v96a68.07,68.07,0,0,0,68,68h32a68.07,68.07,0,0,0,68-68V80A68.07,68.07,0,0,0,144,12Zm44,164a44.05,44.05,0,0,1-44,44H112a44.05,44.05,0,0,1-44-44V80a44.05,44.05,0,0,1,44-44h32a44.05,44.05,0,0,1,44,44ZM140,93V163l3.51-3.52a12,12,0,0,1,17,17l-24,24a12,12,0,0,1-17,0l-24-24a12,12,0,0,1,17-17L116,163V93l-3.51,3.52a12,12,0,0,1-17-17l24-24a12,12,0,0,1,17,0l24,24a12,12,0,0,1-17,17Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm2.34,146.34a8,8,0,0,1,11.32,11.32l-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L120,172.69V83.31L109.66,93.66A8,8,0,0,1,98.34,82.34l24-24a8,8,0,0,1,11.32,0l24,24a8,8,0,0,1-11.32,11.32L136,83.31v89.38Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M200,80v96a56,56,0,0,1-56,56H112a56,56,0,0,1-56-56V80a56,56,0,0,1,56-56h32A56,56,0,0,1,200,80Z" opacity="0.2"/><path d="M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,160a48.05,48.05,0,0,1-48,48H112a48.05,48.05,0,0,1-48-48V80a48.05,48.05,0,0,1,48-48h32a48.05,48.05,0,0,1,48,48ZM136,83.31v89.38l10.34-10.35a8,8,0,0,1,11.32,11.32l-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L120,172.69V83.31L109.66,93.66A8,8,0,0,1,98.34,82.34l24-24a8,8,0,0,1,11.32,0l24,24a8,8,0,0,1-11.32,11.32Z"/>`,
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
      ${PhMouseScroll.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhMouseScroll };
