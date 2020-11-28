/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhChatText = {
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
      svg`<path d="M77.98509,201.34409,45.14832,228.94793a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H81.67142Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="96.00049" y1="108" x2="160.00049" y2="108" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="96.00049" y1="148" x2="160.00049" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M77.98509,201.34409,45.14832,228.94793a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H81.67142Z" opacity="0.2"/>
  <path d="M77.98509,201.34409,45.14832,228.94793a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H81.67142Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="96.00049" y1="112" x2="160.00049" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="96.00049" y1="144" x2="160.00049" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M216.002,48.002h-176a16.02085,16.02085,0,0,0-16,16V222.82227a15.8614,15.8614,0,0,0,9.25,14.50781,16.11272,16.11272,0,0,0,6.79688,1.51562,15.86972,15.86972,0,0,0,10.25-3.77343l31.75-26.69532,133.95312-.375a16.02083,16.02083,0,0,0,16-16v-128A16.02084,16.02084,0,0,0,216.002,48.002Zm-56,104h-64a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32h-64a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"/>`}
      ${weight === "light" &&
      svg`<path d="M77.98509,201.34409,45.14832,228.94793a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H81.67142Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="96.00049" y1="112" x2="160.00049" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="96.00049" y1="144" x2="160.00049" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M77.98509,201.34409,45.14832,228.94793a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H81.67142Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="96.00049" y1="112" x2="160.00049" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="96.00049" y1="144" x2="160.00049" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M77.98509,201.34409,45.14832,228.94793a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H81.67142Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="96.00049" y1="112" x2="160.00049" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="96.00049" y1="144" x2="160.00049" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-chat-text", PhChatText);
export default PhChatText;
