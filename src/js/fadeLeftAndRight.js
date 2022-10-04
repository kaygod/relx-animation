import "../css/index.scss";
import "../css/fadeUp.scss";
import "../css/fadeLeft.scss";
import "../css/fadeRight.scss";

import { viewportWatch } from "./helper";

export default class fadeLeftAndRight {

  constructor(params){
     this.$el = params.$el;
     this.animationDuration = params.animationDuration;
     this.className = params.className;
     this.$leftEl = this.$el.querySelector(`.${params.leftClassName}`);
     this.$rightEl = this.$el.querySelector(`.${params.rightClassName}`);
     this.threshold = params.threshold;
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
        threshold:this.threshold,
        once:this.once
    })
  }

  onEnter(){
     if(!this.$el.classList.contains('ra-fade-up')){
        this.$el.classList.remove(this.className);
        this.$leftEl.classList.add("ra-fade-left");
        this.$rightEl.classList.add("ra-fade-right");
     }
  }
}