export const viewportWatch = ({$el,onEnter,onLeave,threshold = 0,once = false})=>{
       const io = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                onEnter && onEnter(entry.target,entry);
                if(once){
                  io.unobserve(entry.target);
                }
            }
            else {
                onLeave && onLeave(entry.target,entry);
            }
          })
        },{
          threshold
        })
        io.observe($el);
}

export const injectHtml = (content)=>{
    const $app = document.getElementById("app")
    $app.innerHTML = content;
}

export const getHeight = ($el,styleHanlder)=>{
    if(styleHanlder){
      const $node = $el.cloneNode(true);
      styleHanlder($node);
      $node.style.visibility = "hidden";
      $node.style.position = "absolute";
      document.body.appendChild($node);
      const height = $node.getBoundingClientRect().height;
      $node.remove();
      return height;
    }else{
      return $el.getBoundingClientRect().height;
    }
  
}