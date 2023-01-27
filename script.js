const images = [
    "./images/avocado.jpeg",
    "./images/pancake.jpeg",
    "./images/sandwich.jpeg",
    "./images/spaghetti.jpeg"
]

const img = document.querySelector('img')

window.addEventListener("DOMContentLoaded", () => {
    img.src = images[0]
})

    const prev = document.querySelector("#prev-button")
    const next = document.querySelector("#next-button")
    let i = 0;
    img.src = images[i];
  prev.addEventListener("click",() =>{
    i--;
    if(i<0){
        i = images.length -1;
    }
    img.src = images[i]
  })
  next.addEventListener("click",() =>{
   i++;
   if (i > images.length -1) {
    i = 0;
   }
   img.src =images[i];
})



