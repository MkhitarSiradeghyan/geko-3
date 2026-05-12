const hav = document.getElementById("hav")
const egg = document.getElementById("egg")
const score_img = document.getElementById("score_img")
let qanak = 0
function dzu_acel(){
const dzu = document.createElement("div")
    const dzvi_nkar = document.createElement("img")
    dzu.className = "dzu"
    dzvi_nkar.setAttribute("src", "https://pngimg.com/d/egg_PNG40798.png")
    dzu.appendChild(dzvi_nkar)
    document.body.appendChild(dzu)
    const rect = hav.getBoundingClientRect()
    const {x, y, width, height} = rect
    const dx = x + width * 0.7
    const dy = y + height * 0.65
    dzu.style.top = `${dy}px`
    dzu.style.left = `${dx}px`
    const {x: score_x, y: score_y} = score_img.getBoundingClientRect()
    dzu.addEventListener("click", () => {
        dzu.style.top = `${score_y}px`
        dzu.style.left = `${score_x}px`
        qanak++
        setTimeout(() => {
            egg.textContent = qanak
        }, 1000);
    })
}
setInterval(() => {
    
    dzu_acel()

}, 3000)

hav.addEventListener("click", dzu_acel)