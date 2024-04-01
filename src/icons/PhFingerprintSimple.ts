/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-fingerprint-simple": PhFingerprintSimple;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-fingerprint-simple": PhFingerprintSimple;
    }
  }
}

@customElement("ph-fingerprint-simple")
class PhFingerprintSimple extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M180,128a242.63,242.63,0,0,1-18.23,92.72,4,4,0,0,1-7.4-3A234.75,234.75,0,0,0,172,128a4,4,0,0,1,8,0ZM160.79,98.67a4,4,0,0,0,6-5.33A52,52,0,0,0,76,128,140,140,0,0,1,58.52,195.8a4,4,0,0,0,7,3.88A148.13,148.13,0,0,0,84,128a44,44,0,0,1,76.79-29.34ZM128,28a99.9,99.9,0,0,0-33.33,5.69,4,4,0,1,0,2.66,7.54A92.08,92.08,0,0,1,220,128a285.69,285.69,0,0,1-7,63.12,4,4,0,0,0,3,4.78,3.86,3.86,0,0,0,.89.1,4,4,0,0,0,3.89-3.12A293,293,0,0,0,228,128,100.11,100.11,0,0,0,128,28ZM66.67,59.43a4,4,0,0,0-5.34-6A100.17,100.17,0,0,0,28,128a91.3,91.3,0,0,1-8.34,38.33,4,4,0,0,0,2,5.3,3.93,3.93,0,0,0,1.66.37,4,4,0,0,0,3.64-2.33A99.15,99.15,0,0,0,36,128,92.16,92.16,0,0,1,66.67,59.43Zm45.58,144.94a4,4,0,0,0-5.31,2c-2,4.29-4.13,8.57-6.42,12.71a4,4,0,1,0,7,3.88c2.39-4.32,4.65-8.78,6.7-13.25A4,4,0,0,0,112.25,204.37ZM128,124a4,4,0,0,0-4,4,188.67,188.67,0,0,1-5.92,47,4,4,0,0,0,2.87,4.87,3.87,3.87,0,0,0,1,.13,4,4,0,0,0,3.87-3A196.62,196.62,0,0,0,132,128,4,4,0,0,0,128,124Z"/>`,
    ],
    [
      "light",
      svg`<path d="M182,128a244.65,244.65,0,0,1-18.38,93.48,6,6,0,0,1-5.55,3.72,6.13,6.13,0,0,1-2.28-.45,6,6,0,0,1-3.27-7.84A232.64,232.64,0,0,0,170,128a6,6,0,0,1,12,0ZM128,86a42.08,42.08,0,0,1,31.31,14,6,6,0,1,0,8.94-8A54,54,0,0,0,74,128a138.08,138.08,0,0,1-17.22,66.82,6,6,0,1,0,10.49,5.82A150.07,150.07,0,0,0,86,128,42,42,0,0,1,128,86Zm0-60a101.58,101.58,0,0,0-34,5.81,6,6,0,1,0,4,11.31A90.07,90.07,0,0,1,218,128a283.42,283.42,0,0,1-7,62.67,6,6,0,1,0,11.7,2.66A295.41,295.41,0,0,0,230,128,102.12,102.12,0,0,0,128,26ZM68,60.92A6,6,0,0,0,60,52a102.19,102.19,0,0,0-34,76,89.32,89.32,0,0,1-8.15,37.5,6,6,0,1,0,10.9,5A101.12,101.12,0,0,0,38,128,90.15,90.15,0,0,1,68,60.92Zm45.08,141.64a6,6,0,0,0-8,2.95c-2,4.24-4.09,8.47-6.36,12.57a6,6,0,0,0,2.34,8.15,5.88,5.88,0,0,0,2.9.76,6,6,0,0,0,5.25-3.09c2.42-4.36,4.7-8.87,6.78-13.39A6,6,0,0,0,113.08,202.56ZM128,122a6,6,0,0,0-6,6,186.54,186.54,0,0,1-5.86,46.5,6,6,0,0,0,4.32,7.31,5.93,5.93,0,0,0,1.5.19,6,6,0,0,0,5.8-4.5A198.75,198.75,0,0,0,134,128,6,6,0,0,0,128,122Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M184,128a246.64,246.64,0,0,1-18.54,94.24,8,8,0,0,1-7.4,5,8.19,8.19,0,0,1-3-.6,8,8,0,0,1-4.36-10.45A230.67,230.67,0,0,0,168,128a8,8,0,0,1,16,0ZM128,88a40.06,40.06,0,0,1,29.81,13.33,8,8,0,1,0,11.92-10.67A56,56,0,0,0,72,128a136.06,136.06,0,0,1-17,65.85,8,8,0,1,0,14,7.76A152.14,152.14,0,0,0,88,128,40,40,0,0,1,128,88Zm0-64a103.75,103.75,0,0,0-34.67,5.92A8,8,0,0,0,98.67,45,88.05,88.05,0,0,1,216,128a281.31,281.31,0,0,1-6.94,62.23,8,8,0,0,0,6,9.57,7.77,7.77,0,0,0,1.78.2,8,8,0,0,0,7.8-6.23A298.11,298.11,0,0,0,232,128,104.11,104.11,0,0,0,128,24ZM69.34,62.42A8,8,0,1,0,58.67,50.49,104.16,104.16,0,0,0,24,128a87.29,87.29,0,0,1-8,36.66,8,8,0,0,0,14.54,6.68A103.17,103.17,0,0,0,40,128,88.13,88.13,0,0,1,69.34,62.42Zm44.58,138.32a8,8,0,0,0-10.61,3.93c-1.92,4.2-4,8.39-6.29,12.44A8,8,0,0,0,100.14,228a7.88,7.88,0,0,0,3.87,1,8,8,0,0,0,7-4.12c2.44-4.41,4.74-9,6.84-13.52A8,8,0,0,0,113.92,200.74ZM128,120a8,8,0,0,0-8,8,185.07,185.07,0,0,1-5.79,46,8,8,0,0,0,5.75,9.74,8.12,8.12,0,0,0,2,.25,8,8,0,0,0,7.74-6,200.68,200.68,0,0,0,6.3-50A8,8,0,0,0,128,120Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M92,128A156.12,156.12,0,0,1,72.5,203.56a12,12,0,1,1-21-11.64A132,132,0,0,0,68,128a60,60,0,0,1,99.68-45,12,12,0,1,1-15.88,18A36,36,0,0,0,92,128Zm84.16-8H176a12,12,0,0,0-12,11.8,226.76,226.76,0,0,1-17,82.84,12,12,0,1,0,22.19,9.13A250.42,250.42,0,0,0,188,132.2,12,12,0,0,0,176.15,120Zm-62.22,81.21a12,12,0,0,0-16,5.54c-1.37,2.81-2.85,5.65-4.38,8.42a12,12,0,1,0,21,11.63c1.74-3.14,3.41-6.35,5-9.55A12,12,0,0,0,113.93,201.21ZM128,116a12,12,0,0,0-12,12,181,181,0,0,1-4.75,41.26,12,12,0,0,0,8.94,14.42,11.79,11.79,0,0,0,2.75.32,12,12,0,0,0,11.67-9.26A204.55,204.55,0,0,0,140,128,12,12,0,0,0,128,116Zm0-96a108,108,0,0,0-31.5,4.67,12,12,0,0,0,7,23A84.06,84.06,0,0,1,212,128a277.39,277.39,0,0,1-6.84,61.34,12,12,0,0,0,9.05,14.36,11.61,11.61,0,0,0,2.66.3,12,12,0,0,0,11.7-9.34A301.89,301.89,0,0,0,236,128,108.12,108.12,0,0,0,128,20ZM68.47,51.74a12,12,0,0,0-17,0A107.32,107.32,0,0,0,20,128a83.26,83.26,0,0,1-7.61,35,12,12,0,1,0,21.81,10A107.11,107.11,0,0,0,44,128,83.42,83.42,0,0,1,68.5,68.71,12,12,0,0,0,68.47,51.74Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M126.41,24C70.72,24.85,25.21,70.07,24,125.75a103.48,103.48,0,0,0,13.51,53.5,4,4,0,0,0,7.1-.29A119.29,119.29,0,0,0,56,128,71.93,71.93,0,0,1,73.74,80.67a8.22,8.22,0,0,1,10.8-1.59A8,8,0,0,1,86,91a55.92,55.92,0,0,0-14,37,135.12,135.12,0,0,1-18.44,68.31,4,4,0,0,0,.61,4.85A104.33,104.33,0,0,0,67,212.21,4,4,0,0,0,72.82,211,159.58,159.58,0,0,0,84,189a8,8,0,1,1,14.8,6.1,176.9,176.9,0,0,1-11.85,23.54,4,4,0,0,0,1.89,5.74,103.46,103.46,0,0,0,25,6.7,4,4,0,0,0,4.07-2,206.86,206.86,0,0,0,25.57-85.61,8,8,0,1,1,15.95,1.16,222.83,222.83,0,0,1-21.58,80.75,4,4,0,0,0,4.08,5.74,103.72,103.72,0,0,0,20.6-4.95,4,4,0,0,0,2.35-2.23A247.29,247.29,0,0,0,184,129.76c.22-30.64-23.4-56.67-54-57.73a56.72,56.72,0,0,0-16,1.73,8,8,0,0,1-9.84-6.21,8.23,8.23,0,0,1,6.29-9.39A72.05,72.05,0,0,1,200,128a264.82,264.82,0,0,1-10.66,74.63,4,4,0,0,0,6.47,4.15A104,104,0,0,0,126.41,24ZM128,96a32.05,32.05,0,0,1,23.85,10.67,8,8,0,0,1-1.24,11.79,8.26,8.26,0,0,1-10.88-1.34,16,16,0,0,0-16.78-4.3,16.39,16.39,0,0,0-11,15.67,176.89,176.89,0,0,1-3.19,33A8,8,0,0,1,101,168a7.69,7.69,0,0,1-1.5-.14,8.3,8.3,0,0,1-6.31-9.66A161.12,161.12,0,0,0,96,128,32,32,0,0,1,128,96Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M184,128a246.64,246.64,0,0,1-18.54,94.24,8,8,0,0,1-7.4,5,8.19,8.19,0,0,1-3-.6,8,8,0,0,1-4.36-10.45A230.67,230.67,0,0,0,168,128a8,8,0,0,1,16,0ZM128,88a40.06,40.06,0,0,1,29.81,13.33,8,8,0,1,0,11.92-10.67A56,56,0,0,0,72,128a136.06,136.06,0,0,1-17,65.85,8,8,0,1,0,14,7.76A152.14,152.14,0,0,0,88,128,40,40,0,0,1,128,88Zm0-64a103.75,103.75,0,0,0-34.67,5.92A8,8,0,0,0,98.67,45,88.05,88.05,0,0,1,216,128a281.31,281.31,0,0,1-6.94,62.23,8,8,0,0,0,6,9.57,7.77,7.77,0,0,0,1.78.2,8,8,0,0,0,7.8-6.23A298.11,298.11,0,0,0,232,128,104.11,104.11,0,0,0,128,24ZM69.31,62.42A8,8,0,1,0,58.64,50.49,104.16,104.16,0,0,0,24,128a87.29,87.29,0,0,1-8,36.66,8,8,0,0,0,14.54,6.68A103.17,103.17,0,0,0,40,128,88.13,88.13,0,0,1,69.31,62.42Zm44.58,138.32a8,8,0,0,0-10.6,3.93c-1.93,4.2-4.05,8.39-6.3,12.44A8,8,0,0,0,100.11,228a7.88,7.88,0,0,0,3.87,1,8,8,0,0,0,7-4.12c2.44-4.41,4.74-9,6.84-13.52A8,8,0,0,0,113.89,200.74ZM128,120a8,8,0,0,0-8,8,185.07,185.07,0,0,1-5.79,46,8,8,0,0,0,5.75,9.74,8.12,8.12,0,0,0,2,.25,8,8,0,0,0,7.74-6,200.68,200.68,0,0,0,6.3-50A8,8,0,0,0,128,120Z"/>`,
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
      ${PhFingerprintSimple.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhFingerprintSimple };
