import fadeLeftAndRight from "../js/fadeLeftAndRight";
import { injectHtml } from "../js/helper";
import "./example.less";

const html = `
    <div class="ra-container ra-opacity-0">
     <div class="d-flex justify-content-center d-flex mt-2">
        <div class="left me-2 ra-el-left"></div>
        <div class="right ra-el-right"></div>
     </div>   
    </div>
`;

injectHtml(html);

new fadeLeftAndRight({
    $el:document.querySelector(".ra-container"),
    className:"ra-opacity-0",
    leftClassName:"ra-el-left",
    rightClassName:"ra-el-right",
    animationDuration:0.5
})

