/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-microscope": PhMicroscope;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-microscope": PhMicroscope;
    }
  }
}

@customElement("ph-microscope")
class PhMicroscope extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M224,212H194.8A83.2,83.2,0,0,0,220,152a84.1,84.1,0,0,0-80-83.9V32a12,12,0,0,0-12-12H80A12,12,0,0,0,68,32V136a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V76.11A76,76,0,0,1,182.64,212H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8Zm-92-76a4,4,0,0,1-4,4H80a4,4,0,0,1-4-4V32a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM72,180a4,4,0,0,1,0-8h64a4,4,0,0,1,0,8Z"/>`,
    ],
    [
      "light",
      svg`<path d="M224,210H199.53A85.2,85.2,0,0,0,222,152a86.1,86.1,0,0,0-80-85.77V32a14,14,0,0,0-14-14H80A14,14,0,0,0,66,32V136a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V78.26A74,74,0,0,1,182,210H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12Zm-94-74a2,2,0,0,1-2,2H80a2,2,0,0,1-2-2V32a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2ZM72,182a6,6,0,0,1,0-12h64a6,6,0,0,1,0,12Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M224,208H203.94A88.05,88.05,0,0,0,144,64.37V32a16,16,0,0,0-16-16H80A16,16,0,0,0,64,32V136a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V80.46A72,72,0,0,1,181.25,208H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Zm-96-72H80V32h48V136ZM72,184a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M224,204H212A92.1,92.1,0,0,0,148,60.78V32a20,20,0,0,0-20-20H80A20,20,0,0,0,60,32v96a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V85.08A68.1,68.1,0,0,1,204,152a67.39,67.39,0,0,1-24.18,52H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24ZM124,124H84V36h40ZM72,188a12,12,0,0,1,0-24h64a12,12,0,0,1,0,24Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M232,216a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H181.25A72,72,0,0,0,144,80.46V136a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V32A16,16,0,0,1,80,16h48a16,16,0,0,1,16,16V64.37A88.05,88.05,0,0,1,203.94,208H224A8,8,0,0,1,232,216Zm-96-32a8,8,0,0,0,0-16H72a8,8,0,0,0,0,16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M136,32V136a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V32a8,8,0,0,1,8-8h48A8,8,0,0,1,136,32Z" opacity="0.2"/><path d="M224,208H203.94A88.05,88.05,0,0,0,144,64.37V32a16,16,0,0,0-16-16H80A16,16,0,0,0,64,32V136a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V80.46A72,72,0,0,1,181.25,208H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Zm-96-72H80V32h48V136ZM72,184a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"/>`,
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
      ${PhMicroscope.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhMicroscope };
