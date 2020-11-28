/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhBroadcast = {
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false,
  render: ({ color, size, weight, mirrored }) => html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${size}"
      height="${size}"
      fill="${color}"
      viewBox="0 0 256 256"
      transform=${mirrored ? "scale(-1, 1)" : undefined}
    >
      <slot></slot>
      ${weight === "bold" &&
      svg`<circle cx="128" cy="128" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M77.08831,178.91169a71.93858,71.93858,0,0,1,0-101.82338" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M178.91169,77.08831a71.93858,71.93858,0,0,1,0,101.82338" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M48.804,207.196a111.90445,111.90445,0,0,1,0-158.39192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M207.196,48.804a111.90445,111.90445,0,0,1,0,158.39192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="128" cy="128" r="32" opacity="0.2"/>
  <circle cx="128" cy="128" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M77.08831,178.91169a71.93858,71.93858,0,0,1,0-101.82338" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M178.91169,77.08831a71.93858,71.93858,0,0,1,0,101.82338" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M48.804,207.196a111.90445,111.90445,0,0,1,0-158.39192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M207.196,48.804a111.90445,111.90445,0,0,1,0,158.39192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <circle cx="128" cy="128" r="40"/>
    <path d="M82.74512,82.74512A8.00018,8.00018,0,1,0,71.43066,71.43164a79.94026,79.94026,0,0,0,0,113.13672,8.00018,8.00018,0,1,0,11.31446-11.31348,63.93958,63.93958,0,0,1,0-90.50976Z"/>
    <path d="M208,128a79.7769,79.7769,0,0,0-23.43066-56.56836,8.00018,8.00018,0,1,0-11.31446,11.31348,63.93958,63.93958,0,0,1,0,90.50976,8.00018,8.00018,0,0,0,11.31446,11.31348A79.7769,79.7769,0,0,0,208,128Z"/>
    <path d="M32.16992,168.479a103.90428,103.90428,0,0,1,22.291-114.01806A8.00018,8.00018,0,0,0,43.14648,43.14746a119.906,119.906,0,0,0,0,169.70508,8.00018,8.00018,0,1,0,11.31446-11.31348A103.65105,103.65105,0,0,1,32.16992,168.479Z"/>
    <path d="M238.56641,81.28809a119.58135,119.58135,0,0,0-25.71289-38.14063,8.00018,8.00018,0,1,0-11.31446,11.31348,103.90471,103.90471,0,0,1,0,147.07812,8.00018,8.00018,0,0,0,11.31446,11.31348A120.12116,120.12116,0,0,0,238.56641,81.28809Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<circle cx="128" cy="128" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M77.08831,178.91169a71.93858,71.93858,0,0,1,0-101.82338" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M178.91169,77.08831a71.93858,71.93858,0,0,1,0,101.82338" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M48.804,207.196a111.90445,111.90445,0,0,1,0-158.39192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M207.196,48.804a111.90445,111.90445,0,0,1,0,158.39192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="128" cy="128" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M77.08831,178.91169a71.93858,71.93858,0,0,1,0-101.82338" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M178.91169,77.08831a71.93858,71.93858,0,0,1,0,101.82338" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M48.804,207.196a111.90445,111.90445,0,0,1,0-158.39192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M207.196,48.804a111.90445,111.90445,0,0,1,0,158.39192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="128" cy="128" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M77.08831,178.91169a71.93858,71.93858,0,0,1,0-101.82338" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M178.91169,77.08831a71.93858,71.93858,0,0,1,0,101.82338" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M48.804,207.196a111.90445,111.90445,0,0,1,0-158.39192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M207.196,48.804a111.90445,111.90445,0,0,1,0,158.39192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-broadcast", PhBroadcast);
export default PhBroadcast;
