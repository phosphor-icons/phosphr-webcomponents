/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-headlights": PhHeadlights;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-headlights": PhHeadlights;
    }
  }
}

@customElement("ph-headlights")
class PhHeadlights extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M164,80a4,4,0,0,1,4-4h72a4,4,0,0,1,0,8H168A4,4,0,0,1,164,80Zm76,92H168a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0-64H168a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0,32H168a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8ZM140,64V192a12,12,0,0,1-12,12H88a76,76,0,0,1-76-76.58C12.31,85.83,46.81,52,88.9,52H128A12,12,0,0,1,140,64Zm-8,0a4,4,0,0,0-4-4H88.9C51.19,60,20.28,90.27,20,127.48A68,68,0,0,0,88,196h40a4,4,0,0,0,4-4Z"/>`,
    ],
    [
      "light",
      svg`<path d="M162,80a6,6,0,0,1,6-6h72a6,6,0,0,1,0,12H168A6,6,0,0,1,162,80Zm78,90H168a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm0-64H168a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm0,32H168a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12ZM142,64V192a14,14,0,0,1-14,14H88a78,78,0,0,1-78-78.59C10.32,84.73,45.71,50,88.9,50H128A14,14,0,0,1,142,64Zm-12,0a2,2,0,0,0-2-2H88.9C52.28,62,22.27,91.38,22,127.5A66,66,0,0,0,88,194h40a2,2,0,0,0,2-2Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M160,80a8,8,0,0,1,8-8h72a8,8,0,0,1,0,16H168A8,8,0,0,1,160,80Zm80,88H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0-64H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,32H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16ZM144,64V192a16,16,0,0,1-16,16H88A80,80,0,0,1,8,127.39C8.33,83.62,44.62,48,88.9,48H128A16,16,0,0,1,144,64Zm-16,0H88.9C53.38,64,24.26,92.49,24,127.51A64,64,0,0,0,88,192h40Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M164,80a12,12,0,0,1,12-12h64a12,12,0,0,1,0,24H176A12,12,0,0,1,164,80Zm76,84H176a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Zm0-48H176a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24ZM148,64V192a20,20,0,0,1-20,20H88A84,84,0,0,1,4,127.37C4.34,81.4,42.43,44,88.9,44H128A20,20,0,0,1,148,64Zm-24,4H88.9C55.57,68,28.25,94.71,28,127.54A60,60,0,0,0,88,188h36Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M160,80a8,8,0,0,1,8-8h72a8,8,0,0,1,0,16H168A8,8,0,0,1,160,80Zm80,88H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0-64H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,32H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16ZM128,48H88.9C44.62,48,8.33,83.62,8,127.39A80,80,0,0,0,88,208h40a16,16,0,0,0,16-16V64A16,16,0,0,0,128,48Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M136,64V192a8,8,0,0,1-8,8H88a72,72,0,0,1-72-72.55C16.3,87.75,49.2,56,88.9,56H128A8,8,0,0,1,136,64Z" opacity="0.2"/><path d="M160,80a8,8,0,0,1,8-8h72a8,8,0,0,1,0,16H168A8,8,0,0,1,160,80Zm80,88H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0-64H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,32H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16ZM144,64V192a16,16,0,0,1-16,16H88A80,80,0,0,1,8,127.39C8.33,83.62,44.62,48,88.9,48H128A16,16,0,0,1,144,64Zm-16,0H88.9C53.38,64,24.26,92.49,24,127.51A64,64,0,0,0,88,192h40Z"/>`,
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
      ${PhHeadlights.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhHeadlights };
