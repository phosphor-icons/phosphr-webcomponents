/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-windmill": PhWindmill;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-windmill": PhWindmill;
    }
  }
}

@customElement("ph-windmill")
class PhWindmill extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M224,228H179.47l-8-55.78,10.4,6.12a12,12,0,0,0,16.45-4.25l12-20.34a12,12,0,0,0-4.26-16.43l-38.46-22.64L210.34,42.1a12,12,0,0,0-4.25-16.44l-20.34-12a12,12,0,0,0-16.44,4.25L146.68,56.38,74.1,13.66a12,12,0,0,0-16.45,4.25l-12,20.34a12,12,0,0,0,4.26,16.44L88.38,77.33,45.66,149.91a12,12,0,0,0,4.25,16.44l20.34,12a12,12,0,0,0,13.5-.91L76.53,228H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8Zm-20.13-81.34a3.93,3.93,0,0,1-.43,3l-12,20.34a4,4,0,0,1-5.49,1.42l-72.58-42.72,16-27.25L202,144.21A4,4,0,0,1,203.87,146.66ZM176.21,22a4,4,0,0,1,5.48-1.42l20.34,12A4,4,0,0,1,203.44,38l-42.71,72.58-27.25-16ZM52.13,45.35a3.92,3.92,0,0,1,.43-3L64.55,22A4,4,0,0,1,70,20.56l72.58,42.72-16,27.25L54,47.79A4,4,0,0,1,52.13,45.35ZM77.34,171.87a4,4,0,0,1-3-.42L54,159.46a4,4,0,0,1-1.41-5.5L95.27,81.38l27.25,16L79.79,170A4,4,0,0,1,77.34,171.87Zm16.78-10.41,15.2-25.84L162.68,167l8.71,61H84.61Z"/>`,
    ],
    [
      "light",
      svg`<path d="M224,226H181.2l-7.13-49.95,6.82,4a14,14,0,0,0,19.18-4.95l12-20.34a14,14,0,0,0-5-19.18L170.36,114l41.7-70.86a14,14,0,0,0-5-19.17L186.77,12a14,14,0,0,0-19.18,5L146,53.65,75.11,11.94a14,14,0,0,0-19.18,5l-12,20.34a14,14,0,0,0,5,19.17L85.64,78l-41.7,70.85a14,14,0,0,0,5,19.18l20.33,12A13.92,13.92,0,0,0,76.32,182a13.74,13.74,0,0,0,3.53-.46c.46-.12.91-.26,1.36-.42L74.8,226H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12Zm-22.06-78.84a2,2,0,0,1-.22,1.51l-12,20.34a2,2,0,0,1-2.75.71L116.12,128l14-23.8L201,145.93A2,2,0,0,1,201.94,147.16ZM177.93,23a2,2,0,0,1,1.23-.92,2,2,0,0,1,1.51.21l20.34,12a2,2,0,0,1,.71,2.76L160,107.88l-23.81-14ZM54.06,44.85a2,2,0,0,1,.22-1.52L66.27,23A2,2,0,0,1,69,22.28L139.88,64l-14,23.8L55,46.07A2,2,0,0,1,54.06,44.85ZM78.07,169a2,2,0,0,1-2.74.71L55,157.73a2,2,0,0,1-.71-2.75L96,84.12l23.81,14Zm18-6.88,14-23.77,50.8,29.9L169.08,226H86.92Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M224,224H182.94l-6.3-44.12,3.24,1.91a16,16,0,0,0,21.91-5.67l12-20.34a16,16,0,0,0-5.67-21.91l-35-20.61,40.69-69.13a16,16,0,0,0-5.67-21.91l-20.34-12a16,16,0,0,0-21.91,5.67l-20.61,35L76.12,10.22a16,16,0,0,0-21.91,5.67l-12,20.33a16,16,0,0,0,5.67,21.92l35,20.61L42.21,147.88a16,16,0,0,0,5.67,21.91l20.34,12a15.57,15.57,0,0,0,10.58,2L73.06,224H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Zm-24-76.34L188,168l-69.13-40.69,12-20.35ZM179.66,24,200,36l-40.69,69.14L139,93.17ZM56,44.35,68,24,137.14,64.7l-12,20.35ZM76.34,168,56,156,96.69,86.86l20.36,12Zm12.88,56L98,162.8l12.77-21.7L159,169.5l7.79,54.5Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M224,220H186.41l-4.72-33a20,20,0,0,0,23.55-8.83l12-20.33a20,20,0,0,0-7.09-27.4l-31.57-18.58,38.66-65.68a20,20,0,0,0-7.08-27.39l-20.34-12a20,20,0,0,0-27.39,7.09L143.84,45.43,78.15,6.77a20,20,0,0,0-27.39,7.09l-12,20.33a20,20,0,0,0,7.09,27.4L77.43,80.17,38.77,145.85a20,20,0,0,0,7.08,27.39l20.34,12a19.83,19.83,0,0,0,8,2.65L69.59,220H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24Zm-37.41-57.47-62.26-36.64,7.93-13.46,62.26,36.65Zm-5.52-133,13.46,7.93L157.89,99.67l-13.46-7.92Zm-111.66,0,62.26,36.64-7.93,13.46L61.48,42.93ZM61.47,154.59,98.11,92.34l13.46,7.92L74.93,162.52Zm40.34,9.56,10.35-17.57L155.3,172l6.86,48H93.84Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M232,231.47a8.17,8.17,0,0,0-8.25-7.47H182.94l-6.3-44.12,3.24,1.91a16,16,0,0,0,21.91-5.67l11.81-20a16.49,16.49,0,0,0,2.11-11.49,15.92,15.92,0,0,0-7.6-10.74L148.93,99a8.18,8.18,0,0,1-3.33-10.63,8,8,0,0,1,11.21-3.3l20.95,12.33A4,4,0,0,0,183.24,96l30.55-51.9a16,16,0,0,0-5.67-21.92l-20.34-12a16,16,0,0,0-21.91,5.67l-35,59.42a8,8,0,0,1-11.79,2.27A8.13,8.13,0,0,1,117.21,67l12.23-20.78A4,4,0,0,0,128,40.76L76.12,10.22a16,16,0,0,0-21.91,5.67l-11.81,20a16.47,16.47,0,0,0-2.11,11.48,16,16,0,0,0,7.6,10.75L107.08,93a8.16,8.16,0,0,1,3.47,10.3,8,8,0,0,1-11.36,3.62l-21-12.34A4,4,0,0,0,72.76,96l-30.55,51.9a16,16,0,0,0,5.67,21.91l20.34,12a15.57,15.57,0,0,0,10.58,2L73.06,224H32.27A8.17,8.17,0,0,0,24,231.47,8,8,0,0,0,32,240H224A8,8,0,0,0,232,231.47ZM89.22,224,98,162.8l12.77-21.7h0L125,116.93a8.18,8.18,0,0,1,10.62-3.33,8,8,0,0,1,3.3,11.21l-12.33,21a4,4,0,0,0,1.42,5.47l31,18.25L166.78,224Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M176,232H80l10.27-71.89,17.63-30,58.46,34.41Z" opacity="0.2"/><path d="M224,224H182.94l-6.3-44.12,3.24,1.91a16,16,0,0,0,21.91-5.67l12-20.34a16,16,0,0,0-5.67-21.91l-35-20.61,40.69-69.13a16,16,0,0,0-5.67-21.91l-20.34-12a16,16,0,0,0-21.91,5.67l-20.61,35L76.12,10.22a16,16,0,0,0-21.91,5.67l-12,20.33a16,16,0,0,0,5.67,21.92l35,20.61L42.21,147.88a16,16,0,0,0,5.67,21.91l20.34,12a15.57,15.57,0,0,0,10.58,2L73.06,224H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Zm-24-76.34L188,168l-69.13-40.69,12-20.35ZM179.66,24,200,36l-40.69,69.14L139,93.17ZM56,44.35,68,24,137.14,64.7l-12,20.35ZM76.34,168,56,156,96.69,86.86l20.36,12Zm12.88,56L98,162.8l12.77-21.7L159,169.5l7.79,54.5Z"/>`,
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
      ${PhWindmill.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhWindmill };
