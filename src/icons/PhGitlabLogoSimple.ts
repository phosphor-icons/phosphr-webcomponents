/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-gitlab-logo-simple": PhGitlabLogoSimple;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-gitlab-logo-simple": PhGitlabLogoSimple;
    }
  }
}

@customElement("ph-gitlab-logo-simple")
class PhGitlabLogoSimple extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M226.27,118.11,206.38,42a7.94,7.94,0,0,0-15.16-.75L172.57,92H83.43L64.78,41.24A7.94,7.94,0,0,0,49.62,42L29.73,118.11a53.16,53.16,0,0,0,20.44,56.68l73.27,51.76a7.9,7.9,0,0,0,9.12,0l73.27-51.76A53.16,53.16,0,0,0,226.27,118.11Zm-25.05,50.14L128,220,54.78,168.25a45.11,45.11,0,0,1-17.31-48.11l19.84-76L76.89,97.38A4,4,0,0,0,80.64,100h94.72a4,4,0,0,0,3.75-2.62l19.57-53.22,19.85,76A45.11,45.11,0,0,1,201.22,168.25Z"/>`,
    ],
    [
      "light",
      svg`<path d="M228.21,117.61,208.32,41.49a9.94,9.94,0,0,0-19-.93L171.17,90H84.83L66.66,40.56a9.94,9.94,0,0,0-19,.93L27.79,117.61A55.18,55.18,0,0,0,49,176.42l73.27,51.77a9.94,9.94,0,0,0,11.44,0L207,176.42A55.18,55.18,0,0,0,228.21,117.61Zm-28.15,49L128,217.53,55.94,166.62a43.12,43.12,0,0,1-16.54-46L57.65,50.82,75,98.07A6,6,0,0,0,80.64,102h94.72A6,6,0,0,0,181,98.07l17.36-47.25,18.25,69.82A43.12,43.12,0,0,1,200.06,166.62Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M230.15,117.1,210.25,41a11.94,11.94,0,0,0-22.79-1.11L169.78,88H86.22L68.54,39.87A11.94,11.94,0,0,0,45.75,41L25.85,117.1a57.19,57.19,0,0,0,22,61l73.27,51.76a11.91,11.91,0,0,0,13.74,0l73.27-51.76A57.19,57.19,0,0,0,230.15,117.1ZM198.91,165,128,215.09,57.09,165a41.1,41.1,0,0,1-15.75-43.84L58,57.5,73.13,98.76A8,8,0,0,0,80.64,104h94.72a8,8,0,0,0,7.51-5.24L198,57.5l16.63,63.65A41.1,41.1,0,0,1,198.91,165Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M234,116.09,214.13,40a15.94,15.94,0,0,0-30.42-1.48L167,84H89L72.29,38.49A15.94,15.94,0,0,0,41.87,40L22,116.09a61.19,61.19,0,0,0,23.57,65.23l73.27,51.77a15.93,15.93,0,0,0,18.36,0l73.27-51.77A61.19,61.19,0,0,0,234,116.09ZM196.6,161.72,128,210.19,59.4,161.72a37.08,37.08,0,0,1-14.19-39.56l13.4-51.3,10.76,29.28A12,12,0,0,0,80.64,108h94.72a12,12,0,0,0,11.27-7.86l10.76-29.28,13.4,51.3A37.08,37.08,0,0,1,196.6,161.72Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208.14,178.06l-73.27,51.76a11.91,11.91,0,0,1-13.74,0L47.86,178.06a57.19,57.19,0,0,1-22-61L45.75,41a11.94,11.94,0,0,1,22.79-1.11L86.22,88h83.56l17.68-48.13A11.94,11.94,0,0,1,210.25,41l19.9,76.12A57.19,57.19,0,0,1,208.14,178.06Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M203.52,171.52l-73.26,51.76a3.91,3.91,0,0,1-4.52,0L52.48,171.52a49,49,0,0,1-18.87-52.4L53.5,43A3.93,3.93,0,0,1,61,42.62L80.65,96h94.7L195,42.62a3.93,3.93,0,0,1,7.53.38l19.89,76.12A49,49,0,0,1,203.52,171.52Z" opacity="0.2"/><path d="M230.15,117.1,210.25,41a11.94,11.94,0,0,0-22.79-1.11L169.78,88H86.22L68.54,39.87A11.94,11.94,0,0,0,45.75,41L25.85,117.1a57.19,57.19,0,0,0,22,61l73.27,51.76a11.91,11.91,0,0,0,13.74,0l73.27-51.76A57.19,57.19,0,0,0,230.15,117.1ZM198.91,165,128,215.09,57.09,165a41.1,41.1,0,0,1-15.75-43.84L58,57.5,73.13,98.76A8,8,0,0,0,80.64,104h94.72a8,8,0,0,0,7.51-5.24L198,57.5l16.63,63.65A41.1,41.1,0,0,1,198.91,165Z"/>`,
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
      ${PhGitlabLogoSimple.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhGitlabLogoSimple };
