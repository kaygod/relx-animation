import "../css/index.scss";
import "../css/fadeUp.scss";

import { viewportWatch } from "./helper";

export default class fadeUp {

  constructor(params){
     this.$el = params.$el;
     this.className = params.className;
     this.animationDuration = params.animationDuration;
     this.threshold = params.threshold; // 元素进入视口多大比例才触发动画
     this.once = params.once || true; // 动画只触发一次吗
     this.init();
  }

  updateStyle(){
    if(this.animationDuration){
      this.$el.style.animationDuration = `${this.animationDuration}s`;
    }
  }

  init(){
    this.updateStyle(); 
    viewportWatch({
        $el:this.$el,
        onEnter:this.onEnter.bind(this),
        onLeave:this.onLeave.bind(this),
        threshold:this.threshold,
        once:this.once
    })
  }

  onEnter(){
     if(!this.$el.classList.contains('ra-fade-up')){
        this.$el.classList.remove(this.className);
        this.$el.classList.add("ra-fade-up");
     }
  }

  onLeave(){

  }

}