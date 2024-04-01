/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-pen-nib-straight": PhPenNibStraight;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-pen-nib-straight": PhPenNibStraight;
    }
  }
}

@customElement("ph-pen-nib-straight")
class PhPenNibStraight extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M218.75,125.66a1.14,1.14,0,0,0-.1-.19L188,70.94V32a12,12,0,0,0-12-12H80A12,12,0,0,0,68,32V71L37.34,125.47l-.1.19a12,12,0,0,0,1.15,12.5l86.44,112.28a4,4,0,0,0,6.34,0l86.49-112.35A12,12,0,0,0,218.75,125.66ZM80,28h96a4,4,0,0,1,4,4V68H76V32A4,4,0,0,1,80,28Zm48,120a16,16,0,1,1,16-16A16,16,0,0,1,128,148Zm83.27-14.72L132,236.25V155.66a24,24,0,1,0-8,0v80.58L44.78,133.34a4,4,0,0,1-.4-4.06L74.35,76H181.66l30,53.28A4,4,0,0,1,211.27,133.28Z"/>`,
    ],
    [
      "light",
      svg`<path d="M220.54,124.77a1.91,1.91,0,0,0-.15-.28L190,70.42V32a14,14,0,0,0-14-14H80A14,14,0,0,0,66,32V70.44l-30.4,54.05a1.91,1.91,0,0,0-.15.28,14,14,0,0,0,1.27,14.5.76.76,0,0,1,.08.11l86.44,112.28a6,6,0,0,0,9.51,0l86.43-112.28a.76.76,0,0,1,.08-.11A14,14,0,0,0,220.54,124.77ZM80,30h96a2,2,0,0,1,2,2V66H78V32A2,2,0,0,1,80,30Zm48,116a14,14,0,1,1,14-14A14,14,0,0,1,128,146Zm81.63-13.88L134,230.38V157.29a26,26,0,1,0-12,0v73.07L46.37,132.12a2,2,0,0,1-.2-1.93L75.52,78h105l29.34,52.19A2,2,0,0,1,209.63,132.12Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M222.33,123.89c-.06-.13-.12-.26-.19-.38L192,69.9V32a16,16,0,0,0-16-16H80A16,16,0,0,0,64,32V69.92L33.86,123.51c-.07.12-.13.25-.2.38a15.94,15.94,0,0,0,1.46,16.57l.11.14,86.44,112.28a8,8,0,0,0,12.67,0L220.77,140.6l.11-.14A15.92,15.92,0,0,0,222.33,123.89ZM176,32V64H80V32ZM128,144a12,12,0,1,1,12-12A12,12,0,0,1,128,144Zm8,80.5V158.83a28,28,0,1,0-16,0v65.66L48,131,76.69,80H179.32L208,131Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M225.92,122.11c-.1-.19-.19-.37-.3-.56L196,68.85V32a20,20,0,0,0-20-20H80A20,20,0,0,0,60,32V68.87L30.38,121.55a5.12,5.12,0,0,0-.3.57,19.89,19.89,0,0,0,1.83,20.71c.09.13.18.25.28.37l86.44,108.29a12,12,0,0,0,18.75,0L223.81,143.2c.1-.12.19-.24.28-.37A19.91,19.91,0,0,0,225.92,122.11ZM172,36V60H84V36ZM128,144a10,10,0,1,1,10-10A10,10,0,0,1,128,144Zm12,65.74V165.81a34,34,0,1,0-24,0v43.92L52.83,130.59,79,84H177l26.19,46.59Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M222.33,123.89c-.06-.13-.12-.26-.19-.38L192,69.91V32a16,16,0,0,0-16-16H80A16,16,0,0,0,64,32V69.9L33.86,123.51c-.07.12-.13.25-.2.38a15.94,15.94,0,0,0,1.46,16.57l.11.14,77.61,100.81A4,4,0,0,0,120,239V154.63a24,24,0,1,1,16,0V239a4,4,0,0,0,7.16,2.44l77.6-100.81.11-.14A15.92,15.92,0,0,0,222.33,123.89ZM176,64H80V32h96Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M215.17,127.43,184,72H72L40.83,127.43a8,8,0,0,0,.73,8.29L128,248l86.43-112.28A8,8,0,0,0,215.17,127.43ZM128,152a20,20,0,1,1,20-20A20,20,0,0,1,128,152Z" opacity="0.2"/><path d="M222.33,123.89c-.06-.13-.12-.26-.19-.38L192,69.9V32a16,16,0,0,0-16-16H80A16,16,0,0,0,64,32V69.92L33.86,123.51c-.07.12-.13.25-.2.38a15.94,15.94,0,0,0,1.46,16.57l.11.14,86.44,112.28a8,8,0,0,0,12.67,0L220.77,140.6l.11-.14A15.92,15.92,0,0,0,222.33,123.89ZM176,32V64H80V32ZM128,144a12,12,0,1,1,12-12A12,12,0,0,1,128,144Zm8,80.5V158.83a28,28,0,1,0-16,0v65.66L48,131,76.69,80H179.32L208,131Z"/>`,
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
      ${PhPenNibStraight.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhPenNibStraight };
