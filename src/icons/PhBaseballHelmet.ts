/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-baseball-helmet": PhBaseballHelmet;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-baseball-helmet": PhBaseballHelmet;
    }
  }
}

@customElement("ph-baseball-helmet")
class PhBaseballHelmet extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M88,132a24,24,0,1,0,24,24A24,24,0,0,0,88,132Zm0,40a16,16,0,1,1,16-16A16,16,0,0,1,88,172Zm160-48H219.92A100,100,0,0,0,20,128v24a68.07,68.07,0,0,0,68,68h40a68.07,68.07,0,0,0,68-68V132h52a4,4,0,0,0,0-8Zm-60,28a60.07,60.07,0,0,1-60,60h-8a68.07,68.07,0,0,0,36-60V132h32Zm-36-28a4,4,0,0,0-4,4v24a60,60,0,0,1-120,0V128a92,92,0,0,1,183.91-4Z"/>`,
    ],
    [
      "light",
      svg`<path d="M88,130a26,26,0,1,0,26,26A26,26,0,0,0,88,130Zm0,40a14,14,0,1,1,14-14A14,14,0,0,1,88,170Zm160-48H221.83A102,102,0,0,0,18,128v24a70.08,70.08,0,0,0,70,70h40a70.08,70.08,0,0,0,70-70V134h50a6,6,0,0,0,0-12Zm-62,30a58.07,58.07,0,0,1-58,58h-.85A70,70,0,0,0,158,152V134h28Zm-34-30a6,6,0,0,0-6,6v24a58,58,0,0,1-116,0V128a90,90,0,0,1,179.8-6Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M88,128a28,28,0,1,0,28,28A28,28,0,0,0,88,128Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,88,168Zm160-48H223.7A104,104,0,0,0,16,128v24a72.08,72.08,0,0,0,72,72h40a72.08,72.08,0,0,0,72-72V136h48a8,8,0,0,0,0-16Zm-64,32a56.06,56.06,0,0,1-50.46,55.72A71.87,71.87,0,0,0,160,152V136h24Zm-32-32a8,8,0,0,0-8,8v24a56,56,0,0,1-112,0V128a88,88,0,0,1,175.64-8Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M120,156a32,32,0,1,0-32,32A32,32,0,0,0,120,156Zm-40,0a8,8,0,1,1,8,8A8,8,0,0,1,80,156Zm164-40H227.34A108,108,0,0,0,12,128v24a76.08,76.08,0,0,0,76,76h40a76.08,76.08,0,0,0,76-76V140h40a12,12,0,0,0,0-24ZM36,152V128a84,84,0,0,1,167.15-12H152a12,12,0,0,0-12,12v24a52,52,0,0,1-104,0Zm144,0a52.07,52.07,0,0,1-33.67,48.65A75.63,75.63,0,0,0,164,152V140h16Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M248,120H223.7A104,104,0,0,0,16,128v24a72.08,72.08,0,0,0,72,72h40a72.08,72.08,0,0,0,72-72V136h48a8,8,0,0,0,0-16ZM88,180a24,24,0,1,1,24-24A24,24,0,0,1,88,180Zm96-28a56.06,56.06,0,0,1-50.46,55.72A71.87,71.87,0,0,0,160,152V136h24Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M88,176a20,20,0,1,1,20-20A20,20,0,0,1,88,176Zm64-48v24a64,64,0,0,1-64,64h40a64,64,0,0,0,64-64V128Z" opacity="0.2"/><path d="M88,128a28,28,0,1,0,28,28A28,28,0,0,0,88,128Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,88,168Zm160-48H223.7A104,104,0,0,0,16,128v24a72.08,72.08,0,0,0,72,72h40a72.08,72.08,0,0,0,72-72V136h48a8,8,0,0,0,0-16Zm-64,32a56.06,56.06,0,0,1-50.46,55.72A71.87,71.87,0,0,0,160,152V136h24Zm-32-32a8,8,0,0,0-8,8v24a56,56,0,0,1-112,0V128a88,88,0,0,1,175.64-8Z"/>`,
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
      ${PhBaseballHelmet.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhBaseballHelmet };
