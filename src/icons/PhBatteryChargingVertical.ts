/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-battery-charging-vertical": PhBatteryChargingVertical;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-battery-charging-vertical": PhBatteryChargingVertical;
    }
  }
}

@customElement("ph-battery-charging-vertical")
class PhBatteryChargingVertical extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M147.4,133.9a4,4,0,0,1,.18,3.89l-16,32A4,4,0,0,1,128,172a4.12,4.12,0,0,1-1.79-.42,4,4,0,0,1-1.79-5.37L137.53,140H112a4,4,0,0,1-3.58-5.79l16-32a4,4,0,1,1,7.16,3.58L118.47,132H144A4,4,0,0,1,147.4,133.9ZM96,12h64a4,4,0,0,0,0-8H96a4,4,0,0,0,0,8ZM196,56V224a20,20,0,0,1-20,20H80a20,20,0,0,1-20-20V56A20,20,0,0,1,80,36h96A20,20,0,0,1,196,56Zm-8,0a12,12,0,0,0-12-12H80A12,12,0,0,0,68,56V224a12,12,0,0,0,12,12h96a12,12,0,0,0,12-12Z"/>`,
    ],
    [
      "light",
      svg`<path d="M149.1,132.85a6,6,0,0,1,.27,5.83l-16,32a6,6,0,1,1-10.74-5.36L134.29,142H112a6,6,0,0,1-5.37-8.68l16-32a6,6,0,0,1,10.74,5.36L121.71,130H144A6,6,0,0,1,149.1,132.85ZM96,14h64a6,6,0,0,0,0-12H96a6,6,0,0,0,0,12ZM198,56V224a22,22,0,0,1-22,22H80a22,22,0,0,1-22-22V56A22,22,0,0,1,80,34h96A22,22,0,0,1,198,56Zm-12,0a10,10,0,0,0-10-10H80A10,10,0,0,0,70,56V224a10,10,0,0,0,10,10h96a10,10,0,0,0,10-10Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M150.81,131.79a8,8,0,0,1,.35,7.79l-16,32a8,8,0,0,1-14.32-7.16L131.06,144H112a8,8,0,0,1-7.16-11.58l16-32a8,8,0,1,1,14.32,7.16L124.94,128H144A8,8,0,0,1,150.81,131.79ZM96,16h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM200,56V224a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V56A24,24,0,0,1,80,32h96A24,24,0,0,1,200,56Zm-16,0a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V224a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M154.21,133.69a12,12,0,0,1,.52,11.68l-16,32a12,12,0,1,1-21.46-10.74L124.58,152H112a12,12,0,0,1-10.73-17.37l16-32a12,12,0,1,1,21.46,10.74L131.42,128H144A12,12,0,0,1,154.21,133.69ZM104,24h48a12,12,0,0,0,0-24H104a12,12,0,0,0,0,24ZM204,60V228a28,28,0,0,1-28,28H80a28,28,0,0,1-28-28V60A28,28,0,0,1,80,32h96A28,28,0,0,1,204,60Zm-24,0a4,4,0,0,0-4-4H80a4,4,0,0,0-4,4V228a4,4,0,0,0,4,4h96a4,4,0,0,0,4-4Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M176,32H80A24,24,0,0,0,56,56V224a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V56A24,24,0,0,0,176,32ZM151.16,139.58l-16,32a8,8,0,0,1-14.32-7.16L131.06,144H112a8,8,0,0,1-7.16-11.58l16-32a8,8,0,1,1,14.32,7.16L124.94,128H144a8,8,0,0,1,7.16,11.58ZM88,8a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,8Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M192,56V224a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V56A16,16,0,0,1,80,40h96A16,16,0,0,1,192,56Z" opacity="0.2"/><path d="M150.81,131.79a8,8,0,0,1,.35,7.79l-16,32a8,8,0,0,1-14.32-7.16L131.06,144H112a8,8,0,0,1-7.16-11.58l16-32a8,8,0,1,1,14.32,7.16L124.94,128H144A8,8,0,0,1,150.81,131.79ZM96,16h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM200,56V224a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V56A24,24,0,0,1,80,32h96A24,24,0,0,1,200,56Zm-16,0a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V224a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8Z"/>`,
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
      ${PhBatteryChargingVertical.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhBatteryChargingVertical };
