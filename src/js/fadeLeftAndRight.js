import "../css/index.less";
import "../css/fadeUp.less";
import "../css/fadeLeft.less";
import "../css/fadeRight.less";

import { viewportWatch } from "./helper";

export default class fadeLeftAndRight {

  constructor(params){
     this.$el = params.$el;
     this.animationDuration = params.animationDuration;
     this.className = params.className;
     this.$leftEl = this.$el.querySelector(`.${params.leftClassName}`);
     this.$rightEl = this.$el.querySelector(`.${params.rightClassName}`);
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
        onEnter:this.onEnter.bind(this)
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