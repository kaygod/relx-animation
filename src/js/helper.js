export const viewportWatch = ({$el,onEnter,onLeave})=>{
       const io = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                onEnter && onEnter(entry.target,entry);
            }
            else {
                onLeave && onLeave(entry.target,entry);
            }
          })
        })
        io.observe($el);
}

export const injectHtml = (content)=>{
    const $app = document.getElementById("app")
    $app.innerHTML = content;
}