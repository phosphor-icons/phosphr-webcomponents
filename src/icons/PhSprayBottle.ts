/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-spray-bottle": PhSprayBottle;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-spray-bottle": PhSprayBottle;
    }
  }
}

@customElement("ph-spray-bottle")
class PhSprayBottle extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M200,76a4,4,0,0,0,4-4,52.06,52.06,0,0,0-52-52H80A12,12,0,0,0,68,32V80a28,28,0,0,1-28,28,4,4,0,0,0,0,8A36,36,0,0,0,76,80V76h40v28.62a27.85,27.85,0,0,1-10.51,21.86l-16,12.79A35.8,35.8,0,0,0,76,167.38V224a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V211.47A266.86,266.86,0,0,0,167.09,76ZM76,32a4,4,0,0,1,4-4h72a44.06,44.06,0,0,1,43.82,40H76ZM196,211.47V224a4,4,0,0,1-4,4H88a4,4,0,0,1-4-4V167.38a27.85,27.85,0,0,1,10.51-21.86l16-12.79A35.8,35.8,0,0,0,124,104.62V76h33.76A258.83,258.83,0,0,1,196,211.47Z"/>`,
    ],
    [
      "light",
      svg`<path d="M200,78a6,6,0,0,0,6-6,54.06,54.06,0,0,0-54-54H80A14,14,0,0,0,66,32V80a26,26,0,0,1-26,26,6,6,0,0,0,0,12A38,38,0,0,0,78,80V78h36v26.62a25.87,25.87,0,0,1-9.76,20.3l-16,12.79A37.81,37.81,0,0,0,74,167.38V224a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V211.47A268.92,268.92,0,0,0,170.57,78ZM78,32a2,2,0,0,1,2-2h72a42.06,42.06,0,0,1,41.57,36H78ZM194,211.47V224a2,2,0,0,1-2,2H88a2,2,0,0,1-2-2V167.38a25.87,25.87,0,0,1,9.76-20.3l16-12.79A37.81,37.81,0,0,0,126,104.62V78h30.64A256.84,256.84,0,0,1,194,211.47Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M200,80a8,8,0,0,0,8-8,56.06,56.06,0,0,0-56-56H80A16,16,0,0,0,64,32V80a24,24,0,0,1-24,24,8,8,0,0,0,0,16A40,40,0,0,0,80,80h32v24.62a23.87,23.87,0,0,1-9,18.74L87,136.15a39.79,39.79,0,0,0-15,31.23V224a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V211.47A270.88,270.88,0,0,0,174,80ZM80,32h72a40.08,40.08,0,0,1,39.2,32H80ZM192,211.47V224H88V167.38a23.87,23.87,0,0,1,9-18.74l16-12.79a39.79,39.79,0,0,0,15-31.23V80h27.52A254.86,254.86,0,0,1,192,211.47Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M200,84a12,12,0,0,0,12-12,60.07,60.07,0,0,0-60-60H80A20,20,0,0,0,60,32V80a20,20,0,0,1-20,20,12,12,0,0,0,0,24A44.06,44.06,0,0,0,83.82,84H108v20.62a19.92,19.92,0,0,1-7.51,15.62L84.51,133A43.8,43.8,0,0,0,68,167.38V224a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V211.47A274.77,274.77,0,0,0,180.68,84ZM84,36h68a36,36,0,0,1,33.94,24H84ZM188,211.47V220H92V167.38a19.92,19.92,0,0,1,7.51-15.62l16-12.78A43.8,43.8,0,0,0,132,104.62V84h21.24A250.93,250.93,0,0,1,188,211.47Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M200,80a8,8,0,0,0,8-8,56.06,56.06,0,0,0-56-56H80A16,16,0,0,0,64,32V80a24,24,0,0,1-24,24,8,8,0,0,0,0,16A40,40,0,0,0,80,80h32v24.62a23.87,23.87,0,0,1-9,18.74L87,136.15a39.79,39.79,0,0,0-15,31.23V224a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V211.47A270.88,270.88,0,0,0,174,80ZM80,32h72a40.08,40.08,0,0,1,39.2,32H80Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M200,211.47V224a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V167.38a32,32,0,0,1,12-25l16-12.78a32,32,0,0,0,12-25V72h40A263.14,263.14,0,0,1,200,211.47Z" opacity="0.2"/><path d="M200,80a8,8,0,0,0,8-8,56.06,56.06,0,0,0-56-56H80A16,16,0,0,0,64,32V80a24,24,0,0,1-24,24,8,8,0,0,0,0,16A40,40,0,0,0,80,80h32v24.62a23.87,23.87,0,0,1-9,18.74L87,136.15a39.79,39.79,0,0,0-15,31.23V224a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V211.47A270.88,270.88,0,0,0,174,80ZM80,32h72a40.08,40.08,0,0,1,39.2,32H80ZM192,211.47V224H88V167.38a23.87,23.87,0,0,1,9-18.74l16-12.79a39.79,39.79,0,0,0,15-31.23V80h27.52A254.86,254.86,0,0,1,192,211.47Z"/>`,
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
      ${PhSprayBottle.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhSprayBottle };
