const isOpen= () => {
  document.getElementById("Menu").style.width = "100%";
  document.getElementById("Menu").style.display = "block";
  document.getElementsByClassName("menu").style.display = "none";
  document.getElementById("delete").style.display = "block";

}
const isClose = () => {
  document.getElementById("Menu").style.display = "none";
}