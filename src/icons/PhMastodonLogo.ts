/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-mastodon-logo": PhMastodonLogo;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-mastodon-logo": PhMastodonLogo;
    }
  }
}

@customElement("ph-mastodon-logo")
class PhMastodonLogo extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M184,36H72A36,36,0,0,0,36,72V192a36,36,0,0,0,36,36h88a4,4,0,0,0,0-8H72a28,28,0,0,1-28-28V180H184a36,36,0,0,0,36-36V72A36,36,0,0,0,184,36Zm28,108a28,28,0,0,1-28,28H44V72A28,28,0,0,1,72,44H184a28,28,0,0,1,28,28Zm-32-40v32a4,4,0,0,1-8,0V104a20,20,0,0,0-40,0v32a4,4,0,0,1-8,0V104a20,20,0,0,0-40,0v32a4,4,0,0,1-8,0V104a28,28,0,0,1,52-14.41A28,28,0,0,1,180,104Z"/>`,
    ],
    [
      "light",
      svg`<path d="M184,34H72A38,38,0,0,0,34,72V192a38,38,0,0,0,38,38h88a6,6,0,0,0,0-12H72a26,26,0,0,1-26-26V182H184a38,38,0,0,0,38-38V72A38,38,0,0,0,184,34Zm26,110a26,26,0,0,1-26,26H46V72A26,26,0,0,1,72,46H184a26,26,0,0,1,26,26Zm-28-40v32a6,6,0,0,1-12,0V104a18,18,0,0,0-36,0v32a6,6,0,0,1-12,0V104a18,18,0,0,0-36,0v32a6,6,0,0,1-12,0V104a30,30,0,0,1,54-18,30,30,0,0,1,54,18Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M184,32H72A40,40,0,0,0,32,72V192a40,40,0,0,0,40,40h88a8,8,0,0,0,0-16H72a24,24,0,0,1-24-24v-8H184a40,40,0,0,0,40-40V72A40,40,0,0,0,184,32Zm24,112a24,24,0,0,1-24,24H48V72A24,24,0,0,1,72,48H184a24,24,0,0,1,24,24Zm-24-40v32a8,8,0,0,1-16,0V104a16,16,0,0,0-32,0v32a8,8,0,0,1-16,0V104a16,16,0,0,0-32,0v32a8,8,0,0,1-16,0V104a32,32,0,0,1,56-21.13A32,32,0,0,1,184,104Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M184,28H72A44.05,44.05,0,0,0,28,72V192a44.05,44.05,0,0,0,44,44h88a12,12,0,0,0,0-24H72a20,20,0,0,1-20-20v-4H184a44.05,44.05,0,0,0,44-44V72A44.05,44.05,0,0,0,184,28Zm20,116a20,20,0,0,1-20,20H52V72A20,20,0,0,1,72,52H184a20,20,0,0,1,20,20Zm-16-40v32a12,12,0,0,1-24,0V104a12,12,0,0,0-24,0v32a12,12,0,0,1-24,0V104a12,12,0,0,0-24,0v32a12,12,0,0,1-24,0V104a36,36,0,0,1,60-26.8A36,36,0,0,1,188,104Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M184,32H72A40,40,0,0,0,32,72V192a40,40,0,0,0,40,40h88a8,8,0,0,0,0-16H72a24,24,0,0,1-24-24v-8H184a40,40,0,0,0,40-40V72A40,40,0,0,0,184,32Zm0,104a8,8,0,0,1-16,0V104a16,16,0,0,0-32,0v32a8,8,0,0,1-16,0V104a16,16,0,0,0-32,0v32a8,8,0,0,1-16,0V104a32,32,0,0,1,56-21.13A32,32,0,0,1,184,104Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,72v72a32,32,0,0,1-32,32H40V72A32,32,0,0,1,72,40H184A32,32,0,0,1,216,72Z" opacity="0.2"/><path d="M184,32H72A40,40,0,0,0,32,72V192a40,40,0,0,0,40,40h88a8,8,0,0,0,0-16H72a24,24,0,0,1-24-24v-8H184a40,40,0,0,0,40-40V72A40,40,0,0,0,184,32Zm24,112a24,24,0,0,1-24,24H48V72A24,24,0,0,1,72,48H184a24,24,0,0,1,24,24Zm-24-40v32a8,8,0,0,1-16,0V104a16,16,0,0,0-32,0v32a8,8,0,0,1-16,0V104a16,16,0,0,0-32,0v32a8,8,0,0,1-16,0V104a32,32,0,0,1,56-21.13A32,32,0,0,1,184,104Z"/>`,
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
      ${PhMastodonLogo.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhMastodonLogo };
