/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-apple-logo": PhAppleLogo;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-apple-logo": PhAppleLogo;
    }
  }
}

@customElement("ph-apple-logo")
class PhAppleLogo extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M218.27,169.49C199.86,156.84,196,135.6,196,120c0-19.17,14.25-35.53,22.75-43.57a4,4,0,0,0,0-5.81C207,59.48,186.59,52,168,52a68.3,68.3,0,0,0-40,13,67.61,67.61,0,0,0-87.88,7A70.65,70.65,0,0,0,20,123.3a123.11,123.11,0,0,0,38.9,86.92A35.81,35.81,0,0,0,83.6,220h87.7a35.84,35.84,0,0,0,26.19-11.3,119.93,119.93,0,0,0,17.24-23.79c6.08-11.1,5.42-12.62,4.94-13.72A4,4,0,0,0,218.27,169.49Zm-26.64,33.77A27.83,27.83,0,0,1,171.3,212H83.6a27.84,27.84,0,0,1-19.19-7.6A115.15,115.15,0,0,1,28,123.09,62.55,62.55,0,0,1,45.81,77.66,58.78,58.78,0,0,1,88,60h.84a59.37,59.37,0,0,1,36.66,13.15,4,4,0,0,0,5,0A59.35,59.35,0,0,1,168,60c15.12,0,31.45,5.41,42.11,13.73C200.68,83.42,188,100.16,188,120c0,23.79,8,42.44,23.12,54.17A107.64,107.64,0,0,1,191.63,203.26ZM132.13,31A36,36,0,0,1,167,4h1a4,4,0,0,1,0,8h-1a28,28,0,0,0-27.12,21A4,4,0,0,1,136,36a3.87,3.87,0,0,1-1-.13A4,4,0,0,1,132.13,31Z"/>`,
    ],
    [
      "light",
      svg`<path d="M219.4,167.84C201.71,155.69,198,135.12,198,120c0-18.42,13.86-34.29,22.12-42.12a6,6,0,0,0,0-8.71C208,57.7,187.07,50,168,50a70.23,70.23,0,0,0-40,12.55,69.6,69.6,0,0,0-89.31,8.08A72.63,72.63,0,0,0,18,123.35a125.11,125.11,0,0,0,39.53,88.33A37.85,37.85,0,0,0,83.6,222h87.7A37.83,37.83,0,0,0,199,210.07a122.6,122.6,0,0,0,17.54-24.2c6.55-12,5.77-13.75,5-15.48A6.07,6.07,0,0,0,219.4,167.84Zm-29.23,34A25.82,25.82,0,0,1,171.3,210H83.6A25.85,25.85,0,0,1,65.78,203,113.21,113.21,0,0,1,30,123a60.55,60.55,0,0,1,17.21-44A56.82,56.82,0,0,1,88,62h.81a57.35,57.35,0,0,1,35.44,12.71,6,6,0,0,0,7.5,0A57.39,57.39,0,0,1,168,62c13.89,0,28.81,4.68,39.11,12-9.44,10.14-21.1,26.59-21.1,46,0,23.78,7.81,42.6,22.66,54.77A107.33,107.33,0,0,1,190.17,201.89Zm-60-171.39A38,38,0,0,1,167,2h1a6,6,0,0,1,0,12h-1a26,26,0,0,0-25.18,19.5,6,6,0,1,1-11.62-3Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M223.3,169.59a8.07,8.07,0,0,0-2.8-3.4C203.53,154.53,200,134.64,200,120c0-17.67,13.47-33.06,21.5-40.67a8,8,0,0,0,0-11.62C208.82,55.74,187.82,48,168,48a72.2,72.2,0,0,0-40,12.13,71.56,71.56,0,0,0-90.71,9.09A74.63,74.63,0,0,0,16,123.4a127.06,127.06,0,0,0,40.14,89.73A39.8,39.8,0,0,0,83.59,224h87.68a39.84,39.84,0,0,0,29.12-12.57,125,125,0,0,0,17.82-24.6C225.23,174,224.33,172,223.3,169.59Zm-34.63,30.94a23.76,23.76,0,0,1-17.4,7.47H83.59a23.82,23.82,0,0,1-16.44-6.51A111.14,111.14,0,0,1,32,123,58.5,58.5,0,0,1,48.65,80.47,54.81,54.81,0,0,1,88,64h.78A55.45,55.45,0,0,1,123,76.28a8,8,0,0,0,10,0A55.44,55.44,0,0,1,168,64a70.64,70.64,0,0,1,36,10.35c-13,14.52-20,30.47-20,45.65,0,23.77,7.64,42.73,22.18,55.3A105.82,105.82,0,0,1,188.67,200.53ZM128.23,30A40,40,0,0,1,167,0h1a8,8,0,0,1,0,16h-1a24,24,0,0,0-23.24,18,8,8,0,1,1-15.5-4Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M227,168a12,12,0,0,0-4.21-5.09C207.25,152.22,204,133.68,204,120c0-16.17,12.68-30.6,20.25-37.76a12,12,0,0,0,0-17.43C210.89,52.17,188.81,44,168,44a76.29,76.29,0,0,0-40,11.37,75.59,75.59,0,0,0-93.58,11A78.64,78.64,0,0,0,12,123.51,131,131,0,0,0,53.43,216,43.81,43.81,0,0,0,83.6,228h87.69a43.87,43.87,0,0,0,32.05-13.85,127.63,127.63,0,0,0,18.4-25.39c1.57-2.88,3-5.71,4.14-8.41C227.47,176.67,229.12,172.87,227,168Zm-41.23,29.82A19.78,19.78,0,0,1,171.29,204H83.6a19.85,19.85,0,0,1-13.7-5.42A107.18,107.18,0,0,1,36,122.88,54.49,54.49,0,0,1,51.5,83.28,50.86,50.86,0,0,1,88,68h.72A51.5,51.5,0,0,1,120.48,79.4a12,12,0,0,0,15,0A51.41,51.41,0,0,1,168,68a67.24,67.24,0,0,1,29.88,7.4C186.26,89.66,180,105.13,180,120c0,23.33,7.47,42.89,21.25,56.19A103.3,103.3,0,0,1,185.76,197.81ZM128.75,13A43.83,43.83,0,0,1,142.17,1.51a12,12,0,0,1,11.64,21,19.84,19.84,0,0,0-6.11,5.24A12,12,0,0,1,128.75,13Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128.23,30A40,40,0,0,1,167,0h1a8,8,0,0,1,0,16h-1a24,24,0,0,0-23.24,18,8,8,0,1,1-15.5-4ZM223.3,169.59a8.07,8.07,0,0,0-2.8-3.4C203.53,154.53,200,134.64,200,120c0-17.67,13.47-33.06,21.5-40.67a8,8,0,0,0,0-11.62C208.82,55.74,187.82,48,168,48a72.23,72.23,0,0,0-40,12.13,71.56,71.56,0,0,0-90.71,9.09A74.63,74.63,0,0,0,16,123.4a127,127,0,0,0,40.14,89.73A39.8,39.8,0,0,0,83.59,224h87.68a39.84,39.84,0,0,0,29.12-12.57,125,125,0,0,0,17.82-24.6C225.23,174,224.33,172,223.3,169.59Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,73.52Zm0,99.26c-16.79-11.53-24-30.87-24-52.78,0-18.3,11.68-34.81,24-46.48C204.53,62.66,185,56,168,56a63.72,63.72,0,0,0-40,14h0A63.71,63.71,0,0,0,88.88,56C52,55.5,23.06,86.3,24,123.19a119.62,119.62,0,0,0,37.65,84.12A32,32,0,0,0,83.6,216h87.7a31.75,31.75,0,0,0,23.26-10c15.85-17,21.44-33.2,21.44-33.2Z" opacity="0.2"/><path d="M223.3,169.59a8.07,8.07,0,0,0-2.8-3.4C203.53,154.53,200,134.64,200,120c0-17.67,13.47-33.06,21.5-40.67a8,8,0,0,0,0-11.62C208.82,55.74,187.82,48,168,48a72.23,72.23,0,0,0-40,12.13,71.56,71.56,0,0,0-90.71,9.09A74.63,74.63,0,0,0,16,123.4a127,127,0,0,0,40.14,89.73A39.8,39.8,0,0,0,83.59,224h87.68a39.84,39.84,0,0,0,29.12-12.57,125,125,0,0,0,17.82-24.6C225.23,174,224.33,172,223.3,169.59Zm-34.63,30.94a23.76,23.76,0,0,1-17.4,7.47H83.59a23.82,23.82,0,0,1-16.44-6.51A111.14,111.14,0,0,1,32,123,58.5,58.5,0,0,1,48.65,80.47,54.81,54.81,0,0,1,88,64h.78A55.45,55.45,0,0,1,123,76.28a8,8,0,0,0,10,0A55.39,55.39,0,0,1,168,64a70.64,70.64,0,0,1,36,10.35c-13,14.52-20,30.47-20,45.65,0,23.77,7.64,42.73,22.18,55.3A105.52,105.52,0,0,1,188.67,200.53ZM128.23,30A40,40,0,0,1,167,0h1a8,8,0,0,1,0,16h-1a24,24,0,0,0-23.24,18,8,8,0,1,1-15.5-4Z"/>`,
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
      ${PhAppleLogo.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhAppleLogo };
