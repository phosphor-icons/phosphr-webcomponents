/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-camera-plus": PhCameraPlus;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-camera-plus": PhCameraPlus;
    }
  }
}

@customElement("ph-camera-plus")
class PhCameraPlus extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M164,136a4,4,0,0,1-4,4H132v28a4,4,0,0,1-8,0V140H96a4,4,0,0,1,0-8h28V104a4,4,0,0,1,8,0v28h28A4,4,0,0,1,164,136Zm64-56V192a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V80A20,20,0,0,1,48,60H77.86L90.3,41.34a12,12,0,0,1,10-5.34h55.44a12,12,0,0,1,10,5.34L178.14,60H208A20,20,0,0,1,228,80Zm-8,0a12,12,0,0,0-12-12H176a4,4,0,0,1-3.33-1.78L159.05,45.78A4,4,0,0,0,155.72,44H100.28A4,4,0,0,0,97,45.78L83.33,66.22A4,4,0,0,1,80,68H48A12,12,0,0,0,36,80V192a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12Z"/>`,
    ],
    [
      "light",
      svg`<path d="M166,136a6,6,0,0,1-6,6H134v26a6,6,0,0,1-12,0V142H96a6,6,0,0,1,0-12h26V104a6,6,0,0,1,12,0v26h26A6,6,0,0,1,166,136Zm64-56V192a22,22,0,0,1-22,22H48a22,22,0,0,1-22-22V80A22,22,0,0,1,48,58H76.79L88.63,40.23A14,14,0,0,1,100.28,34h55.44a14,14,0,0,1,11.65,6.23L179.21,58H208A22,22,0,0,1,230,80Zm-12,0a10,10,0,0,0-10-10H176a6,6,0,0,1-5-2.67L157.38,46.89a2,2,0,0,0-1.66-.89H100.28a2,2,0,0,0-1.66.89L85,67.33A6,6,0,0,1,80,70H48A10,10,0,0,0,38,80V192a10,10,0,0,0,10,10H208a10,10,0,0,0,10-10Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M168,136a8,8,0,0,1-8,8H136v24a8,8,0,0,1-16,0V144H96a8,8,0,0,1,0-16h24V104a8,8,0,0,1,16,0v24h24A8,8,0,0,1,168,136Zm64-56V192a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V80A24,24,0,0,1,48,56H75.72L87,39.12A16,16,0,0,1,100.28,32h55.44A16,16,0,0,1,169,39.12L180.28,56H208A24,24,0,0,1,232,80Zm-16,0a8,8,0,0,0-8-8H176a8,8,0,0,1-6.66-3.56L155.72,48H100.28L86.66,68.44A8,8,0,0,1,80,72H48a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M172,136a12,12,0,0,1-12,12H140v20a12,12,0,0,1-24,0V148H96a12,12,0,0,1,0-24h20V104a12,12,0,0,1,24,0v20h20A12,12,0,0,1,172,136Zm64-56V192a28,28,0,0,1-28,28H48a28,28,0,0,1-28-28V80A28,28,0,0,1,48,52H73.58L83.64,36.91A20,20,0,0,1,100.28,28h55.44a20,20,0,0,1,16.64,8.91L182.42,52H208A28,28,0,0,1,236,80Zm-24,0a4,4,0,0,0-4-4H176a12,12,0,0,1-10-5.34L153.58,52H102.42L90,70.66A12,12,0,0,1,80,76H48a4,4,0,0,0-4,4V192a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,56H180.28L169,39.12A16,16,0,0,0,155.72,32H100.28A16,16,0,0,0,87,39.12L75.72,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm-48,88H136v24a8,8,0,0,1-16,0V144H96a8,8,0,0,1,0-16h24V104a8,8,0,0,1,16,0v24h24a8,8,0,0,1,0,16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,80V192a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L93.62,43.56A8,8,0,0,1,100.28,40h55.44a8,8,0,0,1,6.66,3.56L176,64h32A16,16,0,0,1,224,80Z" opacity="0.2"/><path d="M168,136a8,8,0,0,1-8,8H136v24a8,8,0,0,1-16,0V144H96a8,8,0,0,1,0-16h24V104a8,8,0,0,1,16,0v24h24A8,8,0,0,1,168,136Zm64-56V192a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V80A24,24,0,0,1,48,56H75.72L87,39.12A16,16,0,0,1,100.28,32h55.44A16,16,0,0,1,169,39.12L180.28,56H208A24,24,0,0,1,232,80Zm-16,0a8,8,0,0,0-8-8H176a8,8,0,0,1-6.66-3.56L155.72,48H100.28L86.66,68.44A8,8,0,0,1,80,72H48a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8Z"/>`,
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
      ${PhCameraPlus.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhCameraPlus };
