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