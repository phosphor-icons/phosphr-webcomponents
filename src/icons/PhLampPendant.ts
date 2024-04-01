/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-lamp-pendant": PhLampPendant;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-lamp-pendant": PhLampPendant;
    }
  }
}

@customElement("ph-lamp-pendant")
class PhLampPendant extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M172,77.34V72a12,12,0,0,0-12-12H132V16a4,4,0,0,0-8,0V60H96A12,12,0,0,0,84,72v5.34A107.75,107.75,0,0,0,20,176a4,4,0,0,0,4,4H92v4a36,36,0,0,0,72,0v-4h68a4,4,0,0,0,4-4A107.75,107.75,0,0,0,172,77.34ZM156,184a28,28,0,0,1-56,0v-4h56ZM28.08,172A99.77,99.77,0,0,1,89.54,83.66,4,4,0,0,0,92,80V72a4,4,0,0,1,4-4h64a4,4,0,0,1,4,4v8a4,4,0,0,0,2.46,3.69A99.77,99.77,0,0,1,227.92,172Z"/>`,
    ],
    [
      "light",
      svg`<path d="M174,76.05V72a14,14,0,0,0-14-14H134V16a6,6,0,0,0-12,0V58H96A14,14,0,0,0,82,72v4A109.76,109.76,0,0,0,18,176a6,6,0,0,0,6,6H90v2a38,38,0,0,0,76,0v-2h66a6,6,0,0,0,6-6A109.76,109.76,0,0,0,174,76.05ZM154,184a26,26,0,0,1-52,0v-2h52ZM30.18,170A97.76,97.76,0,0,1,90.31,85.51,6,6,0,0,0,94,80V72a2,2,0,0,1,2-2h64a2,2,0,0,1,2,2v8a6,6,0,0,0,3.69,5.54A97.76,97.76,0,0,1,225.82,170Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M176,74.78V72a16,16,0,0,0-16-16H136V16a8,8,0,0,0-16,0V56H96A16,16,0,0,0,80,72v2.78A111.73,111.73,0,0,0,16,176a8,8,0,0,0,8,8H88a40,40,0,0,0,80,0h64a8,8,0,0,0,8-8A111.73,111.73,0,0,0,176,74.78ZM128,208a24,24,0,0,1-24-24h48A24,24,0,0,1,128,208ZM32.33,168A95.79,95.79,0,0,1,91.08,87.35,8,8,0,0,0,96,80V72h64v8a8,8,0,0,0,4.92,7.38A95.79,95.79,0,0,1,223.67,168Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M180,72.28V72a20,20,0,0,0-20-20H140V16a12,12,0,0,0-24,0V52H96A20,20,0,0,0,76,72v.28A115.7,115.7,0,0,0,12,176a12,12,0,0,0,12,12H84.19a44,44,0,0,0,87.62,0H232a12,12,0,0,0,12-12A115.7,115.7,0,0,0,180,72.28ZM128,204a20,20,0,0,1-19.6-16h39.2A20,20,0,0,1,128,204ZM36.78,164A91.75,91.75,0,0,1,92.62,91.05,12,12,0,0,0,100,80V76h56v4a12,12,0,0,0,7.38,11.08,91.75,91.75,0,0,1,55.84,73Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M176,74.78V72a16,16,0,0,0-16-16H136V16a8,8,0,0,0-16,0V56H96A16,16,0,0,0,80,72v2.78A111.73,111.73,0,0,0,16,176a8,8,0,0,0,8,8H88a40,40,0,0,0,80,0h64a8,8,0,0,0,8-8A111.73,111.73,0,0,0,176,74.78ZM128,208a24,24,0,0,1-24-24h48A24,24,0,0,1,128,208Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M232,176H24A104,104,0,0,1,88,80V72a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v8A104,104,0,0,1,232,176Z" opacity="0.2"/><path d="M176,74.78V72a16,16,0,0,0-16-16H136V16a8,8,0,0,0-16,0V56H96A16,16,0,0,0,80,72v2.78A111.73,111.73,0,0,0,16,176a8,8,0,0,0,8,8H88a40,40,0,0,0,80,0h64a8,8,0,0,0,8-8A111.73,111.73,0,0,0,176,74.78ZM128,208a24,24,0,0,1-24-24h48A24,24,0,0,1,128,208ZM32.33,168A95.79,95.79,0,0,1,91.08,87.35,8,8,0,0,0,96,80V72h64v8a8,8,0,0,0,4.92,7.38A95.79,95.79,0,0,1,223.67,168Z"/>`,
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
      ${PhLampPendant.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhLampPendant };
