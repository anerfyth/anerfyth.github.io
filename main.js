// Get the button:
const mybutton = document.getElementById("top_button");

// Add scroll event listener to the window object:
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  // Check if user has scrolled down 20px from top of document:
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // If so, display the mybutton element:
    mybutton.style.display = "block";
  } else {
    // Otherwise, hide the mybutton element:
    mybutton.style.display = "none";
  }
}

// Define topFunction to scroll to the top of the document:
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

// Define menu_icon constant to select the .icon element:
const menu_icon = document.querySelector(".icon");

// Define Menu constant to select the .menu element:
const Menu = document.querySelector(".menu");

// Add click event listener to menu_icon element to toggle mobile-menu class on Menu element:
menu_icon.addEventListener("click", () => {
  Menu.classList.toggle("mobile-menu");
});
