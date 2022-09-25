import fadeUp from "../js/fadeUp";
import { injectHtml } from "../js/helper";

const html = `
    <div class="ra-container ra-opacity-0">

    </div>
`;

injectHtml(html);

new fadeUp({
    $el:document.querySelector(".ra-container"),
    className:"ra-opacity-0",
    animationDuration:0.5
})