/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-calendar": PhCalendar;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-calendar": PhCalendar;
    }
  }
}

@customElement("ph-calendar")
class PhCalendar extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212ZM108,120v64a4,4,0,0,1-8,0V126.47l-10.21,5.11a4,4,0,0,1-3.58-7.16l16-8A4,4,0,0,1,108,120Zm60,28-24,32h24a4,4,0,0,1,0,8H136a4,4,0,0,1-3.2-6.4l28.78-38.37A11.88,11.88,0,0,0,164,136a12,12,0,0,0-22.4-6,4,4,0,0,1-6.92-4A20,20,0,0,1,172,136,19.79,19.79,0,0,1,168,148Z"/>`,
    ],
    [
      "light",
      svg`<path d="M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Zm-98-90v64a6,6,0,0,1-12,0V129.71l-7.32,3.66a6,6,0,1,1-5.36-10.74l16-8A6,6,0,0,1,110,120Zm59.57,29.25L148,178h20a6,6,0,0,1,0,12H136a6,6,0,0,1-4.8-9.6L160,142a10,10,0,1,0-16.65-11A6,6,0,1,1,133,125a22,22,0,1,1,36.62,24.26Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Zm60-80v56a12,12,0,0,1-24,0V143.32a12,12,0,0,1-9.37-22l16-8A12,12,0,0,1,112,124Zm61.49,33.88L163.9,168H168a12,12,0,0,1,0,24H136a12,12,0,0,1-8.71-20.25L155.45,142a4,4,0,0,0,.55-2,4,4,0,0,0-7.47-2,12,12,0,0,1-20.78-12A28,28,0,0,1,180,140a27.77,27.77,0,0,1-5.64,16.86A10.63,10.63,0,0,1,173.49,157.88Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM112,184a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm56-8a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136a23.76,23.76,0,0,1-4.84,14.45L152,176ZM48,80V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"/><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"/>`,
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
      ${PhCalendar.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhCalendar };
