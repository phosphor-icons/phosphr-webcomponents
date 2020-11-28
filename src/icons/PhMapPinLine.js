/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhMapPinLine = {
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
      svg`<line x1="56" y1="232" x2="200" y2="232" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="104" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M128,24a80.0002,80.0002,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80.0002,80.0002,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32.00034,32.00034,0,0,1,128,136Z" opacity="0.2"/>
  <line x1="56" y1="232" x2="200" y2="232" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="104" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M199.99975,224h-49.4602a266.47606,266.47606,0,0,0,23.49731-23.75049c27.45215-31.5708,41.96289-64.853,41.96289-96.24951a88,88,0,0,0-176,0c0,31.39648,14.51075,64.67871,41.96289,96.24951A266.476,266.476,0,0,0,105.46,224H55.99975a8,8,0,0,0,0,16h144a8,8,0,0,0,0-16ZM128,72a32,32,0,1,1-32,32A31.99971,31.99971,0,0,1,128,72Z"/>`}
      ${weight === "light" &&
      svg`<line x1="56" y1="232" x2="200" y2="232" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128" cy="104" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="56" y1="232" x2="200" y2="232" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128" cy="104" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="56" y1="232" x2="200" y2="232" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="104" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-map-pin-line", PhMapPinLine);
export default PhMapPinLine;
