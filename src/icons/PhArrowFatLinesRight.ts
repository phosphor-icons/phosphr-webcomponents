/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-arrow-fat-lines-right": PhArrowFatLinesRight;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-arrow-fat-lines-right": PhArrowFatLinesRight;
    }
  }
}

@customElement("ph-arrow-fat-lines-right")
class PhArrowFatLinesRight extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M234.83,125.17l-96-96A4,4,0,0,0,132,32V76H104a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4h28v44a4,4,0,0,0,2.47,3.7,4,4,0,0,0,4.36-.87l96-96A4,4,0,0,0,234.83,125.17ZM140,214.34V176a4,4,0,0,0-4-4H108V84h28a4,4,0,0,0,4-4V41.66L226.34,128ZM44,80v96a4,4,0,0,1-8,0V80a4,4,0,0,1,8,0Zm32,0v96a4,4,0,0,1-8,0V80a4,4,0,0,1,8,0Z"/>`,
    ],
    [
      "light",
      svg`<path d="M236.24,123.76l-96-96A6,6,0,0,0,130,32V74H104a6,6,0,0,0-6,6v96a6,6,0,0,0,6,6h26v42a6,6,0,0,0,10.24,4.24l96-96A6,6,0,0,0,236.24,123.76ZM142,209.51V176a6,6,0,0,0-6-6H110V86h26a6,6,0,0,0,6-6V46.49L223.51,128ZM46,80v96a6,6,0,0,1-12,0V80a6,6,0,0,1,12,0Zm32,0v96a6,6,0,0,1-12,0V80a6,6,0,0,1,12,0Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H104a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H112V88h24a8,8,0,0,0,8-8V51.31L220.69,128ZM48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm32,0v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M240.49,119.51l-96-96A12,12,0,0,0,124,32V68h-4a12,12,0,0,0-12,12v96a12,12,0,0,0,12,12h4v36a12,12,0,0,0,20.49,8.49l96-96A12,12,0,0,0,240.49,119.51ZM148,195V176a12,12,0,0,0-12-12h-4V92h4a12,12,0,0,0,12-12V61l67,67ZM52,80v96a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0Zm40,0v96a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm24-8a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V80A8,8,0,0,0,72,72Zm165.66,50.34-96-96A8,8,0,0,0,128,32V72H104a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M136,224V176H104V80h32V32l96,96Z" opacity="0.2"/><path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H104a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H112V88h24a8,8,0,0,0,8-8V51.31L220.69,128ZM48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm32,0v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"/>`,
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
      ${PhArrowFatLinesRight.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhArrowFatLinesRight };
