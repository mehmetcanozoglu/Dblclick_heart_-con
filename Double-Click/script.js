let image = document.querySelector(".container")
let heardIcon = document.querySelector(".heart")

image.addEventListener("dblclick", (e) => {
    heardIcon.classList.add("active")
    let xvalue = e.clientX - e.target.offsetLeft
    let yvalue = e.clientY - e.target.offsetTop
    
    heardIcon.style.left = `${xvalue}px`
    heardIcon.style.top = `${yvalue}px`

    setTimeout(() => {
        heardIcon.classList.remove("active")
    }, 750)
})