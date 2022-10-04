import "../css/index.scss";
import "../css/slide.scss";
import { getHeight } from "../js/helper";

export default class slideToggle {

  constructor(params){
     this.$el = params.$el;
     this.className = params.className;
     this.animationDuration = params.animationDuration;
     this.breforeAnimation =  params.breforeAnimation;
     this.afterAnimation =  params.afterAnimation;
     this.showElementFn = params.showElement;
     this.isAnimating = false; // 处于动画过程中吗
     this.cacheFn = [];
     this.eleHeight = this.getH();
     this.init();
  }

  getH(){
    const height = getHeight(this.$el,this.showElementFn);
    return height;
  }

  updateStyle(){
    if(this.animationDuration){
      this.$el.style.animationDuration = `${this.animationDuration}s`;
    }
    this.$el.classList.add("ra-slide");
    this.$el.classList.add("ra-overflow-hidden");
  }

  init(){
    this.updateStyle(); 
    this.bindEvent();
  }

  bindEvent(){
      this.$el.addEventListener("transitionend",()=>{
         if(this.cacheFn.length > 0){
            this.cacheFn.forEach((fn)=>{
                fn();
            })
            this.cacheFn = [];
         }
         this.isAnimating = false;
      })
  }

  waitAnimation(fn){
    this.cacheFn.push(fn);
  }

  // isOpen true  打开 
  //        false 关闭 
  toogle(isOpen = true){
    if(this.isAnimating){
        return;
    }  
    if(isOpen){
      this.breforeAnimation && this.breforeAnimation();
      this.isAnimating = true;
      this.$el.style.height = 0;
      this.$el.style.opacity = 0;
      window.requestAnimationFrame(()=>{
        this.$el.style.height = `${this.eleHeight}px`;
        this.$el.style.opacity = 1;
      })
    }else {
        this.isAnimating = true;
        this.$el.style.height = 0;
        this.$el.style.opacity = 0;
        this.waitAnimation(()=>{
            this.afterAnimation && this.afterAnimation();
        })
    }
  }

}