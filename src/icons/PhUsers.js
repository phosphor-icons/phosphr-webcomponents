/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhUsers = {
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
      svg`<circle cx="88" cy="108" r="52" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M155.41251,57.937A52.00595,52.00595,0,1,1,169.52209,160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M16,197.39665a88.013,88.013,0,0,1,144-.0055" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M169.52209,160a87.89491,87.89491,0,0,1,72.00032,37.3912" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="88.00033" cy="108" r="52" opacity="0.2"/>
  <circle cx="88.00033" cy="108" r="52" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <path d="M155.41251,57.937A52.00595,52.00595,0,1,1,169.52209,160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M15.99613,197.39669a88.01736,88.01736,0,0,1,144.00452-.00549" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M169.52209,160a87.89491,87.89491,0,0,1,72.00032,37.3912" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M121.19873,157.94751a59.99994,59.99994,0,1,0-66.39661,0A96.21448,96.21448,0,0,0,9.45459,192.791a8.0002,8.0002,0,0,0,6.542,12.60546l144.0044-.00537a7.99991,7.99991,0,0,0,6.54052-12.606A96.21491,96.21491,0,0,0,121.19873,157.94751Z"/>
    <path d="M248.06348,192.78516a96.214,96.214,0,0,0-45.34327-34.83765A60.00088,60.00088,0,0,0,153.24707,50.23535a8,8,0,0,0-4.251,12.47852,75.83151,75.83151,0,0,1,3.84082,84.88623,8,8,0,0,0,2.04493,10.60107,113.20643,113.20643,0,0,1,8.74365,7.2146c.14429.15674.28979.31275.44873.46021a112.03418,112.03418,0,0,1,25.479,34.90527,7.99971,7.99971,0,0,0,7.24951,4.61523l44.72071-.00537a8.0001,8.0001,0,0,0,6.54-12.606Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<circle cx="88.00033" cy="108" r="52" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M155.41251,57.937A52.00595,52.00595,0,1,1,169.52209,160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M15.99613,197.39669a88.01736,88.01736,0,0,1,144.00452-.00549" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M169.52209,160a87.89491,87.89491,0,0,1,72.00032,37.3912" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="88.00033" cy="108" r="52" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M155.41251,57.937A52.00595,52.00595,0,1,1,169.52209,160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M15.99613,197.39669a88.01736,88.01736,0,0,1,144.00452-.00549" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M169.52209,160a87.89491,87.89491,0,0,1,72.00032,37.3912" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="88.00033" cy="108" r="52" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <path d="M155.41251,57.937A52.00595,52.00595,0,1,1,169.52209,160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M15.99613,197.39669a88.01736,88.01736,0,0,1,144.00452-.00549" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M169.52209,160a87.89491,87.89491,0,0,1,72.00032,37.3912" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-users", PhUsers);
export default PhUsers;
