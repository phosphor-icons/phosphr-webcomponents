/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-link-simple-break": PhLinkSimpleBreak;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-link-simple-break": PhLinkSimpleBreak;
    }
  }
}

@customElement("ph-link-simple-break")
class PhLinkSimpleBreak extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M212.79,116.77l-30.07,30.06a4,4,0,1,1-5.66-5.66l30.07-30.06a44,44,0,0,0-62.24-62.24L114.82,78.93a4,4,0,0,1-5.65-5.66l30.06-30.06a52,52,0,0,1,73.56,73.56Zm-71.62,60.29-30.06,30.07a44,44,0,0,1-62.24-62.24l30.06-30.06a4,4,0,0,0-5.66-5.66L43.21,139.23a52,52,0,0,0,73.56,73.56l30.06-30.07a4,4,0,1,0-5.66-5.66Z"/>`,
    ],
    [
      "light",
      svg`<path d="M214.2,118.18l-30.07,30.07a6,6,0,0,1-8.49-8.49l30.08-30.07a42,42,0,0,0-59.41-59.41L116.24,80.34a6,6,0,0,1-8.49-8.49l30.07-30a54,54,0,0,1,76.38,76.38Zm-74.44,57.46-30.07,30.08a42,42,0,0,1-59.41-59.41l30.06-30.07a6,6,0,0,0-8.49-8.49l-30,30.07a54,54,0,0,0,76.38,76.39l30.07-30.08a6,6,0,0,0-8.49-8.49Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M232,80a55.67,55.67,0,0,1-16.4,39.6l-30.07,30.06a8,8,0,0,1-11.31-11.32l30.07-30.06a40,40,0,1,0-56.57-56.56L117.66,81.77a8,8,0,0,1-11.32-11.32L136.4,40.4A56,56,0,0,1,232,80Zm-93.66,94.22-30.06,30.06a40,40,0,1,1-56.56-56.57l30.05-30.05a8,8,0,0,0-11.32-11.32L40.4,136.4a56,56,0,0,0,79.2,79.2l30.06-30.07a8,8,0,0,0-11.32-11.31Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M218.45,122.43l-30.08,30.06a12,12,0,0,1-17-17l30.08-30.07a36,36,0,0,0-50.93-50.92L120.48,84.59a12,12,0,0,1-17-17l30.07-30.06a60,60,0,0,1,84.87,84.88Zm-82.93,49-30.07,30.08a36,36,0,0,1-50.92-50.93l30.06-30.07a12,12,0,0,0-17-17L37.55,133.58a60,60,0,0,0,84.88,84.87l30.06-30.07a12,12,0,0,0-17-17Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM144.56,173.66l-21.45,21.45a44,44,0,0,1-62.22-62.22l21.45-21.46a8,8,0,0,1,11.32,11.31L72.2,144.2a28,28,0,0,0,39.6,39.6l21.45-21.46a8,8,0,0,1,11.31,11.32Zm50.55-50.55-21.45,21.45a8,8,0,0,1-11.32-11.31L183.8,111.8a28,28,0,0,0-39.6-39.6L122.74,93.66a8,8,0,0,1-11.31-11.32l21.46-21.45a44,44,0,0,1,62.22,62.22Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M209.94,113.94l-96,96a48,48,0,0,1-67.88-67.88l96-96a48,48,0,0,1,67.88,67.88Z" opacity="0.2"/><path d="M232,80a55.67,55.67,0,0,1-16.4,39.6l-30.07,30.06a8,8,0,0,1-11.31-11.32l30.07-30.06a40,40,0,1,0-56.57-56.56L117.66,81.77a8,8,0,0,1-11.32-11.32L136.4,40.4A56,56,0,0,1,232,80Zm-93.66,94.22-30.06,30.06a40,40,0,1,1-56.56-56.57l30.05-30.05a8,8,0,0,0-11.32-11.32L40.4,136.4a56,56,0,0,0,79.2,79.2l30.06-30.07a8,8,0,0,0-11.32-11.31Z"/>`,
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
      ${PhLinkSimpleBreak.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhLinkSimpleBreak };
