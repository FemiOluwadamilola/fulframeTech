// smooth scrolling effect
const links = document.querySelectorAll("#navBar-container ul a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  document.querySelector('.modalbox').style.width = '0';
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

// modalbox open and close eventHandlers

document.querySelector('.toggle').addEventListener('click', () =>{
  document.querySelector('.modalbox').style.width = '100%';
})

document.querySelector('.closebtn').addEventListener('click', () => {
  document.querySelector('.modalbox').style.width = '0';
})

const menus = document.querySelectorAll(".modalbox li a");
 
for (const menu of menus) {
  menu.addEventListener("click", closeModalWithLinkHandler);
}

function closeModalWithLinkHandler(){
  document.querySelector('.modalbox').style.width = '0';
}