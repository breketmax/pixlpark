const navItems = document.querySelectorAll(".nav-item");
const dropdowns = document.querySelectorAll(".dropdown")

navItems.forEach((navI,i) => {
  navI.addEventListener("mouseover",()=>{
    dropdowns[i].classList.remove("hidden")
  })
  navI.addEventListener("mouseleave",()=>{
    dropdowns[i].classList.add("hidden")
  })
})

