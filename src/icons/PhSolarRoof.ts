/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-solar-roof": PhSolarRoof;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-solar-roof": PhSolarRoof;
    }
  }
}

@customElement("ph-solar-roof")
class PhSolarRoof extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M243.58,126.21l-40-80A4,4,0,0,0,200,44H56a4,4,0,0,0-3.58,2.21l-40,80A4,4,0,0,0,12,128v56a12,12,0,0,0,12,12H232a12,12,0,0,0,12-12V128A4,4,0,0,0,243.58,126.21ZM98.47,124l-16-32h39.06l16,32Zm3.06-72,16,32H78.47l-16-32Zm48,0,16,32H126.47l-16-32Zm-3.06,72-16-32h39.06l16,32Zm48,0-16-32h39.06l16,32Zm19.06-40H174.47l-16-32h39.06ZM20,184V128.94l36-72,36,72V188H24A4,4,0,0,1,20,184Zm212,4H100V132H236v52A4,4,0,0,1,232,188Z"/>`,
    ],
    [
      "light",
      svg`<path d="M245.37,125.32l-40-80A6,6,0,0,0,200,42H56a6,6,0,0,0-5.37,3.32l-40,80A6.07,6.07,0,0,0,10,128v56a14,14,0,0,0,14,14H232a14,14,0,0,0,14-14V128A6.07,6.07,0,0,0,245.37,125.32ZM99.71,122l-14-28h34.58l14,28Zm.58-68,14,28H79.71l-14-28Zm48,0,14,28H127.71l-14-28Zm-.58,68-14-28h34.58l14,28Zm48,0-14-28h34.58l14,28Zm14.58-40H175.71l-14-28h34.58ZM22,184V129.42l34-68,34,68V186H24A2,2,0,0,1,22,184Zm210,2H102V134H234v50A2,2,0,0,1,232,186Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M247.16,124.42l-40-80A8,8,0,0,0,200,40H56a8,8,0,0,0-7.16,4.42l-40,80A8.08,8.08,0,0,0,8,128v56a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V128A8.08,8.08,0,0,0,247.16,124.42ZM99.06,56l12,24H80.94l-12-24Zm48,0,12,24H128.94l-12-24Zm-46.12,64-12-24h30.12l12,24Zm48,0-12-24h30.12l12,24Zm48,0-12-24h30.12l12,24Zm10.12-40H176.94l-12-24h30.12ZM24,129.89l32-64,32,64V184H24ZM104,184V136H232v48Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M250.73,122.63l-40-80A12,12,0,0,0,200,36H56a12,12,0,0,0-10.73,6.63l-40,80A12,12,0,0,0,4,128v56a20,20,0,0,0,20,20H232a20,20,0,0,0,20-20V128A12,12,0,0,0,250.73,122.63ZM96.58,60l8,16H83.42l-8-16Zm48,0,8,16H131.42l-8-16Zm-41.16,56-8-16h21.16l8,16Zm48,0-8-16h21.16l8,16Zm48,0-8-16h21.16l8,16Zm1.16-40H179.42l-8-16h21.16ZM28,130.83l28-56,28,56V180H28ZM108,180V140H228v40Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M247.16,124.42l-40-80A8,8,0,0,0,200,40H56a8,8,0,0,0-7.16,4.42l-40,80A8.08,8.08,0,0,0,8,128v56a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V128A8.08,8.08,0,0,0,247.16,124.42ZM99.06,56l12,24H80.94l-12-24Zm48,0,12,24H128.94l-12-24Zm-46.12,64-12-24h30.12l12,24Zm48,0-12-24h30.12l12,24Zm48,0-12-24h30.12l12,24Zm10.12-40H176.94l-12-24h30.12ZM104,184V136H232v48Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M240,128H96L56,48H200Z" opacity="0.2"/><path d="M247.16,124.42l-40-80A8,8,0,0,0,200,40H56a8,8,0,0,0-7.16,4.42l-40,80A8.08,8.08,0,0,0,8,128v56a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V128A8.08,8.08,0,0,0,247.16,124.42ZM99.06,56l12,24H80.94l-12-24Zm48,0,12,24H128.94l-12-24Zm-46.12,64-12-24h30.12l12,24Zm48,0-12-24h30.12l12,24Zm48,0-12-24h30.12l12,24Zm10.12-40H176.94l-12-24h30.12ZM24,129.89l32-64,32,64V184H24ZM104,184V136H232v48Z"/>`,
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
      ${PhSolarRoof.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhSolarRoof };
