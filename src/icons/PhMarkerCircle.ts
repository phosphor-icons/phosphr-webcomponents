/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-marker-circle": PhMarkerCircle;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-marker-circle": PhMarkerCircle;
    }
  }
}

@customElement("ph-marker-circle")
class PhMarkerCircle extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M198.71,57.29A100,100,0,1,0,57.29,198.71,100,100,0,1,0,198.71,57.29ZM84,208.83V176a4,4,0,0,1,4-4h80a4,4,0,0,1,4,4v32.83a92.25,92.25,0,0,1-88,0ZM108.15,140H152a4,4,0,0,1,4,4v20H100V144a4,4,0,0,1,4-4Zm4.93-8,11-52.82a4,4,0,0,1,7.84,0l11,52.82Zm80,61.05A92.41,92.41,0,0,1,180,203.9V176a12,12,0,0,0-12-12h-4V144a12,12,0,0,0-12-12h-.91L139.75,77.55a12,12,0,0,0-23.5,0L104.91,132H104a12,12,0,0,0-12,12v20H88a12,12,0,0,0-12,12v27.9a92.41,92.41,0,0,1-13-10.85,92,92,0,1,1,130.1,0Z"/>`,
    ],
    [
      "light",
      svg`<path d="M200.12,55.87A102,102,0,1,0,55.88,200.12,102,102,0,1,0,200.12,55.87ZM86,207.64V176a2,2,0,0,1,2-2h80a2,2,0,0,1,2,2v31.64a90.32,90.32,0,0,1-84,0ZM104,142h48a2,2,0,0,1,2,2v18H102V144A2,2,0,0,1,104,142Zm11.54-12L126,79.59a2,2,0,0,1,3.92,0L140.46,130Zm76.1,61.64A92.76,92.76,0,0,1,182,200V176a14,14,0,0,0-14-14h-2V144a14,14,0,0,0-13.27-14l-11-52.9a14,14,0,0,0-27.42,0l-11,52.9A14,14,0,0,0,90,144v18H88a14,14,0,0,0-14,14v24a92.76,92.76,0,0,1-9.64-8.37,90,90,0,1,1,127.28,0Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM88,206.37V176h80v30.37A88.38,88.38,0,0,1,88,206.37ZM104,144h48v16H104Zm14-16,10-48h0l10,48Zm72.22,62.23c-2,2-4.08,3.87-6.22,5.64V176a16,16,0,0,0-16-16V144a16,16,0,0,0-13.61-15.8L143.66,76.74a16,16,0,0,0-31.32,0L101.61,128.2A16,16,0,0,0,88,144v16a16,16,0,0,0-16,16v19.87c-2.14-1.77-4.22-3.64-6.22-5.64a88,88,0,1,1,124.44,0Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M204.37,51.6A108.08,108.08,0,1,0,236,128,108.09,108.09,0,0,0,204.37,51.6ZM108,140h40v16H108ZM92,203.92V180h72v23.9A84.33,84.33,0,0,1,92,203.92Zm96-17.13V176a20,20,0,0,0-16-19.6V136a20,20,0,0,0-14.85-19.31L147.27,81.2a20,20,0,0,0-38.54,0l-9.88,35.49A20,20,0,0,0,84,136v20.42A20,20,0,0,0,68,176v10.77a84,84,0,1,1,120,0Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,182.37a87.89,87.89,0,0,1-80,0V176h80ZM104,160V144h48v16Zm80,35.83V176a16,16,0,0,0-16-16V144a16,16,0,0,0-13.61-15.8L143.66,76.74a16,16,0,0,0-31.32,0L101.61,128.2A16,16,0,0,0,88,144v16a16,16,0,0,0-16,16v19.83a88,88,0,1,1,112,0Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M176,211.16Zm-96,0ZM224,128A96,96,0,1,0,80,211.16V176a8,8,0,0,1,8-8h8V144a8,8,0,0,1,8-8h4.16l12-57.63c1.77-8.49,13.89-8.49,15.66,0l12,57.63H152a8,8,0,0,1,8,8v24h8a8,8,0,0,1,8,8v35.16A96,96,0,0,0,224,128Z" opacity="0.2"/><path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM88,206.37V176h80v30.37A88.38,88.38,0,0,1,88,206.37ZM104,144h48v16H104Zm14-16,10-48h0l10,48Zm72.22,62.23c-2,2-4.08,3.87-6.22,5.64V176a16,16,0,0,0-16-16V144a16,16,0,0,0-13.61-15.8L143.66,76.74a16,16,0,0,0-31.32,0L101.61,128.2A16,16,0,0,0,88,144v16a16,16,0,0,0-16,16v19.87c-2.14-1.77-4.22-3.64-6.22-5.64a88,88,0,1,1,124.44,0Z"/>`,
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
      ${PhMarkerCircle.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhMarkerCircle };
