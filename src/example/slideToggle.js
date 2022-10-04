import slideToggle from "../js/slideToggle";
import { injectHtml } from "../js/helper";
import "./example.scss";

const html = `
    <div>
     <div class="mt-2 d-flex align-items-center flex-column">
        <div class="d-none ra-container" id="description">
          第一段描述
          <p>第二段描述</p>
          <p>第三段描述</p>
        </div>
        <p><button id="btn">Toggle</button></p>
     </div>   
    </div>
`;

injectHtml(html);

window.addEventListener("load",()=>{
    const $btn = document.getElementById("btn");
    const $desc= document.getElementById("description");
    const instance = new slideToggle({
        showElement($el){
            $el.classList.remove("d-none");
        },
        $el:document.querySelector(".ra-container"),
        className:"ra-opacity-0",
        animationDuration:0.5,
        breforeAnimation(){
            console.log("动画开始");
            $desc.classList.remove("d-none");
        },
        afterAnimation(){
            console.log("动画结束");
            $desc.classList.add("d-none");
        }
    })
    let flag = false;
    $btn.onclick= function(){
        flag = !flag;
        instance.toogle(flag);
    }
})


