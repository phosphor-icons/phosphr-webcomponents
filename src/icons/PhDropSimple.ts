/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-drop-simple": PhDropSimple;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-drop-simple": PhDropSimple;
    }
  }
}

@customElement("ph-drop-simple")
class PhDropSimple extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M171,50.37a250.18,250.18,0,0,0-40.73-37.65,4,4,0,0,0-4.58,0A250.18,250.18,0,0,0,85,50.37C58.17,81.21,44,113.58,44,144a84,84,0,0,0,168,0C212,113.58,197.83,81.21,171,50.37ZM128,220a76.08,76.08,0,0,1-76-76c0-35.9,21.15-67.8,38.9-88.23A254,254,0,0,1,128,21a254,254,0,0,1,37.1,34.81C182.85,76.2,204,108.1,204,144A76.08,76.08,0,0,1,128,220Z"/>`,
    ],
    [
      "light",
      svg`<path d="M172.53,49.06a251.42,251.42,0,0,0-41.09-38,6,6,0,0,0-6.88,0,251.42,251.42,0,0,0-41.09,38C56.34,80.26,42,113.09,42,144a86,86,0,0,0,172,0C214,113.09,199.66,80.26,172.53,49.06ZM128,218a74.09,74.09,0,0,1-74-74c0-59.62,59-108.93,74-120.51C143,35.07,202,84.38,202,144A74.09,74.09,0,0,1,128,218Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,216a72.08,72.08,0,0,1-72-72c0-57.23,55.47-105,72-118,16.53,13,72,60.75,72,118A72.08,72.08,0,0,1,128,216Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M134.88,6.17a12,12,0,0,0-13.76,0,259,259,0,0,0-42.18,39C50.85,77.43,36,111.63,36,144a92,92,0,0,0,184,0C220,66.64,138.36,8.6,134.88,6.17ZM128,212a68.07,68.07,0,0,1-68-68c0-33.31,20-63.37,36.7-82.71A249.35,249.35,0,0,1,128,31.11a249.35,249.35,0,0,1,31.3,30.18C176,80.63,196,110.69,196,144A68.07,68.07,0,0,1,128,212Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M208,144a80,80,0,0,1-160,0c0-72,80-128,80-128S208,72,208,144Z" opacity="0.2"/><path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,216a72.08,72.08,0,0,1-72-72c0-57.23,55.47-105,72-118,16.53,13,72,60.75,72,118A72.08,72.08,0,0,1,128,216Z"/>`,
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
      ${PhDropSimple.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhDropSimple };
