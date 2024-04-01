/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-navigation-arrow": PhNavigationArrow;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-navigation-arrow": PhNavigationArrow;
    }
  }
}

@customElement("ph-navigation-arrow")
class PhNavigationArrow extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M236,110,59.93,44.67A12,12,0,0,0,44.69,60L110,235.93A11.83,11.83,0,0,0,121.28,244h.22a11.82,11.82,0,0,0,11.26-8.47l0-.1,22.45-80.19,80.19-22.44.1,0A12,12,0,0,0,236,110Zm-2.79,15.12-82.3,23a4,4,0,0,0-2.78,2.77l-23,82.3a3.88,3.88,0,0,1-3.74,2.78,4,4,0,0,1-3.88-2.77L52.22,57.32a3.93,3.93,0,0,1,1-4.14A4,4,0,0,1,56,52a3.86,3.86,0,0,1,1.25.21l176.08,65.32a4,4,0,0,1-.09,7.59Z"/>`,
    ],
    [
      "light",
      svg`<path d="M236.65,108.1,60.72,42.83l-.13,0A14,14,0,0,0,42.78,60.59s0,.09,0,.13L108.1,236.65A13.77,13.77,0,0,0,121.28,246h.26a13.8,13.8,0,0,0,13.14-9.88l0-.15,22.14-79.1L236,134.73l.15,0a14,14,0,0,0,.53-26.58Zm-4,15.1-82.26,23a6,6,0,0,0-4.16,4.16l-23,82.26a1.85,1.85,0,0,1-1.86,1.36,1.82,1.82,0,0,1-1.92-1.35.61.61,0,0,0,0-.12L54.11,56.62a2,2,0,0,1,2.51-2.51l175.91,65.26.12,0a2,2,0,0,1,0,3.79Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M237.33,106.21,61.41,41l-.16-.05A16,16,0,0,0,40.9,61.25a1,1,0,0,0,.05.16l65.26,175.92A15.77,15.77,0,0,0,121.28,248h.3a15.77,15.77,0,0,0,15-11.29l.06-.2,21.84-78,78-21.84.2-.06a16,16,0,0,0,.62-30.38ZM149.84,144.3a8,8,0,0,0-5.54,5.54L121.3,232l-.06-.17L56,56l175.82,65.22.16.06Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M238.7,102.46,62.81,37.21l-.25-.09A20,20,0,0,0,37.12,62.56l.09.25L102.46,238.7A20,20,0,0,0,121.3,252h.35a20,20,0,0,0,18.77-14.12l.09-.29,21.23-75.85,75.85-21.23.29-.09a20,20,0,0,0,.82-38Zm-89.93,38a12,12,0,0,0-8.32,8.32l-19.68,70.29L62.8,62.8l156.26,58Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M248,121.58a15.76,15.76,0,0,1-11.29,15l-.2.06-78,21.84-21.84,78-.06.2a15.77,15.77,0,0,1-15,11.29h-.3a15.77,15.77,0,0,1-15.07-10.67L41,61.41a1,1,0,0,1-.05-.16A16,16,0,0,1,61.25,40.9l.16.05,175.92,65.26A15.78,15.78,0,0,1,248,121.58Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M234.35,129,152,152,129,234.35a8,8,0,0,1-15.21.27l-65.28-176A8,8,0,0,1,58.63,48.46l176,65.28A8,8,0,0,1,234.35,129Z" opacity="0.2"/><path d="M237.33,106.21,61.41,41l-.16-.05A16,16,0,0,0,40.9,61.25a1,1,0,0,0,.05.16l65.26,175.92A15.77,15.77,0,0,0,121.28,248h.3a15.77,15.77,0,0,0,15-11.29l.06-.2,21.84-78,78-21.84.2-.06a16,16,0,0,0,.62-30.38ZM149.84,144.3a8,8,0,0,0-5.54,5.54L121.3,232l-.06-.17L56,56l175.82,65.22.16.06Z"/>`,
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
      ${PhNavigationArrow.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhNavigationArrow };
