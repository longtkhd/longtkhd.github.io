window.onscroll =  () => { myFunction() };
const myFunction = () => {
  var navbar = document.getElementById("fixedmenu");
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    navbar.className = "navbar" + " navbar-expand-lg" + " navbar-light" + " bg-light" +" fixed-top";
  } else {
    navbar.className = navbar.className.replace(" fixed-top", "");
  }
}

//thêm fixed menu khi scroll

