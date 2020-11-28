/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowsInSimple = {
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
      svg`<polyline points="152 56 152 104 200 104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="208" y1="48" x2="152" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="56 152 104 152 104 200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="48" y1="208" x2="104" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polyline points="152 56 152 104 200 104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="208" y1="48" x2="152" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="56 152 104 152 104 200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="208" x2="104" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M213.65723,42.34277a8.003,8.003,0,0,0-11.31446,0L160,84.68555V56a8,8,0,0,0-16,0v47.99487q0,.39918.04.79712c.01074.10718.03125.21118.0459.31714.021.15259.03955.30566.06933.457.02491.12525.05957.24634.09034.36939.03271.13037.06152.26123.10058.39013.03662.12073.082.23706.124.35523.04541.12866.08838.25781.14063.38428.04492.10791.09766.21118.147.31665.06153.132.12061.26464.18994.39379.05176.09693.11133.18873.167.28309.07666.13024.15087.26147.23584.38806.0664.09887.14062.19116.21093.28686.084.11438.16407.23084.25537.34156.11622.14111.2417.27368.36719.40649.0542.05762.10205.11914.15869.17554.0542.05432.11377.10034.16895.15283.13525.12756.27.25561.41406.37353.10645.08765.21826.16431.32813.24561.10009.074.19726.15173.30078.22119.12207.08154.248.15259.37353.22681.09912.059.19629.12146.29834.17627.124.0664.25147.1228.37842.18237.11035.05188.21875.10706.332.154.1211.05005.24463.0907.36768.13465.12353.04431.2456.09167.37207.13.12158.03687.24512.064.36816.09473.13037.033.25879.06933.3916.0957.14063.02783.28321.04443.42481.0647.1167.01672.231.03882.34912.05041.26221.02588.52588.03992.78955.03992h48a8,8,0,0,0,0-16H171.31445l42.34278-42.34277A8.00122,8.00122,0,0,0,213.65723,42.34277Z"/>
    <path d="M111.96,151.208c-.01074-.10718-.03125-.21118-.0459-.31714-.021-.15259-.03955-.30566-.06933-.457-.02491-.12525-.05957-.24634-.09034-.36939-.03271-.13037-.06152-.26123-.10058-.39013-.03662-.12073-.082-.23706-.124-.35523-.04541-.12866-.08838-.25781-.14063-.38428-.04492-.10791-.09766-.21118-.147-.31665-.06153-.13195-.12061-.26464-.18994-.39379-.05176-.09693-.11133-.18873-.167-.28309-.07666-.13024-.15087-.26147-.23584-.38806-.0664-.09887-.14062-.19116-.21093-.28686-.084-.11438-.16407-.23084-.25537-.34156-.11622-.14111-.2417-.27368-.36719-.40649-.0542-.05762-.10205-.11914-.15869-.17554-.05323-.05334-.11133-.09851-.166-.15-.13623-.12879-.27246-.25769-.417-.37671-.10449-.08582-.21436-.16077-.32178-.24048-.10254-.07593-.20166-.15539-.3081-.22644-.11817-.0791-.24073-.148-.36231-.22-.10351-.06177-.2041-.12671-.31055-.18359-.11865-.06324-.24023-.117-.36084-.17383-.11669-.05518-.23144-.11328-.35107-.16284-.1123-.04663-.22754-.084-.3418-.12525-.13281-.04785-.26367-.09839-.39941-.1394-.10938-.03308-.2207-.057-.33106-.08521-.14257-.0365-.2832-.07592-.42822-.10461-.12158-.024-.24414-.0376-.3667-.05591-.13574-.02039-.27-.04553-.4082-.059-.20215-.01977-.40479-.02612-.60742-.03064C104.11768,144.00757,104.05957,144,104,144H56a8,8,0,0,0,0,16H84.68555L42.34277,202.34277a8.00053,8.00053,0,0,0,11.31446,11.31446L96,171.31445V200a8,8,0,0,0,16,0V152.00513Q112,151.606,111.96,151.208Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<polyline points="152 56 152 104 200 104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="208" y1="48" x2="152" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="56 152 104 152 104 200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="48" y1="208" x2="104" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polyline points="152 56 152 104 200 104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="208" y1="48" x2="152" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="56 152 104 152 104 200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="48" y1="208" x2="104" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="152 56 152 104 200 104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="208" y1="48" x2="152" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="56 152 104 152 104 200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="208" x2="104" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrows-in-simple", PhArrowsInSimple);
export default PhArrowsInSimple;
