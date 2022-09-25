import "../css/index.less";
import "../css/fadeUp.less";

import { viewportWatch } from "./helper";

export default class fadeUp {

  constructor(params){
     this.$el = params.$el;
     this.className = params.className;
     this.animationDuration = params.animationDuration;
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
        onLeave:this.onLeave.bind(this)
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