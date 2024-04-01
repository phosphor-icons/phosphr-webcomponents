/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-device-rotate": PhDeviceRotate;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-device-rotate": PhDeviceRotate;
    }
  }
}

@customElement("ph-device-rotate")
class PhDeviceRotate extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M202.83,218.83l-24,24a4,4,0,0,1-5.66-5.66L190.34,220H80a20,20,0,0,1-20-20V104a4,4,0,0,1,8,0v96a12,12,0,0,0,12,12H190.34l-17.17-17.17a4,4,0,0,1,5.66-5.66l24,24A4,4,0,0,1,202.83,218.83ZM80,68a4,4,0,0,0,2.83-6.83L65.66,44H176a12,12,0,0,1,12,12v96a4,4,0,0,0,8,0V56a20,20,0,0,0-20-20H65.66L82.83,18.83a4,4,0,0,0-5.66-5.66l-24,24a4,4,0,0,0,0,5.66l24,24A4,4,0,0,0,80,68Z"/>`,
    ],
    [
      "light",
      svg`<path d="M204.24,220.24l-24,24a6,6,0,0,1-8.48-8.48L185.51,222H80a22,22,0,0,1-22-22V104a6,6,0,0,1,12,0v96a10,10,0,0,0,10,10H185.51l-13.75-13.76a6,6,0,0,1,8.48-8.48l24,24A6,6,0,0,1,204.24,220.24ZM80,70a6,6,0,0,0,4.24-10.24L70.49,46H176a10,10,0,0,1,10,10v96a6,6,0,0,0,12,0V56a22,22,0,0,0-22-22H70.49L84.24,20.24a6,6,0,0,0-8.48-8.48l-24,24a6,6,0,0,0,0,8.48l24,24A6,6,0,0,0,80,70Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M205.66,221.66l-24,24a8,8,0,0,1-11.32-11.32L180.69,224H80a24,24,0,0,1-24-24V104a8,8,0,0,1,16,0v96a8,8,0,0,0,8,8H180.69l-10.35-10.34a8,8,0,0,1,11.32-11.32l24,24A8,8,0,0,1,205.66,221.66ZM80,72a8,8,0,0,0,5.66-13.66L75.31,48H176a8,8,0,0,1,8,8v96a8,8,0,0,0,16,0V56a24,24,0,0,0-24-24H75.31L85.66,21.66A8,8,0,1,0,74.34,10.34l-24,24a8,8,0,0,0,0,11.32l24,24A8,8,0,0,0,80,72Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M208.49,224.49l-24,24a12,12,0,0,1-17-17L171,228H80a28,28,0,0,1-28-28V108a12,12,0,0,1,24,0v92a4,4,0,0,0,4,4h91l-3.52-3.51a12,12,0,0,1,17-17l24,24A12,12,0,0,1,208.49,224.49ZM80,76a12,12,0,0,0,8.49-20.49L85,52h91a4,4,0,0,1,4,4v92a12,12,0,0,0,24,0V56a28,28,0,0,0-28-28H85l3.52-3.52a12,12,0,0,0-17-17l-24,24a12,12,0,0,0,0,17l24,24A12,12,0,0,0,80,76Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M205.66,221.66l-24,24A8,8,0,0,1,168,240V224H80a24,24,0,0,1-24-24V104a8,8,0,0,1,16,0v96a8,8,0,0,0,8,8h88V192a8,8,0,0,1,13.66-5.66l24,24A8,8,0,0,1,205.66,221.66ZM80,72a8,8,0,0,0,8-8V48h88a8,8,0,0,1,8,8v96a8,8,0,0,0,16,0V56a24,24,0,0,0-24-24H88V16a8,8,0,0,0-13.66-5.66l-24,24a8,8,0,0,0,0,11.32l24,24A8,8,0,0,0,80,72Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M192,56V200a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V56A16,16,0,0,1,80,40h96A16,16,0,0,1,192,56Z" opacity="0.2"/><path d="M205.66,221.66l-24,24a8,8,0,0,1-11.32-11.32L180.69,224H80a24,24,0,0,1-24-24V104a8,8,0,0,1,16,0v96a8,8,0,0,0,8,8H180.69l-10.35-10.34a8,8,0,0,1,11.32-11.32l24,24A8,8,0,0,1,205.66,221.66ZM80,72a8,8,0,0,0,5.66-13.66L75.31,48H176a8,8,0,0,1,8,8v96a8,8,0,0,0,16,0V56a24,24,0,0,0-24-24H75.31L85.66,21.66A8,8,0,1,0,74.34,10.34l-24,24a8,8,0,0,0,0,11.32l24,24A8,8,0,0,0,80,72Z"/>`,
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
      ${PhDeviceRotate.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhDeviceRotate };
